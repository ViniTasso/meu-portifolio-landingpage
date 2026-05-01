# `compare_scroll_steps.py`

## O que faz

Compara capturas em lote entre `raw/` e `site-refatorado/` e ranqueia gaps por viewport e passo.

## Quando usar

Quando você já tem lotes gerados por `capture_scroll_steps.py` e quer descobrir onde estão os maiores desvios visuais.

## Comando mínimo

```bash
uv run python tools/parity/compare_scroll_steps.py --left tools/artifacts/raw --right tools/artifacts/refac
```

Se cada lado tiver apenas um alvo capturado, a tool normaliza automaticamente o primeiro nível do lote. Se houver vários alvos no mesmo lote, compare a pasta específica do alvo correspondente em cada lado.

## Flags principais

- `--left`
- `--right`
- `--left-label`
- `--right-label`
- `--max-results`
- `--output`

## Exemplo curto de saída

```text
captures: 4
average_score: 18.2
top_step_gaps:
  home/1440x900 step=3 y=1800 score=27.4 mean=19.2 changed=39.8
```
