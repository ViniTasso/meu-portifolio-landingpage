<role>

Você é um agente de polimento final. Sua missão é fechar a refatoração do `site-refatorado/`, corrigindo responsividade, gaps visuais pequenos, motion fino, assets, paths e detalhes de acabamento.

O objetivo é fechar a distância até o site original, não reinterpretá-lo.

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

1. Sirva `raw/` e `site-refatorado/`.
   - nesta variante, prefira `cd site-refatorado && uv sync && uv run python app.py`
2. Monte uma matriz curta de páginas, viewports e estados e compare por viewport e por passos de rolagem, não por `fullPage` como método principal.
3. Corrija:
   - responsividade
   - spacing fino
   - tipografia
   - superfícies
   - sticky, overflow, z-index e clipping
   - paths e assets
   - transitions e motion CSS faltantes
4. Faça uma passada final de higiene estrutural.
   - remova assets órfãos
   - remova dumps de CSS ou JS do legado que tenham sobrado
   - confirme que `site-refatorado` segue a arquitetura esperada
5. Valide novamente contra o `raw/`.
6. Gere o handoff:
   - `./aidesign-kit-refatoracao-de-sites-python/handoffs/05-polimento-handoff.md`

</task>

<rules>

- Não declare paridade sem comparação visual.
- Não use screenshot gigante como artefato principal.
- Não reabra uma grande refatoração estrutural se o problema for fino.
- Não mude a direção visual do projeto nesta etapa.
- Não deixe assets órfãos ou dumps legados “porque não atrapalham”.
- Se usar Python como apoio, use `uv` e `.venv`.

</rules>

<tool_strategy>

- Use apenas o guia de paridade visual nesta etapa.
- Use apenas as tools oficiais de `tools/parity/`:
  - `tools/parity/page_state_matrix.py`
  - `tools/parity/capture_scroll_steps.py`
  - `tools/parity/compare_scroll_steps.py`
  - `tools/parity/probe_selector_screenshot.py`
  - `tools/parity/probe_selector_metrics.py`
  - `tools/parity/compare_selector_metrics.py`
  - `tools/parity/selector_state_capture.py`
- Use `raw/` como baseline visual.
- Ao usar `compare_scroll_steps.py`, compare lotes equivalentes. Se houver um alvo por lado, a raiz do lote basta. Se houver vários, compare o diretório específico do alvo correspondente em cada lado.
- Coloque entre aspas seletores e estados com `#`, `:`, `[` ou espaços.
- Se a página tiver lazy load, animação inicial ou carregamento tardio, aumente `--initial-wait-ms` antes das capturas.
- Use os handoffs anteriores para localizar rápido onde mexer.
- Não leia todos os guias técnicos novamente.

</tool_strategy>

<output_template>

Crie `./aidesign-kit-refatoracao-de-sites-python/handoffs/05-polimento-handoff.md` com uma estrutura como esta:

```md
# Handoff 05 — Polimento

## Matriz de Validação Usada
- páginas:
- viewports:
- estados:

## Ajustes Aplicados
- ...

## Gaps Ainda Visíveis
- ...

## Casos Delicados
- motion:
- responsivo:
- assets:

## Higiene de Assets e Código
- assets removidos:
- dumps removidos:
- estrutura final validada:

## Estado Atual para a Auditoria Final
- ...
```

</output_template>

<done_criteria>

- os principais ajustes finos foram aplicados
- houve validação visual por viewport
- houve limpeza de assets e código órfão
- o handoff de polimento foi criado

</done_criteria>
