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
        description="Faz screenshot recortado do elemento alvo.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(
        output=str(default_artifact_dir("probe_selector_screenshot")),
        max_results=4,
    )
    parser.add_argument("target", help="URL ou caminho local.")
    parser.add_argument("--selector", action="append", required=True)
    parser.add_argument("--viewport", default="1440x900")
    parser.add_argument("--match-index", type=int, default=0)
    parser.add_argument("--all-matches", action="store_true")
    parser.add_argument("--padding", type=int, default=12)
    parser.add_argument("--state", action="append", default=[])
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
    state_id = state_slug(actions)
    run_dir = output_root / target_slug(target_url) / f"{width}x{height}" / state_id
    run_dir.mkdir(parents=True, exist_ok=True)
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
            try:
                total_matches = page.locator(selector).count()
            except Exception as exc:
                results.append({"selector": selector, "error": str(exc), "shots": []})
                continue
            indices = range(min(total_matches, args.max_results)) if args.all_matches else [args.match_index]
            shots = []
            for index in indices:
                try:
                    clip = selector_clip(
                        page,
                        selector,
                        index=index,
                        padding=args.padding,
                        timeout_ms=args.timeout_ms,
                    )
                except Exception as exc:
                    shots.append({"index": index, "error": str(exc)})
                    continue
                if not clip:
                    shots.append({"index": index, "error": "no-bounding-box"})
                    continue
                shot_path = run_dir / f"{slugify(selector)}__{index}.png"
                page.screenshot(path=str(shot_path), clip=clip)
                shots.append(
                    {
                        "index": index,
                        "file": str(shot_path),
                        "clip": clip,
                    }
                )
            results.append(
                {
                    "selector": selector,
                    "total_matches": total_matches,
                    "shots": shots,
                }
            )

        context.close()
        browser.close()

    payload = {
        "target": target_url,
        "viewport": {"width": width, "height": height},
        "state": [action.raw for action in actions],
        "state_id": state_id,
        "output": run_dir,
        "results": results,
    }
    write_json(run_dir / "metadata.json", payload)
    return payload


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    viewport = payload["viewport"]
    lines = [
        f"target: {payload['target']}",
        f"viewport: {viewport['width']}x{viewport['height']}",
        f"state: {', '.join(payload['state']) or 'default'}",
        f"output: {payload['output']}",
    ]
    for item in payload["results"]:
        if "error" in item:
            lines.append(f"selector: {item['selector']} error={item['error']}")
            continue
        lines.append(
            f"selector: {item['selector']} matches={item['total_matches']} shots={len(item['shots'])}"
        )
        if summary_only:
            continue
        for shot in item["shots"]:
            if "error" in shot:
                lines.append(f"  [{shot['index']}] error={shot['error']}")
                continue
            lines.append(f"  [{shot['index']}] {shot['file']}")
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
