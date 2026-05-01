from __future__ import annotations

import argparse
import json
from dataclasses import asdict, is_dataclass
from pathlib import Path
from typing import Any, Callable, Iterable

from common.runtime import display_path, display_string, normalize_text_paths, resolve_root


def add_common_output_args(
    parser: argparse.ArgumentParser,
    *,
    include_summary: bool = True,
    include_max_results: bool = True,
    include_context_lines: bool = False,
    include_max_depth: bool = False,
) -> None:
    parser.add_argument(
        "--root",
        help="Pasta raiz analisada. Por padrão usa a pasta pai do kit.",
    )
    parser.add_argument("--format", choices=("text", "json"), default="text")
    parser.add_argument("--output", help="Arquivo de saída opcional.")
    if include_summary:
        parser.add_argument("--summary-only", action="store_true")
    if include_max_results:
        parser.add_argument("--max-results", type=int, default=10)
    if include_max_depth:
        parser.add_argument("--max-depth", type=int)
    if include_context_lines:
        parser.add_argument("--context-lines", type=int, default=0)
    parser.add_argument(
        "--include",
        action="append",
        default=[],
        help="Glob relativo. Aceita repetição e listas separadas por vírgula.",
    )
    parser.add_argument(
        "--exclude",
        action="append",
        default=[],
        help="Glob relativo extra para exclusão. Aceita repetição e vírgulas.",
    )
    parser.add_argument("--no-default-excludes", action="store_true")


def json_ready(value: Any) -> Any:
    if is_dataclass(value):
        return json_ready(asdict(value))
    if isinstance(value, Path):
        return display_path(value)
    if isinstance(value, str):
        return display_string(value)
    if isinstance(value, dict):
        return {str(key): json_ready(item) for key, item in value.items()}
    if isinstance(value, (list, tuple, set)):
        return [json_ready(item) for item in value]
    return value


def emit_result(
    args: argparse.Namespace,
    payload: Any,
    render_text: Callable[[Any], str],
) -> None:
    if args.format == "json":
        content = json.dumps(json_ready(payload), ensure_ascii=False, indent=2)
    else:
        content = normalize_text_paths(render_text(payload))

    output_path = Path(args.output).resolve() if args.output else None
    if output_path is not None:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(content, encoding="utf-8")
        return
    print(content)


def non_empty(values: Iterable[str] | None) -> list[str]:
    return [str(value).strip() for value in values or [] if str(value).strip()]
