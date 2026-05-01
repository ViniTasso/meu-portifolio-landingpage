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
    ancestor_chain,
    describe_element,
    element_path,
    format_attrs,
    iter_elements,
    parse_html_file,
    short_attr_map,
)
from common.runtime import resolve_root
from common.text import compact_list


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Busca nós por seletor, atributo, texto ou tag com contexto curto.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=12)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--file", action="append", default=[], help="Alias de compatibilidade para um HTML específico.")
    parser.add_argument("--selector")
    parser.add_argument("--attr")
    parser.add_argument("--attr-value")
    parser.add_argument("--text")
    parser.add_argument("--tag")
    parser.add_argument("--ancestor-depth", type=int, default=3)
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


def element_xpath(element) -> str:
    return element.getroottree().getpath(element)


def selector_matches(document, selector: str) -> set[str]:
    try:
        compiled = cssselect2.compile_selector_list(selector)
    except cssselect2.SelectorError:
        return set()
    wrapped = cssselect2.ElementWrapper.from_html_root(document)
    matches: set[str] = set()
    for wrapper in wrapped.iter_subtree():
        if any(item.pseudo_element is None and item.test(wrapper) for item in compiled):
            matches.add(element_xpath(wrapper.etree_element))
    return matches


def element_matches(element, *, selector_paths: set[str], args: argparse.Namespace) -> bool:
    if args.selector and not selector_paths:
        return False
    if selector_paths and element_xpath(element) not in selector_paths:
        return False
    if args.tag and element.tag != args.tag:
        return False
    if args.attr:
        if args.attr not in element.attrib:
            return False
        if args.attr_value and args.attr_value.lower() not in (element.get(args.attr, "").lower()):
            return False
    if args.text:
        text = " ".join(part.strip() for part in element.itertext() if part and part.strip()).lower()
        if args.text.lower() not in text:
            return False
    return True


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_html_paths(args)
    if not any([args.selector, args.attr, args.text, args.tag]):
        raise SystemExit("Informe ao menos um filtro: --selector, --attr, --text ou --tag.")

    results = []
    for path in paths:
        document = parse_html_file(path)
        selector_paths = selector_matches(document, args.selector) if args.selector else set()
        if args.selector and not selector_paths:
            continue
        for element in iter_elements(document):
            if not element_matches(element, selector_paths=selector_paths, args=args):
                continue
            info = describe_element(element)
            results.append(
                {
                    "file": path.relative_to(root),
                    "line": info["line"],
                    "label": info["label"],
                    "path": element_path(element, depth=args.ancestor_depth + 1),
                    "ancestors": ancestor_chain(element, depth=args.ancestor_depth),
                    "attrs": short_attr_map(
                        element,
                        names=["id", "class", "href", "src", "role", "data-state", "data-type"],
                    ),
                    "text": info["text"],
                }
            )

    return {
        "root": root,
        "filters": {
            "selector": args.selector,
            "attr": args.attr,
            "attr_value": args.attr_value,
            "text": args.text,
            "tag": args.tag,
        },
        "results": results[: args.max_results],
        "total_results": len(results),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    filters = payload["filters"]
    lines = [
        f"root: {payload['root']}",
        f"results: {payload['total_results']}",
        "filters:",
        f"  selector: {filters['selector'] or '-'}",
        f"  attr: {filters['attr'] or '-'}",
        f"  attr_value: {filters['attr_value'] or '-'}",
        f"  text: {filters['text'] or '-'}",
        f"  tag: {filters['tag'] or '-'}",
    ]
    for item in payload["results"]:
        lines.append(f"{item['file']}:{item['line'] or '-'} {item['label']}")
        if summary_only:
            continue
        lines.append(f"  path: {item['path']}")
        lines.append(f"  attrs: {format_attrs(item['attrs'])}")
        lines.append(f"  ancestors: {compact_list(item['ancestors'], limit=4)}")
        lines.append(f"  text: {item['text'] or '-'}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
