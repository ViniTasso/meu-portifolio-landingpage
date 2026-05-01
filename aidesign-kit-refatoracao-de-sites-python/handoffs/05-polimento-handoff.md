# Handoff 05 — Polimento

## Matriz de Validação Usada
- páginas: `http://localhost:8000` (raw) e `http://localhost:5000` (site-refatorado)
- viewports: `1440x900` (desktop principal), `390x844` (mobile)
- estados: default (scroll sequencial por passos fixos de 900px / 844px)
- tool principal: `capture_scroll_steps.py` → `compare_scroll_steps.py`

## Scores de Paridade (gap médio por passo)
| Viewport | Score Inicial | Score Final | Steps raw | Steps refatorado |
|---|---|---|---|---|
| 1440x900 | 62.49 | 38.18 | 12 | 10 |
| 390x844 | (não medido) | 35.6 | 11 | 10 |

Score mais baixo = melhor paridade. Progresso: de 62.49 → 38.18 no desktop.

## Ajustes Aplicados

### Hero (comp-m28o2bbb)
- Adicionado campo de input com placeholder + botão de envio (ícone SVG de seta)
- Adicionado eyebrow com tabs pill: "Apps" (ativa) e "Superagentes" (com badge "Novo")
- Adicionadas chips de exemplos: Dashboard de relatórios, Plataforma de games, Portal de onboarding, Visualizador de ambientes, App de networking
- Removidos os CTA buttons do corpo do hero (correto: no raw eles não existem no corpo, só na nav)

### Seção "Limitless" (comp-mkfmbp8m)
- Adicionado `min-height: 80vh` com flexbox centering
- Adicionado subtítulo "Construa na velocidade do pensamento."
- Texto do h2 centralizado (layout correto para esta seção)

### Feature section (comp-mkfn6wz6) — MAJOR
- Reestruturado de 2×2 card grid → 4 feature slides verticais
- Cada slide usa layout horizontal split: texto (esquerda) + visual placeholder (direita)
- Cada visual usa o gradiente `wixui-cards-container-1/2/3/4`
- Cada slide tem CTA "Começar construção" escuro (sem lime)
- Mobile: colunas colapsam em stack vertical ✓

### Prompt showcase (comp-mkkxum1d)
- Substituídos 3 placeholders horizontais por toggle "Prompt" / "Aplicação" + galeria vertical de 4 cards altos
- Gallery cards: `clamp(480px, 52vw, 680px)` de altura — replicando o volume visual da galeria original
- Cores dos cards herdadas do `wixui-cards-container-*` (não mais scoped ao `#comp-mkfn6wz6`)

### Pricing (comp-mkla53qm) — MAJOR
- Reestruturado de 2 cards → 3 colunas: intro + free card + paid card
- Intro: heading "Planos para cada necessidade" + subtítulo
- Free card: fundo `var(--color-surface-alt)`, checklist com 4 itens (ícone ✓ laranja), botão escuro
- Paid card: fundo gradiente rosa/lilás, preço em destaque, botão escuro
- CTAs alterados para `.pricing-cta` (background ink escuro) — resolvido conflito de especificidade com `.DPAltb.OoFUKI`

### FAQ (comp-mknvgyk7) — MAJOR
- Reestruturado de 3 card items → accordion 2 colunas (heading fixo esquerda + lista de `<details>` direita)
- 8 perguntas com texto expandido para volume visual adequado
- 6 de 8 itens abertos por padrão (replicando comportamento do original)
- `faq-heading h2` usa `position: sticky` no desktop para acompanhar scroll
- Ícone `+` rotaciona 45° quando item está aberto via `details[open] .faq-icon`

### Sendoff (comp-mknu6y0a)
- Adicionado `.sendoff-card` (card branco arredondado) centralizado no fundo laranja
- Mantido heading "Então, o que vamos construir?" + botão "Começar →"
- Botão `.sendoff-cta` com círculo laranja para o ícone de seta (replicando visual original)
- Seção: `min-height: clamp(480px, 60vw, 700px)` com flexbox centering

