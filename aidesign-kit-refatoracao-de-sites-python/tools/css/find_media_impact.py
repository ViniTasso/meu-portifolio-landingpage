from __future__ import annotations

import argparse
import collections
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.css_utils import declaration_names, load_css_bundle, split_selectors
from common.fs import expand_input_paths_to_files, iter_files
from common.runtime import resolve_root
from common.text import compact_list


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Mostra quais seletores e propriedades mudam em cada breakpoint.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=8)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--selector")
    parser.add_argument("--per-media", type=int, default=4)
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
    media_groups: dict[str, dict[str, object]] = collections.defaultdict(
        lambda: {
            "rules": 0,
            "selectors": collections.Counter(),
            "properties": collections.Counter(),
            "selector_props": collections.defaultdict(collections.Counter),
        }
    )

    for rule in bundle.rules:
        if not rule.media:
            continue
        selectors = split_selectors(rule.selector_text) or [rule.selector_text]
        if args.selector and not any(args.selector in selector for selector in selectors):
            continue
        media_key = " and ".join(rule.media)
        prop_names = declaration_names(rule.declarations)
        group = media_groups[media_key]
        group["rules"] += 1
        group["properties"].update(prop_names)
        for selector in selectors:
            group["selectors"][selector] += 1
            group["selector_props"][selector].update(prop_names)

    results = []
    for media, data in media_groups.items():
        top_selectors = []
        for selector, count in data["selectors"].most_common(args.per_media):
            top_selectors.append(
                {
                    "selector": selector,
                    "count": count,
                    "properties": [name for name, _ in data["selector_props"][selector].most_common(4)],
                }
            )
        results.append(
            {
                "media": media,
                "rules": data["rules"],
                "selectors": len(data["selectors"]),
                "top_props": [name for name, _ in data["properties"].most_common(6)],
                "top_selectors": top_selectors,
            }
        )

    results.sort(key=lambda item: (-item["rules"], item["media"]))
    return {
        "root": root,
        "results": results[: args.max_results],
        "total_results": len(results),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"media_groups: {payload['total_results']}"]
    for item in payload["results"]:
        lines.append(
            f"media: {item['media']} rules={item['rules']} selectors={item['selectors']} props={compact_list(item['top_props'], limit=6)}"
        )
        if summary_only:
            continue
        for selector in item["top_selectors"]:
            lines.append(
                f"  {selector['selector']} [{selector['count']}] props={compact_list(selector['properties'], limit=4)}"
            )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
