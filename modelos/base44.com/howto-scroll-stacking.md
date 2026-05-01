# How-to: Scroll Stacking com CSS Sticky

Técnica de empilhamento de seções durante o scroll — implementada no site-refatorado a partir do comportamento original do Base44.

Estudo de implementação em [Estudo do Scroll Stacking](../base44.com/handoffs/07-etapas-para-adicionar-scripts-scroll-stacking.md)
---

## 1. Contexto da funcionalidade

**Scroll stacking** é um padrão visual onde múltiplos blocos de conteúdo se empilham progressivamente conforme o usuário rola a página. Cada bloco novo sobe por baixo do anterior e o cobre, criando a ilusão de baralho sendo virado.

O efeito é produzido **100% em CSS**, usando `position: sticky` combinado com `z-index` crescente dentro de um container de altura explícita. Nenhuma biblioteca externa é necessária.

### Comportamento esperado

```
Scroll 0%:   [ Card 1 visível ]
Scroll 25%:  [ Card 2 subindo por baixo → cobre Card 1 ]
Scroll 50%:  [ Card 3 subindo por baixo → cobre Card 2 ]
Scroll 75%:  [ Card 4 subindo por baixo → cobre Card 3 ]
Scroll 100%: [ Card 4 fixado, pilha completa ]
```

### Por que funciona

Cada card row ocupa uma fatia de `100vh` dentro de um grid de `N × 100vh`. Ao receber `position: sticky; top: 0`, o card gruda no topo da viewport quando sua fatia começa a sair de cena. Como o próximo card tem `z-index` maior, ele sobe por cima do card anterior sem que o anterior saia da tela — empilhamento real.

---

## 2. Classes, arquivos e importações

### Arquivos criados neste projeto

| Arquivo | Papel |
|---|---|
| `static/css/components/scroll-stacking.css` | CSS do grid e dos card rows (fonte da verdade visual) |
| `static/js/scroll-stacking.js` | JS opcional: heading sticky durante o stacking |
| `templates/index.html` | HTML com `.comp-mkfn6wz6-container` e `.feature-card-row` |

### Classes CSS críticas

| Classe | O que faz |
|---|---|
| `.comp-mkfn6wz6-container` | Container pai. Define o grid `N × 100vh` que cria o espaço de scroll |
| `.feature-card-row` | Wrapper de cada card. Recebe `sticky`, `z-index` e `background` |
| `.feature-card-row--1` … `--4` | Modificadores: z-index crescente + cor de fundo por card |
| `.feature-slide` | Conteúdo interno do card (texto + visual). Não tem posicionamento próprio |
| `.stacking-active` | Classe JS adicionada ao heading âncora para torná-lo sticky |

### Importação no projeto Flask/Jinja

Em `templates/base.html`, **após** o CSS de componentes gerais e **antes** do CSS de motion:

```html
<link rel="stylesheet" href="{{ url_for('static', filename='css/components/scroll-stacking.css') }}">
```

Em `static/js/main.js`:

```javascript
import { initScrollStacking } from "./scroll-stacking.js";
// ...dentro de bootstrap():
initScrollStacking();
```

### Menção às classes herdadas do legado

As classes `comp-mkjnaf8t`, `comp-mkjnbax3`, `comp-mkjncchp`, `comp-mkjncvg7` (IDs dos wrappers) e `comp-mkjlvbdx` (background container) são nomes originais do sistema Wix/Thunderbolt. No site-refatorado, foram mantidos como IDs para rastreabilidade, mas **não são necessários** para o efeito funcionar — qualquer nome serve.

---

## 3. Tutorial de implementação

### Passo 1 — HTML: estrutura do container

A estrutura mínima exige três camadas:

```html
<!-- 1. Seção pai (posição relativa no fluxo) -->
<section id="minha-secao-stacking">

  <!-- 2. Container do grid (cria o espaço de scroll) -->
  <div class="stacking-container">

    <!-- 3. Card rows (cada um é uma fatia sticky) -->
    <div class="stacking-card stacking-card--1">
      <div class="stacking-card__content">
        <!-- seu conteúdo aqui -->
      </div>
    </div>

    <div class="stacking-card stacking-card--2">
      <div class="stacking-card__content">
        <!-- seu conteúdo aqui -->
      </div>
    </div>

    <div class="stacking-card stacking-card--3">
      <div class="stacking-card__content">
        <!-- seu conteúdo aqui -->
      </div>
    </div>

  </div>
</section>
```

> **Regra:** o número de modificadores (`--1`, `--2`, …) deve bater com o número de linhas no `grid-template-rows` do container.

---

### Passo 2 — CSS: o container grid

