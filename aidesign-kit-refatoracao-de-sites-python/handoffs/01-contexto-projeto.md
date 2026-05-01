# Handoff 01 — Contexto do Projeto

## Resumo
- **Tipo de site:** Portfolio de designer com scroll-jacking (animações sincronizadas ao scroll)
- **Complexidade:** Média-alta (múltiplas animações, canvas, efeitos de scroll)
- **Referência visual:** `raw/` (versão espelhada original do Webflow)
- **Referência técnica:** `clean/` (reorganizada, mais legível)
- **Stack detectada:** Webflow nativo exportado → HTML + CSS legado + JS (GSAP + ScrollTrigger + Split-Type)

## Entradas Principais

### Páginas e Entrypoints
- **index.html** — página única, full-page scroll com seções (hero, about, projects, testimonials, footer)

### CSS Principal
- 17 arquivos CSS no `clean/`:
  - `base.css` — reset e estilos base
  - `globals.css` — variáveis e tokens globais
  - `fonts.css` — @font-face (Inter, Larsseit)
  - `styles.css`, `styles_002.css`, `styles_003.css`, `styles_004.css` — layouts e componentes
  - `keyframes.css` — animações CSS (@keyframes spin)
  - `medias/` (4 arquivos) — media queries organizadas
  - `important.css` — overrides
  - `selectors.css` — seletores complexos

### JS Principal
- 12 arquivos JS (muitos são bibliotecas externas copiadas localmente):
  - **GSAP 3.11.3** — animação (gsap.min.js)
  - **ScrollTrigger.min.js** — sincronização de animações ao scroll
  - **Split-Type** (index.min.js, split-type.js) — animação de texto character-by-character
  - **jQuery 3.6.0** — jquery.min.js
  - **WebFont** — carregamento de fontes
  - **Webflow bundles** — script_001.js, script_002.js, webflow.schunk_*.js (lógica do Webflow)
  - **Custom scripts** — utils.js, utils_002-005.js, index_script_1.js (comportamentos customizados)

### Assets Críticos
- **Imagens:** 45 arquivos (webp, avif, jpg)
  - Hero headshot (Hero Headshot.avif, repositionado com opacity/transform)
  - Hero background (hero background.webp, paralaxe de scroll)
  - Project thumbnails (31 webp)
  - Ícones em SVG (6 arquivos)
- **Fontes:** 14 arquivos
  - **Inter** (7 weights: 300, 400, 500, 600, 700) — corpo de texto
  - **Larsseit** (7 weights e estilos) — headings e destaques
- **Animações:** 1 arquivo Lottie (Scroll icon-7.lottie)

## Classificação das Pastas de Entrada

### `raw/`
- Versão original espelhada do Webflow (minificada, estrutura de CDN preservada)
- URLs de origem mapeadas em importmaps (cdnjs, unpkg, cdn.prod.website-files.com, ajax.googleapis.com)
- Servidor serve.py implementa fallbacks para hash-suffix filenames e resolução de recursos
- **Estado visual:** referência absoluta (usar para comparações de renderização)
- **Qualidade técnica:** mais difícil de ler (caminhos profundos, nomes com hash)

### `clean/`
- Reorganizada automática do `raw/` (assets normalizados para flat hierarchy em `assets/js/` e `assets/css/`)
- Importmap remapeado para `/assets/` localmente
- HTML formatado e mais legível
- **Estado técnico:** fonte principal de leitura (menos barulho de caminhos)
- **Aviso:** pode renderizar com pequenas quebras por causa da reorganização (validar contra `raw/`)

## Estado Inicial do Projeto Novo
- **`site-refatorado/`:** NÃO existe ainda (será criado na etapa 02 — HTML)

## Bibliotecas e Tecnologias Detectadas

| Tecnologia | Versão | Evidência | Impacto | CDN vs Local |
|---|---|---|---|---|
| GSAP | 3.11.3 | gsap.min.js em `/assets/js/` | Animações core, ScrollTrigger integrado | CDN (deixar local por enquanto) |
| ScrollTrigger | 3.11.3 | ScrollTrigger.min.js em `/assets/js/` | Sincronização scroll ↔ animações | CDN (deixar local por enquanto) |
| Split-Type | 0.3.4 | index.min.js, split-type.js | Animação de texto (character split) | Local + CDN fallback (unpkg.com) |
| jQuery | 3.6.0 | jquery.min.js em `/assets/js/` | DOM manipulation (legado Webflow) | CDN recomendado |
| Webfont | 1.6.26 | webfont.js | Carregamento dinâmico de fontes Google | CDN recomendado |
| Lottie | — | Lottie SDK detectado em HTML | Animação scroll icon (reader type) | CDN (bodymovin) |

## Pontos de Atenção

