from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from PIL import Image, ImageChops, ImageStat
from playwright.sync_api import Page

from common.browser import parse_viewport
from common.runtime import display_path, display_string, resolve_project_path
from common.text import format_percent, slugify


DEFAULT_VIEWPORTS = ["1440x900", "1280x800", "768x1024", "390x844"]
ACTION_ALIASES = {
    "menu": "click",
    "accordion": "click",
    "tab": "click",
    "overlay": "click",
}

METRIC_SCRIPT = """
({ selector, limit }) => {
  const nodes = Array.from(document.querySelectorAll(selector)).slice(0, limit);
  const cssPath = (el) => {
    const parts = [];
    let node = el;
    while (node && node.nodeType === 1 && parts.length < 6) {
      let part = node.tagName.toLowerCase();
      if (node.id) {
        part += `#${node.id}`;
        parts.unshift(part);
        break;
      }
      const classes = Array.from(node.classList || []).slice(0, 2);
      if (classes.length) {
        part += classes.map((item) => `.${item}`).join("");
      }
      parts.unshift(part);
      node = node.parentElement;
    }
    return parts.join(" > ");
  };

  return nodes.map((el, index) => {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    return {
      selector,
      index,
      dom_path: cssPath(el),
      text: (el.innerText || el.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 120),
      bounding_box: {
        x: Number(rect.x.toFixed(2)),
        y: Number(rect.y.toFixed(2)),
        width: Number(rect.width.toFixed(2)),
        height: Number(rect.height.toFixed(2))
      },
      margin: {
        top: style.marginTop,
        right: style.marginRight,
        bottom: style.marginBottom,
        left: style.marginLeft
      },
      padding: {
        top: style.paddingTop,
        right: style.paddingRight,
        bottom: style.paddingBottom,
        left: style.paddingLeft
      },
      gap: style.gap,
      display: style.display,
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      bottom: style.bottom,
      z_index: style.zIndex,
      overflow_x: style.overflowX,
      overflow_y: style.overflowY,
      align_items: style.alignItems,
      justify_content: style.justifyContent,
      font_family: style.fontFamily,
      font_size: style.fontSize,
      font_weight: style.fontWeight,
      line_height: style.lineHeight,
      letter_spacing: style.letterSpacing,
      text_align: style.textAlign,
      text_transform: style.textTransform,
      color: style.color,
      background_color: style.backgroundColor,
      border: style.border,
      border_radius: style.borderRadius,
      box_shadow: style.boxShadow,
      opacity: style.opacity,
      filter: style.filter,
      backdrop_filter: style.backdropFilter,
      clip_path: style.clipPath,
      transform: style.transform,
      object_fit: style.objectFit,
      visibility: style.visibility
    };
  });
}
"""


@dataclass(slots=True)
class StateAction:
    action: str
    target: str | None = None
    value: str | None = None
    raw: str | None = None

    @property
    def label(self) -> str:
        if self.raw:
            return slugify(self.raw)
        core = self.target or self.value or self.action
        return slugify(f"{self.action}-{core}")


def parse_viewports(values: list[str] | None) -> list[tuple[int, int]]:
    return [parse_viewport(item) for item in (values or DEFAULT_VIEWPORTS)]