### CSS — limpeza e adições
- `sections.css`: totalmente reescrito com todos os componentes novos
- `style.css`: limpo — removido `.feature-grid`, `.pricing-grid`, `.faq-list` (substituídos)
- `layout.css`: removidas classes obsoletas `.placeholder-media`, `.placeholder-media.wide`, `.prompt-showcase .prompt-track`, `.sendoff-title`

## Gaps Ainda Visíveis

### Desktop 1440x900
- **2 steps faltantes** (y=9000 e y=9250): o raw tem ~2000px a mais de conteúdo no FAQ
  - Causa: texto placeholder naturalmente mais curto que o original comercial em EN
  - Impacto: a página está ~2000px mais curta (7267px vs 9250px de scroll)
  - Decisão: aceito como gap de placeholder — aumentar artificialmente o padding seria falso

### Separador (comp-mkfg5rtb)
- Altura ficou proporcional mas o raw tem uma transição um pouco mais curta; gap visual pequeno

### Logo
- Raw usa ícone SVG laranja + texto "Base44"; refatorado usa só texto "base44"
- Asset estrutural (ícone) não foi copiado do legado por não estar disponível como SVG isolado

### Hero input design
- Raw tem campo mais complexo com toggle "Plan" e ícone de microfone; refatorado usa input simples
- Diferença intencional: comportamento interativo Wix não reimplementado

## Casos Delicados

### motion
- CSS keyframes (fade-in, box-grow, circle-grow-in, loop-hover) mantidos em `motion.css`
- IntersectionObserver em `motion.js` com `.motion-target` / `.is-visible` mantido
- `prefers-reduced-motion` respeitado

### responsivo
- Feature slides: single column no mobile (grid-template-columns: 1fr) ✓
- Pricing: 1 coluna no mobile, 2 colunas no tablet ✓
- FAQ: 1 coluna no mobile (heading acima do accordion) ✓
- Prompt gallery: cards com largura responsiva `clamp(280px, 30vw, 420px)` — scroll horizontal mantido

### assets
- Nenhum asset binário em `site-refatorado/static/` — todos os visuais são CSS puro ✓
- Cores dos cards via gradientes CSS sem dependência de imagens externas ✓

## Higiene de Assets e Código

### assets removidos
- Nenhum asset órfão encontrado — `static/assets/` não existe (correto)

### dumps removidos
- `.placeholder-media`, `.placeholder-media.wide` de `layout.css`
- `.prompt-showcase .prompt-track` de `layout.css`
- `.sendoff-title` duplicado de `layout.css`
- `.feature-grid`, `.pricing-grid`, `.faq-list` de `style.css`
- `.feature-card`, `.pricing-card`, `.faq-list article` de `style.css` (substituídos por classes específicas)

### estrutura final validada
```
site-refatorado/
  app.py
  pyproject.toml
  uv.lock
  templates/
    base.html
    index.html
  static/
    css/
      tokens.css
      style.css
      components/
        layout.css
        sections.css
        motion.css
    js/
      main.js
      mobile-menu.js
      motion.js
      scroll.js
```
Sem `static/assets/` (correto — sem binários necessários).
Sem dumps de CSS/JS do legado.

## Estado Atual para a Auditoria Final

- **score desktop 1440x900**: 38.18 (início: 62.49) — melhora de 39%
- **score mobile 390x844**: 35.60 — boa paridade mobile
- **gap de altura restante**: ~2000px no desktop (FAQ placeholder vs original)
- **seções estruturalmente corretas**: hero, separator, limitless, feature slides (4×), prompt gallery, pricing 3-col, FAQ accordion, sendoff card, footer
- **responsividade validada**: desktop e mobile capturas OK
- **higiene**: sem assets órfãos, sem dumps, arquitetura correta
- **motion**: CSS keyframes e JS IntersectionObserver mantidos
- **gaps aceitos**: logo icon, hero input design complexo, height do FAQ (placeholder)
