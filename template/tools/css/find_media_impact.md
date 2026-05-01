# `find_media_impact.py`

## O que faz

Mostra quais seletores e propriedades mudam dentro de cada media query.

## Quando usar

Quando você precisa enxergar o impacto real dos breakpoints e localizar blocos sensíveis no responsivo.

## Comando mínimo

```bash
uv run python tools/css/find_media_impact.py clean/assets/css --selector .hero
```

## Flags principais

- `--selector`
- `--per-media`
- `--max-results`
- `--output`

## Exemplo curto de saída

```text
media: (max-width: 767px) rules=12 selectors=8 props=padding, font-size, display
  .hero [3] props=padding, min-height, gap
```
