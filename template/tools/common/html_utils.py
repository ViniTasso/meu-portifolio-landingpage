from __future__ import annotations

import re
from pathlib import Path

from lxml import etree, html

from common.text import clip, compact_list, compact_snippet


LANDMARK_TAGS = {"header", "nav", "main", "section", "article", "aside", "footer", "form"}
MEDIA_TAGS = {"img", "picture", "video", "canvas", "svg", "source", "iframe"}
WRAPPER_HINTS = {
    "wrap",
    "wrapper",
    "container",
    "content",
    "shell",
    "inner",
    "grid",
    "row",
    "col",
    "layout",
    "panel",
    "stack",
    "cluster",
}


def parse_html_file(path: Path) -> etree._Element:
    parser = html.HTMLParser(encoding="utf-8", recover=True)
    document = html.parse(str(path), parser=parser)
    return document.getroot()


def element_label(element: etree._Element, *, class_limit: int = 2) -> str:
    tag = element.tag if isinstance(element.tag, str) else "node"
    label = tag
    element_id = element.get("id")
    if element_id:
        label += f"#{element_id}"
    classes = [item for item in (element.get("class") or "").split() if item][:class_limit]
    if classes:
        label += "".join(f".{name}" for name in classes)
    return label


def text_excerpt(element: etree._Element, *, limit: int = 80) -> str:
    text = " ".join(part.strip() for part in element.itertext() if part and part.strip())
    return compact_snippet(text, limit=limit)


def iter_elements(root: etree._Element):
    for element in root.iter():
        if isinstance(element.tag, str):
            yield element


def is_wrapper_candidate(element: etree._Element) -> bool:
    if element.tag != "div":
        return False
    if not (element.get("id") or element.get("class")):
        return False
    class_text = " ".join((element.get("class") or "").split()).lower()
    if any(hint in class_text for hint in WRAPPER_HINTS):
        return True
    if element.get("id") and any(hint in element.get("id", "").lower() for hint in WRAPPER_HINTS):
        return True
    children = [child for child in element if isinstance(child.tag, str)]
    return len(children) >= 2


def describe_element(element: etree._Element) -> dict[str, object]:
    data_attrs = sorted(name for name in element.attrib if name.startswith("data-"))
    media_hits = sorted({child.tag for child in element.iterdescendants() if child.tag in MEDIA_TAGS})
    return {
        "label": element_label(element),
        "line": getattr(element, "sourceline", None),
        "id": element.get("id"),
        "classes": [item for item in (element.get("class") or "").split() if item],
        "data_attrs": data_attrs,
        "media": media_hits,
        "text": text_excerpt(element),
    }


def safe_attr(value: str | None) -> str | None:
    if value is None:
        return None
    return clip(value, limit=80)


def element_path(element: etree._Element, *, depth: int = 5) -> str:
    parts: list[str] = []
    current = element
    while current is not None and len(parts) < depth and isinstance(current.tag, str):
        parts.append(element_label(current))
        current = current.getparent()
    return " > ".join(reversed(parts))


def ancestor_chain(element: etree._Element, *, depth: int = 5) -> list[str]:
    labels: list[str] = []
    current = element.getparent()
    while current is not None and len(labels) < depth and isinstance(current.tag, str):
        labels.append(element_label(current))
        current = current.getparent()
    return list(reversed(labels))


def child_labels(element: etree._Element, *, limit: int = 6) -> list[str]:
    labels = [element_label(child) for child in element if isinstance(child.tag, str)]
    return labels[:limit]


def short_attr_map(
    element: etree._Element,
    *,
    names: list[str] | None = None,
    limit: int = 6,
) -> dict[str, str]:
    keys = names or list(element.attrib.keys())
    items: dict[str, str] = {}
    for name in keys:
        if name not in element.attrib:
            continue
        items[name] = clip(element.attrib.get(name, ""), limit=80)
        if len(items) >= limit:
            break
    return items


def asset_references(element: etree._Element) -> list[dict[str, str | int | None]]:
    refs: list[dict[str, str | int | None]] = []
    line = getattr(element, "sourceline", None)

    def push(kind: str, attr: str | None, value: str | None) -> None:
        if not value:
            return
        refs.append(
            {
                "kind": kind,
                "tag": element.tag,
                "attr": attr,
                "value": clip(value, limit=160),
                "line": line,
                "label": element_label(element),
            }
        )

    tag = element.tag
    if tag == "img":
        push("image", "src", element.get("src"))
        push("image-srcset", "srcset", element.get("srcset"))
    elif tag == "source":
        source_kind = "video-source" if element.getparent() is not None and element.getparent().tag == "video" else "source"
        push(source_kind, "src", element.get("src"))
        push(f"{source_kind}-srcset", "srcset", element.get("srcset"))
    elif tag == "video":
        push("video", "src", element.get("src"))
        push("poster", "poster", element.get("poster"))
    elif tag == "iframe":
        push("iframe", "src", element.get("src"))
    elif tag == "link":
        rel = " ".join((element.get("rel") or "").split()).lower()
        if any(token in rel for token in ("icon", "preload", "manifest", "stylesheet")):
            push(rel or "link", "href", element.get("href"))
    elif tag == "object":
        push("object", "data", element.get("data"))
    elif tag == "embed":
        push("embed", "src", element.get("src"))
    elif tag == "script":
        push("script", "src", element.get("src"))
    elif tag == "model-viewer":
        push("model", "src", element.get("src"))
        push("model-poster", "poster", element.get("poster"))
        push("environment-image", "environment-image", element.get("environment-image"))
    elif tag == "canvas":
        push("canvas", None, "[inline-canvas]")
    elif tag == "svg":
        push("svg", None, "[inline-svg]")

    style = element.get("style") or ""
    for match in re.findall(r"url\(([^)]+)\)", style, flags=re.IGNORECASE):
        cleaned = match.strip().strip("'\"")
        push("style-url", "style", cleaned)

    return refs


def format_attrs(attrs: dict[str, str]) -> str:
    if not attrs:
        return "-"
    return compact_list([f"{name}={value}" for name, value in attrs.items()], limit=4)
