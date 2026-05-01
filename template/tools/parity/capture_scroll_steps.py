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
from common.parity import goto_page, parse_viewports, write_json
from common.runtime import resolve_root
from common.text import slugify


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Captura screenshots por viewport e passos fixos de rolagem.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(
        output=str(default_artifact_dir("capture_scroll_steps")),
        max_results=20,
    )
    parser.add_argument("targets", nargs="+", help="URLs ou caminhos locais.")
    parser.add_argument("--viewport", action="append", default=[])
    parser.add_argument("--label", help="Prefixo opcional do lote, ex: raw ou site-refatorado.")
    parser.add_argument("--step-height", type=int)
    parser.add_argument("--max-steps", type=int, default=20)
    parser.add_argument("--wait-ms", type=int, default=300)
    parser.add_argument("--initial-wait-ms", type=int, default=5000)
    parser.add_argument("--timeout-ms", type=int, default=30000)
    parser.add_argument("--headed", action="store_true")
    return parser


def capture_target(
    page,
    target_url: str,
    output_dir: Path,
    *,
    viewport: tuple[int, int],
    step_height: int,
    max_steps: int,
    wait_ms: int,
    initial_wait_ms: int,
    timeout_ms: int,
    label: str | None,
) -> dict[str, object]:
    width, height = viewport
    goto_page(page, target_url, timeout_ms=timeout_ms, wait_ms=wait_ms, initial_wait_ms=initial_wait_ms)
    title = page.title()
    total_height = int(
        page.evaluate(
            """() => Math.max(
                document.documentElement.scrollHeight,
                document.body ? document.body.scrollHeight : 0,
                document.documentElement.offsetHeight,
                document.body ? document.body.offsetHeight : 0
            )"""
        )
    )
    max_scroll = max(total_height - height, 0)
    positions = []
    current = 0
    while len(positions) < max_steps:
        positions.append(min(current, max_scroll))
        if positions[-1] >= max_scroll:
            break
        current += step_height
    if positions and positions[-1] != max_scroll and len(positions) < max_steps:
        positions.append(max_scroll)

    ordered_positions = list(dict.fromkeys(positions))
    shots = []
    for index, scroll_y in enumerate(ordered_positions):
        page.evaluate("(value) => window.scrollTo(0, value)", scroll_y)
        page.wait_for_timeout(wait_ms)
        filename = f"step-{index:04d}-y-{scroll_y:06d}.png"
        shot_path = output_dir / filename
        page.screenshot(path=str(shot_path), full_page=False)
        shots.append({"index": index, "scroll_y": scroll_y, "file": shot_path})

    metadata = {
        "label": label,
        "target": target_url,
        "title": title,
        "viewport": {"width": width, "height": height},
        "step_height": step_height,
        "total_height": total_height,
        "total_steps": len(shots),
        "shots": [{"index": item["index"], "scroll_y": item["scroll_y"], "file": str(item["file"])} for item in shots],
    }
    write_json(output_dir / "metadata.json", metadata)
    return metadata


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root = resolve_root(args.root)
    output_root = Path(args.output).resolve()
    output_root.mkdir(parents=True, exist_ok=True)
    targets = [resolve_target(item, root=root) for item in args.targets]
    viewports = parse_viewports(args.viewport or None)
    captures = []
    run_root = output_root / slugify(args.label) if args.label else output_root
    run_root.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=not args.headed)
        for target in targets:
            for viewport in viewports:
                width, height = viewport
                context = browser.new_context(viewport={"width": width, "height": height})
                page = context.new_page()
                target_dir = run_root / target_slug(target) / f"{width}x{height}"
                target_dir.mkdir(parents=True, exist_ok=True)
                metadata = capture_target(
                    page,
                    target,
                    target_dir,
                    viewport=viewport,
                    step_height=args.step_height or height,
                    max_steps=args.max_steps,
                    wait_ms=args.wait_ms,
                    initial_wait_ms=args.initial_wait_ms,
                    timeout_ms=args.timeout_ms,
                    label=args.label,
                )
                captures.append(
                    {
                        "target": target,
                        "viewport": f"{width}x{height}",
                        "output_dir": target_dir,
                        "shots": len(metadata["shots"]),
                        "metadata": metadata,
                    }
                )
                context.close()
        browser.close()

    return {
        "root": root,
        "output": run_root,
        "label": args.label,
        "captures": captures[: args.max_results],
        "total_captures": len(captures),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        f"output: {payload['output']}",
        f"label: {payload['label'] or '-'}",
        f"captures: {payload['total_captures']}",
    ]
    for item in payload["captures"]:
        lines.append(
            f"target: {item['target']} viewport={item['viewport']} shots={item['shots']} dir={item['output_dir']}"
        )
        if summary_only:
            continue
        first = item["metadata"]["shots"][0]["file"] if item["metadata"]["shots"] else "-"
        last = item["metadata"]["shots"][-1]["file"] if item["metadata"]["shots"] else "-"
        lines.append(f"  first: {first}")
        lines.append(f"  last: {last}")
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
