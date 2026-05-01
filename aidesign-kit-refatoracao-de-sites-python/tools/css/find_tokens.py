from __future__ import annotations

import argparse
import collections
import re
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.css_utils import load_css_bundle
from common.fs import expand_input_paths_to_files, iter_files, safe_relative
from common.runtime import resolve_root
from common.text import clip


COLOR_RE = re.compile(
    r"#(?:[0-9a-fA-F]{3,8})\b|(?:rgb|hsl)a?\([^)]*\)|\b(?:transparent|currentColor|black|white)\b"
)
LENGTH_RE = re.compile(r"-?\d+(?:\.\d+)?(?:px|rem|em|vw|vh|%)")
DURATION_RE = re.compile(r"-?\d+(?:\.\d+)?m?s")
EASING_RE = re.compile(r"\b(?:linear|ease(?:-in|-out|-in-out)?|step-start|step-end)\b|cubic-bezier\([^)]*\)|steps\([^)]*\)")
BREAKPOINT_RE = re.compile(r"(?:min|max)-width\s*:\s*([^)]+)")

SPACING_PROPS = {
    "margin",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "gap",
    "row-gap",
    "column-gap",
}
FONT_PROPS = {"font-family", "font-size", "font-weight", "font"}
RADIUS_PROPS = {"border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"}
SHADOW_PROPS = {"box-shadow", "text-shadow", "filter"}
BORDER_PROPS = {"border", "border-top", "border-right", "border-bottom", "border-left", "outline"}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Extrai tokens reais de CSS.")
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=6)
    parser.add_argument("paths", nargs="*")
    return parser


def resolve_css_paths(args: argparse.Namespace) -> tuple[Path, list[Path]]:
    root = resolve_root(args.root)
    if args.paths:
        return root, expand_input_paths_to_files(
            root,
            args.paths,
            include=["*.css"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    include = args.include or ["*.css"]
    paths = list(
        iter_files(
            root,
            include=include,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    )
    return root, paths


def register(counter_map, category: str, value: str, file: Path, line: int, prop: str, *, root: Path) -> None:
    value = clip(value, limit=120)
    bucket = counter_map[category][value]
    bucket["count"] += 1
    bucket["examples"].append({"file": safe_relative(file, root).as_posix(), "line": line, "prop": prop})


def extract_tokens(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_css_paths(args)
    bundle = load_css_bundle(paths)
    counter_map = collections.defaultdict(
        lambda: collections.defaultdict(lambda: {"count": 0, "examples": []})
    )

    for rule in bundle.rules:
        for declaration in rule.declarations:
            prop = declaration.name.lower()
            value = declaration.value

            for token in COLOR_RE.findall(value):
                register(counter_map, "colors", token, rule.file, rule.line, prop, root=root)

            if prop in FONT_PROPS:
                register(counter_map, "fonts", value, rule.file, rule.line, prop, root=root)

            if prop in SPACING_PROPS:
                for token in LENGTH_RE.findall(value):
                    register(counter_map, "spacing", token, rule.file, rule.line, prop, root=root)

            if prop in RADIUS_PROPS:
                register(counter_map, "radius", value, rule.file, rule.line, prop, root=root)

            if prop in SHADOW_PROPS and "shadow" in value.lower() or prop in {"box-shadow", "text-shadow"}:
                register(counter_map, "shadow", value, rule.file, rule.line, prop, root=root)

            if prop in BORDER_PROPS:
                register(counter_map, "border", value, rule.file, rule.line, prop, root=root)

            for token in DURATION_RE.findall(value):
                register(counter_map, "durations", token, rule.file, rule.line, prop, root=root)

            for token in EASING_RE.findall(value):
                register(counter_map, "easing", token, rule.file, rule.line, prop, root=root)

        for media in rule.media:
            for breakpoint in BREAKPOINT_RE.findall(media):
                register(counter_map, "breakpoints", breakpoint.strip(), rule.file, rule.line, "@media", root=root)

        for animation_name in rule.animation_names:
            register(counter_map, "keyframes", animation_name, rule.file, rule.line, "animation", root=root)

    for keyframe_name, record in bundle.keyframes.items():
        register(counter_map, "keyframes", keyframe_name, record.file, record.line, "@keyframes", root=root)

    categories = {}
    for category, values in counter_map.items():
        sorted_values = sorted(
            values.items(),
            key=lambda item: (-item[1]["count"], item[0]),
        )
        categories[category] = [
            {
                "value": value,
                "count": info["count"],
                "example": info["examples"][0] if info["examples"] else None,
            }
            for value, info in sorted_values[: args.max_results]
        ]

    return {
        "root": root,
        "css_files": len(paths),
        "categories": categories,
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"css_files: {payload['css_files']}"]
    for category in sorted(payload["categories"]):
        items = payload["categories"][category]
        if summary_only:
            lines.append(f"{category}: {len(items)}")
            continue
        lines.append(f"{category}:")
        if not items:
            lines.append("  none")
            continue
        for item in items:
            example = item["example"] or {}
            location = "-"
            if example:
                location = f"{example['file']}:{example['line']}"
            lines.append(f"  {item['value']} [{item['count']}] {location}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = extract_tokens(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
