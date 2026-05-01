from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import iter_dirs, iter_files
from common.runtime import resolve_root
from common.text import human_size


SIZE_RE = re.compile(r"^(?P<value>\d+)(?P<unit>[kKmMgG]?[bB]?)?$")


def parse_size(value: str | None) -> int:
    if not value:
        return 0
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
        description="Busca caminhos por nome, extensão, regex e tamanho mínimo.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.add_argument("query", nargs="?")
    parser.add_argument("--name", action="append", default=[])
    parser.add_argument("--ext", action="append", default=[])
    parser.add_argument("--regex")
    parser.add_argument("--min-size", default="0")
    parser.add_argument("--type", choices=("file", "dir", "both"), default="file")
    return parser


def matches_path(
    rel_path: Path,
    *,
    name_terms: list[str],
    ext_terms: list[str],
    regex: re.Pattern[str] | None,
) -> bool:
    rel_text = rel_path.as_posix().lower()
    basename = rel_path.name.lower()

    if name_terms and not any(term in basename or term in rel_text for term in name_terms):
        return False

    if ext_terms and rel_path.suffix.lower() not in ext_terms:
        return False

    if regex and not regex.search(rel_path.as_posix()):
        return False

    return True


def collect_matches(args: argparse.Namespace) -> dict[str, object]:
    root = resolve_root(args.root)
    name_terms = [term.lower() for term in args.name]
    if args.query:
        name_terms.append(args.query.lower())

    ext_terms = []
    for ext in args.ext:
        if not ext:
            continue
        ext_terms.append(ext.lower() if ext.startswith(".") else f".{ext.lower()}")

    regex = re.compile(args.regex) if args.regex else None
    min_size = parse_size(args.min_size)
    items: list[dict[str, object]] = []

    if args.type in {"file", "both"}:
        for path in iter_files(
            root,
            include=args.include,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        ):
            rel_path = path.relative_to(root)
            size = path.stat().st_size
            if size < min_size:
                continue
            if not matches_path(rel_path, name_terms=name_terms, ext_terms=ext_terms, regex=regex):
                continue
            items.append(
                {
                    "path": rel_path,
                    "type": "file",
                    "size_bytes": size,
                }
            )

    if args.type in {"dir", "both"}:
        for path in iter_dirs(
            root,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        ):
            rel_path = path.relative_to(root)
            if not matches_path(rel_path, name_terms=name_terms, ext_terms=[], regex=regex):
                continue
            items.append(
                {
                    "path": rel_path,
                    "type": "dir",
                    "size_bytes": 0,
                }
            )

    items.sort(key=lambda item: (item["type"], str(item["path"])))
    return {
        "root": root,
        "filters": {
            "names": name_terms,
            "ext": ext_terms,
            "regex": args.regex,
            "min_size": min_size,
            "type": args.type,
        },
        "matches": items[: args.max_results],
        "total_matches": len(items),
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        "filters:",
        f"  names: {', '.join(payload['filters']['names']) or '-'}",
        f"  ext: {', '.join(payload['filters']['ext']) or '-'}",
        f"  regex: {payload['filters']['regex'] or '-'}",
        f"  min_size: {human_size(payload['filters']['min_size'])}",
        f"  type: {payload['filters']['type']}",
        f"matches: {payload['total_matches']}",
    ]
    if summary_only:
        return "\n".join(lines)

    if not payload["matches"]:
        lines.append("results:")
        lines.append("  none")
        return "\n".join(lines)

    lines.append("results:")
    for item in payload["matches"]:
        size_text = human_size(item["size_bytes"]) if item["type"] == "file" else "-"
        lines.append(f"  {item['path']} [{item['type']}] size={size_text}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_matches(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
