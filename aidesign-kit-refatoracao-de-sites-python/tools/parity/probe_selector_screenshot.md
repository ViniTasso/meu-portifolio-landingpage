# `probe_selector_screenshot.py`

## O que faz

Faz screenshot recortado do elemento alvo, com padding opcional e suporte a estado.

## Quando usar

Quando você precisa comparar um bloco isolado sem carregar uma captura de viewport inteira.

## Comando mínimo

```bash
uv run python tools/parity/probe_selector_screenshot.py http://localhost:4173 --selector .hero
```

Coloque o seletor entre aspas quando ele tiver `#`, `:`, `[` ou espaços.

## Flags principais

- `--selector`
- `--viewport`
- `--initial-wait-ms`
- `--padding`
- `--state`
- `--all-matches`
- `--output`

## Exemplo curto de saída

```text
target: http://localhost:4173
output: .../tools/artifacts/probe_selector_screenshot/localhost-4173/1440x900/default
selector: .hero matches=1 shots=1
```
