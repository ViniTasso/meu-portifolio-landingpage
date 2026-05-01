from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.css_utils import load_css_bundle, top_properties
from common.fs import expand_input_paths_to_files, iter_files
from common.runtime import resolve_root


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Mostra como um seletor é sobrescrito ao longo do CSS.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=20)
    parser.add_argument("selector", help="Trecho ou seletor procurado, ex: .hero")
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


def selector_matches(selector_text: str, needle: str) -> bool:
    if needle.startswith((".", "#")):
        options = [item.strip() for item in selector_text.split(",") if item.strip()]
        pattern = re.compile(rf"(?<![A-Za-z0-9_-]){re.escape(needle)}(?![A-Za-z0-9_-])")
        for option in options:
            normalized = re.sub(r":{1,2}[A-Za-z0-9_-]+(?:\([^)]*\))?", "", option)
            tail = re.split(r"\s+|>|\+|~", normalized.strip())[-1]
            if pattern.search(tail):
                return True
        return False
    return needle in selector_text


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_css_paths(args)
    bundle = load_css_bundle(paths)
    needle = args.selector
    matches = [rule for rule in bundle.rules if selector_matches(rule.selector_text, needle)]

    final_values: dict[str, str] = {}
    timeline = []
    for rule in matches:
        overrides = []
        additions = []
        for declaration in rule.declarations:
            previous = final_values.get(declaration.name)
            if previous is None:
                additions.append(f"{declaration.name}={declaration.value}")
            elif previous != declaration.value:
                overrides.append(f"{declaration.name}: {previous} -> {declaration.value}")
            final_values[declaration.name] = declaration.value

        timeline.append(
            {
                "file": rule.file.relative_to(root) if rule.file.is_relative_to(root) else rule.file,
                "line": rule.line,
                "selector": rule.selector_text,
                "media": rule.media,
                "properties": top_properties(rule.declarations, limit=6),
                "overrides": overrides,
                "additions": additions,
            }
        )

    return {
        "root": root,
        "selector": needle,
        "matches": timeline[: args.max_results],
        "total_matches": len(timeline),
        "final_values": final_values,
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        f"selector: {payload['selector']}",
        f"matches: {payload['total_matches']}",
    ]
    if summary_only:
        if payload["final_values"]:
            lines.append("final:")
            for name, value in list(sorted(payload["final_values"].items()))[:10]:
                lines.append(f"  {name}: {value}")
        return "\n".join(lines)

    lines.append("timeline:")
    if not payload["matches"]:
        lines.append("  none")
        return "\n".join(lines)

    for item in payload["matches"]:
        lines.append(f"  {item['file']}:{item['line']} {item['selector']}")
        lines.append(f"    props: {', '.join(item['properties']) or '-'}")
        lines.append(f"    media: {', '.join(item['media']) or '-'}")
        lines.append(f"    additions: {', '.join(item['additions'][:4]) or '-'}")
        lines.append(f"    overrides: {', '.join(item['overrides'][:4]) or '-'}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
