from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.text import px_to_float


NUMERIC_PATHS = [
    ("bounding_box", "x"),
    ("bounding_box", "y"),
    ("bounding_box", "width"),
    ("bounding_box", "height"),
    ("margin", "top"),
    ("margin", "right"),
    ("margin", "bottom"),
    ("margin", "left"),
    ("padding", "top"),
    ("padding", "right"),
    ("padding", "bottom"),
    ("padding", "left"),
]
STRING_FIELDS = [
    "gap",
    "display",
    "position",
    "top",
    "left",
    "right",
    "bottom",
    "z_index",
    "overflow_x",
    "overflow_y",
    "align_items",
    "justify_content",
    "font_family",
    "font_size",
    "font_weight",
    "line_height",
    "letter_spacing",
    "text_align",
    "text_transform",
    "color",
    "background_color",
    "border",
    "border_radius",
    "box_shadow",
    "opacity",
    "filter",
    "backdrop_filter",
    "clip_path",
    "transform",
    "object_fit",
    "visibility",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Compara duas sondas de métricas do mesmo seletor.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(max_results=10)
    parser.add_argument("--left", required=True, help="JSON de probe da referência.")
    parser.add_argument("--right", required=True, help="JSON de probe do site refatorado.")
    parser.add_argument("--left-label", default="raw")
    parser.add_argument("--right-label", default="site-refatorado")
    parser.add_argument("--selector", action="append", default=[])
    return parser


def load_probe(path: str | Path) -> dict[str, object]:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def index_probe(probe: dict[str, object], selectors: list[str]) -> dict[tuple[str, int], dict[str, object]]:
    wanted = set(selectors)
    index = {}
    for item in probe.get("results", []):
        selector = item["selector"]
        if wanted and selector not in wanted:
            continue
        for match in item.get("matches", []):
            if "error" in match:
                continue
            index[(selector, int(match["index"]))] = match
    return index


def numeric_delta(left_value, right_value) -> float:
    if left_value is None or right_value is None:
        return 1.0
    left_number = px_to_float(str(left_value))
    right_number = px_to_float(str(right_value))
    if left_number is None or right_number is None:
        return 1.0 if str(left_value) != str(right_value) else 0.0
    denominator = max(abs(left_number), abs(right_number), 1.0)
    return abs(left_number - right_number) / denominator


def compare_match(left: dict[str, object], right: dict[str, object]) -> dict[str, object]:
    diffs = []
    scores = []

    for parent, key in NUMERIC_PATHS:
        left_value = left.get(parent, {}).get(key)
        right_value = right.get(parent, {}).get(key)
        delta = numeric_delta(left_value, right_value)
        if delta > 0:
            diffs.append(
                {
                    "property": f"{parent}.{key}",
                    "left": left_value,
                    "right": right_value,
                    "delta": round(delta, 4),
                }
            )
        scores.append(delta)

    for field in STRING_FIELDS:
        left_value = left.get(field)
        right_value = right.get(field)
        delta = 0.0 if left_value == right_value else 1.0
        if delta > 0:
            diffs.append(
                {
                    "property": field,
                    "left": left_value,
                    "right": right_value,
                    "delta": delta,
                }
            )
        scores.append(delta)

    disparity = round((sum(scores) / len(scores)) * 100, 1) if scores else 0.0
    return {
        "selector": left["selector"],
        "index": left["index"],
        "left_path": left.get("dom_path"),
        "right_path": right.get("dom_path"),
        "differences": diffs,
        "changed_properties": len(diffs),
        "disparity_score": disparity,
    }


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    left_probe = load_probe(args.left)
    right_probe = load_probe(args.right)
    left_index = index_probe(left_probe, args.selector)
    right_index = index_probe(right_probe, args.selector)
    keys = sorted(set(left_index) | set(right_index))

    comparisons = []
    for key in keys:
        left = left_index.get(key)
        right = right_index.get(key)
        if left and right:
            comparisons.append(compare_match(left, right))
            continue
        selector, index = key
        comparisons.append(
            {
                "selector": selector,
                "index": index,
                "left_path": left.get("dom_path") if left else None,
                "right_path": right.get("dom_path") if right else None,
                "differences": [
                    {
                        "property": "presence",
                        "left": bool(left),
                        "right": bool(right),
                        "delta": 1.0,
                    }
                ],
                "changed_properties": 1,
                "disparity_score": 100.0,
            }
        )

    comparisons.sort(key=lambda item: (-item["disparity_score"], item["selector"], item["index"]))
    average_score = round(sum(item["disparity_score"] for item in comparisons) / len(comparisons), 1) if comparisons else 0.0
    return {
        "left_label": args.left_label,
        "right_label": args.right_label,
        "comparisons": comparisons[: args.max_results],
        "total_comparisons": len(comparisons),
        "average_disparity": average_score,
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"left: {payload['left_label']}",
        f"right: {payload['right_label']}",
        f"comparisons: {payload['total_comparisons']}",
        f"average_disparity: {payload['average_disparity']}",
    ]
    if summary_only:
        return "\n".join(lines)

    for item in payload["comparisons"]:
        severity = "high" if item["disparity_score"] >= 60 else "medium" if item["disparity_score"] >= 25 else "low"
        if item["differences"] and any(diff["property"].startswith("bounding_box") for diff in item["differences"]):
            severity = "high" if item["disparity_score"] >= 45 else severity
        lines.append(
            f"selector: {item['selector']}[{item['index']}] disparity={item['disparity_score']} severity={severity}"
        )
        lines.append(f"  changed: {item['changed_properties']}")
        if item["left_path"] or item["right_path"]:
            lines.append(f"  paths: {item['left_path'] or '-'} -> {item['right_path'] or '-'}")
        for diff in item["differences"][:8]:
            lines.append(f"  {diff['property']}: {diff['left']} -> {diff['right']}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
