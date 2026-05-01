from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import expand_input_paths_to_files, iter_files, read_text
from common.runtime import resolve_root
from common.text import clip, human_size


RUNTIME_PATTERNS = [
    re.compile(pattern)
    for pattern in [
        r"__webpack_require__",
        r"Object\.defineProperty",
        r"parcelRequire",
        r"webpackJsonp",
        r"regeneratorRuntime",
        r"__esm",
        r"__commonJS",
        r"use strict",
    ]
]
VISUAL_PATTERNS = [
    re.compile(pattern)
    for pattern in [
        r"requestAnimationFrame",
        r"IntersectionObserver",
        r"getContext\(",
        r"gl_FragColor",
        r"gl_Position",
        r"\bscroll\b",
        r"\bmousemove\b",
        r"\bresize\b",
        r"\bcanvas\b",
    ]
]
ASSET_PATTERN = re.compile(
    r"['\"][^'\"]+\.(?:png|jpe?g|svg|webp|gif|mp4|webm|glb|gltf|woff2?|json|frag|vert)['\"]"
)
PROJECT_STRING_PATTERN = re.compile(r"['\"]([^'\"]{8,140})['\"]")
SIZE_RE = re.compile(r"^(?P<value>\d+)(?P<unit>[kKmMgG]?[bB]?)?$")


def parse_size(value: str) -> int:
    match = SIZE_RE.fullmatch(value.strip())
    if not match:
        raise argparse.ArgumentTypeError(f"Tamanho inválido: {value}")
    size = int(match.group("value"))
    unit = (match.group("unit") or "").lower()
    if unit.startswith("k"):
        return size * 1024
    if unit.startswith("m"):
        return size * 1024 * 1024
    if unit.startswith("g"):
        return size * 1024 * 1024 * 1024
    return size


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Divide bundles grandes em zonas prováveis de runtime, assets e código autoral.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=4)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--min-size", default="80kb")
    parser.add_argument("--chunk-lines", type=int, default=180)
    return parser


def resolve_js_paths(args: argparse.Namespace) -> tuple[Path, list[Path]]:
    root = resolve_root(args.root)
    if args.paths:
        paths = expand_input_paths_to_files(
            root,
            args.paths,
            include=["*.js", "*.mjs", "*.cjs"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
        return root, [path for path in paths if path.stat().st_size >= parse_size(args.min_size)]
    include = args.include or ["*.js", "*.mjs", "*.cjs"]
    min_size = parse_size(args.min_size)
    paths = [
        path
        for path in iter_files(
            root,
            include=include,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
        if path.stat().st_size >= min_size
    ]
    return root, paths


def classify_project_strings(chunk: str) -> list[str]:
    values = []
    for value in PROJECT_STRING_PATTERN.findall(chunk):
        normalized = value.strip()
        if not re.search(r"[A-Za-z]{4}", normalized):
            continue
        if re.fullmatch(r"[\w./:-]+", normalized):
            continue
        values.append(clip(normalized, limit=60))
    return values[:3]


def chunk_info(lines: list[str], start_line: int, end_line: int) -> dict[str, object]:
    chunk = "\n".join(lines[start_line - 1 : end_line])
    runtime_hits = sum(len(pattern.findall(chunk)) for pattern in RUNTIME_PATTERNS)
    visual_hits = sum(len(pattern.findall(chunk)) for pattern in VISUAL_PATTERNS)
    asset_hits = ASSET_PATTERN.findall(chunk)
    project_strings = classify_project_strings(chunk)
    author_score = len(project_strings) * 2 + len(asset_hits) * 2 + visual_hits * 3 - runtime_hits * 2
    return {
        "line_start": start_line,
        "line_end": end_line,
        "runtime_score": runtime_hits,
        "visual_score": visual_hits,
        "asset_score": len(asset_hits),
        "project_score": len(project_strings),
        "author_score": author_score,
        "project_examples": project_strings,
        "asset_examples": [clip(value, limit=60) for value in asset_hits[:3]],
    }


def top_chunks(chunks: list[dict[str, object]], key: str, limit: int) -> list[dict[str, object]]:
    ranked = sorted(chunks, key=lambda item: (-int(item[key]), item["line_start"]))
    return [item for item in ranked if int(item[key]) > 0][:limit]


def scan_file(path: Path, root: Path, *, chunk_lines: int, max_results: int) -> dict[str, object]:
    lines = read_text(path).splitlines()
    chunks = []
    for start in range(1, len(lines) + 1, chunk_lines):
        end = min(start + chunk_lines - 1, len(lines))
        chunks.append(chunk_info(lines, start, end))
    return {
        "file": path.relative_to(root),
        "size_bytes": path.stat().st_size,
        "runtime_dominant": top_chunks(chunks, "runtime_score", max_results),
        "project_strings": top_chunks(chunks, "project_score", max_results),
        "assets": top_chunks(chunks, "asset_score", max_results),
        "visual_apis": top_chunks(chunks, "visual_score", max_results),
        "author_candidates": top_chunks(chunks, "author_score", max_results),
    }


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_js_paths(args)
    files = [scan_file(path, root, chunk_lines=args.chunk_lines, max_results=args.max_results) for path in paths]
    return {
        "root": root,
        "files": files,
        "total_files": len(paths),
    }


def render_chunk(chunk: dict[str, object]) -> str:
    extras = []
    if chunk["project_examples"]:
        extras.append(f"strings={', '.join(chunk['project_examples'])}")
    if chunk["asset_examples"]:
        extras.append(f"assets={', '.join(chunk['asset_examples'])}")
    suffix = f" {' | '.join(extras)}" if extras else ""
    return f"lines {chunk['line_start']}-{chunk['line_end']} score={chunk['author_score']}{suffix}"


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"files: {payload['total_files']}"]
    for item in payload["files"]:
        lines.append(f"file: {item['file']} size={human_size(item['size_bytes'])}")
        if summary_only:
            if item["author_candidates"]:
                best = item["author_candidates"][0]
                lines.append(f"  author_candidate: lines {best['line_start']}-{best['line_end']} score={best['author_score']}")
            continue
        for label, key in [
            ("runtime", "runtime_dominant"),
            ("project_strings", "project_strings"),
            ("assets", "assets"),
            ("visual_apis", "visual_apis"),
            ("author_candidates", "author_candidates"),
        ]:
            lines.append(f"  {label}:")
            if not item[key]:
                lines.append("    none")
                continue
            for chunk in item[key]:
                lines.append(f"    {render_chunk(chunk)}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
