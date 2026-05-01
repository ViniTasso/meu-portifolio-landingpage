from __future__ import annotations

import argparse
import collections
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import expand_input_paths_to_files, iter_files
from common.js_utils import SCROLL_PATTERNS, load_js_text, scan_patterns
from common.runtime import resolve_root


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Busca pistas de scrub, pinning, thresholds e cálculos visuais ligados a scroll.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=20)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--kind", action="append", default=[])
    return parser


def resolve_js_paths(args: argparse.Namespace) -> tuple[Path, list[Path]]:
    root = resolve_root(args.root)
    if args.paths:
        return root, expand_input_paths_to_files(
            root,
            args.paths,
            include=["*.js", "*.mjs", "*.cjs", "*.ts", "*.tsx"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    include = args.include or ["*.js", "*.mjs", "*.cjs", "*.ts", "*.tsx"]
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
    root, paths = resolve_js_paths(args)
    wanted = {item.lower() for item in args.kind}
    hits = []
    counts = collections.Counter()

    for path in paths:
        for hit in scan_patterns(load_js_text(path), SCROLL_PATTERNS):
            if wanted and hit["kind"] not in wanted:
                continue
            counts[str(hit["kind"])] += 1
            hits.append(
                {
                    "file": path.relative_to(root),
                    **hit,
                }
            )

    return {
        "root": root,
        "counts": dict(counts),
        "hits": hits[: args.max_results],
        "total_hits": len(hits),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"hits: {payload['total_hits']}"]
    if payload["counts"]:
        lines.append("counts:")
        for kind, count in sorted(payload["counts"].items()):
            lines.append(f"  {kind}: {count}")
    if summary_only:
        return "\n".join(lines)
    if not payload["hits"]:
        lines.append("results:")
        lines.append("  none")
        return "\n".join(lines)
    lines.append("results:")
    for hit in payload["hits"]:
        lines.append(
            f"  {hit['kind']} {hit['file']}:{hit['line']} {hit['snippet']}"
        )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
