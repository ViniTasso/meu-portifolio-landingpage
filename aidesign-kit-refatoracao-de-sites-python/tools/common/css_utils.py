from __future__ import annotations

import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

import cssselect2
import tinycss2

from common.fs import read_text
from common.text import clip


ANIMATION_KEYWORDS = {
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "infinite",
    "forwards",
    "backwards",
    "alternate",
    "alternate-reverse",
    "normal",
    "reverse",
    "running",
    "paused",
    "none",
    "both",
    "step-start",
    "step-end",
}


TIME_RE = re.compile(r"^-?\d+(?:\.\d+)?m?s$")


@dataclass
class CSSDeclaration:
    name: str
    value: str
    important: bool = False


@dataclass
class CSSRuleRecord:
    file: Path
    line: int
    selector_text: str
    declarations: list[CSSDeclaration]
    media: list[str] = field(default_factory=list)
    animation_names: list[str] = field(default_factory=list)
    order: int = 0
    compiled_selectors: list[Any] = field(default_factory=list, repr=False)


@dataclass
class CSSKeyframesRecord:
    name: str
    file: Path
    line: int


@dataclass
class CSSBundle:
    rules: list[CSSRuleRecord]
    keyframes: dict[str, CSSKeyframesRecord]


def _parse_declarations(content: Any) -> list[CSSDeclaration]:
    if content is None:
        return []
    declarations: list[CSSDeclaration] = []
    for declaration in tinycss2.parse_declaration_list(
        content,
        skip_whitespace=True,
        skip_comments=True,
    ):
        if declaration.type != "declaration":
            continue
        value = tinycss2.serialize(declaration.value).strip()
        declarations.append(
            CSSDeclaration(
                name=declaration.name.strip(),
                value=value,
                important=bool(declaration.important),
            )
        )
    return declarations


def _extract_animation_names(declarations: list[CSSDeclaration]) -> list[str]:
    names: list[str] = []
    for declaration in declarations:
        if declaration.name not in {"animation", "animation-name"}:
            continue
        for part in declaration.value.split(","):
            tokens = [token for token in re.split(r"\s+", part.strip()) if token]
            for token in tokens:
                if token in ANIMATION_KEYWORDS or TIME_RE.match(token):
                    continue
                if token.startswith("cubic-bezier(") or token.startswith("steps("):
                    continue
                if token.startswith("var("):
                    continue
                names.append(token)
                break
    return sorted(set(names))


def _compile_selectors(selector_text: str) -> list[Any]:
    try:
        return list(cssselect2.compile_selector_list(selector_text))
    except cssselect2.SelectorError:
        return []
    except Exception:
        return []


def _walk_rules(
    nodes: list[Any],
    *,
    path: Path,
    media_stack: list[str],
    start_order: int,
    bundle: CSSBundle,
) -> int:
    order = start_order
    for node in nodes:
        if node.type == "qualified-rule":
            selector_text = tinycss2.serialize(node.prelude).strip()
            declarations = _parse_declarations(node.content)
            bundle.rules.append(
                CSSRuleRecord(
                    file=path,
                    line=getattr(node, "source_line", 1),
                    selector_text=selector_text,
                    declarations=declarations,
                    media=list(media_stack),
                    animation_names=_extract_animation_names(declarations),
                    order=order,
                    compiled_selectors=_compile_selectors(selector_text),
                )
            )
            order += 1
            continue

        if node.type != "at-rule":
            continue

        keyword = (node.at_keyword or "").lower()
        prelude = tinycss2.serialize(node.prelude).strip()
        if keyword == "media" and node.content is not None:
            child_nodes = tinycss2.parse_rule_list(
                node.content,
                skip_whitespace=True,
                skip_comments=True,
            )
            order = _walk_rules(
                child_nodes,
                path=path,
                media_stack=media_stack + [prelude],
                start_order=order,
                bundle=bundle,
            )
            continue

        if keyword.endswith("keyframes"):
            name = clip(prelude, limit=120)
            bundle.keyframes[name] = CSSKeyframesRecord(
                name=name,
                file=path,
                line=getattr(node, "source_line", 1),
            )
            continue

        if node.content is not None:
            child_nodes = tinycss2.parse_rule_list(
                node.content,
                skip_whitespace=True,
                skip_comments=True,
            )
            order = _walk_rules(
                child_nodes,
                path=path,
                media_stack=media_stack,
                start_order=order,
                bundle=bundle,
            )
    return order


def load_css_bundle(paths: list[Path]) -> CSSBundle:
    bundle = CSSBundle(rules=[], keyframes={})
    order = 0
    for path in paths:
        stylesheet = tinycss2.parse_stylesheet(
            read_text(path),
            skip_whitespace=True,
            skip_comments=True,
        )
        order = _walk_rules(
            stylesheet,
            path=path,
            media_stack=[],
            start_order=order,
            bundle=bundle,
        )
    return bundle


def rule_to_dict(rule: CSSRuleRecord) -> dict[str, object]:
    return {
        "file": str(rule.file),
        "line": rule.line,
        "selector": rule.selector_text,
        "media": list(rule.media),
        "animation_names": list(rule.animation_names),
        "declarations": [
            {"name": item.name, "value": item.value, "important": item.important}
            for item in rule.declarations
        ],
    }


def top_properties(declarations: list[CSSDeclaration], *, limit: int = 4) -> list[str]:
    items = []
    for declaration in declarations[:limit]:
        suffix = " !important" if declaration.important else ""
        items.append(f"{declaration.name}: {clip(declaration.value, limit=40)}{suffix}")
    return items


def split_selectors(selector_text: str) -> list[str]:
    return [item.strip() for item in selector_text.split(",") if item.strip()]


def declaration_names(declarations: list[CSSDeclaration]) -> list[str]:
    return [item.name for item in declarations]
