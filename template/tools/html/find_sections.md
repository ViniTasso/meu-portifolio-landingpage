# `find_sections.py`

## O que faz

Indexa landmarks, seções, IDs, `data-*`, mídia e wrappers de HTML.

## Quando usar

Quando a pergunta é “quais blocos importantes existem neste HTML?”.

Assuma que o shell já está dentro de `aidesign-kit-refatoracao-de-sites-python/` e que o bootstrap do kit já foi feito.

## Comando mínimo

```bash
uv run python tools/html/find_sections.py clean/index.html
```

Alias aceito para compatibilidade:

```bash
uv run python tools/html/find_sections.py --file clean/index.html
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
file: clean/index.html
  landmarks:
    line 12 header.site-header
  sections:
    line 40 section.hero data=data-scroll
```
