# `link_html_css.py`

## O que faz

Cruza um alvo do HTML com as regras CSS que o atingem.

## Quando usar

Quando a pergunta é “quais regras CSS atingem esta classe, ID ou seção do HTML?”.

## Comando mínimo

```bash
uv run python tools/css/link_html_css.py .hero --html clean/index.html
```

## Flags principais

- `--root`
- `--html`
- `--css`
- `--max-results`
- `--summary-only`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
html: clean/index.html targets=1 css_matches=2
  .hero -> clean/assets/site.css:88
    props: display: grid, gap: 24px
```
