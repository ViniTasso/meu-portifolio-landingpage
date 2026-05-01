from __future__ import annotations

import argparse
import sys
from pathlib import Path

TOOLS_ROOT = Path(__file__).resolve().parents[1]
if str(TOOLS_ROOT) not in sys.path:
    sys.path.insert(0, str(TOOLS_ROOT))

from common.cli import add_common_output_args, emit_result
from common.fs import iter_dirs, iter_files
from common.runtime import resolve_root


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Mostra uma árvore compacta e econômica de uma pasta.",
    )
    add_common_output_args(
        parser,
        include_summary=True,
        include_max_results=True,
        include_max_depth=True,
    )
    parser.set_defaults(max_results=12)
    parser.add_argument("path", nargs="?", help="Subpasta opcional dentro da raiz.")
    parser.add_argument("--dirs-only", action="store_true")
    return parser


def collect_tree(args: argparse.Namespace) -> dict[str, object]:
    root = resolve_root(args.root)
    if args.path:
        from common.fs import resolve_input_path

        root = resolve_input_path(root, args.path)
    include = None if args.dirs_only else args.include
    files = [] if args.dirs_only else list(
        iter_files(
            root,
            include=include,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    )
    dirs = list(
        iter_dirs(
            root,
            exclude=args.exclude,
            use_default_excludes=not args.no_default_excludes,
            max_depth=args.max_depth,
        )
    )

    tree: dict[str, dict[str, list[str]]] = {".": {"dirs": [], "files": []}}
    for directory in dirs:
        rel_dir = directory.relative_to(root)
        key = rel_dir.as_posix()
        tree.setdefault(key, {"dirs": [], "files": []})
        parent = "." if rel_dir.parent == Path(".") else rel_dir.parent.as_posix()
        tree.setdefault(parent, {"dirs": [], "files": []})
        tree[parent]["dirs"].append(rel_dir.name)

    for file_path in files:
        rel_file = file_path.relative_to(root)
        parent = "." if rel_file.parent == Path(".") else rel_file.parent.as_posix()
        tree.setdefault(parent, {"dirs": [], "files": []})
        tree[parent]["files"].append(rel_file.name)

    for node in tree.values():
        node["dirs"] = sorted(set(node["dirs"]))
        node["files"] = sorted(set(node["files"]))

    return {
        "root": root,
        "summary": {
            "dirs": len(dirs),
            "files": len(files),
            "max_depth": args.max_depth,
        },
        "tree": tree,
    }


def render_text(payload: dict[str, object], *, max_results: int, summary_only: bool) -> str:
    tree = payload["tree"]
    lines = [
        f"root: {payload['root']}",
        "summary:",
        f"  dirs: {payload['summary']['dirs']}",
        f"  files: {payload['summary']['files']}",
    ]
    if payload["summary"]["max_depth"] is not None:
        lines.append(f"  max_depth: {payload['summary']['max_depth']}")
    if summary_only:
        return "\n".join(lines)

    def visit(node_key: str, depth: int) -> None:
        entry = tree.get(node_key, {"dirs": [], "files": []})
        children = [(name, "dir") for name in entry["dirs"]] + [
            (name, "file") for name in entry["files"]
        ]
        hidden = max(len(children) - max_results, 0)
        for name, kind in children[:max_results]:
            indent = "  " * depth
            label = f"{name}/" if kind == "dir" else name
            lines.append(f"{indent}{label}")
            if kind == "dir":
                child_key = name if node_key == "." else f"{node_key}/{name}"
                visit(child_key, depth + 1)
        if hidden:
            lines.append(f"{'  ' * depth}... (+{hidden} more)")

    lines.append("tree:")
    visit(".", 1)
    return "\n".join(lines)


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    payload = collect_tree(args)
    emit_result(
        args,
        payload,
        lambda data: render_text(
            data,
            max_results=args.max_results,
            summary_only=args.summary_only,
        ),
    )


if __name__ == "__main__":
    main()
