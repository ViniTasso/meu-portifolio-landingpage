# `find_rule_overrides.py`

## O que faz

Mostra como um seletor muda na cascata ao longo dos arquivos CSS.

## Quando usar

Quando a pergunta é “como esta regra é sobrescrita ao longo do CSS?”.

## Comando mínimo

```bash
uv run python tools/css/find_rule_overrides.py .hero
```

## Flags principais

- `--root`
- `--max-results`
- `--summary-only`
- `--max-depth`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
timeline:
  clean/base.css:20 .hero
    additions: padding=32px
  clean/home.css:88 .hero
    overrides: padding: 32px -> 48px
```
