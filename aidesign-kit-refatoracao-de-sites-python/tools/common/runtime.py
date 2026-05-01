from __future__ import annotations

from pathlib import Path


KIT_ROOT = Path(__file__).resolve().parents[2]
PROJECT_ROOT = KIT_ROOT.parent
TOOLS_ROOT = KIT_ROOT / "tools"
ARTIFACTS_ROOT = TOOLS_ROOT / "artifacts"
KIT_NAME = KIT_ROOT.name


def default_scan_root() -> Path:
    return PROJECT_ROOT


def resolve_root(value: str | Path | None) -> Path:
    if value is None:
        return default_scan_root()
    path = Path(value)
    if not path.is_absolute():
        path = Path.cwd() / path
    return path.resolve()


def display_path(value: str | Path) -> str:
    path = Path(value)
    if not path.is_absolute():
        return path.as_posix() or "."

    resolved = path.resolve()
    bases = [
        (ARTIFACTS_ROOT.resolve(), Path(f"{KIT_NAME}/tools/artifacts")),
        (TOOLS_ROOT.resolve(), Path(f"{KIT_NAME}/tools")),
        (KIT_ROOT.resolve(), Path(KIT_NAME)),
        (PROJECT_ROOT.resolve(), Path(".")),
    ]
    for base, label in bases:
        try:
            relative = resolved.relative_to(base)
        except ValueError:
            continue
        if label == Path("."):
            return relative.as_posix() or "."
        return (label / relative).as_posix() if relative != Path(".") else label.as_posix()
    return resolved.as_posix()


def display_string(value: str) -> str:
    text = str(value).strip()
    if not text or "://" in text or not text.startswith("/"):
        return text
    try:
        return display_path(text)
    except Exception:
        return text


def normalize_text_paths(content: str) -> str:
    bases = [
        (ARTIFACTS_ROOT.resolve(), f"{KIT_NAME}/tools/artifacts"),
        (TOOLS_ROOT.resolve(), f"{KIT_NAME}/tools"),
        (KIT_ROOT.resolve(), KIT_NAME),
        (PROJECT_ROOT.resolve(), "."),
    ]
    normalized = content
    for base, label in bases:
        base_text = base.as_posix()
        replacement_prefix = "" if label == "." else f"{label}/"
        normalized = normalized.replace(f"{base_text}/", replacement_prefix)
        normalized = normalized.replace(base_text, label)
    return normalized


def resolve_project_path(value: str | Path) -> Path:
    path = Path(value)
    if path.is_absolute():
        return path.resolve()
    direct = (Path.cwd() / path).resolve()
    if direct.exists():
        return direct
    return (PROJECT_ROOT / path).resolve()
