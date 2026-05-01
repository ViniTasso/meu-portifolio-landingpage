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
from common.html_utils import element_label, iter_elements, parse_html_file, text_excerpt
from common.runtime import resolve_root
from common.text import clip


MANUAL_TAGS = {"script", "noscript", "iframe", "template"}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Localiza padrões HTML que exigem cuidado na refatoração estrutural.",
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


def push_issue(
    issues: list[dict[str, object]],
    *,
    path: Path,
    root: Path,
    issue_type: str,
    line: int | None,
    selector: str,
    detail: str,
) -> None:
    issues.append(
        {
            "file": path.relative_to(root),
            "type": issue_type,
            "line": line,
            "selector": selector,
            "detail": detail,
        }
    )


def scan_file(path: Path, root: Path) -> list[dict[str, object]]:
    document = parse_html_file(path)
    issues: list[dict[str, object]] = []
    seen_ids: dict[str, int] = {}

    for element in iter_elements(document):
        selector = element_label(element)
        line = getattr(element, "sourceline", None)

        if element.get("id"):
            element_id = element.get("id")
            if element_id in seen_ids:
                push_issue(
                    issues,
                    path=path,
                    root=root,
                    issue_type="duplicate-id",
                    line=line,
                    selector=selector,
                    detail=f"id repetido: {element_id}",
                )
            else:
                seen_ids[element_id] = line or 0

        for attr_name, attr_value in element.attrib.items():
            attr_name_lower = attr_name.lower()
            if attr_name_lower == "style":
                push_issue(
                    issues,
                    path=path,
                    root=root,
                    issue_type="inline-style",
                    line=line,
                    selector=selector,
                    detail=f"style={clip(attr_value, limit=70)}",
                )
            if attr_name_lower.startswith("on"):
                push_issue(
                    issues,
                    path=path,
                    root=root,
                    issue_type="inline-handler",
                    line=line,
                    selector=selector,
                    detail=f"{attr_name}={clip(attr_value, limit=70)}",
                )
            if ":" in attr_name_lower:
                push_issue(
                    issues,
                    path=path,
                    root=root,
                    issue_type="namespaced-attr",
                    line=line,
                    selector=selector,
                    detail=f"atributo namespaced: {attr_name}",
                )
            if attr_name_lower in {"href", "src", "action"} and attr_value.lower().startswith("javascript:"):
                push_issue(
                    issues,
                    path=path,
                    root=root,
                    issue_type="javascript-url",
                    line=line,
                    selector=selector,
                    detail=clip(attr_value, limit=80),
                )

        if element.tag in MANUAL_TAGS:
            push_issue(
                issues,
                path=path,
                root=root,
                issue_type=f"manual-{element.tag}",
                line=line,
                selector=selector,
                detail=text_excerpt(element, limit=80) or "verificar manualmente",
            )

    return issues


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, paths = resolve_html_paths(args)
    issues: list[dict[str, object]] = []
    for path in paths:
        issues.extend(scan_file(path, root))

    counter = collections.Counter(item["type"] for item in issues)
    return {
        "root": root,
        "total_files": len(paths),
        "counts": dict(counter),
        "issues": issues[: args.max_results],
        "total_issues": len(issues),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        f"files: {payload['total_files']}",
        f"issues: {payload['total_issues']}",
    ]
    if payload["counts"]:
        lines.append("counts:")
        for issue_type, count in sorted(payload["counts"].items()):
            lines.append(f"  {issue_type}: {count}")
    if summary_only:
        return "\n".join(lines)

    lines.append("results:")
    if not payload["issues"]:
        lines.append("  none")
        return "\n".join(lines)

    for issue in payload["issues"]:
        lines.append(
            "  "
            + f"{issue['type']} {issue['file']}:{issue['line'] or '-'} "
            + f"{issue['selector']} -> {issue['detail']}"
        )
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
