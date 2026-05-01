# `bundle_boundary_scan.py`

## O que faz

Divide bundles grandes em zonas prováveis de runtime genérico, strings reais do projeto, assets, APIs visuais e trechos com maior chance de código autoral.

## Quando usar

Quando a pergunta é “onde vale a pena ler primeiro neste bundle grande?”.

## Comando mínimo

```bash
uv run python tools/js/bundle_boundary_scan.py clean/assets/app.js
```

## Flags principais

- `--root`
- `--min-size`
- `--chunk-lines`
- `--max-results`
- `--summary-only`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
file: clean/assets/app.js size=412.0 KB
  author_candidates:
    lines 620-799 score=14 strings=Hero section
```
