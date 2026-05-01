# `page_state_matrix.py`

## O que faz

Gera a matriz de páginas, viewports e estados para comparação ou captura posterior.

## Quando usar

Quando você quer formalizar a bateria de paridade antes de começar a capturar artefatos.

## Comando mínimo

```bash
uv run python tools/parity/page_state_matrix.py home=http://localhost:4173 --state default --state menu=click:.menu-toggle
```

## Flags principais

- `--page`
- `--viewport`
- `--state`
- `--selector`
- `--output`

## Exemplo curto de saída

```text
pages: 1
viewports: 4
states: 2
entries: 8
```
