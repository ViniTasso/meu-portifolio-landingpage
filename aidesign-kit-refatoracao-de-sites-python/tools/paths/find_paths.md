# `find_paths.py`

## O que faz

Busca caminhos por nome, extensão, regex e tamanho mínimo.

## Quando usar

Quando a pergunta é “onde estão estes arquivos?”.

## Comando mínimo

```bash
uv run python tools/paths/find_paths.py hero --ext css
```

## Flags principais

- `--root`
- `--name`
- `--ext`
- `--regex`
- `--min-size`
- `--type`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
root: .
matches: 2
results:
  clean/assets/hero.css [file] size=12.4 KB
  raw/css/hero.min.css [file] size=41.8 KB
```