### Motion e Scroll-Jacking
- **Scroll-stacking crítico** — elementos com `data-w-id` e inline styles com transform/opacity controlados por GSAP
- **H1 e H2** animados durante scroll (capturado em `_ai_context.md`: "Position Changes on Scroll")
- **Hero section:** parallax de background image + fade de profile image + opacity de h1
- **Subtitle wrapper:** translate3d(0, 2.5rem) → animação ao scroll
- **Color filter:** elemento de transição visual

### Responsividade
- 8 breakpoints diferentes mapeados (`@media` em `base_medias.css`)
- Tailwind-like breakpoints: 480px, 767px, 768px, 991px, 992px, 1359px, 1440px

### Bundles de Alto Risco
- **webflow.schunk_*.js** — Webflow runtime, pode estar minificado + complexo
- **script_001.js, script_002.js** — code-splitting do Webflow, verificar dependências
- **utils.js e utils_00X.js** — múltiplos arquivos utils (code-splitting manual?)

### Partes que Exigem Comparação com `raw/`
- Renderização de parallax (verificar se `clean/` preserva offset do background-image)
- Timing de animações de scroll (validar curvas de easing contra `raw/`)
- Responsividade em mobile (media queries potencialmente ajustadas)

## Riscos de Cópia Bruta

### CSS Legado que Deve Ser Reescrito
- Todos os 17 CSS devem ser reorganizados em uma estrutura limpa (`tokens.css`, componentes)
- **Não copiar** folhas inteiras para `site-refatorado/`
- Consolidar `styles.css` + `styles_002-004.css` em arquivos temáticos (layout, componentes, animations)

### JS Legado que Deve Virar CDN
- **GSAP** → cdn.jsdelivr.net/npm/gsap@latest
- **ScrollTrigger** → cdn.jsdelivr.net/npm/gsap/Dist/ScrollTrigger.min.js
- **jQuery** → código.jquery.com (ou remover se não necessário)
- **Webfont** → ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js
- **Lottie** → cdn.jsdelivr.net/npm/lottie-web@latest

### Pastas que Não Devem Ser Espelhadas
- `assets/646bb626f5c2104941dd5a26/` — estrutura de domain/site ID do Webflow
- `assets/ajax/libs/`, `assets/unpkg.com/` — espelho de CDNs (usar CDN direto)
- `assets/split-type@0.3.4/` — versão espelhada (usar unpkg.com direto)

### Assets que Provavelmente Serão Placeholders
- **Textos de copy** (hero subtitle, about description, project titles)
- **Imagens de portfolio** (project thumbnails — 31 webps)
- **Headshot de perfil** (Hero Headshot.avif)

### Assets Estruturais que Devem Ser Preservados
- **Hero background.webp** — parte da identidade visual (gradiente/padrão)
- **Lottie scroll icon** — comportamento visual de interação
- **Favicon** (favicon.png, favicon 2.png, favicon 2.webp)
- **6 SVGs** — ícones estruturais (contact icon, etc)
- **Fonts Larsseit e Inter** — identidade tipográfica (CDN ou local, preservar)
- **Keyframes CSS** (@keyframes spin) — comportamento de animação

## Ordem Recomendada para as Próximas Etapas

1. **Etapa 02 — HTML**
   - Limpar HTML do Webflow (remover `data-wf-*`, importmaps legadas)
   - Criar `site-refatorado/app.py` (Flask + Jinja2)
   - Criar `site-refatorado/templates/base.html` + `index.html`
   - Identificar componentes reutilizáveis (navbar, section, card, cta-button)
   - Verificar renderização contra `raw/` com serve.py

2. **Etapa 03 — CSS**
   - Criar `tokens.css` com color palette e breakpoints do `_ai_context.md`
   - Organizar em `components/` (navbar, hero, section, card, footer)
   - Consolidar animações CSS em arquivo separado (ou cssmodule)
   - Testar responsividade em todos os breakpoints

3. **Etapa 04 — JS**
   - Integrar GSAP + ScrollTrigger via CDN
   - Implementar animações de scroll (H1/H2 position changes)
   - Integrar Split-Type para text animations
   - Remover webflow.schunk e code legado (não necessário em Flask)

4. **Etapa 05 — Polimento**
   - Testar Lottie scroll icon
   - Validar timing de parallax contra `raw/`
   - Otimizar imagens (manter webp + avif)
   - Remover assets órfãos

5. **Etapa 06 — Paridade Visual**
   - Comparação lado-a-lado: `raw/` vs `site-refatorado/`
   - Capturar screenshots em múltiplos breakpoints
   - Validar scroll-jacking fidelity
   - Corrigir gaps se necessário

---

**Nota importante:** O site limpo está funcionando bem do ponto de vista de scroll-stacking. Nenhuma diferença visual visível entre `raw/` e `clean/`. O trabalho principal é reorganizar código + placeholderizar content, não recriar comportamento.
