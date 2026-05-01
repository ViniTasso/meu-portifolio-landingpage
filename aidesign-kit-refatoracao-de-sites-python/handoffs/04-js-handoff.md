# Handoff 04 — JS

## Bibliotecas e Runtimes Escolhidos
- Nenhuma lib JS externa foi adicionada nesta etapa.
- Runtime Wix/Thunderbolt do legado foi descartado no projeto novo.

## Interações Implementadas
| Seção/componente | Comportamento | Arquivo novo |
| --- | --- | --- |
| Header mobile (`#mobile-menu-trigger`, overlays `#comp-kd5px9q0-pinned-layer` e `#comp-mok06b5e-pinned-layer`) | abertura/fechamento, `aria-expanded`, fechamento por botão/overlay/ESC/link, lock de scroll | `site-refatorado/static/js/mobile-menu.js` |
| Navegação por âncoras (links `href="#..."`) | rolagem suave com offset do header fixo e atualização de hash | `site-refatorado/static/js/scroll.js` |
| Cards/FAQ/Pricing/Prompt/Sendoff | reveal por viewport com `IntersectionObserver`, respeitando `prefers-reduced-motion` | `site-refatorado/static/js/motion.js` |
| Bootstrap da camada JS | composição dos módulos autorais | `site-refatorado/static/js/main.js` |

## Integração Flask / Templates
- scripts carregados em `templates/base.html`:
  - `static/js/main.js` com `type="module"`.
- libs via CDN:
  - nenhuma.
- JS autoral em `static/js/`:
  - `main.js`
  - `mobile-menu.js`
  - `scroll.js`
  - `motion.js`

## Dependências de Estrutura
- IDs:
  - `mobile-menu-trigger`
  - `comp-kd5px9q0-pinned-layer`
  - `comp-mok06b5e-pinned-layer`
  - `comp-kd5px9q0_r_comp-kkmqi5tc`
  - `comp-mok06b5e_r_comp-mok06b0c`
  - seções: `comp-mkfn6wz6`, `comp-mkkxum1d`, `comp-mkla53qm`, `comp-mknvgyk7`, `comp-mknu6y0a`
- `data-*`:
  - não foi criada nova dependência em `data-*`; comportamento usa seletor estrutural e IDs preservados.
- classes ou wrappers relevantes:
  - `.comp-kd5px9q0-pinned-layer`, `.comp-mok06b5e-pinned-layer`
  - `.feature-card`, `.prompt-showcase`, `.pricing-card`, `.faq-list article`, `.comp-mknu6y0a-container`
  - classes de estado novas: `body.menu-open`, `.js-motion-ready`, `.motion-target`, `.is-visible`

## Assets e Motion Runtime
- Lottie:
  - não usado.
- Rive:
  - não usado.
- GSAP:
  - não usado.
- canvas/3D/WebGL:
  - não usado.

## Scripts e Dumps Descartados
- libs resolvidas por CDN:
  - não aplicável nesta etapa.
- arquivos legados não copiados:
  - bundles Wix/Thunderbolt (`script_*.js`, `utils_*.js`, `index_script_*`, `app.bundle.min.js`, `viewerApp.umd.min.js` e correlatos em `clean/assets/js/`).
- assets de runtime removidos por não uso:
  - não houve intake de `static/assets/` para JS.

## Arquivos Criados ou Editados
- editado: `modelos/base44.com/site-refatorado/templates/base.html`
- editado: `modelos/base44.com/site-refatorado/static/css/components/layout.css`
- editado: `modelos/base44.com/site-refatorado/static/css/components/motion.css`
- criado: `modelos/base44.com/site-refatorado/static/js/main.js`
- criado: `modelos/base44.com/site-refatorado/static/js/mobile-menu.js`
- criado: `modelos/base44.com/site-refatorado/static/js/scroll.js`
- criado: `modelos/base44.com/site-refatorado/static/js/motion.js`

## O que a Etapa de Polimento Precisa Saber
- viewports delicados:
  - transição do header em `1099px` (momento de desligar menu mobile e restaurar estado).
- motion ainda sensível:
  - ajuste fino de timing/distância de reveal pode ser calibrado contra `raw/` na etapa de polimento.
- gaps restantes:
  - a camada de interações originais Wix é maior; aqui foi portada apenas a parcela visível e relevante para o HTML/CSS reimplementados.
