# `find_migration_issues.py`

## O que faz

Localiza padrões HTML que exigem cuidado na refatoração estrutural.

## Quando usar

Quando a pergunta é “o que aqui exige cuidado na migração?”.

## Comando mínimo

```bash
uv run python tools/html/find_migration_issues.py clean/index.html
```

## Flags principais

- `--root`
- `--max-results`
- `--max-depth`
- `--summary-only`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
issues: 3
results:
  inline-style clean/index.html:18 div.hero -> style=...
  duplicate-id clean/index.html:42 div.hero -> id repetido: hero
```
