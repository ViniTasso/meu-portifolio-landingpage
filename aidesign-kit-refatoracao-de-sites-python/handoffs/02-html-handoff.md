# Handoff 02 — HTML

## O que foi criado
- Estrutura Flask + Jinja2 em `modelos/jameswilliams.design/site-refatorado/`.
- Migração estrutural da página principal para `templates/index.html` preservando ordem dos blocos, wrappers e landmarks.
- Placeholderização em PT-BR de textos, imagens de conteúdo e dados comerciais.

## Páginas e Componentes Estruturais
| Caminho novo | Papel |
| --- | --- |
| `templates/base.html` | Casca global com head, CSS/JS e blocos Jinja |
| `templates/index.html` | Página principal migrada com seções hero/about/specialise/logos/latest/footer |

## Estrutura Flask / Jinja Criada
- `app.py`: rota `/` + rota dinâmica `/<name_page>` com 404 para template inexistente.
- `templates/base.html`: includes padrão de CSS/JS e metadados.
- `templates/index.html`: HTML migrado do `clean/index.html`, com wrappers e hooks estruturais preservados.
- `static/`:
  - `css/tokens.css`
  - `css/components/layout.css`
  - `js/main.js`
  - `assets/placeholders/` (favicon, logos, ícones, hero, capa de projeto)

## Wrappers, IDs e Hooks Preservados
- Wrappers principais preservados: `page-wrapper`, `main-wrapper`, `padding-global`, `container-large`, grids de seção e wrappers dos cards.
- IDs preservados: `about`, `projects`.
- Hooks `data-w-id` e atributos `data-*` relevantes mantidos nos blocos com papel de motion/scroll.
- Landmarks preservados: `role="banner"` na navbar e estrutura semântica por headers/section wrappers.

## Placeholderização Aplicada
- textos: copy e títulos traduzidos para PT-BR com placeholders (`[NOME]`, `Projeto [A-E]`, e-mail genérico).
- imagens: hero/profile/cards/logos migrados para SVG placeholders locais.
- vídeos: não há vídeo dedicado nesta etapa.
- blocos comerciais: nomes de marcas e identidade pessoal substituídos por placeholders.

## Manifesto Inicial de Assets
- assets mantidos porque já são usados:
  - `static/assets/placeholders/favicon.svg`
  - `static/assets/placeholders/logo-mark.svg`
  - `static/assets/placeholders/icon-mail.svg`
  - `static/assets/placeholders/icon-arrow.svg`
  - `static/assets/placeholders/hero-background.svg`
  - `static/assets/placeholders/profile.svg`
  - `static/assets/placeholders/project-cover.svg`
  - `static/assets/placeholders/logo-company.svg`
- placeholders criados: todos os assets acima.
- assets estruturais preservados: container Lottie e `data-src` original da animação de scroll.
- itens deliberadamente NÃO copiados do legado:
  - CSS legado de `clean/assets/css/*`
  - JS legado/Webflow de `clean/assets/js/*`
  - espelhamento bruto de `clean/assets/images`, `fonts`, `icons` e `models`

## Arquivos Criados ou Editados
- `modelos/jameswilliams.design/site-refatorado/pyproject.toml`
- `modelos/jameswilliams.design/site-refatorado/app.py`
- `modelos/jameswilliams.design/site-refatorado/templates/base.html`
- `modelos/jameswilliams.design/site-refatorado/templates/index.html`
- `modelos/jameswilliams.design/site-refatorado/static/css/tokens.css`
- `modelos/jameswilliams.design/site-refatorado/static/css/components/layout.css`
- `modelos/jameswilliams.design/site-refatorado/static/js/main.js`
- `modelos/jameswilliams.design/site-refatorado/static/assets/placeholders/*.svg`

## O que o Agente de CSS Precisa Saber
- componentes/seções principais: navbar, hero, about, specialise, logos, latest works, footer CTA.
- arquivos-chave do projeto novo: `templates/index.html`, `static/css/tokens.css`, `static/css/components/layout.css`.
- pontos estruturais delicados: classes Webflow-like e `data-w-id` foram mantidos para facilitar motion/paridade futura.

## Pendências Estruturais
- Integrar animações reais (GSAP/ScrollTrigger/Split-Type) na etapa JS sem reintroduzir bundles legados.
- Validar paridade visual final contra `raw/` após CSS/JS completos.
