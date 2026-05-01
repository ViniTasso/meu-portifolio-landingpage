from __future__ import annotations

import argparse
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.browser import parse_viewport, resolve_target
from common.cli import add_common_output_args, emit_result
from common.parity import apply_state_actions, collect_selector_metrics, goto_page, parse_state_action, state_slug
from common.runtime import resolve_root


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Mede métricas reais de seletores em um browser.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(max_results=5)
    parser.add_argument("target", help="URL ou caminho local.")
    parser.add_argument("--selector", action="append", required=True)
    parser.add_argument("--viewport", default="1440x900")
    parser.add_argument("--wait-ms", type=int, default=300)
    parser.add_argument("--initial-wait-ms", type=int, default=5000)
    parser.add_argument("--timeout-ms", type=int, default=30000)
    parser.add_argument("--all-matches", action="store_true")
    parser.add_argument("--state", action="append", default=[], help="Ação de estado, ex: click:.menu-toggle")
    parser.add_argument("--headed", action="store_true")
    return parser


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root = resolve_root(args.root)
    target_url = resolve_target(args.target, root=root)
    width, height = parse_viewport(args.viewport)
    actions = [parse_state_action(item) for item in args.state]
    results = []

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
            limit = args.max_results if args.all_matches else 1
            try:
                matches = collect_selector_metrics(page, selector, max_matches=limit)
            except Exception as exc:
                matches = [{"selector": selector, "error": str(exc)}]
            results.append(
                {
                    "selector": selector,
                    "matches": matches,
                }
            )

        context.close()
        browser.close()

    return {
        "root": root,
        "target": target_url,
        "viewport": {"width": width, "height": height},
        "state": [action.raw for action in actions],
        "state_id": state_slug(actions),
        "results": results,
    }


def render_box(box: dict[str, object]) -> str:
    return f"x={box['x']} y={box['y']} w={box['width']} h={box['height']}"


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    viewport = payload["viewport"]
    lines = [
        f"target: {payload['target']}",
        f"viewport: {viewport['width']}x{viewport['height']}",
        f"state: {', '.join(payload['state']) or 'default'}",
    ]
    for item in payload["results"]:
        lines.append(f"selector: {item['selector']} matches={len(item['matches'])}")
        if summary_only:
            continue
        for match in item["matches"]:
            if "error" in match:
                lines.append(f"  error: {match['error']}")
                continue
            lines.append(f"  [{match['index']}] {match['dom_path'] or '-'}")
            lines.append(f"    box: {render_box(match['bounding_box'])}")
            lines.append(
                "    layout: "
                + f"display={match['display']} position={match['position']} gap={match['gap']} z={match['z_index']} overflow={match['overflow_x']}/{match['overflow_y']}"
            )
            lines.append(
                "    spacing: "
                + f"margin={match['margin']} padding={match['padding']}"
            )
            lines.append(
                "    type: "
                + f"{match['font_family']} {match['font_size']} {match['font_weight']} "
                + f"line={match['line_height']} letter={match['letter_spacing']} align={match['text_align']}"
            )
            lines.append(
                "    surface: "
                + f"color={match['color']} bg={match['background_color']} border={match['border']} "
                + f"radius={match['border_radius']} shadow={match['box_shadow']} opacity={match['opacity']}"
            )
            lines.append(
                "    effects: "
                + f"filter={match['filter']} backdrop={match['backdrop_filter']} clip={match['clip_path']} transform={match['transform']}"
            )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
