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
from common.html_utils import asset_references, iter_elements, parse_html_file
from common.runtime import resolve_root


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Lista onde imagens, vídeos, poster, SVG, canvas e modelos aparecem no HTML.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=20)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--file", action="append", default=[], help="Alias de compatibilidade para um HTML específico.")
    parser.add_argument("--kind", action="append", default=[])
    return parser


def resolve_html_paths(args: argparse.Namespace) -> tuple[Path, list[Path]]:
    root = resolve_root(args.root)
    requested = [*args.paths, *args.file]
    if requested:
        return root, expand_input_paths_to_files(
            root,
            requested,
            include=["*.html", "*.htm"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    include = args.include or ["*.html", "*.htm"]
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
    root, paths = resolve_html_paths(args)
    wanted_kinds = {item.lower() for item in args.kind}
    hits = []
    counter = collections.Counter()

    for path in paths:
        document = parse_html_file(path)
        for element in iter_elements(document):
            for ref in asset_references(element):
                if wanted_kinds and ref["kind"] not in wanted_kinds:
                    continue
                counter[str(ref["kind"])] += 1
                hits.append(
                    {
                        "file": path.relative_to(root),
                        **ref,
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
        for kind, count in sorted(payload["counts"].items()):
            lines.append(f"  {kind}: {count}")
    if summary_only:
        return "\n".join(lines)

    lines.append("results:")
    if not payload["hits"]:
        lines.append("  none")
        return "\n".join(lines)
    for hit in payload["hits"]:
        lines.append(
            f"  {hit['kind']} {hit['file']}:{hit['line'] or '-'} {hit['label']} {hit['attr'] or '-'}={hit['value']}"
        )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
