from __future__ import annotations

import argparse
import sys
from pathlib import Path

import cssselect2

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import expand_input_paths_to_files, iter_files
from common.html_utils import (
    child_labels,
    element_label,
    element_path,
    is_wrapper_candidate,
    iter_elements,
    parse_html_file,
)
from common.runtime import resolve_root


IMPORTANT_TAGS = {"main", "section", "article", "aside", "header", "footer", "nav"}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Resume a hierarquia curta de wrappers em blocos importantes.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=10)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--file", action="append", default=[], help="Alias de compatibilidade para um HTML específico.")
    parser.add_argument("--selector")
    parser.add_argument("--depth", type=int, default=2)
    parser.add_argument("--max-children", type=int, default=5)
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


def selector_matches(document, selector: str) -> list[object]:
    try:
        compiled = cssselect2.compile_selector_list(selector)
    except cssselect2.SelectorError:
        return []
    wrapped = cssselect2.ElementWrapper.from_html_root(document)
    matches = []
    for wrapper in wrapped.iter_subtree():
        if any(item.pseudo_element is None and item.test(wrapper) for item in compiled):
            matches.append(wrapper.etree_element)
    return matches


def wrapper_tree(element, *, depth: int, max_children: int) -> list[dict[str, object]]:
    if depth <= 0:
        return []
    children = []
    for child in element:
        if not isinstance(child.tag, str):
            continue
        if not (is_wrapper_candidate(child) or child.tag in IMPORTANT_TAGS):
            continue
        children.append(
            {
                "label": element_label(child),
                "children": wrapper_tree(child, depth=depth - 1, max_children=max_children),
                "direct_children": child_labels(child, limit=max_children),
            }
        )
        if len(children) >= max_children:
            break
    return children


def render_tree(lines: list[str], nodes: list[dict[str, object]], *, indent: int) -> None:
    prefix = "  " * indent
    for node in nodes:
        lines.append(f"{prefix}{node['label']}")
        if node["direct_children"]:
            lines.append(f"{prefix}  children: {', '.join(node['direct_children'])}")
        render_tree(lines, node["children"], indent=indent + 1)


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_html_paths(args)
    results = []
    for path in paths:
        document = parse_html_file(path)
        if args.selector:
            targets = selector_matches(document, args.selector)
            if not targets:
                continue
        else:
            targets = [
                element
                for element in iter_elements(document)
                if element.tag in IMPORTANT_TAGS or is_wrapper_candidate(element)
            ][: args.max_results]
        for element in targets[: args.max_results]:
            results.append(
                {
                    "file": path.relative_to(root),
                    "label": element_label(element),
                    "line": getattr(element, "sourceline", None),
                    "path": element_path(element, depth=args.depth + 3),
                    "tree": wrapper_tree(element, depth=args.depth, max_children=args.max_children),
                }
            )

    return {
        "root": root,
        "selector": args.selector,
        "results": results[: args.max_results],
        "total_results": len(results),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        f"selector: {payload['selector'] or '-'}",
        f"results: {payload['total_results']}",
    ]
    for item in payload["results"]:
        lines.append(f"{item['file']}:{item['line'] or '-'} {item['label']}")
        if summary_only:
            continue
        lines.append(f"  path: {item['path']}")
        if not item["tree"]:
            lines.append("  wrappers: none")
            continue
        lines.append("  wrappers:")
        render_tree(lines, item["tree"], indent=2)
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
