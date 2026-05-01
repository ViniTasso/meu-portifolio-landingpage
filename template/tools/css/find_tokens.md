# `find_tokens.py`

## O que faz

Extrai tokens reais de CSS: cores, fontes, spacing, radius, shadow, border, breakpoints, durations, easing e keyframes.

## Quando usar

Quando a pergunta é “quais tokens reais existem neste CSS?”.

## Comando mínimo

```bash
uv run python tools/css/find_tokens.py clean/assets/site.css
```

## Flags principais

- `--root`
- `--max-results`
- `--summary-only`
- `--max-depth`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
colors:
  #111827 [8] clean/assets/site.css:14
breakpoints:
  768px [3] clean/assets/site.css:220
```
