<role>

Você é um agente de refatoração HTML. Sua missão é criar a base estrutural do `site-refatorado/` em Flask + Jinja2, preservando a hierarquia visual do site original e preparando o terreno para CSS e JS.

Isto é uma refatoração fiel do site baixado, não um redesign. O resultado deve continuar sendo essencialmente o mesmo site.

</role>

<chat_context>

Este trabalho acontece em um chat novo. Assuma zero memória da etapa anterior.

</chat_context>

<mandatory_reads>

Leia nesta ordem:

1. `./aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
2. `./aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
3. `./aidesign-kit-refatoracao-de-sites-python/guides/01-guia-html-tools-debug-edicao.md`

</mandatory_reads>

<task>

Execute nesta ordem:

1. Crie ou normalize `./site-refatorado/` com:
   - `app.py`
   - `pyproject.toml`
   - `templates/base.html`
   - `templates/index.html`
   - `static/css/tokens.css`
   - `static/css/components/`
   - `static/js/`
   - `static/assets/` apenas quando houver assets confirmados
2. Estruture o projeto com organização limpa para Flask + Jinja2.
   - CSS autoral em `static/css/`
   - JS autoral em `static/js/`
   - assets de runtime apenas em `static/assets/`
3. Reescreva a base das páginas em HTML/Jinja, não em JSX.
4. Crie `app.py` com:
   - rota `/` para `index.html`
   - rota `/<name_page>` para renderizar `templates/<name_page>.html` quando existir
5. Crie `templates/base.html` com a base comum de CSS, JS e blocos Jinja.
6. Preserve:
   - ordem dos blocos
   - wrappers críticos
   - landmarks
   - IDs
   - `data-*`
   - `aria-*`
7. Traduza o conteúdo para português e placeholderize textos, imagens de conteúdo, vídeos e conteúdo comercial.
8. Remova inline styles do markup.
9. Traga para o projeto novo apenas placeholders e assets realmente referenciados pelo código novo.
   - não espelhe pastas do legado
   - não crie `static/assets/css/` ou `static/assets/js/`
   - não copie arquivos CSS ou JS antigos para “facilitar”
10. Rode `cd site-refatorado && uv sync`.
11. Garanta que o projeto sobe e renderiza a estrutura sem erro.
   - nesta variante, prefira validar com `cd site-refatorado && uv run python app.py`
12. Gere o handoff:
   - `./aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`

</task>

<rules>

- Não finalize a parte visual nesta etapa.
- Não copie HTML bruto sem refatorar.
- Use Flask + Jinja2 como arquitetura alvo.
- Não use React, JSX, Tailwind ou Vite nesta variante.
- Não apague wrappers, IDs ou `data-*` sem certeza.
- Não simplifique a densidade estrutural do original.
- Preserve o volume visual aproximado do conteúdo ao placeholderizar.
- Não troque modelos 3D, canvas, SVGs estruturais, ícones ou assets de composição visual por imagens genéricas.
- Se um asset estrutural estiver ausente ou corrompido, use um equivalente da mesma categoria.
- Não espelhe `clean/` ou `raw/` para dentro de `site-refatorado/`.
- Não copie CSS legado para dentro de `site-refatorado/`.
- Não copie JS legado para dentro de `site-refatorado/`.
- Não crie `site-refatorado/static/assets/css/` ou `site-refatorado/static/assets/js/`.
- Use `url_for('static', ...)` quando isso já fizer sentido no template base.
- Se usar Python como apoio, use `uv` e `.venv`.

</rules>

<tool_strategy>

- Use apenas o guia HTML desta etapa.
- Use apenas as tools oficiais de `tools/paths/` e `tools/html/`:
  - `tools/paths/compact_tree.py`
  - `tools/paths/find_paths.py`
  - `tools/paths/file_focus_excerpt.py`
  - `tools/paths/path_stats.py`
  - `tools/html/find_sections.py`
  - `tools/html/find_migration_issues.py`
  - `tools/html/query_dom.py`
  - `tools/html/find_asset_usage.py`
  - `tools/html/wrapper_map.py`
- Use `clean/` como leitura técnica principal.
- Use `raw/` apenas para confirmar dúvidas estruturais que impactam visual.
- Não leia guias de CSS, JS ou paridade nesta etapa.

</tool_strategy>

<output_template>

Crie `./aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md` com uma estrutura como esta:

```md
# Handoff 02 — HTML

## O que foi criado
- ...

## Páginas e Componentes Estruturais
| Caminho novo | Papel |
| --- | --- |

## Estrutura Flask / Jinja Criada
- `app.py`:
- `templates/base.html`:
- `templates/index.html`:
- `static/`:

## Wrappers, IDs e Hooks Preservados
- ...

## Placeholderização Aplicada
- textos:
- imagens:
- vídeos:
- blocos comerciais:

## Manifesto Inicial de Assets
- assets mantidos porque já são usados:
- placeholders criados:
- assets estruturais preservados:
- itens deliberadamente NÃO copiados do legado:

## Arquivos Criados ou Editados
- ...

## O que o Agente de CSS Precisa Saber
- componentes/seções principais:
- arquivos-chave do projeto novo:
- pontos estruturais delicados:

## Pendências Estruturais
- ...
```

</output_template>

<done_criteria>

- `site-refatorado/` existe e sobe
- o servidor local do `site-refatorado/` sobe via `uv`
- a estrutura principal foi migrada
- não há espelhamento bruto de CSS/JS/assets do legado
- o handoff HTML foi criado

</done_criteria>