```css
/* Cria o espaço de scroll total: N cards × 100vh */
.stacking-container {
  display: grid;
  grid-template-rows: 100vh 100vh 100vh; /* ajuste para N cards */
  grid-template-columns: 1fr;
}
```

---

### Passo 3 — CSS: os card rows sticky

```css
/* Comportamento base de todos os cards */
.stacking-card {
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Z-index crescente + cor de fundo distinta por card */
.stacking-card--1 { z-index: 1; background: #f0f0f0; }
.stacking-card--2 { z-index: 2; background: #e8e4dc; }
.stacking-card--3 { z-index: 3; background: #ddd9d0; }
```

> **Por que `background` sólido é obrigatório:** sem cor de fundo, o card novo que sobe é transparente e o conteúdo do card anterior aparece por baixo — quebrando a ilusão de empilhamento.

---

### Passo 4 — CSS: o conteúdo interno

```css
/* O slide em si não precisa de posicionamento — o card row já centraliza */
.stacking-card__content {
  width: 100%;
  max-width: 1200px;
  padding-inline: 2rem;
}
```

---

### Passo 5 — CSS: mobile (desabilitar stacking)

Em telas pequenas, o grid vira um bloco normal:

```css
@media (max-width: 767px) {
  .stacking-container {
    display: block;
  }

  .stacking-card {
    position: relative;
    top: auto;
    min-height: auto;
    background: transparent !important;
  }

  /* Separador visual entre cards no mobile */
  .stacking-card + .stacking-card {
    border-top: 1px solid #e0e0e0;
  }
}
```

---

### Passo 6 — JS (opcional): heading âncora sticky

Se você tiver um título de seção que deve permanecer visível enquanto os cards se empilham sobre ele:

```javascript
// scroll-stacking.js
export function initScrollStacking() {
  const anchor = document.getElementById("meu-heading-ancora");
  const stackSection = document.getElementById("minha-secao-stacking");

  if (!anchor || !stackSection) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) return;

  const isDesktop = () => window.innerWidth >= 768;

  const setActive = (active) => {
    if (!isDesktop()) {
      anchor.classList.remove("stacking-active");
      return;
    }
    anchor.classList.toggle("stacking-active", active);
  };

  const observer = new IntersectionObserver(
    ([entry]) => setActive(entry.isIntersecting),
    { threshold: 0 }
  );

  observer.observe(stackSection);

  window.addEventListener("resize", () => {
    if (!isDesktop()) anchor.classList.remove("stacking-active");
  }, { passive: true });
}
```

E no CSS do heading âncora:

```css
/* Só ativa quando JS adiciona a classe */
#meu-heading-ancora.stacking-active {
  position: sticky;
  top: 76px; /* altura do header fixo */
  z-index: 0; /* abaixo dos cards (z-index 1+) */
}
```

---

### CSS completo de referência (mínimo funcional)

```css
/* ── CONTAINER ── */
.stacking-container {
  display: grid;
  grid-template-rows: 100vh 100vh 100vh; /* 1 linha por card */
  grid-template-columns: 1fr;
}

/* ── CARD ROWS ── */
.stacking-card {
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stacking-card--1 { z-index: 1; background: #f5f5f5; }
.stacking-card--2 { z-index: 2; background: #eee; }
.stacking-card--3 { z-index: 3; background: #e5e5e5; }

/* ── MOBILE: flat layout ── */
@media (max-width: 767px) {
  .stacking-container { display: block; }

  .stacking-card {
    position: relative;
    min-height: auto;
    background: transparent !important;
  }

  .stacking-card + .stacking-card {
    border-top: 1px solid #ddd;
  }
}
```

---

## 4. Adaptações possíveis

### A. Fazer com qualquer div (não precisa ser `<section>`)

O efeito não depende de elementos semânticos. Funciona com qualquer elemento bloco:

```html
<div class="stacking-container">
  <div class="stacking-card stacking-card--1">
    <div>Conteúdo A</div>
  </div>
  <div class="stacking-card stacking-card--2">
    <div>Conteúdo B</div>
  </div>
</div>
```

Nenhuma mudança no CSS é necessária — as classes funcionam independentemente da tag.

---

### B. Fazer com divs sequenciais já existentes (sem wrapper extra)

Se você já tem uma lista de divs irmãos e não quer adicionar um container pai:

```html
<!-- HTML existente (não modificar) -->
<div class="card" id="card-1">...</div>
<div class="card" id="card-2">...</div>
<div class="card" id="card-3">...</div>
```

Aplique o stacking via CSS diretamente nos irmãos e crie o espaço no pai:

