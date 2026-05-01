from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import urlparse

from common.runtime import ARTIFACTS_ROOT
from common.text import slugify


def parse_viewport(value: str) -> tuple[int, int]:
    match = re.fullmatch(r"(\d+)x(\d+)", value.strip())
    if not match:
        raise ValueError(f"Viewport inválida: {value}")
    return int(match.group(1)), int(match.group(2))


def resolve_target(target: str, *, root: Path) -> str:
    parsed = urlparse(target)
    if parsed.scheme and parsed.scheme not in {"file"}:
        return target
    path = Path(target)
    if not path.is_absolute():
        path = (root / path).resolve()
    return path.as_uri()


def default_artifact_dir(tool_name: str) -> Path:
    return ARTIFACTS_ROOT / tool_name


def target_slug(target: str) -> str:
    parsed = urlparse(target)
    if parsed.scheme and parsed.netloc:
        base = f"{parsed.netloc}{parsed.path}"
    else:
        base = target
    return slugify(base)
