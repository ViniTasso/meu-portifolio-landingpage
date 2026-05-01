# `probe_selector_metrics.py`

## O que faz

Mede métricas reais de blocos específicos no browser.

## Quando usar

Quando a pergunta é “como este seletor está renderizando de fato?”.

## Comando mínimo

```bash
uv run python tools/parity/probe_selector_metrics.py http://localhost:4173 --selector .hero
```

Coloque o seletor entre aspas quando ele tiver `#`, `:`, `[` ou espaços.

## Flags principais

- `--selector`
- `--viewport`
- `--initial-wait-ms`
- `--state`
- `--all-matches`
- `--max-results`
- `--output`
- `--headed`

## Exemplo curto de saída

```text
state: click:.menu-toggle
selector: .hero matches=1
  [0] main > section.hero
    box: x=0 y=120 w=1280 h=640
```
