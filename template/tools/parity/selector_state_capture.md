# `selector_state_capture.py`

## O que faz

Captura métricas e screenshots de componentes em estados como menu aberto, accordion expandido, tabs e overlays.

## Quando usar

Quando a paridade depende de estado interativo e você quer evidência curta por seletor.

## Comando mínimo

```bash
uv run python tools/parity/selector_state_capture.py http://localhost:4173 --selector .menu --state menu:.menu-toggle
```

Coloque entre aspas seletores e estados com `#`, `:`, `[` ou espaços.

## Flags principais

- `--selector`
- `--state`
- `--state-name`
- `--metrics-only`
- `--viewport`
- `--initial-wait-ms`
- `--padding`
- `--output`

## Exemplo curto de saída

```text
state: menu-open
selector: .menu matches=1 screenshots=1
```
