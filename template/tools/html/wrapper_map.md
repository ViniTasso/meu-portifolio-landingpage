# `wrapper_map.py`

## O que faz

Resume a hierarquia curta de wrappers em blocos importantes do HTML.

## Quando usar

Quando você precisa entender rapidamente containers, `inner`, `content`, `grid` e outros wrappers críticos.

## Comando mínimo

```bash
uv run python tools/html/wrapper_map.py clean/index.html --selector ".hero"
```

## Flags principais

- `--selector`
- `--depth`
- `--max-children`
- `--max-results`
- `--output`

## Exemplo curto de saída

```text
clean/index.html:80 section.hero
  path: body > main > section.hero
  wrappers:
    div.hero__inner
```
