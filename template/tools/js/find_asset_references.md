# `find_asset_references.py`

## O que faz

Encontra referências a imagens, vídeos, JSON, modelos, shaders, fontes e outros assets dentro do JS.

## Quando usar

Quando você precisa localizar assets dirigidos por script antes de portar motion, canvas, WebGL ou players.

## Comando mínimo

```bash
uv run python tools/js/find_asset_references.py clean/assets/js
```

## Flags principais

- `--type`
- `--max-results`
- `--exclude`
- `--no-default-excludes`
- `--output`

## Exemplo curto de saída

```text
counts:
  model: 1
  image: 4
results:
  model clean/assets/js/main.js:214 /assets/models/site.glb
```
