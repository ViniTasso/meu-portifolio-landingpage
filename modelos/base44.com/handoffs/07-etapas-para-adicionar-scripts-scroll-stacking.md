# Handoff 07 — Etapas para Adicionar Scripts de Scroll Animation (Stacking)

## Contexto da Funcionalidade

### Objetivo Geral
Implementar a animação de **stacking cards com scroll fixed** que existe no site original (Base44 em `raw/`). Esta animação é um padrão visual avançado onde:

1. **Texto fixado**: O heading "Consider yourself limitless" fixa em 30% da viewport durante o scroll
2. **Background com overlay**: Uma div de sobreposição (com altura de viewport) preenche e cobre o texto fixado
3. **Stacking em cascata**: 4 cards (01/04, 02/04, 03/04, 04/04) ficam empilhados, onde cada card:
   - Fica centralizado na viewport
   - É sobreposto pelo próximo card conforme o usuário scrolla
   - Se fixa na posição após ser sobreposto
4. **Background fixo dinâmico**: O container background mantém posição fixed enquanto os cards se empilham, com troca da seção inferior (overlay)
5. **Scroll horizontal secundário**: Após o stacking, os cards internos permitem scroll horizontal para revelar conteúdo adicional

---

## Análise de Origem — Onde a Funcionalidade Está

### Localização no Projeto Legacy (`raw/` e `clean/`)

#### Estrutura HTML (IDs dos componentes)
- **Container principal**: `id="comp-mkl7gtp8"` (seção stacking)
- **Background/overlay**: `id="comp-mkjncvg7"` (background container com classe `comp-mkjncvg7-container`)
- **Cards individuais**: 
  - `comp-mkl7gs2g` (card 01/04)
  - Estrutura similar para cards 02, 03, 04
- **Classe base dos cards**: `PiVxGu MDrwHQ [comp-id] wixui-box`
- **Classe inner-box dos cards**: `yPXgy9 YqUfCX inner-box wixui-box`

#### Classes CSS Relevantes (encontradas em)
- **Position/Layout**: `PiVxGu`, `MDrwHQ` (container base)
- **Inner wrapper**: `yPXgy9`, `YqUfCX` (inner-box)
- **Overflow wrapper**: `[comp-id]-overflow-wrapper` (classe gerada dinamicamente)
- **Container**: `[comp-id]-container` (classe gerada dinamicamente)

#### Scripts que Implementam a Lógica

Os scripts responsáveis pela animação estão minificados nos bundles Wix/Thunderbolt em:

**Diretório**: `modelos/base44.com/clean/assets/js/`

**Arquivos chave encontrados**:
- `script_082.js` (119.7 KB) — lógica de transformação e position
- `script_083.js` (98.8 KB) — manipulação de scroll e fixed positioning
- `script_122.js` — contém referencias a `fixedPosition` e `siteOffset`
- `script_124.js`, `script_125.js` — potencialmente relacionados a scroll handlers
- `script_127.js`, `script_129.js` — animação de scroll
- `script_134.js`, `script_135.js` — posicionamento dinâmico
- Bundles gerais: `app.bundle.min.js`, `viewerApp.umd.min.js`

**Observação crítica**: Os scripts estão **fortemente ofuscados e minificados** pelo bundler Wix. A lógica não pode ser diretamente copiada/colada. Precisa ser **reimplementada**.

#### Padrão de Scroll Listener
O padrão encontrado nos arquivos:
```javascript
window.addEventListener("scroll", handleScroll)
// ou
window.addEventListener("resize", handler)
requestAnimationFrame(updatePosition)
```

---

## O Que Precisa Ser Reimplementado

### Camada 1: CSS de Posicionamento Base
- **Card containers**: `position: relative` com altura viewport (`100vh` ou `clamp()`)
- **Background**: `position: fixed` ou `sticky` com mudança de z-index
- **Inner boxes**: layout flexbox/grid com overflow para scroll horizontal

### Camada 2: JavaScript de Scroll Calculation
1. **Detectar scroll Y e calcular progresso** da animação (0 a 1)
2. **Atualizar transform de cada card**:
   - Card 01: `translateY(0)` enquanto visível, fixa quando card 02 chega
   - Card 02: `translateY(100vh + offset)` e anima até `translateY(0)` conforme scroll
   - Cards 03 e 04: mesmo padrão em cascata
