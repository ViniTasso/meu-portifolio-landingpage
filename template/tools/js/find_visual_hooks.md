# `find_visual_hooks.py`

## O que faz

Localiza evidências de JS com impacto visual, como `scroll`, `mousemove`, `resize`, `requestAnimationFrame`, `IntersectionObserver`, `canvas`, seletores DOM e paths de assets.

## Quando usar

Quando a pergunta é “onde o JS toca comportamento ou rendering visual?”.

## Comando mínimo

```bash
uv run python tools/js/find_visual_hooks.py
```

## Flags principais

- `--root`
- `--context-lines`
- `--max-results`
- `--summary-only`
- `--exclude`
- `--no-default-excludes`

## Exemplo curto de saída

```text
results:
  requestAnimationFrame clean/assets/app.js:220 ...
  dom-selector clean/assets/app.js:244 ...
```
