# `find_scroll_timeline_clues.py`

## O que faz

Busca pistas de scrub, pinning, thresholds, timelines e cálculos visuais ligados a scroll.

## Quando usar

Quando você precisa separar o JS realmente ligado a parallax, sticky, timelines e animações por rolagem.

## Comando mínimo

```bash
uv run python tools/js/find_scroll_timeline_clues.py clean/assets/js
```

## Flags principais

- `--kind`
- `--max-results`
- `--exclude`
- `--no-default-excludes`
- `--output`

## Exemplo curto de saída

```text
counts:
  scroll-trigger: 9
results:
  scroll-trigger clean/assets/js/main.js:188 ScrollTrigger.create({ trigger: ".hero" ...
```
