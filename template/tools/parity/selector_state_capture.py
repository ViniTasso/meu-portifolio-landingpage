from __future__ import annotations

import argparse
import sys
from pathlib import Path
from types import SimpleNamespace

from playwright.sync_api import sync_playwright

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.browser import default_artifact_dir, parse_viewport, resolve_target, target_slug
from common.cli import add_common_output_args, emit_result
from common.parity import (
    apply_state_actions,
    collect_selector_metrics,
    goto_page,
    parse_state_action,
    selector_clip,
    state_slug,
    write_json,
)
from common.runtime import resolve_root
from common.text import slugify


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Captura estado de componentes como menu, accordion, tab, overlay e similares.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(
        output=str(default_artifact_dir("selector_state_capture")),
        max_results=4,
    )
    parser.add_argument("target", help="URL ou caminho local.")
    parser.add_argument("--selector", action="append", required=True)
    parser.add_argument("--viewport", default="1440x900")
    parser.add_argument("--state", action="append", default=[], help="Ação de estado, ex: menu:.menu-toggle")
    parser.add_argument("--state-name", help="Nome opcional do estado.")
    parser.add_argument("--padding", type=int, default=12)
    parser.add_argument("--metrics-only", action="store_true")
    parser.add_argument("--wait-ms", type=int, default=300)
    parser.add_argument("--initial-wait-ms", type=int, default=5000)
    parser.add_argument("--timeout-ms", type=int, default=30000)
    parser.add_argument("--headed", action="store_true")
    return parser


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root = resolve_root(args.root)
    target_url = resolve_target(args.target, root=root)
    width, height = parse_viewport(args.viewport)
    output_root = Path(args.output).resolve()
    actions = [parse_state_action(item) for item in args.state]
    state_id = args.state_name or state_slug(actions)
    run_dir = output_root / target_slug(target_url) / f"{width}x{height}" / slugify(state_id)
    run_dir.mkdir(parents=True, exist_ok=True)
    selectors = []

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=not args.headed)
        context = browser.new_context(viewport={"width": width, "height": height})
        page = context.new_page()
        goto_page(
            page,
            target_url,
            timeout_ms=args.timeout_ms,
            wait_ms=args.wait_ms,
            initial_wait_ms=args.initial_wait_ms,
        )
        if actions:
            apply_state_actions(page, actions, timeout_ms=args.timeout_ms)
            page.wait_for_timeout(args.wait_ms)

        for selector in args.selector:
            try:
                matches = collect_selector_metrics(page, selector, max_matches=args.max_results)
            except Exception as exc:
                selectors.append({"selector": selector, "error": str(exc), "matches": []})
                continue
            shots = []
            if not args.metrics_only:
                for match in matches:
                    try:
                        clip = selector_clip(
                            page,
                            selector,
                            index=int(match["index"]),
                            padding=args.padding,
                            timeout_ms=args.timeout_ms,
                        )
                    except Exception as exc:
                        shots.append({"index": match["index"], "error": str(exc)})
                        continue
                    if not clip:
                        shots.append({"index": match["index"], "error": "no-bounding-box"})
                        continue
                    shot_path = run_dir / f"{slugify(selector)}__{match['index']}.png"
                    page.screenshot(path=str(shot_path), clip=clip)
                    shots.append({"index": match["index"], "file": str(shot_path), "clip": clip})
            selectors.append(
                {
                    "selector": selector,
                    "matches": matches,
                    "screenshots": shots,
                }
            )

        context.close()
        browser.close()

    payload = {
        "target": target_url,
        "viewport": {"width": width, "height": height},
        "state_name": state_id,
        "state_actions": [action.raw for action in actions],
        "metrics_only": args.metrics_only,
        "output": run_dir,
        "selectors": selectors,
    }
    write_json(run_dir / "metadata.json", payload)
    return payload


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    viewport = payload["viewport"]
    lines = [
        f"target: {payload['target']}",
        f"viewport: {viewport['width']}x{viewport['height']}",
        f"state: {payload['state_name']}",
        f"actions: {', '.join(payload['state_actions']) or 'default'}",
        f"output: {payload['output']}",
    ]
    for item in payload["selectors"]:
        if "error" in item:
            lines.append(f"selector: {item['selector']} error={item['error']}")
            continue
        lines.append(
            f"selector: {item['selector']} matches={len(item['matches'])} screenshots={len(item.get('screenshots', []))}"
        )
        if summary_only:
            continue
        for match in item["matches"][:3]:
            lines.append(
                f"  [{match['index']}] {match['dom_path']} box={match['bounding_box']['width']}x{match['bounding_box']['height']} text={match['text'] or '-'}"
            )
        for shot in item.get("screenshots", [])[:3]:
            if "error" in shot:
                lines.append(f"  shot[{shot['index']}]: error={shot['error']}")
                continue
            lines.append(f"  shot[{shot['index']}]: {shot['file']}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    output_args = SimpleNamespace(**vars(args))
    output_args.output = None
    emit_result(output_args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