def write_json(path: Path, payload: Any) -> None:
    def json_ready(value: Any) -> Any:
        if isinstance(value, Path):
            return display_path(value)
        if isinstance(value, str):
            return display_string(value)
        if isinstance(value, dict):
            return {str(key): json_ready(item) for key, item in value.items()}
        if isinstance(value, (list, tuple, set)):
            return [json_ready(item) for item in value]
        return value

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(json_ready(payload), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def load_json(path: str | Path) -> Any:
    return json.loads(resolve_project_path(path).read_text(encoding="utf-8"))


def goto_page(
    page: Page,
    target_url: str,
    *,
    timeout_ms: int,
    wait_ms: int,
    initial_wait_ms: int | None = None,
) -> None:
    page.goto(target_url, wait_until="domcontentloaded", timeout=timeout_ms)
    try:
        page.wait_for_load_state("networkidle", timeout=min(timeout_ms, 5000))
    except Exception:
        pass
    page.wait_for_timeout(initial_wait_ms if initial_wait_ms is not None else wait_ms)


def parse_state_action(raw: str) -> StateAction:
    text = raw.strip()
    if not text:
        raise ValueError("Estado vazio.")
    action, _, remainder = text.partition(":")
    action = ACTION_ALIASES.get(action.strip(), action.strip())
    if action in {"click", "hover", "focus", "scroll-to", "check"}:
        return StateAction(action=action, target=remainder.strip(), raw=text)
    if action in {"wait", "press", "scroll-y"}:
        return StateAction(action=action, value=remainder.strip(), raw=text)
    if action in {"type", "select"}:
        selector, _, value = remainder.partition("=")
        return StateAction(action=action, target=selector.strip(), value=value, raw=text)
    raise ValueError(f"Ação de estado não suportada: {raw}")


def apply_state_actions(page: Page, actions: list[StateAction], *, timeout_ms: int) -> None:
    for action in actions:
        if action.action == "wait":
            page.wait_for_timeout(int(action.value or 0))
            continue
        if action.action == "press":
            page.keyboard.press(action.value or "")
            continue
        if action.action == "scroll-y":
            page.evaluate("(value) => window.scrollTo(0, value)", int(float(action.value or "0")))
            page.wait_for_timeout(150)
            continue
        if action.action == "scroll-to":
            locator = page.locator(action.target or "").first
            locator.scroll_into_view_if_needed(timeout=timeout_ms)
            page.wait_for_timeout(150)
            continue

        locator = page.locator(action.target or "").first
        if action.action == "click":
            locator.click(timeout=timeout_ms)
        elif action.action == "hover":
            locator.hover(timeout=timeout_ms)
        elif action.action == "focus":
            locator.focus(timeout=timeout_ms)
        elif action.action == "check":
            locator.check(timeout=timeout_ms)
        elif action.action == "type":
            locator.fill(action.value or "", timeout=timeout_ms)
        elif action.action == "select":
            locator.select_option(action.value or "", timeout=timeout_ms)
        page.wait_for_timeout(150)


def state_slug(actions: list[StateAction]) -> str:
    if not actions:
        return "default"
    return "__".join(action.label for action in actions)


def collect_selector_metrics(
    page: Page,
    selector: str,
    *,
    max_matches: int,
) -> list[dict[str, Any]]:
    return page.evaluate(METRIC_SCRIPT, {"selector": selector, "limit": max_matches})


def selector_clip(
    page: Page,
    selector: str,
    *,
    index: int = 0,
    padding: int = 0,
    timeout_ms: int = 30000,
) -> dict[str, float] | None:
    locator = page.locator(selector).nth(index)
    locator.scroll_into_view_if_needed(timeout=timeout_ms)
    box = locator.bounding_box(timeout=timeout_ms)
    if not box:
        return None
    return {
        "x": max(box["x"] - padding, 0),
        "y": max(box["y"] - padding, 0),
        "width": max(box["width"] + padding * 2, 1),
        "height": max(box["height"] + padding * 2, 1),
    }


def compare_images(left_path: Path, right_path: Path) -> dict[str, Any]:
    with Image.open(left_path).convert("RGBA") as left_image:
        with Image.open(right_path).convert("RGBA") as right_image:
            original_right_size = right_image.size
            if left_image.size != right_image.size:
                right_image = right_image.resize(left_image.size)
            diff = ImageChops.difference(left_image, right_image)
            stat = ImageStat.Stat(diff)
            mean_channels = stat.mean[:3] or [0.0]
            mean_diff = (sum(mean_channels) / len(mean_channels)) / 255 * 100
            bbox = diff.getbbox()

            mask = diff.convert("L").point(lambda value: 255 if value > 12 else 0)
            changed_pixels = sum(1 for value in mask.getdata() if value)
            total_pixels = max(mask.size[0] * mask.size[1], 1)
            changed_ratio = changed_pixels / total_pixels * 100

            return {
                "left_size": left_image.size,
                "right_size": original_right_size,
                "normalized_size": left_image.size,
                "size_mismatch": left_image.size != original_right_size,
                "mean_diff": round(mean_diff, 2),
                "changed_ratio": round(changed_ratio, 2),
                "changed_ratio_text": format_percent(changed_ratio, digits=2),
                "bbox": list(bbox) if bbox else None,
            }


def discover_metadata(path: Path) -> list[Path]:
    if path.is_file():
        return [path]
    return sorted(path.rglob("metadata.json"))
