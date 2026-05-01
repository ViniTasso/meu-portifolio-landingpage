# `find_dom_bindings.py`

## O que faz

Extrai seletores do JS e cruza com o HTML real para ver o que existe, o que não existe e onde bate.

## Quando usar

Quando você quer validar se hooks de DOM do JS continuam válidos depois de uma migração estrutural.

## Comando mínimo

```bash
uv run python tools/js/find_dom_bindings.py clean/assets/js --html clean/index.html
```

## Flags principais

- `--html`
- `--missing-only`
- `--max-results`
- `--output`

## Exemplo curto de saída

```text
selector: .menu-toggle html_matches=1 kinds=querySelector=2
  sources: clean/assets/js/main.js:88
```
