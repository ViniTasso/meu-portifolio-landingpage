from __future__ import annotations

import argparse
import collections
import sys
from pathlib import Path

from bs4 import BeautifulSoup

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import expand_input_paths_to_files, iter_files, read_text
from common.js_utils import extract_selector_refs, load_js_text
from common.runtime import resolve_root
from common.text import compact_list


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Cruza seletores do JS com o HTML real.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=15)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--html", action="append", default=[])
    parser.add_argument("--missing-only", action="store_true")
    return parser


def resolve_js_paths(args: argparse.Namespace) -> tuple[Path, list[Path], list[Path]]:
    root = resolve_root(args.root)
    if args.paths:
        js_paths = expand_input_paths_to_files(
            root,
            args.paths,
            include=["*.js", "*.mjs", "*.cjs", "*.ts", "*.tsx"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    else:
        include = args.include or ["*.js", "*.mjs", "*.cjs", "*.ts", "*.tsx"]
        js_paths = list(
            iter_files(
                root,
                include=include,
                exclude=args.exclude,
                use_default_excludes=not args.no_default_excludes,
                max_depth=args.max_depth,
            )
        )
    if args.html:
        html_paths = expand_input_paths_to_files(
            root,
            args.html,
            include=["*.html", "*.htm"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    else:
        html_paths = list(
            iter_files(
                root,
                include=["*.html", "*.htm"],
                exclude=args.exclude,
                use_default_excludes=not args.no_default_excludes,
                max_depth=args.max_depth,
            )
        )
    return root, js_paths, html_paths


def load_soups(paths: list[Path]) -> dict[Path, BeautifulSoup]:
    return {path: BeautifulSoup(read_text(path), "lxml") for path in paths}


def selector_samples(soups: dict[Path, BeautifulSoup], selector: str) -> dict[str, object]:
    matches = []
    invalid = False
    for path, soup in soups.items():
        try:
            nodes = soup.select(selector)
        except Exception:
            invalid = True
            break
        if not nodes:
            continue
        sample_labels = []
        for node in nodes[:2]:
            label = node.name or "node"
            node_id = node.get("id")
            if node_id:
                label += f"#{node_id}"
            classes = [item for item in (node.get("class") or [])[:2] if item]
            if classes:
                label += "".join(f".{item}" for item in classes)
            sample_labels.append(label)
        matches.append(
            {
                "file": str(path),
                "count": len(nodes),
                "samples": sample_labels,
            }
        )
    return {
        "invalid": invalid,
        "matches": matches,
        "total_matches": sum(item["count"] for item in matches),
    }


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, js_paths, html_paths = resolve_js_paths(args)
    soups = load_soups(html_paths)
    selector_usage: dict[str, dict[str, object]] = collections.defaultdict(
        lambda: {"sources": [], "kinds": collections.Counter()}
    )

    for path in js_paths:
        for hit in extract_selector_refs(load_js_text(path)):
            bucket = selector_usage[str(hit["selector"])]
            bucket["sources"].append(
                {
                    "file": path.relative_to(root),
                    "line": hit["line"],
                    "kind": hit["kind"],
                }
            )
            bucket["kinds"][str(hit["kind"])] += 1

    results = []
    for selector, info in selector_usage.items():
        html_info = selector_samples(soups, selector)
        if args.missing_only and (html_info["invalid"] or html_info["total_matches"] > 0):
            continue
        results.append(
            {
                "selector": selector,
                "sources": info["sources"],
                "kinds": dict(info["kinds"]),
                "html_invalid": html_info["invalid"],
                "html_matches": html_info["matches"],
                "total_html_matches": html_info["total_matches"],
            }
        )

    results.sort(
        key=lambda item: (
            item["total_html_matches"] > 0,
            len(item["sources"]),
            item["selector"],
        )
    )
    return {
        "root": root,
        "results": results[: args.max_results],
        "total_results": len(results),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"bindings: {payload['total_results']}"]
    for item in payload["results"]:
        kinds = ", ".join(f"{name}={count}" for name, count in sorted(item["kinds"].items()))
        status = "invalid-selector" if item["html_invalid"] else f"html_matches={item['total_html_matches']}"
        lines.append(f"selector: {item['selector']} {status} kinds={kinds}")
        if summary_only:
            continue
        sources = [f"{src['file']}:{src['line']}" for src in item["sources"][:4]]
        lines.append(f"  sources: {compact_list(sources, limit=4)}")
        if item["html_invalid"]:
            lines.append("  html: selector inválido para CSS select")
            continue
        if not item["html_matches"]:
            lines.append("  html: no-match")
            continue
        for match in item["html_matches"][:3]:
            rel_path = Path(match["file"])
            display_path = rel_path.relative_to(payload["root"]) if rel_path.is_relative_to(payload["root"]) else rel_path
            lines.append(
                f"  html: {display_path} count={match['count']} samples={compact_list(match['samples'], limit=3)}"
            )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
