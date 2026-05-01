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
from common.html_utils import (
    LANDMARK_TAGS,
    MEDIA_TAGS,
    describe_element,
    is_wrapper_candidate,
    iter_elements,
    parse_html_file,
)
from common.runtime import resolve_root


SECTION_TAGS = {"main", "section", "article", "aside"}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Indexa landmarks, seções, IDs, data-* e mídia em HTML.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=8)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--file", action="append", default=[], help="Alias de compatibilidade para um HTML específico.")
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


def file_summary(path: Path, root: Path, *, max_results: int) -> dict[str, object]:
    document = parse_html_file(path)
    landmarks = []
    sections = []
    wrappers = []
    ids = []
    data_attrs = set()
    media_counter: collections.Counter[str] = collections.Counter()

    for element in iter_elements(document):
        if element.tag in LANDMARK_TAGS and len(landmarks) < max_results:
            landmarks.append(describe_element(element))
        if element.tag in SECTION_TAGS and len(sections) < max_results:
            sections.append(describe_element(element))
        if is_wrapper_candidate(element) and len(wrappers) < max_results:
            wrappers.append(describe_element(element))
        if element.get("id"):
            ids.append(element.get("id"))
        for attr_name in element.attrib:
            if attr_name.startswith("data-"):
                data_attrs.add(attr_name)
        if element.tag in MEDIA_TAGS:
            media_counter[element.tag] += 1

    return {
        "file": path.relative_to(root),
        "landmarks": landmarks,
        "sections": sections,
        "wrappers": wrappers,
        "ids": sorted(set(ids))[: max_results],
        "data_attrs": sorted(data_attrs)[: max_results],
        "media": dict(media_counter.most_common(max_results)),
        "counts": {
            "landmarks": len(landmarks),
            "sections": len(sections),
            "wrappers": len(wrappers),
            "ids": len(set(ids)),
            "data_attrs": len(data_attrs),
            "media_nodes": sum(media_counter.values()),
        },
    }


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_html_paths(args)
    files = [file_summary(path, root, max_results=args.max_results) for path in paths[: args.max_results]]
    return {
        "root": root,
        "files": files,
        "total_files": len(paths),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"files: {payload['total_files']}"]
    if summary_only:
        for item in payload["files"]:
            counts = item["counts"]
            lines.append(
                "  "
                + f"{item['file']}: sections={counts['sections']} "
                + f"landmarks={counts['landmarks']} wrappers={counts['wrappers']} "
                + f"ids={counts['ids']} data={counts['data_attrs']} media={counts['media_nodes']}"
            )
        return "\n".join(lines)

    for item in payload["files"]:
        lines.append(f"file: {item['file']}")
        if item["landmarks"]:
            lines.append("  landmarks:")
            for entry in item["landmarks"]:
                media = f" media={','.join(entry['media'])}" if entry["media"] else ""
                lines.append(f"    line {entry['line'] or '-'} {entry['label']}{media}")
        if item["sections"]:
            lines.append("  sections:")
            for entry in item["sections"]:
                data = f" data={','.join(entry['data_attrs'])}" if entry["data_attrs"] else ""
                lines.append(f"    line {entry['line'] or '-'} {entry['label']}{data}")
        if item["wrappers"]:
            lines.append("  wrappers:")
            for entry in item["wrappers"]:
                lines.append(f"    line {entry['line'] or '-'} {entry['label']}")
        lines.append(f"  ids: {', '.join(item['ids']) or '-'}")
        lines.append(f"  data: {', '.join(item['data_attrs']) or '-'}")
        if item["media"]:
            media_items = ", ".join(f"{name}={count}" for name, count in item["media"].items())
        else:
            media_items = "-"
        lines.append(f"  media: {media_items}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
