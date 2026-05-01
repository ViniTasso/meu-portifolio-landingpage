# Handoff 03 — CSS

## Tokens Criados
- cores: `#1a1a1a`, `#1d1d1d`, `#191919`, `#fffcfc`, `#c7c7c7`, `#c2c2c2`, `#353535`, `#2b2b2b`, `#f9dad9`, `#fdd6d5`, `#4d65ff`
- fontes: `Inter` (Google Fonts) e `Larsseit` (`300/400/500/700/800`)
- spacing: escala `--space-1` até `--space-10`
- radius: `--radius-xs/sm/md/lg/pill`
- shadow: `--shadow-nav`, `--shadow-title`
- breakpoints: `max-width: 991px`, `767px`, `479px` e `min-width: 1359px`
- motion tokens: durations `0.2s/0.3s/0.7s`, easing `ease` e `cubic-bezier(0.455, 0.03, 0.515, 0.955)`

## Arquivos de Estilo
| Caminho | Papel |
| --- | --- |
| `static/css/tokens.css` | Design tokens, `@font-face` e variáveis globais |
| `static/css/style.css` | Base global (reset, tipografia base, wrappers, utilitários) |
| `static/css/components/navbar.css` | Navbar sticky e elementos de topo |
| `static/css/components/hero.css` | Hero, overlays, CTA e bloco Lottie |
| `static/css/components/sections.css` | About, specialise e logos |
| `static/css/components/latest.css` | Lista de cases sticky e cards de projetos |
| `static/css/components/footer.css` | Footer hero, CTA final e botão secundário |
| `static/css/components/motion.css` | Keyframes e estados visuais (`.dark/.light`) |

## Integração Flask / Templates
- css carregado em `templates/base.html`: `tokens.css`, `style.css` e arquivos em `components/*.css`
- folhas principais em `static/css/`: `tokens.css`, `style.css`
- folhas por seção em `static/css/components/`: `navbar.css`, `hero.css`, `sections.css`, `latest.css`, `footer.css`, `motion.css`

## Mapa Seção -> Estilo
| Seção/componente | Arquivo principal |
| --- | --- |
| Navbar | `components/navbar.css` |
| Hero + color filter | `components/hero.css` |
| About/Specialise/Logos | `components/sections.css` |
| Latest work/cards | `components/latest.css` |
| Footer CTA | `components/footer.css` |
| Estados animados + keyframes | `components/motion.css` |

## Keyframes, Media Queries e Estados Importantes
- keyframe: `@keyframes spin`
- media queries aplicadas: `max-width: 991px`, `767px`, `479px`, `min-width: 1359px`
- estados relevantes:
  - `.latest_case-wrapper.dark` e `.latest_case-wrapper.light`
  - transições em `.latest_case-wrapper`, `.cta-button`, `.button.is-secondary.is-v2`, `.navbar_logo`, `.link-block`

## Fontes e Assets Visuais Mantidos
- fontes mantidas e referenciadas:
  - `static/assets/fonts/Larsseit-Light.otf`
  - `static/assets/fonts/Larsseit.otf`
  - `static/assets/fonts/Larsseit-Medium.otf`
  - `static/assets/fonts/Larsseit-Bold.otf`
  - `static/assets/fonts/Larsseit-ExtraBold.otf`
- placeholders visuais já usados no HTML e mantidos em `static/assets/placeholders/`

## Itens Visuais Descartados
- css legado não copiado:
  - todos os arquivos `clean/assets/css/*` permaneceram fora de `site-refatorado/`
- assets órfãos removidos:
  - `static/css/components/layout.css` (substituído pela estrutura modular de CSS)

## O que o Agente de JS Precisa Saber
- classes, wrappers ou estados relevantes:
  - `hero_*`, `about_*`, `specialise_*`, `latest_*`, `footer_*`, `.color-filter`
  - estados de contraste dos cards: `.latest_case-wrapper.dark` / `.latest_case-wrapper.light`
- partes visuais que dependem de JS:
  - `data-w-id` e `data-*` no HTML foram preservados para animações de entrada/scroll
  - blocos sticky (`navbar`, `latest_case-wrapper`, `latest_title`) já têm base CSS pronta para parallax/scroll orchestration

## Gaps Visuais Restantes
- o motion temporal (fade/translate no scroll) ainda depende da etapa JS para atingir paridade total com o `raw/`
- placeholders de conteúdo continuam intencionais (etapa HTML), mantendo estrutura e volume visual
