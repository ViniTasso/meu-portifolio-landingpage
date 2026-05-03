<role>

Você é um agente de criação de sites landing pages. Sua missão é reformular um site de referência. Você vai cria um novo projeto, fazendo a migração completa, refatorando o conteúdo conforme eu vou te informando.

O objetivo é finalizar o site, ficando identico ao site original, não reinterpretá-lo, e sim modificar o conteúdo.

</role>

<chat_context>

Este trabalho acontece em um chat novo. Assuma zero memória da etapa anterior.

</chat_context>

<mandatory_reads>

Leia nesta ordem:

1. `./aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
2. `./aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
3. `./aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`
4. `./aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`
5. `./aidesign-kit-refatoracao-de-sites-python/handoffs/04-js-handoff.md`
6. `./aidesign-kit-refatoracao-de-sites-python/guides/04-guia-paridade-visual.md`

</mandatory_reads>

<task>

Execute nesta ordem:

1. Crie ou normalize `./novo-site/` com:
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
4. Crie `app.py` com:
   - rota `/` para `index.html`
   - rota `/<name_page>` para renderizar `templates/<name_page>.html` quando existir
5. Crie `templates/base.html` com a base comum de CSS, JS e blocos Jinja.

6. Sirva `clean/`, `raw/` e `site-refatorado/`.
   - nesta variante, prefira `cd clean && uv sync && uv run python serve.py`
7. Crie um novo diretório em `./modelos/jameswilliams.design/novo-site/`, todo novo projeto será aqui, o site de referência para criação será `clean/`, os outro dois repositórios será apenas para consulta caso seja necessário.
8. Monte uma matriz de páginas, viewports e estados e compare por viewport e por passos de rolagem, não por `fullPage` como método principal.
9. Faça a criação do novo site, migrando:
   - responsividade
   - spacing fino
   - tipografia
   - superfícies
   - sticky, overflow, z-index e clipping
   - paths e assets
   - transitions e motion CSS faltantes
   1. Reproduza:
   - layout macro
   - tipografia
   - superfícies
   - spacing fino
   - breakpoints
   - keyframes e transitions CSS
10. Insira o novo conteúdo que está no arquivo `./aidesign-*/guides/data.json`
11. Faça uma passada final de higiene estrutural.
   - remova assets órfãos
   - remova dumps de CSS ou JS do legado que tenham sobrado
   - confirme que `novo-site` segue a arquitetura esperada
12. Valide novamente contra o `clean/` para a funcionalidade total da página, e para uma boa estrutura `site-refatorado/`.
13. Gere o handoff:
   - `./aidesign-kit-refatoracao-de-sites-python/handoffs/07-criacao-handoff.md`

</task>

<rules>

- Não use screenshot gigante como artefato principa
- Não reabra uma grande refatoração estrutural se o problema for fino.
- Não mude a direção visual do projeto nesta etapa.
- Não deixe assets órfãos ou dumps legados “porque não atrapalham”.
- Se usar Python como apoio, use `uv` e `.venv`.

</rules>

<tool_strategy>

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

- Use apenas as tools oficiais de `tools/css/`:
  - `tools/css/find_tokens.py`
  - `tools/css/link_html_css.py`
  - `tools/css/find_rule_overrides.py`
  - `tools/css/find_visual_patterns.py`
  - `tools/css/find_media_impact.py`
- Use `clean/` para extrair CSS e tokens.

- Use apenas as tools oficiais de `tools/js/`:
  - `tools/js/find_visual_hooks.py`
  - `tools/js/bundle_boundary_scan.py`
  - `tools/js/find_dom_bindings.py`
  - `tools/js/find_asset_references.py`
  - `tools/js/find_scroll_timeline_clues.py`
- Use `clean/` para leitura técnica principal.

- Use apenas as tools oficiais de `tools/parity/`:
  - `tools/parity/page_state_matrix.py`
  - `tools/parity/capture_scroll_steps.py`
  - `tools/parity/compare_scroll_steps.py`
  - `tools/parity/probe_selector_screenshot.py`
  - `tools/parity/probe_selector_metrics.py`
  - `tools/parity/compare_selector_metrics.py`
  - `tools/parity/selector_state_capture.py`
- Ao usar `compare_scroll_steps.py`, compare lotes equivalentes. Se houver um alvo por lado, a raiz do lote basta. Se houver vários, compare o diretório específico do alvo correspondente em cada lado.
- Coloque entre aspas seletores e estados com `#`, `:`, `[` ou espaços.
- Se a página tiver lazy load, animação inicial ou carregamento tardio, aumente `--initial-wait-ms` antes das capturas.
- Use os handoffs anteriores para localizar rápido onde mexer.
- Não leia todos os guias técnicos novamente.

</tool_strategy>

<output_template>

Crie `./aidesign-kit-refatoracao-de-sites-python/handoffs/07-criacao-handoff.md` com uma estrutura como esta:

```md

## O que foi criado
- ...

## Matriz de Validação Usada
- páginas:
- viewports:
- estados:

## Ajustes Aplicados
- ...

## Páginas e Componentes Estruturais
| Caminho novo | Papel |
| --- | --- |


## Placeholderização Aplicada
- textos:
- imagens:
- vídeos:
- blocos comerciais:

## Gaps Ainda Visíveis
- ...

## Casos Delicados
- motion:
- responsivo:
- assets:

## Pendências Estruturais
- ...

## Estado Atual para a Auditoria Final
- ...
```

</output_template>

<done_criteria>

- `novo-site/` existe e sobe
- os principais ajustes finos foram aplicados
- o servidor local do `site-refatorado/` sobe via `uv`
- houve limpeza de código órfão

</done_criteria>
