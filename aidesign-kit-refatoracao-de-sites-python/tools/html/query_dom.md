# `query_dom.py`

## O que faz

Busca nós do HTML por seletor, atributo, texto ou tag e devolve contexto curto.

## Quando usar

Quando você precisa localizar rapidamente um bloco específico no DOM sem abrir o arquivo inteiro.

## Comando mínimo

```bash
uv run python tools/html/query_dom.py clean/index.html --selector ".hero .cta"
```

## Flags principais

- `--selector`
- `--attr`
- `--attr-value`
- `--text`
- `--tag`
- `--ancestor-depth`
- `--output`

## Exemplo curto de saída

```text
results: 1
clean/index.html:84 a.button.primary
  path: body > main > section.hero > a.button.primary
```
