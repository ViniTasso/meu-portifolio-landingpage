# `file_focus_excerpt.py`

## O que faz

Mostra um trecho curto e focado de um arquivo por linha, range, texto ou regex.

## Quando usar

Quando você quer ler só o miolo útil de um arquivo sem abrir o conteúdo bruto inteiro.

Assuma que o shell já está dentro de `aidesign-kit-refatoracao-de-sites-python/` e que o bootstrap do kit já foi feito.

## Comando mínimo

```bash
uv run python tools/paths/file_focus_excerpt.py clean/index.html --query hero
```

Aliases aceitos para compatibilidade:

```bash
uv run python tools/paths/file_focus_excerpt.py --file clean/index.html --lines 40-80
```

## Flags principais

- `--query`
- `--regex`
- `--line`
- `--start-line`
- `--end-line`
- `--lines`
- `--file`
- `--before`
- `--after`
- `--output`

## Exemplo curto de saída

```text
file: clean/index.html
total_lines: 420
excerpt 1: lines 78-86 focus=82 reason=query:hero
>82 | <section class="hero">
```