3. **Gerenciar background**: 
   - Opacidade do overlay muda conforme cards entram
   - Background muda de `position: fixed` para `position: relative` após o último card

### Camada 3: Motion Easing
- Usar `requestAnimationFrame` para smooth 60fps
- Considerar `prefers-reduced-motion` (respeitar preferência do usuário)
- Timing: provavelmente linear ou ease-out para stacking

---

## Plano de Migração para `site-refatorado`

### Fase 1: Preparação e Análise (Investigação)

**Tarefa 1.1**: Decompile e extraia a lógica do script_082.js e script_083.js
- Use beautifier online ou ferramenta local para desminificar
- Identifique padrões de animação e valores mágicos (offsets, durações)
- Documente em arquivo de análise: `aidesign-kit-refatoracao-de-sites-python/guides/scroll-stacking-logic.md`

**Tarefa 1.2**: Captura de comportamento esperado
- Grave vídeo do scroll na página `raw/` (ou screenshots em cada passo)
- Defina milestones exatos (a qual Y pixel cada evento ocorre)
- Crie matriz: [step] → [Y scroll] → [expectedTransform] → [expectedOpacity]

**Tarefa 1.3**: Valide estrutura HTML no `site-refatorado`
- Confirme que os IDs e classes base existem (ou serão criados)
- Mapeie nova estrutura HTML para IDs/classes legados
- Defina seletores CSS que funcionarão

---

### Fase 2: Implementação de CSS

**Tarefa 2.1**: Crie `modelos/base44.com/site-refatorado/static/css/components/scroll-stacking.css`
- Base containers com `position: relative`, `min-height: 100vh`
- Background com `position: fixed`, `z-index` apropriado
- Inner cards com `transform: translateY()` default (será animado via JS)
- Overflow wrapper com `overflow-x: auto` para scroll horizontal final

**Tarefa 2.2**: Integre em `style.css` ou importe via `@import` em `base.html`

**Tarefa 2.3**: Teste responsividade
- Desktop: 1440x900 (stacking deve funcionar)
- Tablet: 1280x800 (pode colapsar ou ajustar)
- Mobile: 390x844 (pode ser versão simplificada ou stacking mobile-optimizado)

---

### Fase 3: Implementação de JavaScript

**Tarefa 3.1**: Crie `modelos/base44.com/site-refatorado/static/js/scroll-stacking.js`

Estrutura esperada:
```javascript
export function initScrollStacking() {
  // 1. Selecionar elementos (cards, background, containers)
  // 2. Calcular viewport height e offsets
  // 3. Listener de scroll: requestAnimationFrame + calculateProgress()
  // 4. Para cada card: updateCardPosition(cardIndex, progress)
  // 5. Gerenciar background fixed/relative transition
  // 6. Cleanup listener ao destruir
}

function calculateProgress(scrollY, elementStartY, elementEndY) {
  // 0 = elemento começa, 1 = elemento termina
  return Math.max(0, Math.min(1, (scrollY - elementStartY) / (elementEndY - elementStartY)))
}

function updateCardPosition(card, progress) {
  // Aplicar transform, opacity, etc baseado em progress
  // Exemplo: card.style.transform = `translateY(${progress * 100}vh)`
}
```

**Tarefa 3.2**: Integre com `main.js`
- Importe função no ES6: `import { initScrollStacking } from './scroll-stacking.js'`
- Chame no DOMContentLoaded ou load event
- Considere lazy-load (só iniciar se elemento existe na página)

**Tarefa 3.3**: Testes de performance
- Verificar FPS durante scroll (DevTools Performance tab)
- Otimizar com `will-change` CSS se necessário
- Considerar throttle/debounce se FPS cair

---

### Fase 4: Validação e Polimento

**Tarefa 4.1**: Teste contra captura de `raw/`
- Compare screenshots em cada milestone de scroll
- Use ferramenta `compare_scroll_steps.py` (do kit existente)
- Alvo: score ≤ 40 de diferença média