```css
/* O pai precisa ter a altura explícita */
.pai-dos-cards {
  display: grid;
  grid-template-rows: 100vh 100vh 100vh;
  grid-template-columns: 1fr;
}

/* Cada card existente vira sticky */
.card {
  position: sticky;
  top: 0;
  min-height: 100vh;
  overflow: hidden;
}

/* Z-index via nth-child (sem modificadores de classe) */
.card:nth-child(1) { z-index: 1; background: #f5f5f5; }
.card:nth-child(2) { z-index: 2; background: #eee; }
.card:nth-child(3) { z-index: 3; background: #e5e5e5; }
```

> **Atenção:** se o pai for um `<main>` ou qualquer elemento com `overflow: hidden` ou `overflow: clip`, o sticky não funciona — sticky precisa de um ancestral scrollável (em geral o `body`).

---

### C. Fazer com troca de background (cor de fundo que muda por card)

Para um efeito onde o fundo de toda a viewport muda de cor conforme o card ativo, use um elemento de background separado e sticky:

```html
<div class="stacking-container">
  <!-- Fundo sticky que fica atrás de tudo -->
  <div class="stacking-bg" aria-hidden="true">
    <div class="stacking-bg__panel stacking-bg__panel--1"></div>
    <div class="stacking-bg__panel stacking-bg__panel--2"></div>
    <div class="stacking-bg__panel stacking-bg__panel--3"></div>
  </div>

  <!-- Cards por cima (sem background próprio) -->
  <div class="stacking-card stacking-card--1">...</div>
  <div class="stacking-card stacking-card--2">...</div>
  <div class="stacking-card stacking-card--3">...</div>
</div>
```

```css
/* Background sticky: fica na linha 1 do grid, visível por toda a duração do scroll */
.stacking-bg {
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 0; /* atrás dos cards */
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

/* Cada painel ocupa 100% do bg; a troca de cor é feita via JS ou :has() */
.stacking-bg__panel {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.stacking-bg__panel--1 { background: #e8f4f8; }
.stacking-bg__panel--2 { background: #f8f0e8; }
.stacking-bg__panel--3 { background: #e8f8ec; }

/* Cards ficam acima do bg, sem cor de fundo própria */
.stacking-card {
  position: sticky;
  top: 0;
  min-height: 100vh;
  z-index: 1; /* acima do bg */
  background: transparent;
}
```

A troca do painel ativo pode ser feita via `IntersectionObserver` em cada card, ou com a pseudo-classe `:has()` em browsers modernos:

```css
/* Ativa o painel quando o card correspondente está visível */
.stacking-container:has(.stacking-card--1:is(:hover, :focus-within)) .stacking-bg__panel--1 {
  opacity: 1;
}
```

Para controle preciso por scroll, use o JS da Fase 6 do handoff — `calculateProgress` + `requestAnimationFrame`.

---

### D. Fazer com cards menores (não full-viewport)

Se os cards não devem ocupar toda a tela — por exemplo, cards de 60vh centralizados:

```css
/* Container: ainda precisa de altura explícita por linha */
.stacking-container {
  display: grid;
  grid-template-rows: 100vh 100vh 100vh; /* continua 100vh por linha */
  grid-template-columns: 1fr;
}

/* Card row: ainda 100vh e sticky, mas centraliza um card menor */
.stacking-card {
  position: sticky;
  top: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--page-bg); /* fundo da página, não do card */
}

/* O card visual é menor — flutua no centro */
.stacking-card__inner {
  width: min(700px, 90vw);
  height: clamp(300px, 60vh, 600px);
  border-radius: 16px;
  box-shadow: 0 8px 48px rgba(0,0,0,0.12);
  overflow: hidden;
  background: white;
  /* a cor de fundo fica aqui, no card visual, não no row */
}

.stacking-card--1 .stacking-card__inner { background: #f0f0f0; }
.stacking-card--2 .stacking-card__inner { background: #f2f1ed; }
.stacking-card--3 .stacking-card__inner { background: #edeae4; }
```

> **Detalhe visual:** com cards menores, o fundo atrás deles fica visível durante o stacking. Use `background` sólido no `.stacking-card` (o row inteiro) para evitar que o heading âncora ou seções anteriores apareçam.

---

## Referências rápidas

```
Arquivo principal CSS   → static/css/components/scroll-stacking.css
Arquivo JS (opcional)   → static/js/scroll-stacking.js
Entrada JS              → static/js/main.js (import + initScrollStacking())
Link CSS                → templates/base.html (após sections.css)
HTML implementado       → templates/index.html (#comp-mkfn6wz6)
Legado de referência    → modelos/base44.com/clean/assets/css/styles_008.css (linhas 758–899)
```

---

**Compatibilidade**: `position: sticky` — Chrome 56+, Firefox 32+, Safari 13+, Edge 16+. Sem polyfill necessário para browsers modernos.
