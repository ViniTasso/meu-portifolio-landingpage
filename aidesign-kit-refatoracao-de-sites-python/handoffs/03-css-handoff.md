# Handoff 03 — CSS

## Tokens Criados
- cores:
  - `--color-page: #faf9f7`
  - `--color-surface: #ffffff`
  - `--color-ink: #0f0f0f`
  - `--color-border: #e6e6e6`
  - `--color-lime: #ebffb1`
  - `--color-orange: #ff983b`
  - gradientes: `--hero-bg`, `--separator-bg`, `--sendoff-bg`
- fontes:
  - `--font-base: "wix-madefor-text-v2", "Madefor-Text", ...`
  - `--font-display: "Madefor-Display", "wix-madefor-text-v2", ...`
- spacing:
  - `--space-1..--space-7`
  - `--header-height`, `--header-inner-height`, `--header-margin`
- radius:
  - `--radius-pill: 100px`
  - `--radius-card: 10px`
  - `--radius-menu: 16px`
- shadow:
  - sem shadow estrutural fixo; uso focado em gradientes/superfícies planas
- breakpoints:
  - `--bp-md: 768px`
  - `--bp-lg: 1100px`
  - `--bp-xl: 1440px`

## Arquivos de Estilo
| Caminho | Papel |
| --- | --- |
| `site-refatorado/static/css/tokens.css` | Variáveis de tema (cores, tipografia, espaçamento, breakpoints, durations/easing) |
| `site-refatorado/static/css/style.css` | Base global (reset, tipografia, grids, cards, spacing macro) |
| `site-refatorado/static/css/components/layout.css` | Header/nav/CTAs/menu mobile e estrutura de componentes básicos |
| `site-refatorado/static/css/components/sections.css` | Estilo por seção (`hero`, separador, cards, prompt, pricing, FAQ, sendoff) |
| `site-refatorado/static/css/components/motion.css` | Keyframes e transitions visuais (fade/grow/hover) |

## Integração Flask / Templates
- css carregado em `templates/base.html`:
  - `css/tokens.css`
  - `css/style.css`
  - `css/components/layout.css`
  - `css/components/sections.css`
  - `css/components/motion.css`
- folhas principais em `static/css/`:
  - `tokens.css`
  - `style.css`
- folhas por seção em `static/css/components/`:
  - `layout.css`
  - `sections.css`
  - `motion.css`

## Mapa Seção -> Estilo
| Seção/componente | Arquivo principal |
| --- | --- |
| `#BASE44_HEADER`, `.brcTpl`, navegação desktop/mobile | `components/layout.css` |
| `#comp-m28o2bbb` (hero) | `components/sections.css` |
| `#comp-mkfg5rtb` (separador gradiente) | `components/sections.css` |
| `#comp-mkfn6wz6` (cards/benefícios) | `components/sections.css` + `style.css` |
| `#comp-mkkxum1d` (prompt section) | `components/sections.css` + `components/motion.css` |
| `#comp-mkla53qm` (pricing) | `components/sections.css` |
| `#comp-mknvgyk7` (FAQ) | `style.css` + `components/sections.css` |
| `#comp-mknu6y0a` (sendoff) | `components/sections.css` + `components/motion.css` |

## Keyframes, Media Queries e Estados Importantes
- keyframes:
  - `loop-hover`
  - `fade-in`
  - `circle-grow-in`
  - `box-grow`
- media queries principais:
  - `max-width: 767px`
  - `max-width: 1000px`
  - `max-width: 1099px`
  - `min-width: 768px`
  - `min-width: 1100px`
  - `min-width: 1001px and max-width: 1440px`
- estados:
  - hover/transition em CTAs (`.Bjhfa6`, `.DPAltb`)
  - entrada visual no sendoff (`fade-in`, `box-grow`)
  - redução de movimento via `prefers-reduced-motion`

## Fontes e Assets Visuais Mantidos
- fontes:
  - stack com `wix-madefor-text-v2` + fallback local (sem cópia de bundle legado)
- assets:
  - não foi necessário manter/copiar binários locais para CSS nesta etapa

## Itens Visuais Descartados
- css legado não copiado:
  - `clean/assets/css/styles*.css`, `style_*.css`, `important.css`, `keyframes.css`, `medias/base_medias.css` não foram despejados no projeto novo
- assets órfãos removidos:
  - nenhum em `site-refatorado/static/` (não havia assets visuais binários referenciados)

## O que o Agente de JS Precisa Saber
- classes, wrappers ou estados relevantes:
  - `#comp-kd5px9q0-pinned-layer` e `#comp-mok06b5e-pinned-layer` continuam sendo overlays do menu mobile
  - breakpoints operacionais do header/menu: `1100px`
  - `#main_MF` usa offset de header via `padding-top: var(--header-height)`
- partes visuais que dependem de JS:
  - abertura/fechamento dos overlays mobile
  - possíveis animações de classe para navegação (se for evoluir dropdown/menu)

## Gaps Visuais Restantes
- ainda há simplificações em componentes ricos do original (dropdowns complexos do header e detalhes de microinteração da navegação Wix).
- validação automatizada por toolchain Python (`uv run tools/css/*`) não foi executada nesta sessão por indisponibilidade de `pwsh` no ambiente.
