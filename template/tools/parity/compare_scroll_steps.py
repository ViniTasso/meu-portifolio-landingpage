from __future__ import annotations

import argparse
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.parity import compare_images, discover_metadata, load_json
from common.runtime import resolve_project_path


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Compara capturas em lote entre raw e site-refatorado e ranqueia gaps por viewport e passo.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(max_results=20)
    parser.add_argument("--left", required=True, help="Diretório ou metadata.json da referência.")
    parser.add_argument("--right", required=True, help="Diretório ou metadata.json do refatorado.")
    parser.add_argument("--left-label", default="raw")
    parser.add_argument("--right-label", default="site-refatorado")
    return parser


def metadata_index(base: Path) -> dict[str, Path]:
    files = discover_metadata(base)
    if base.is_file():
        return {".": files[0]} if files else {}

    relatives = [item.parent.relative_to(base) for item in files]
    first_parts = {
        relative.parts[0]
        for relative in relatives
        if relative.parts
    }
    strip_first_part = len(first_parts) == 1
    index = {}
    for item, relative in zip(files, relatives):
        parts = relative.parts[1:] if strip_first_part and len(relative.parts) > 1 else relative.parts
        key = Path(*parts).as_posix() if parts else "."
        index[key] = item
    return index


def compare_capture_pair(key: str, left_meta: dict[str, object] | None, right_meta: dict[str, object] | None) -> dict[str, object]:
    if not left_meta or not right_meta:
        return {
            "capture": key,
            "viewport": None,
            "target": (left_meta or right_meta or {}).get("target"),
            "missing": True,
            "score": 100.0,
            "step_count": 0,
            "step_gaps": [],
        }

    left_steps = {int(item["index"]): item for item in left_meta.get("shots", [])}
    right_steps = {int(item["index"]): item for item in right_meta.get("shots", [])}
    step_gaps = []
    for step_index in sorted(set(left_steps) | set(right_steps)):
        left_step = left_steps.get(step_index)
        right_step = right_steps.get(step_index)
        if not left_step or not right_step:
            step_gaps.append(
                {
                    "capture": key,
                    "step_index": step_index,
                    "scroll_y": (left_step or right_step or {}).get("scroll_y"),
                    "score": 100.0,
                    "missing": True,
                }
            )
            continue
        diff = compare_images(
            resolve_project_path(str(left_step["file"])),
            resolve_project_path(str(right_step["file"])),
        )
        score = round(diff["mean_diff"] * 0.6 + diff["changed_ratio"] * 0.4 + (20 if diff["size_mismatch"] else 0), 2)
        step_gaps.append(
            {
                "capture": key,
                "step_index": step_index,
                "scroll_y": left_step.get("scroll_y"),
                "score": score,
                "missing": False,
                **diff,
            }
        )

    average_score = round(
        sum(item["score"] for item in step_gaps) / len(step_gaps),
        2,
    ) if step_gaps else 0.0
    return {
        "capture": key,
        "viewport": left_meta.get("viewport"),
        "target": left_meta.get("target"),
        "missing": False,
        "score": average_score,
        "step_count": len(step_gaps),
        "step_gaps": step_gaps,
        "left_steps": len(left_steps),
        "right_steps": len(right_steps),
    }


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    left_path = Path(args.left).resolve()
    right_path = Path(args.right).resolve()
    left_index = metadata_index(left_path)
    right_index = metadata_index(right_path)
    capture_results = []
    step_results = []

    for key in sorted(set(left_index) | set(right_index)):
        left_meta = load_json(left_index[key]) if key in left_index else None
        right_meta = load_json(right_index[key]) if key in right_index else None
        result = compare_capture_pair(key, left_meta, right_meta)
        capture_results.append({k: v for k, v in result.items() if k != "step_gaps"})
        step_results.extend(result.get("step_gaps", []))

    capture_results.sort(key=lambda item: (-item["score"], item["capture"]))
    step_results.sort(key=lambda item: (-item["score"], item["capture"], item["step_index"]))
    average_score = round(
        sum(item["score"] for item in capture_results) / len(capture_results),
        2,
    ) if capture_results else 0.0
    return {
        "left_label": args.left_label,
        "right_label": args.right_label,
        "left": left_path,
        "right": right_path,
        "capture_results": capture_results[: args.max_results],
        "step_results": step_results[: args.max_results],
        "total_captures": len(capture_results),
        "total_steps": len(step_results),
        "average_score": average_score,
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"left: {payload['left_label']} {payload['left']}",
        f"right: {payload['right_label']} {payload['right']}",
        f"captures: {payload['total_captures']}",
        f"steps: {payload['total_steps']}",
        f"average_score: {payload['average_score']}",
    ]
    lines.append("captures_ranked:")
    for item in payload["capture_results"]:
        if item["missing"]:
            lines.append(f"  {item['capture']}: missing-pair score=100")
            continue
        viewport = item["viewport"] or {}
        viewport_label = f"{viewport.get('width', '-')}x{viewport.get('height', '-')}"
        lines.append(
            f"  {item['capture']}: score={item['score']} viewport={viewport_label} steps={item['step_count']} pair={item['left_steps']}/{item['right_steps']}"
        )
    if summary_only:
        return "\n".join(lines)

    lines.append("top_step_gaps:")
    for item in payload["step_results"]:
        if item["missing"]:
            lines.append(
                f"  {item['capture']} step={item['step_index']} y={item['scroll_y']} score=100 missing-step"
            )
            continue
        lines.append(
            f"  {item['capture']} step={item['step_index']} y={item['scroll_y']} score={item['score']} mean={item['mean_diff']} changed={item['changed_ratio']} size_mismatch={item['size_mismatch']}"
        )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
