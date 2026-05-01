from __future__ import annotations

import argparse
import collections
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.css_utils import load_css_bundle
from common.fs import expand_input_paths_to_files, iter_files
from common.runtime import resolve_root


PATTERNS = {
    "gradient": lambda prop, value: "gradient(" in value,
    "blur": lambda prop, value: "blur(" in value,
    "backdrop": lambda prop, value: prop == "backdrop-filter" or "backdrop-filter" in value,
    "sticky": lambda prop, value: prop == "position" and "sticky" in value,
    "clip-path": lambda prop, value: prop == "clip-path" or "clip-path(" in value,
    "mask": lambda prop, value: prop.startswith("mask") or "mask-" in prop,
    "blend": lambda prop, value: "blend-mode" in prop or "blend-mode" in value,
    "filter": lambda prop, value: prop in {"filter", "backdrop-filter"},
}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Encontra padrões visuais densos em CSS.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=20)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--pattern", action="append", default=[])
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
    return root, list(
        iter_files(
            root,
            include=include,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    )


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_css_paths(args)
    bundle = load_css_bundle(paths)
    wanted = {item.lower() for item in args.pattern} or set(PATTERNS)
    hits = []
    counter = collections.Counter()

    for rule in bundle.rules:
        for declaration in rule.declarations:
            prop = declaration.name.lower()
            value = declaration.value.lower()
            for name, matcher in PATTERNS.items():
                if name not in wanted or not matcher(prop, value):
                    continue
                counter[name] += 1
                hits.append(
                    {
                        "pattern": name,
                        "file": rule.file.relative_to(root) if rule.file.is_relative_to(root) else rule.file,
                        "line": rule.line,
                        "selector": rule.selector_text,
                        "prop": declaration.name,
                        "value": declaration.value,
                        "media": rule.media,
                    }
                )

    return {
        "root": root,
        "counts": dict(counter),
        "hits": hits[: args.max_results],
        "total_hits": len(hits),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"hits: {payload['total_hits']}"]
    if payload["counts"]:
        lines.append("counts:")
        for name, count in sorted(payload["counts"].items()):
            lines.append(f"  {name}: {count}")
    if summary_only:
        return "\n".join(lines)

    lines.append("results:")
    if not payload["hits"]:
        lines.append("  none")
        return "\n".join(lines)
    for hit in payload["hits"]:
        media = f" media={', '.join(hit['media'])}" if hit["media"] else ""
        lines.append(
            f"  {hit['pattern']} {hit['file']}:{hit['line']} {hit['selector']} {hit['prop']}={hit['value']}{media}"
        )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
