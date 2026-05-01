# `find_visual_patterns.py`

## O que faz

Encontra padrões visuais densos no CSS como gradient, blur, backdrop, sticky, clip-path, mask, blend e filter.

## Quando usar

Quando você quer localizar rapidamente efeitos visuais que costumam exigir porte cuidadoso.

## Comando mínimo

```bash
uv run python tools/css/find_visual_patterns.py clean/assets/css
```

## Flags principais

- `--pattern`
- `--max-results`
- `--exclude`
- `--no-default-excludes`
- `--output`

## Exemplo curto de saída

```text
counts:
  gradient: 6
results:
  gradient clean/assets/css/main.css:142 .hero background=linear-gradient(...)
```
