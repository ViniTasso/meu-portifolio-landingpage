# `path_stats.py`

## O que faz

Resume contagem, tamanho e hotspots por extensão ou por pasta.

## Quando usar

Quando você precisa localizar bundles pesados, diretórios inchados ou tipos de arquivo dominantes.

## Comando mínimo

```bash
uv run python tools/paths/path_stats.py clean --group-by ext
```

## Flags principais

- `--group-by`
- `--dir-depth`
- `--min-size`
- `--top-files`
- `--exclude`
- `--no-default-excludes`
- `--output`

## Exemplo curto de saída

```text
root: .
files: 128
size: 14.2 MB
groups:
  .js: files=18 size=4.8 MB
```
