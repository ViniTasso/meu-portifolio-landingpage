from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import looks_like_text, read_text, resolve_input_path
from common.runtime import resolve_root
from common.text import clip


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Mostra trechos curtos e focados de um arquivo.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(max_results=3)
    parser.add_argument("path", nargs="?", help="Arquivo alvo.")
    parser.add_argument("--file", dest="file_path", help="Alias de path para compatibilidade.")
    parser.add_argument("--query", action="append", default=[])
    parser.add_argument("--regex")
    parser.add_argument("--line", type=int)
    parser.add_argument("--start-line", type=int)
    parser.add_argument("--end-line", type=int)
    parser.add_argument("--lines", help="Alias no formato inicio-fim, ex: 40-80.")
    parser.add_argument("--before", type=int, default=3)
    parser.add_argument("--after", type=int, default=4)
    parser.add_argument("--max-chars", type=int, default=220)
    return parser


def excerpt_block(
    lines: list[str],
    *,
    start: int,
    end: int,
    focus_line: int | None,
    reason: str,
    max_chars: int,
) -> dict[str, object]:
    clipped = []
    for line_number in range(start, end + 1):
        clipped.append(
            {
                "line": line_number,
                "text": clip(lines[line_number - 1].rstrip(), limit=max_chars),
            }
        )
    return {
        "start_line": start,
        "end_line": end,
        "focus_line": focus_line,
        "reason": reason,
        "lines": clipped,
    }


def merged_ranges(ranges: list[tuple[int, int]]) -> list[tuple[int, int]]:
    if not ranges:
        return []
    ranges = sorted(ranges)
    merged = [ranges[0]]
    for start, end in ranges[1:]:
        last_start, last_end = merged[-1]
        if start <= last_end + 1:
            merged[-1] = (last_start, max(last_end, end))
            continue
        merged.append((start, end))
    return merged


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    root = resolve_root(args.root)
    path_value = args.path or args.file_path
    if not path_value:
        raise SystemExit("Informe um arquivo via path posicional ou --file.")
    if args.lines and (args.start_line or args.end_line):
        raise SystemExit("Use --lines ou --start-line/--end-line, não ambos.")
    if args.lines:
        match = re.fullmatch(r"\s*(\d+)\s*-\s*(\d+)\s*", args.lines)
        if not match:
            raise SystemExit("Formato inválido em --lines. Use inicio-fim, ex: 40-80.")
        args.start_line = int(match.group(1))
        args.end_line = int(match.group(2))

    path = resolve_input_path(root, path_value)
    if not path.exists():
        raise SystemExit(f"Arquivo não encontrado: {path}")
    if not looks_like_text(path):
        raise SystemExit(f"Arquivo não textual: {path}")

    lines = read_text(path).splitlines()
    regex = re.compile(args.regex) if args.regex else None

    excerpts: list[dict[str, object]] = []
    if args.line:
        start = max(args.line - args.before, 1)
        end = min(args.line + args.after, len(lines))
        excerpts.append(
            excerpt_block(
                lines,
                start=start,
                end=end,
                focus_line=args.line,
                reason=f"line:{args.line}",
                max_chars=args.max_chars,
            )
        )
    elif args.start_line or args.end_line:
        start = max(args.start_line or 1, 1)
        end = min(args.end_line or start + args.after, len(lines))
        excerpts.append(
            excerpt_block(
                lines,
                start=start,
                end=end,
                focus_line=None,
                reason="range",
                max_chars=args.max_chars,
            )
        )
    elif args.query or regex:
        windows: list[tuple[int, int, int, str]] = []
        lower_queries = [item.lower() for item in args.query]
        for line_number, line in enumerate(lines, start=1):
            lower_line = line.lower()
            matched_query = next((item for item in lower_queries if item in lower_line), None)
            regex_match = regex.search(line) if regex else None
            if not matched_query and not regex_match:
                continue
            start = max(line_number - args.before, 1)
            end = min(line_number + args.after, len(lines))
            reason = f"query:{matched_query}" if matched_query else f"regex:{args.regex}"
            windows.append((start, end, line_number, reason))

        merged = merged_ranges([(start, end) for start, end, _, _ in windows])
        for start, end in merged[: args.max_results]:
            focus = next(
                (line_number for win_start, win_end, line_number, _ in windows if win_start <= line_number <= win_end and win_start == start and win_end == end),
                None,
            )
            reason = next(
                (reason for win_start, win_end, _, reason in windows if win_start == start and win_end == end),
                "query",
            )
            excerpts.append(
                excerpt_block(
                    lines,
                    start=start,
                    end=end,
                    focus_line=focus,
                    reason=reason,
                    max_chars=args.max_chars,
                )
            )
    else:
        default_end = min(args.before + args.after + 1, len(lines))
        excerpts.append(
            excerpt_block(
                lines,
                start=1,
                end=default_end,
                focus_line=1 if lines else None,
                reason="head",
                max_chars=args.max_chars,
            )
        )

    return {
        "root": root,
        "file": path.relative_to(root) if path.is_relative_to(root) else path,
        "total_lines": len(lines),
        "excerpts": excerpts[: args.max_results],
    }


def render_text(payload: dict[str, object], *, summary_only: bool) -> str:
    lines = [f"file: {payload['file']}", f"total_lines: {payload['total_lines']}"]
    if summary_only:
        for excerpt in payload["excerpts"]:
            lines.append(
                f"excerpt: {excerpt['start_line']}-{excerpt['end_line']} reason={excerpt['reason']}"
            )
        return "\n".join(lines)

    for index, excerpt in enumerate(payload["excerpts"], start=1):
        focus = excerpt["focus_line"] or "-"
        lines.append(
            f"excerpt {index}: lines {excerpt['start_line']}-{excerpt['end_line']} focus={focus} reason={excerpt['reason']}"
        )
        for item in excerpt["lines"]:
            if not item["text"]:
                continue
            marker = ">" if item["line"] == excerpt["focus_line"] else " "
            lines.append(f"{marker}{item['line']} | {item['text']}")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(args, payload, lambda data: render_text(data, summary_only=args.summary_only))


if __name__ == "__main__":
    main()
