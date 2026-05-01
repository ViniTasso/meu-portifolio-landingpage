from __future__ import annotations

import argparse
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.parity import DEFAULT_VIEWPORTS, parse_viewports
from common.text import slugify


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Gera a matriz de comparação a partir de páginas, viewports e estados.",
    )
    add_common_output_args(parser, include_summary=True, include_max_results=True)
    parser.set_defaults(max_results=20)
    parser.add_argument("pages", nargs="*", help="Página no formato label=url ou apenas url.")
    parser.add_argument("--page", action="append", default=[], help="Página extra no formato label=url.")
    parser.add_argument("--viewport", action="append", default=[])
    parser.add_argument(
        "--state",
        action="append",
        default=[],
        help="Estado no formato nome=acao|acao. Use default para o estado base.",
    )
    parser.add_argument("--selector", action="append", default=[])
    return parser


def parse_page(value: str) -> dict[str, str]:
    if "=" in value:
        label, target = value.split("=", 1)
        return {"label": label.strip(), "target": target.strip()}
    return {"label": slugify(value), "target": value.strip()}


def parse_state(value: str) -> dict[str, object]:
    if value == "default":
        return {"name": "default", "actions": []}
    if "=" in value:
        name, raw_actions = value.split("=", 1)
        actions = [item.strip() for item in raw_actions.split("|") if item.strip()]
        return {"name": name.strip(), "actions": actions}
    return {"name": slugify(value), "actions": [value.strip()]}


def collect_payload(args: argparse.Namespace) -> dict[str, object]:
    page_specs = [parse_page(item) for item in [*args.pages, *args.page] if item.strip()]
    if not page_specs:
        raise SystemExit("Informe ao menos uma página.")
    viewport_specs = [f"{width}x{height}" for width, height in parse_viewports(args.viewport or DEFAULT_VIEWPORTS)]
    state_specs = [parse_state(item) for item in (args.state or ["default"])]

    entries = []
    for page in page_specs:
        for viewport in viewport_specs:
            for state in state_specs:
                entry_id = slugify(f"{page['label']}-{viewport}-{state['name']}")
                entries.append(
                    {
                        "id": entry_id,
                        "page": page,
                        "viewport": viewport,
                        "state": state,
                        "selectors": args.selector,
                    }
                )

    return {
        "pages": page_specs,
        "viewports": viewport_specs,
        "states": state_specs,
        "selectors": args.selector,
        "entries": entries,
        "total_entries": len(entries),
    }


def render_text(payload: dict[str, object], *, summary_only: bool, max_results: int) -> str:
    lines = [
        f"pages: {len(payload['pages'])}",
        f"viewports: {len(payload['viewports'])}",
        f"states: {len(payload['states'])}",
        f"selectors: {len(payload['selectors'])}",
        f"entries: {payload['total_entries']}",
    ]
    if summary_only:
        return "\n".join(lines)
    lines.append("matrix:")
    for entry in payload["entries"][:max_results]:
        lines.append(
            f"  {entry['id']}: page={entry['page']['label']} viewport={entry['viewport']} state={entry['state']['name']} selectors={len(entry['selectors'])}"
        )
    hidden = max(payload["total_entries"] - max_results, 0)
    if hidden:
        lines.append(f"  ... (+{hidden} more)")
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_payload(args)
    emit_result(
        args,
        payload,
        lambda data: render_text(data, summary_only=args.summary_only, max_results=args.max_results),
    )


if __name__ == "__main__":
    main()
