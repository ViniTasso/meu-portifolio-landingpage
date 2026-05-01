# `capture_scroll_steps.py`

## O que faz

Captura screenshots por viewport e por passos fixos de rolagem em browser real.

## Quando usar

Quando a etapa precisa de evidência visual por dobra, sem depender de `fullPage`.

## Comando mínimo

```bash
uv run python tools/parity/capture_scroll_steps.py http://localhost:4173
```

## Flags principais

- `--viewport`
- `--label`
- `--step-height`
- `--max-steps`
- `--initial-wait-ms`
- `--wait-ms`
- `--output`
- `--headed`

## Exemplo curto de saída

```text
captures: 1
target: http://localhost:4173 viewport=1440x900 shots=6 dir=.../tools/artifacts/capture_scroll_steps/raw/localhost-4173/1440x900
```
