# `compact_tree.py`

## O que faz

Mostra uma árvore compacta de pastas e arquivos com pouco contexto.

## Quando usar

Quando a pergunta é “como esta pasta está organizada?”.

Assuma que o shell já está dentro de `aidesign-kit-refatoracao-de-sites-python/` e que o bootstrap do kit já foi feito.

## Comando mínimo

```bash
uv run python tools/paths/compact_tree.py
```

Você também pode passar uma subpasta como argumento posicional:

```bash
uv run python tools/paths/compact_tree.py clean --max-depth 3
```

## Flags principais

- `--root`
- `--max-depth`
- `--max-results`
- `--dirs-only`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
root: .
summary:
  dirs: 4
  files: 12
tree:
  clean/
    index.html
    assets/
```
