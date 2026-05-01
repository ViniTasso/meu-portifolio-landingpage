from __future__ import annotations

import re
from pathlib import Path

from common.fs import read_text
from common.text import clip, compact_snippet


SELECTOR_PATTERNS: list[tuple[str, re.Pattern[str]]] = [
    ("querySelector", re.compile(r"\bquerySelector\(\s*([\"'`])([^\"'`\n]+)\1")),
    ("querySelectorAll", re.compile(r"\bquerySelectorAll\(\s*([\"'`])([^\"'`\n]+)\1")),
    ("getElementById", re.compile(r"\bgetElementById\(\s*([\"'`])([^\"'`\n]+)\1")),
    (
        "getElementsByClassName",
        re.compile(r"\bgetElementsByClassName\(\s*([\"'`])([^\"'`\n]+)\1"),
    ),
    ("getElementsByTagName", re.compile(r"\bgetElementsByTagName\(\s*([\"'`])([^\"'`\n]+)\1")),
    ("closest", re.compile(r"\bclosest\(\s*([\"'`])([^\"'`\n]+)\1")),
    ("matches", re.compile(r"\bmatches\(\s*([\"'`])([^\"'`\n]+)\1")),
    ("jquery", re.compile(r"(?:\bjQuery|\$)\(\s*([\"'`])([^\"'`\n]+)\1\s*\)")),
    ("gsap-target", re.compile(r"\bgsap\.(?:to|from|fromTo|set)\(\s*([\"'`])([^\"'`\n]+)\1")),
    ("scroll-trigger", re.compile(r"\b(?:trigger|pin|endTrigger)\s*:\s*([\"'`])([^\"'`\n]+)\1")),
]

ASSET_PATTERN = re.compile(
    r"([\"'`])([^\"'`\n]+\.(?:png|jpe?g|svg|webp|gif|avif|mp4|webm|mov|m4v|json|glb|gltf|hdr|ktx2|riv|lottie|frag|vert|glsl|mp3|wav|woff2?|ttf))\1",
    flags=re.IGNORECASE,
)

SCROLL_PATTERNS: dict[str, re.Pattern[str]] = {
    "scroll-event": re.compile(r"\b(?:addEventListener\(\s*[\"']scroll[\"']|onscroll\b|scrollTop\b|pageYOffset\b)"),
    "scroll-trigger": re.compile(r"\bScrollTrigger\b|\bscrub\s*:|\bpin\s*:|\bendTrigger\b|\bstart\s*:|\bend\s*:"),
    "timeline": re.compile(r"\b(?:timeline\(|gsap\.timeline|anime\.timeline|createTimeline)\b"),
    "intersection-observer": re.compile(r"\bIntersectionObserver\b|\bthreshold\b|\brootMargin\b"),
    "geometry": re.compile(r"\bgetBoundingClientRect\(|\boffsetTop\b|\bclientHeight\b|\bscrollHeight\b"),
    "interpolation": re.compile(r"\b(?:lerp|interpolate|mix|mapRange|clamp|progress)\b"),
    "request-animation-frame": re.compile(r"\brequestAnimationFrame\b"),
    "sticky-class-toggle": re.compile(r"\b(?:classList\.(?:add|remove|toggle)|setAttribute)\b.*\b(?:sticky|fixed|active|pinned)\b"),
}


def normalize_selector(kind: str, raw_value: str) -> str | None:
    value = raw_value.strip()
    if not value or "${" in value or value.startswith("<"):
        return None
    if kind == "getElementById":
        return f"#{value.lstrip('#')}"
    if kind == "getElementsByClassName":
        classes = [part for part in value.split() if part]
        if not classes:
            return None
        return "".join(f".{item.lstrip('.')}" for item in classes)
    if kind == "getElementsByTagName":
        return value.lower()
    return value


def extract_selector_refs(text: str) -> list[dict[str, str | int]]:
    hits: list[dict[str, str | int]] = []
    for line_number, line in enumerate(text.splitlines(), start=1):
        for kind, pattern in SELECTOR_PATTERNS:
            for match in pattern.finditer(line):
                raw_value = match.group(2)
                selector = normalize_selector(kind, raw_value)
                if not selector:
                    continue
                hits.append(
                    {
                        "kind": kind,
                        "line": line_number,
                        "selector": selector,
                        "snippet": compact_snippet(line, limit=140),
                    }
                )
    return hits


def extract_asset_refs(text: str) -> list[dict[str, str | int]]:
    hits: list[dict[str, str | int]] = []
    for line_number, line in enumerate(text.splitlines(), start=1):
        for match in ASSET_PATTERN.finditer(line):
            value = match.group(2).strip()
            ext = Path(value).suffix.lower() or "[no-ext]"
            hits.append(
                {
                    "line": line_number,
                    "value": clip(value, limit=160),
                    "ext": ext,
                    "snippet": compact_snippet(line, limit=140),
                }
            )
    return hits


def scan_patterns(text: str, patterns: dict[str, re.Pattern[str]]) -> list[dict[str, str | int]]:
    hits: list[dict[str, str | int]] = []
    for line_number, line in enumerate(text.splitlines(), start=1):
        for kind, pattern in patterns.items():
            if not pattern.search(line):
                continue
            hits.append(
                {
                    "kind": kind,
                    "line": line_number,
                    "snippet": compact_snippet(line, limit=160),
                }
            )
    return hits


def load_js_text(path: Path) -> str:
    return read_text(path)
