# Guia de Paridade Visual — Viewports, Estados e Evidência

Use este guia quando a etapa principal for comparar resultado visual e comportamental.

## Natureza do trabalho

A paridade deve validar se o refatorado continua sendo essencialmente o mesmo site do `raw/`, não apenas um site “parecido”.

## Bootstrap desta etapa

Assuma que você já rodou o bootstrap do `00-contexto-compartilhado.md`, já está dentro de `aidesign-kit-refatoracao-de-sites-python/` e já instalou o Chromium do Playwright quando necessário.

## Fonte de verdade

- referência visual absoluta: `./raw/`
- apoio técnico de leitura: `./clean/`
- projeto alvo: `./site-refatorado/`

Sirva o `site-refatorado/` com o comando local compatível com a stack realmente presente no projeto.

Nesta variante Python, o caminho preferido é:

```bash
cd site-refatorado
uv sync
uv run python app.py
```

## Regra principal

Não use screenshot de página inteira como método principal.

O fluxo principal deve trabalhar com:

- screenshots por viewport
- passos fixos de rolagem
- métricas computadas
- bounding box
- recorte por seletor
- comparação por estado

## Tools oficiais desta etapa

Use apenas `tools/parity/`.

- `capture_scroll_steps.py`: captura por viewport e passos de rolagem
- `probe_selector_metrics.py`: métricas computadas de blocos reais
- `compare_selector_metrics.py`: diferenças por propriedade
- `probe_selector_screenshot.py`: recorte isolado por seletor
- `compare_scroll_steps.py`: ranking de gaps entre lotes
- `selector_state_capture.py`: estado de menu, accordion, tab, overlay e similares
- `page_state_matrix.py`: matriz de páginas, viewports e estados

## Método recomendado

1. monte a matriz com `page_state_matrix.py`
2. capture os lotes com `capture_scroll_steps.py`
3. compare os lotes com `compare_scroll_steps.py`
   - quando cada lado tiver só um alvo capturado, você pode apontar para a raiz do lote de cada lado
   - quando houver mais de um alvo no mesmo lote, compare o diretório específico do alvo correspondente em cada lado
4. quando precisar isolar um bloco, use `probe_selector_screenshot.py`
5. quando precisar medir um bloco, use `probe_selector_metrics.py`
6. quando precisar comparar um estado, use `selector_state_capture.py`
7. use `compare_selector_metrics.py` para confirmar discrepâncias por propriedade

## Regras práticas de CLI

- coloque entre aspas seletores e estados que tenham `#`, `[`, `]`, `:` ou espaços
- quando a página tiver lazy load, animação de entrada ou carregamento assíncrono, use `--initial-wait-ms 5000` ou mais antes das capturas
- exemplos seguros:
  - `--selector '#menu-handler'`
  - `--selector '.menu-holder__nav'`
  - `--state 'menu:#menu-handler'`

## O que procurar

- largura e altura diferentes
- spacing diferente
- tipografia diferente
- cor diferente
- radius e shadow diferentes
- alinhamento diferente
- overflow e clipping diferentes
- sticky e comportamento de scroll diferentes

## Checagem rápida de higiene do projeto novo

Mesmo quando a paridade visual estiver boa, valide também:

- se o projeto novo não ganhou dumps de CSS ou JS antigo fora da arquitetura esperada
- se não existem diretórios espelhados do legado dentro de `site-refatorado/static/assets/`
- se os assets restantes ainda são realmente referenciados pelo HTML, CSS e JS novos

## Matrizes mínimas

### Viewports

- `1440x900`
- `1280x800`
- `768x1024`
- `390x844`

### Estados

- topo inicial
- sequência por viewport
- menus, accordions, tabs e overlays
- checkpoints de motion quando necessário

## Handoffs desta etapa

Etapa 5 gera:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/05-polimento-handoff.md`
  - incluindo limpeza de assets órfãos e dumps legados

Etapa 6 gera:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/06-contexto-problemas-paridade.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/06-prompt-correcao-final.md`

## Antipadrões

- usar `clean/` como baseline visual
- confiar só em leitura de código
- usar screenshot gigante como artefato principal
- corrigir antes de localizar viewport, passo ou estado do gap
