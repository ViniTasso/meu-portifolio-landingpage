from __future__ import annotations

import fnmatch
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

from common.text import human_size


DEFAULT_EXCLUDES = (
    ".git",
    ".venv",
    "__pycache__",
    ".pytest_cache",
    "node_modules",
    "dist",
    "build",
    ".next",
    ".nuxt",
    ".turbo",
    ".cache",
    ".parcel-cache",
    "coverage",
    "playwright-report",
    "test-results",
    ".idea",
    ".vscode",
)

TEXT_EXTENSIONS = {
    ".css",
    ".csv",
    ".html",
    ".htm",
    ".js",
    ".json",
    ".jsx",
    ".mjs",
    ".md",
    ".svg",
    ".ts",
    ".tsx",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
}


@dataclass(slots=True)
class FileRecord:
    path: Path
    relative: Path
    size_bytes: int

    @property
    def extension(self) -> str:
        return self.path.suffix.lower() or "[no-ext]"

    @property
    def size_human(self) -> str:
        return human_size(self.size_bytes)


def split_patterns(values: Iterable[str] | None) -> list[str]:
    patterns: list[str] = []
    for value in values or []:
        for part in str(value).split(","):
            part = part.strip()
            if part:
                patterns.append(part)
    return patterns


def _match_pattern(relative: Path, pattern: str) -> bool:
    rel_text = relative.as_posix()
    return (
        fnmatch.fnmatch(relative.name, pattern)
        or fnmatch.fnmatch(rel_text, pattern)
        or fnmatch.fnmatch(f"./{rel_text}", pattern)
    )


def is_excluded(
    relative: Path,
    exclude: Iterable[str] | None = None,
    *,
    use_default_excludes: bool = True,
) -> bool:
    if relative == Path("."):
        return False
    if use_default_excludes and any(part in DEFAULT_EXCLUDES for part in relative.parts):
        return True
    return any(_match_pattern(relative, pattern) for pattern in split_patterns(exclude))


def matches_include(relative: Path, include: Iterable[str] | None = None) -> bool:
    include_patterns = split_patterns(include)
    if not include_patterns:
        return True
    return any(_match_pattern(relative, pattern) for pattern in include_patterns)


def iter_files(
    root: Path,
    *,
    include: Iterable[str] | None = None,
    exclude: Iterable[str] | None = None,
    use_default_excludes: bool = True,
    max_depth: int | None = None,
) -> Iterable[Path]:
    root = root.resolve()
    for current_root, dirs, files in os.walk(root):
        current_path = Path(current_root)
        rel_dir = current_path.relative_to(root)
        depth = 0 if rel_dir == Path(".") else len(rel_dir.parts)

        dirs[:] = [
            name
            for name in sorted(dirs)
            if not is_excluded(
                rel_dir / name,
                exclude,
                use_default_excludes=use_default_excludes,
            )
            and (max_depth is None or depth < max_depth)
        ]

        for name in sorted(files):
            rel_file = rel_dir / name
            if max_depth is not None and len(rel_file.parts) > max_depth:
                continue
            if is_excluded(
                rel_file,
                exclude,
                use_default_excludes=use_default_excludes,
            ):
                continue
            if not matches_include(rel_file, include):
                continue
            yield root / rel_file


def iter_dirs(
    root: Path,
    *,
    exclude: Iterable[str] | None = None,
    use_default_excludes: bool = True,
    max_depth: int | None = None,
) -> Iterable[Path]:
    root = root.resolve()
    for current_root, dirs, _ in os.walk(root):
        current_path = Path(current_root)
        rel_dir = current_path.relative_to(root)
        depth = 0 if rel_dir == Path(".") else len(rel_dir.parts)

        dirs[:] = [
            name
            for name in sorted(dirs)
            if not is_excluded(
                rel_dir / name,
                exclude,
                use_default_excludes=use_default_excludes,
            )
            and (max_depth is None or depth < max_depth)
        ]

        if rel_dir == Path("."):
            continue
        if max_depth is not None and len(rel_dir.parts) > max_depth:
            continue
        if is_excluded(rel_dir, exclude, use_default_excludes=use_default_excludes):
            continue
        yield current_path


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def resolve_input_path(root: Path, value: str | Path) -> Path:
    path = Path(value)
    if path.is_absolute():
        return path.resolve()
    return (root / path).resolve()


def resolve_input_paths(root: Path, values: Iterable[str | Path]) -> list[Path]:
    return [resolve_input_path(root, value) for value in values]


def safe_relative(path: Path, root: Path) -> Path:
    try:
        return path.resolve().relative_to(root.resolve())
    except ValueError:
        return path.resolve()


def file_record(path: Path, root: Path) -> FileRecord:
    return FileRecord(
        path=path,
        relative=safe_relative(path, root),
        size_bytes=path.stat().st_size,
    )


def collect_file_records(
    root: Path,
    *,
    include: Iterable[str] | None = None,
    exclude: Iterable[str] | None = None,
    use_default_excludes: bool = True,
    max_depth: int | None = None,
) -> list[FileRecord]:
    return [
        file_record(path, root)
        for path in iter_files(
            root,
            include=include,
            exclude=exclude,
            use_default_excludes=use_default_excludes,
            max_depth=max_depth,
        )
    ]


def expand_input_paths_to_files(
    root: Path,
    values: Iterable[str | Path],
    *,
    include: Iterable[str] | None = None,
    exclude: Iterable[str] | None = None,
    use_default_excludes: bool = True,
    max_depth: int | None = None,
) -> list[Path]:
    files: list[Path] = []
    for path in resolve_input_paths(root, values):
        if path.is_dir():
            files.extend(
                list(
                    iter_files(
                        path,
                        include=include,
                        exclude=exclude,
                        use_default_excludes=use_default_excludes,
                        max_depth=max_depth,
                    )
                )
            )
            continue
        if path.is_file():
            files.append(path)
    unique: list[Path] = []
    seen: set[Path] = set()
    for path in files:
        resolved = path.resolve()
        if resolved in seen:
            continue
        seen.add(resolved)
        unique.append(resolved)
    return unique


def looks_like_text(path: Path, *, sample_size: int = 2048) -> bool:
    if path.suffix.lower() in TEXT_EXTENSIONS:
        return True
    try:
        chunk = path.read_bytes()[:sample_size]
    except OSError:
        return False
    if not chunk:
        return True
    if b"\x00" in chunk:
        return False
    return True
