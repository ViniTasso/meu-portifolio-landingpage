# Handoff 02 — HTML

## O que foi criado
- Estrutura inicial completa de `site-refatorado/` em Flask + Jinja2.
- Migração estrutural da página principal para `templates/index.html`, com preservação de landmarks e IDs críticos.
- Base de estilos autorais em `static/css/` e JS modular em `static/js/`.
- Tradução para português com placeholderização de conteúdo comercial/editorial.

## Páginas e Componentes Estruturais
| Caminho novo | Papel |
| --- | --- |
| `site-refatorado/templates/base.html` | Layout base Jinja, includes de CSS/JS e bloco de conteúdo |
| `site-refatorado/templates/index.html` | Estrutura principal da landing page com header, main por seções, footer e menus mobile |

## Estrutura Flask / Jinja Criada
- `app.py`: rota `/` para `index.html` e rota dinâmica `/<name_page>` que renderiza `templates/<name_page>.html` quando existir.
- `templates/base.html`: esqueleto HTML + blocos Jinja (`title`, `body_class`, `content`) + assets via `url_for('static', ...)`.
- `templates/index.html`: árvore estrutural principal preservando ordem de seções e hooks.
- `static/`:
  - `css/tokens.css`: tokens de cor, espaçamento e sizing.
  - `css/components/layout.css`: layout base responsivo para header, seções, cards, CTA e menu mobile.
  - `js/main.js`: abertura/fechamento dos wrappers de menu mobile.

## Wrappers, IDs e Hooks Preservados
- Landmarks: `header#BASE44_HEADER`, `main#PAGE_SECTIONSc1dmp`, `footer#comp-mok06rba`.
- Wrappers principais: `#SITE_CONTAINER`, `#main_MF`, `#site-root`, `#masterPage`, `#SITE_PAGES`, `#SITE_PAGES_TRANSITION_GROUP`, `#c1dmp`.
- Seções preservadas em ordem: `#comp-m28o2bbb`, `#comp-mkfg5rtb`, `#comp-mkfmbp8m`, `#comp-mkfn6wz6`, `#comp-mkkxum1d`, `#comp-mkla53qm`, `#comp-mknvgyk7`, `#comp-mknu6y0a`.
- Hooks e dados preservados nos blocos principais: `data-main-content-parent`, `data-block-level-container`, `data-hook="bgLayers"`, `data-motion-part`, além de `aria-*` e `role` nos elementos de navegação/diálogo.

## Placeholderização Aplicada
- textos: todo o conteúdo comercial foi traduzido para português com copy placeholder equivalente em volume.
- imagens: substituídas por blocos visuais (`.placeholder-media`) com volume de mídia semelhante.
- vídeos: não havia necessidade de vídeo funcional nesta primeira base; reservado para etapa JS/paridade.
- blocos comerciais: hero, benefícios, vitrine de prompts, pricing, FAQ e sendoff convertidos para placeholders sem perder hierarquia.

## Manifesto Inicial de Assets
- assets mantidos porque já são usados: nenhum arquivo binário legado foi copiado nesta etapa.
- placeholders criados: placeholders visuais em CSS (`.placeholder-media`) e textos comerciais em PT-BR.
- assets estruturais preservados: estrutura de wrappers/IDs/data-hooks que sustentam o comportamento visual.
- itens deliberadamente NÃO copiados do legado: bundles JS minificados, CSS legado fragmentado, runtime Wix/Thunderbolt e qualquer espelhamento de `clean/assets/`.

## Arquivos Criados ou Editados
- `modelos/base44.com/site-refatorado/pyproject.toml`
- `modelos/base44.com/site-refatorado/app.py`
- `modelos/base44.com/site-refatorado/templates/base.html`
- `modelos/base44.com/site-refatorado/templates/index.html`
- `modelos/base44.com/site-refatorado/static/css/tokens.css`
- `modelos/base44.com/site-refatorado/static/css/components/layout.css`
- `modelos/base44.com/site-refatorado/static/js/main.js`

## O que o Agente de CSS Precisa Saber
- componentes/seções principais: header sticky, hero, separador, bloco de benefícios (4 cards), showcase de prompt, pricing, FAQ e sendoff.
- arquivos-chave do projeto novo: `templates/index.html`, `static/css/tokens.css`, `static/css/components/layout.css`.
- pontos estruturais delicados: manter IDs/hierarquia dos wrappers `comp-*`, preservar wrappers de `bgLayers/bgMedia` e os dois overlays mobile (`comp-kd5px9q0-*` e `comp-mok06b5e-*`).

## Pendências Estruturais
- Refino fino de fidelidade visual (tipografia, espaçamentos exatos, motion e estados de hover).
- Ajuste de componentes ricos (dropdowns de navegação e accordion FAQ com transições).
- Validação de execução local via `uv` ficou pendente nesta sessão por indisponibilidade do shell PowerShell (`pwsh`).

