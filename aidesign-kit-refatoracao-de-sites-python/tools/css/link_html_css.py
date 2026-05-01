from __future__ import annotations

import argparse
import sys
from pathlib import Path

from bs4 import BeautifulSoup

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.css_utils import load_css_bundle, rule_to_dict, top_properties
from common.fs import expand_input_paths_to_files, iter_files, read_text
from common.runtime import resolve_root
from common.text import clip


PSEUDO_STRIPS = (
    "::before",
    "::after",
    "::marker",
    "::placeholder",
    ":hover",
    ":focus",
    ":focus-visible",
    ":focus-within",
    ":active",
    ":visited",
)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Cruza um alvo do HTML com regras CSS que o atingem.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=12)
    parser.add_argument("target", help="Seletor CSS do alvo no HTML, ex: .hero ou #pricing.")
    parser.add_argument("--html", action="append", required=True, help="HTML de referência.")
    parser.add_argument("--css", action="append", default=[], help="Arquivos CSS em ordem de carga.")
    return parser


def sanitize_selector(selector: str) -> str:
    clean = selector.strip()
    for token in PSEUDO_STRIPS:
        clean = clean.replace(token, "")
    return clean.strip()


def resolve_paths(args: argparse.Namespace) -> tuple[Path, list[Path], list[Path]]:
    root = resolve_root(args.root)
    html_paths = [
        *expand_input_paths_to_files(
            root,
            args.html,
            include=["*.html", "*.htm"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    ]
    if args.css:
        css_paths = expand_input_paths_to_files(
            root,
            args.css,
            include=["*.css"],
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    else:
        include = args.include or ["*.css"]
        css_paths = list(
            iter_files(
                root,
                include=include,
                exclude=args.exclude,
                use_default_excludes=not args.no_default_excludes,
                max_depth=args.max_depth,
            )
        )
    return root, html_paths, css_paths


def soup_targets(path: Path, target: str):
    soup = BeautifulSoup(read_text(path), "lxml")
    try:
        return soup, list(soup.select(target))
    except Exception:
        return soup, []


def selector_hits_targets(soup: BeautifulSoup, selector: str, targets: list[object]) -> bool:
    clean_selector = sanitize_selector(selector)
    if not clean_selector:
        return False
    try:
        matched = soup.select(clean_selector)
    except Exception:
        return False
    target_ids = {id(node) for node in targets}
    return any(id(node) in target_ids for node in matched)


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, html_paths, css_paths = resolve_paths(args)
    bundle = load_css_bundle(css_paths)
    results = []

    for html_path in html_paths:
        soup, targets = soup_targets(html_path, args.target)
        if not targets:
            results.append(
                {
                    "html": html_path.relative_to(root),
                    "target_count": 0,
                    "matches": [],
                }
            )
            continue

        matches = []
        for rule in bundle.rules:
            if selector_hits_targets(soup, rule.selector_text, targets):
                keyframe_refs = [
                    name
                    for name in rule.animation_names
                    if name in bundle.keyframes
                ]
                rule_data = rule_to_dict(rule)
                rule_file = Path(rule_data["file"])
                if rule_file.is_relative_to(root):
                    rule_data["file"] = str(rule_file.relative_to(root))
                matches.append(
                    {
                        **rule_data,
                        "properties": top_properties(rule.declarations, limit=5),
                        "keyframe_refs": keyframe_refs,
                    }
                )

        results.append(
            {
                "html": html_path.relative_to(root),
                "target_count": len(targets),
                "matches": matches[: args.max_results],
                "total_matches": len(matches),
            }
        )

    return {
        "root": root,
        "target": args.target,
        "css_files": [path.relative_to(root) if path.is_relative_to(root) else path for path in css_paths],
        "results": results,
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"root: {payload['root']}", f"target: {payload['target']}"]
    for item in payload["results"]:
        lines.append(
            f"html: {item['html']} targets={item['target_count']} css_matches={item.get('total_matches', len(item['matches']))}"
        )
        if summary_only:
            continue
        if not item["matches"]:
            lines.append("  none")
            continue
        for match in item["matches"]:
            lines.append(f"  {match['selector']} -> {match['file']}:{match['line']}")
            lines.append(f"    props: {', '.join(match['properties']) or '-'}")
            lines.append(f"    media: {', '.join(match['media']) or '-'}")
            keyframes = ", ".join(match["keyframe_refs"]) if match["keyframe_refs"] else "-"
            lines.append(f"    keyframes: {keyframes}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
