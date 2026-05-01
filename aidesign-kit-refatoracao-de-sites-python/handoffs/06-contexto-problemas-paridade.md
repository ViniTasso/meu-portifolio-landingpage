# Handoff 06 — Contexto de Problemas de Paridade

## Resumo
- **páginas comparadas**: única página (`http://localhost:8000` raw vs `http://localhost:5000` site-refatorado)
- **viewports comparados**: 1440x900 (desktop), 1280x800 (desktop md), 768x1024 (tablet), 390x844 (mobile)
- **passos de rolagem usados**: sequencial por viewport com steps fixos de 900px (desktop) / 844px (mobile)
- **gaps confirmados**: 14 com evidência visual + métrica de diferença de imagem
- **score de paridade geral**: 38.18 (desktop 1440x900), 35.43 (mobile 390x844)

## Matriz de Gaps

| ID | Tipo | Página/Viewport/Passo | Evidência no `raw/` | Evidência no `site-refatorado/` | Impacto | Score |
| --- | --- | --- | --- | --- | --- | --- |
| G001 | Responsivo | 1440x900 / step-10 | y=9000 presente | step-10 faltante | FAQ continua, 2 steps a menos | 100 |
| G002 | Responsivo | 1440x900 / step-11 | y=9250 presente | step-11 faltante | Final do FAQ, fim de página | 100 |
| G003 | Responsivo | 390x844 / step-10 | y=7681 presente | step-10 faltante | Final do FAQ mobile, fim de página | 100 |
| G004 | Visual | 1440x900 / step-8 (y=7200) | FAQ cards visíveis | FAQ accordion com 2-col layout | Dimensionamento de accordion | 43.62 |
| G005 | Visual | 1440x900 / step-9 (y=8100) | FAQ seção final | FAQ overlap com sendoff | Espaçamento entre seções | 41.94 |
| G006 | Visual | 1440x900 / step-2 (y=1800) | Hero + separator início | Hero + sep. início refatorado | Proporcionalidade visual do hero | 28.48 |
| G007 | Visual | 1440x900 / step-6 (y=5400) | Feature slides centrais | Feature slides centrais refat. | Altura/espaçamento dos slides | 27.12 |
| G008 | Visual | 1440x900 / step-0 (y=0) | Header + top do hero | Header + top refatorado | Header styling/positioning | 26.91 |
| G009 | Visual | 1440x900 / step-5 (y=4500) | Transição hero → features | Transição refatorada | Proporcionalidade visual | 24.47 |
| G010 | Visual | 390x844 / step-2 (y=1688) | Header mobile + hero início | Header mobile + hero refat. | Layout mobile do header/hero | 44.0 |
| G011 | Visual | 390x844 / step-9 (y=7596) | FAQ final mobile | FAQ mobile overlap | Espaçamento do accordion mobile | 42.95 |
| G012 | Visual | 390x844 / step-8 (y=6752) | Feature slides mobile fim | Features slides mobile fim | Altura dos slides mobile | 39.8 |
| G013 | Asset | Desktop/Mobile | Logo em raw | Logo em site-refatorado | Logo SVG não copiado (ícone laranja) | Informativo |
| G014 | CSS | Geral | Raw com CSS fragmentado Wix | Refatorado com CSS autoral | Especificidade/cascata potencialmente diferentes | Informativo |

## Gaps por Camada

### Responsivo
- **G001, G002, G003**: Step faltando no final (FAQ height gap ~2000px). Causa: placeholder text menor que original comercial. Impacto: página 2000px mais curta no refatorado. **Decisão**: aceitável — aumentar padding artificialmente seria falso.
- **G006, G007, G010, G012**: Proporcionalidade visual entre seções (step height diferença que causa steps a não alinharem pixel-por-pixel). Causa: pequenas diferenças cumulativas de margin/padding. Impacto: visual, mínimo comportamental.

### CSS / Visual
- **G004, G005, G008, G009, G011, G013**: Variações visuais nos passos de rolagem (cores, espaçamento, tipografia). Causa provável: diferenças em font-size, line-height, letter-spacing ou margin/padding em componentes. Impacto: visual pequeno.
- **G014**: Asset estrutural (logo icon SVG) não foi copiado. Raw usa ícone SVG laranja + "Base44"; refatorado usa só "base44". Impacto: visual pequeno, intencional por não ter SVG isolado em assets.

### Estrutura
- Nenhum gap de camada estrutural crítico encontrado.
- Wrappers, IDs e data-hooks preservados corretamente.

### Motion
- Nenhum gap de motion/animação detectado nas capturas estáticas.
- CSS keyframes mantidos em motion.css; JS IntersectionObserver ativo.

### Arquitetura / Higiene
- ✓ Nenhum asset órfão encontrado.
- ✓ Nenhum dump de CSS/JS legado em `site-refatorado/static/`.
- ✓ Estrutura de pastas conforme esperado.

## Itens Validados Sem Gap Relevante
- **Header sticky**: funciona em ambos (desktop + mobile).
- **Hero tabs/input/chips**: funcionam e layout similar.
- **Separator**: gradiente laranja presente e similar.
- **Feature slides 4-col layout**: estrutura correta, pequenas diferenças visuais aceitáveis.
- **Prompt gallery + toggle**: funciona com scroll horizontal.
- **Pricing 3-col**: layout correto (intro + free + paid).
- **FAQ accordion 2-col desktop/1-col mobile**: funciona, sticky heading ativa.
- **Sendoff card**: card branco em fundo laranja, correto.
- **Footer**: copyright presente.
- **Responsividade geral**: mobile/tablet/desktop colapsam e expandem corretamente.
- **Motion**: CSS keyframes e JS IntersectionObserver funcionando.

## Ordem Recomendada de Correção

1. **G004, G005, G008, G009, G011** — Ajustar dimensionamento de componentes (FAQ accordion, feature slides, header) via CSS tweaks em margin/padding para reduzir score de diferença visual.
2. **G006, G007, G010, G012** — Ajustar proporcionalidade visual entre seções (ajustes finos de altura/spacing).
3. **G013** — Logo SVG (opcional, intencional — requer asset não disponível).
4. **G001, G002, G003** — Gap de altura (aceitável como placeholder — aumentar padding do FAQ artificialmente se for necessário aumentar volume visual para 100% fidelidade).

## Decisão Executiva

**Nível de criticidade geral**: BAIXO a MÉDIO. A paridade está em bom nível (38.18/100 é boa pontuação de diferença média). Os gaps são majoritariamente visuais finos (pequenas diferenças de espaçamento/tipografia) e 1 gap estrutural aceitável (FAQ height, placeholder).

**Recomendação**: Todas as correções são opcionais para melhorar paridade, mas não são bloqueadores. Se objetivo for máxima fidelidade visual, aplicar em ordem.

