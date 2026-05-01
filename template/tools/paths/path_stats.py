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
from common.fs import collect_file_records, file_record, iter_files, resolve_input_paths
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
        description="Resume contagem, tamanho e hotspots por extensão ou pasta.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=8)
    parser.add_argument("paths", nargs="*")
    parser.add_argument("--group-by", choices=("ext", "dir"), default="ext")
    parser.add_argument("--dir-depth", type=int, default=2)
    parser.add_argument("--min-size", default="0")
    parser.add_argument("--top-files", type=int, default=8)
    return parser


def collect_records(args: argparse.Namespace) -> tuple[Path, list[object]]:
    root = resolve_root(args.root)
    min_size = parse_size(args.min_size)
    if args.paths:
        records = []
        for path in resolve_input_paths(root, args.paths):
            if path.is_dir():
                records.extend(
                    [
                        file_record(item, root)
                        for item in iter_files(
                            path,
                            include=args.include,
                            exclude=args.exclude,
                            use_default_excludes=not args.no_default_excludes,
                            max_depth=args.max_depth,
                        )
                        if item.stat().st_size >= min_size
                    ]
                )
                continue
            if path.is_file():
                record = file_record(path, root)
                if record.size_bytes >= min_size:
                    records.append(record)
        return root, records

    records = [
        record
        for record in collect_file_records(
            root,
            include=args.include,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
        if record.size_bytes >= min_size
    ]
    return root, records


def group_label(relative: Path, *, group_by: str, dir_depth: int) -> str:
    if group_by == "ext":
        return relative.suffix.lower() or "[no-ext]"
    if relative.parent == Path("."):
        return "."
    return "/".join(relative.parent.parts[:dir_depth]) or "."


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root, records = collect_records(args)
    groups: dict[str, dict[str, int]] = collections.defaultdict(
        lambda: {"files": 0, "size_bytes": 0}
    )
    hotspots: dict[str, dict[str, int]] = collections.defaultdict(
        lambda: {"files": 0, "size_bytes": 0}
    )

    for record in records:
        label = group_label(record.relative, group_by=args.group_by, dir_depth=args.dir_depth)
        groups[label]["files"] += 1
        groups[label]["size_bytes"] += record.size_bytes

        hotspot_key = group_label(record.relative, group_by="dir", dir_depth=args.dir_depth)
        hotspots[hotspot_key]["files"] += 1
        hotspots[hotspot_key]["size_bytes"] += record.size_bytes

    sorted_groups = sorted(
        (
            {
                "group": group,
                "files": values["files"],
                "size_bytes": values["size_bytes"],
            }
            for group, values in groups.items()
        ),
        key=lambda item: (-item["size_bytes"], -item["files"], item["group"]),
    )
    sorted_hotspots = sorted(
        (
            {
                "group": group,
                "files": values["files"],
                "size_bytes": values["size_bytes"],
            }
            for group, values in hotspots.items()
        ),
        key=lambda item: (-item["size_bytes"], -item["files"], item["group"]),
    )
    top_files = sorted(
        (
            {
                "path": record.relative,
                "size_bytes": record.size_bytes,
            }
            for record in records
        ),
        key=lambda item: (-item["size_bytes"], str(item["path"])),
    )[: args.top_files]

    return {
        "root": root,
        "files": len(records),
        "size_bytes": sum(record.size_bytes for record in records),
        "group_by": args.group_by,
        "groups": sorted_groups[: args.max_results],
        "hotspots": sorted_hotspots[: args.max_results],
        "top_files": top_files,
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [
        f"root: {payload['root']}",
        f"files: {payload['files']}",
        f"size: {human_size(payload['size_bytes'])}",
        f"group_by: {payload['group_by']}",
    ]
    if payload["groups"]:
        lines.append("groups:")
        for item in payload["groups"]:
            lines.append(
                f"  {item['group']}: files={item['files']} size={human_size(item['size_bytes'])}"
            )
    if summary_only:
        return "\n".join(lines)

    if payload["hotspots"]:
        lines.append("hotspots:")
        for item in payload["hotspots"]:
            lines.append(
                f"  {item['group']}: files={item['files']} size={human_size(item['size_bytes'])}"
            )
    if payload["top_files"]:
        lines.append("top_files:")
        for item in payload["top_files"]:
            lines.append(f"  {item['path']}: {human_size(item['size_bytes'])}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
