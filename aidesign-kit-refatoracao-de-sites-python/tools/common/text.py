from __future__ import annotations

import re


def clip(value: object, limit: int = 96) -> str:
    text = str(value).strip()
    if len(text) <= limit:
        return text
    return f"{text[: max(limit - 1, 0)].rstrip()}…"


def compact_snippet(value: str, limit: int = 120) -> str:
    text = re.sub(r"\s+", " ", value or "").strip()
    return clip(text, limit=limit)


def human_size(size: int) -> str:
    units = ["B", "KB", "MB", "GB"]
    value = float(size)
    for unit in units:
        if value < 1024 or unit == units[-1]:
            if unit == "B":
                return f"{int(value)} {unit}"
            return f"{value:.1f} {unit}"
        value /= 1024
    return f"{int(size)} B"


def slugify(value: str) -> str:
    text = value.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-") or "item"


def px_to_float(value: str | None) -> float | None:
    if not value:
        return None
    match = re.search(r"-?\d+(?:\.\d+)?", value)
    if not match:
        return None
    try:
        return float(match.group(0))
    except ValueError:
        return None


def format_percent(value: float, *, digits: int = 1) -> str:
    return f"{value:.{digits}f}%"


def compact_list(values: list[str], *, limit: int = 5) -> str:
    if not values:
        return "-"
    if len(values) <= limit:
        return ", ".join(values)
    head = ", ".join(values[:limit])
    return f"{head}, +{len(values) - limit}"