**Tarefa 4.2**: Suporte a redução de movimento
```javascript
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  // Aplicar versão simplificada ou desativar animation
}
```

**Tarefa 4.3**: Responsividade
- Teste breakpoints (desktop 1440, tablet 1024, mobile 390)
- Ajuste offsets/timings se necessário por breakpoint
- Mobile pode ter scroll-stacking simplificado (ex: menos cards visíveis ou velocidade diferente)

**Tarefa 4.4**: Acessibilidade
- Verifique que conteúdo é acessível sem JS (fallback)
- Teste navegação por teclado
- Escreva `aria-*` attributes se houver interação

**Tarefa 4.5**: Limpeza de código
- Remove commented code
- Documenta parâmetros mágicos (offsets, timings)
- Valida que não há console errors ou warnings

---

## Dependências Externas

### Bibliotecas Candidatas (Opcional)
- **ScrollTrigger** (GSAP): Se projeto já usa GSAP, pode simplificar
- **Lenis**: Smooth scroll library, pode melhorar UX (mas adiciona dependência)
- **Observability**: Usar Intersection Observer para lazy-load quando stacking entra em viewport

### Recomendação
**Implementar com vanilla JS** (sem libs externas no início). Se performance ficar ruim:
1. Primeira tentativa: CSS `will-change`, throttle de listener
2. Se ainda ruim: considerar GSAP ou similar

---

## Checklist de Validação Final

- [ ] HTML estrutura preserva IDs/classes dos componentes
- [ ] CSS compilado, sem broken selectors
- [ ] JS carregado via ES6 module, sem global namespace pollution
- [ ] Scroll animation funciona em desktop 1440x900
- [ ] Responsividade testada (tablet, mobile)
- [ ] Performance: 60fps durante scroll (via DevTools)
- [ ] Redução de movimento respeitada (prefers-reduced-motion)
- [ ] Sem console errors/warnings
- [ ] Comparação visual com `raw/`: score ≤ 40
- [ ] Documentação atualizada em handoff 08

---

## Referências

### Arquivos Legados Relevantes
- `modelos/base44.com/clean/index.html` — estrutura HTML com IDs
- `modelos/base44.com/clean/assets/js/script_082.js` — lógica de transform (119.7 KB)
- `modelos/base44.com/clean/assets/js/script_083.js` — scroll handler (98.8 KB)
- `modelos/base44.com/raw/` — referência visual de comportamento esperado

### Arquivos do Projeto Refatorado
- `modelos/base44.com/site-refatorado/static/js/main.js` — entry point
- `modelos/base44.com/site-refatorado/static/css/style.css` — estilos
- `modelos/base44.com/site-refatorado/templates/base.html` — template

### Ferramentas do Kit
- `aidesign-kit-refatoracao-de-sites-python/tools/parity/compare_scroll_steps.py` — validação de paridade visual
- `aidesign-kit-refatoracao-de-sites-python/tools/parity/capture_scroll_steps.py` — captura de screenshots

---

## Notas de Implementação

1. **Não copie bundles minificados**: A lógica está ofuscada, deve ser extraída e reimplementada em vanilla JS legível.
2. **Comece com versão simplificada**: Stacking básico (2 cards) antes de 4 cards.
3. **Teste no `raw/`**: Abra `http://localhost:8000` (raw) lado a lado com site-refatorado para comparação ao vivo.
4. **Cleanup**: Após implementação, remova qualquer arquivo de análise temporário ou minificado não usado.
5. **Documentação**: Cada parâmetro mágico (offset, duration) deve ter comentário explicando origem (ex: "offset de 100vh calculado de 4 cards empilhados").

---

## Próximos Passos

Após este handoff, o próximo agente deve:

1. **Executar Fase 1** (análise e decompilação)
2. **Validar milestones** de scroll esperados
3. **Implementar Fases 2 e 3** (CSS + JS)
4. **Executar Fase 4** (validação + polimento)
5. **Gerar Handoff 08** com resultados de implementação

---

**Data do Handoff**: 2025-05-01  
**Responsável pela Análise**: GitHub Copilot CLI (v1.0.34)  
**Status**: Pronto para implementação
