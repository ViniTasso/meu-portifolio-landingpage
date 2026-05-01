# Guia JS — Tools, Debug, Leitura e Edição

Use este guia quando a etapa principal for comportamento visual.

## Natureza do trabalho

Esta etapa não inventa novas interações.

Ela recria motion, transições, timing e comportamento do site baixado para que o refatorado continue parecendo o mesmo produto.

## Bootstrap desta etapa

Assuma que você já rodou o bootstrap do `00-contexto-compartilhado.md` e já está dentro de `aidesign-kit-refatoracao-de-sites-python/`.

## Fonte de verdade para JS

- leitura técnica: `./clean/`
- execução visual mais fiel: `./raw/`

## Escopo desta etapa

- mapear motion e interações
- separar bundle misto de código autoral
- localizar hooks de DOM e assets dirigidos por script
- reescrever comportamento em módulos legíveis
- preencher `site-refatorado/static/js/` sem arrastar lixo do legado

## Tools oficiais desta etapa

Use apenas `tools/js/`.

- `find_visual_hooks.py`: sinais gerais de JS com impacto visual
- `bundle_boundary_scan.py`: zonas prováveis de runtime, assets e código autoral
- `find_dom_bindings.py`: cruza seletores do JS com HTML real
- `find_asset_references.py`: imagens, vídeos, JSON, modelos, shaders e afins
- `find_scroll_timeline_clues.py`: scrub, pinning, thresholds, geometry e timelines

## Ordem recomendada

1. rode `find_visual_hooks.py`
2. use `find_asset_references.py` para localizar assets dirigidos por script
3. rode `bundle_boundary_scan.py` nos bundles grandes
4. use `find_dom_bindings.py` para validar hooks contra o HTML real
5. use `find_scroll_timeline_clues.py` para separar o que depende de rolagem
6. reescreva só o comportamento visível e relevante
7. valide contra o `raw/`

## Regras de refatoração

- não copie bundle minificado
- separe biblioteca de código autoral
- preserve IDs e `data-*` dos quais o comportamento depende
- descarte tracking e analytics
- mantenha cleanup e módulos pequenos
- se uma lib visual conhecida existir no legado, prefira CDN no `templates/base.html` em vez de arquivo local bruto
- mantenha em `static/js/` apenas o código autoral refatorado do projeto
- nunca crie `site-refatorado/static/assets/js/`
- se um trecho do legado for necessário, extraia a lógica mínima e reescreva em módulo novo
- qualquer asset dirigido por JS deve permanecer apenas se estiver realmente referenciado pelo código novo

## Handoff desta etapa

Ao terminar a etapa JS, gere:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/04-js-handoff.md`

Inclua:

- bibliotecas escolhidas
- interações implementadas
- mapa seção -> módulo ou hook
- assets e runtimes visuais usados
- arquivos JS legados descartados
- seletores e `data-*` dos quais o JS depende
- gaps de motion ainda visíveis

## Antipadrões

- misturar tracking com motion
- portar blob minificado inteiro
- copiar vários arquivos JS do legado “porque funcionam”
- reescrever tudo em um arquivo gigante
- usar só leitura de código do `clean/` e ignorar o comportamento real do `raw/`
