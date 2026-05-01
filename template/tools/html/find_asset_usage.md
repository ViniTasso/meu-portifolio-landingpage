# `find_asset_usage.py`

## O que faz

Mostra onde imagens, vídeos, poster, SVGs, canvas, iframes e modelos aparecem no HTML.

## Quando usar

Quando você quer mapear rapidamente mídia e assets estruturais antes de migrar ou auditar.

## Comando mínimo

```bash
uv run python tools/html/find_asset_usage.py clean/index.html
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
  image: 12
  poster: 1
results:
  image clean/index.html:96 img.hero-media src=/assets/images/hero.jpg
```
