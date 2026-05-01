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
from common.fs import expand_input_paths_to_files, iter_files, read_text
from common.runtime import resolve_root
from common.text import compact_snippet


PATTERNS = {
    "scroll": re.compile(r"\bscroll\b"),
    "mousemove": re.compile(r"\bmousemove\b"),
    "resize": re.compile(r"\bresize\b"),
    "requestAnimationFrame": re.compile(r"\brequestAnimationFrame\b"),
    "IntersectionObserver": re.compile(r"\bIntersectionObserver\b"),
    "canvas": re.compile(r"\bcanvas\b"),
    "getContext(": re.compile(r"getContext\("),
    "gl_FragColor": re.compile(r"\bgl_FragColor\b"),
    "gl_Position": re.compile(r"\bgl_Position\b"),
    "dom-selector": re.compile(
        r"querySelector(?:All)?\(|getElementById\(|getElementsByClassName\(|getElementsByTagName\("
    ),
    "asset-path": re.compile(
        r"['\"][^'\"]+\.(?:png|jpe?g|svg|webp|gif|mp4|webm|glb|gltf|riv|json|lottie|mp3|wav|woff2?)['\"]"
    ),
}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Localiza evidências de JS com impacto visual.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_context_lines=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=20)
    parser.add_argument("paths", nargs="*")
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


def collect_hits(path: Path, root: Path, *, context_lines: int) -> list[dict[str, object]]:
    lines = read_text(path).splitlines()
    hits = []
    for index, line in enumerate(lines, start=1):
        for kind, pattern in PATTERNS.items():
            if not pattern.search(line):
                continue
            start = max(index - context_lines, 1)
            end = min(index + context_lines, len(lines))
            snippet = " ".join(lines[start - 1 : end]).strip()
            hits.append(
                {
                    "file": path.relative_to(root),
                    "line": index,
                    "kind": kind,
                    "snippet": compact_snippet(snippet or line, limit=140),
                }
            )
    return hits


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_js_paths(args)
    hits = []
    for path in paths:
        hits.extend(collect_hits(path, root, context_lines=args.context_lines))
    counts = collections.Counter(item["kind"] for item in hits)
    files = collections.Counter(str(item["file"]) for item in hits)
    return {
        "root": root,
        "total_files": len(paths),
        "counts": dict(counts),
        "top_files": files.most_common(args.max_results),
        "hits": hits[: args.max_results],
        "total_hits": len(hits),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        f"files: {payload['total_files']}",
        f"hits: {payload['total_hits']}",
    ]
    if payload["counts"]:
        lines.append("counts:")
        for kind, count in sorted(payload["counts"].items()):
            lines.append(f"  {kind}: {count}")
    if summary_only:
        if payload["top_files"]:
            lines.append("top_files:")
            for file_name, count in payload["top_files"]:
                lines.append(f"  {file_name}: {count}")
        return "\n".join(lines)

    lines.append("results:")
    if not payload["hits"]:
        lines.append("  none")
        return "\n".join(lines)

    for hit in payload["hits"]:
        lines.append(f"  {hit['kind']} {hit['file']}:{hit['line']} {hit['snippet']}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
