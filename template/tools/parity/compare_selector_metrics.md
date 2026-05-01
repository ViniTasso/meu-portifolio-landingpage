# `compare_selector_metrics.py`

## O que faz

Compara duas sondas geradas por `probe_selector_metrics.py`.

## Quando usar

Quando a pergunta é “qual é a diferença real de métricas entre `raw/` e `site-refatorado/`?”.

## Comando mínimo

```bash
uv run python tools/parity/compare_selector_metrics.py --left raw.json --right refac.json
```

## Flags principais

- `--left`
- `--right`
- `--left-label`
- `--right-label`
- `--selector`
- `--output`

## Exemplo curto de saída

```text
selector: .hero[0] disparity=41.7 severity=medium
  bounding_box.height: 640 -> 592
  gap: 24px -> 16px
```
