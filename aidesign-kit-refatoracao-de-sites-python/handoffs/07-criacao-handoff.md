## O que foi criado
- `modelos/jameswilliams.design/novo-site/` com estrutura Flask + Jinja2 (app.py, templates, static).
- Conteúdo atualizado com `data.json` (title/description, hero, about, specialise, logos e CTA).
- Limpeza de assets: remoção de `static/assets/placeholders` e favicon apontando para `assets/images/favicon 2.webp`.

## Matriz de Validação Usada
- páginas: raw (http://localhost:8000/index.html), novo-site (http://127.0.0.1:5000/)
- viewports: 1440x900, 1280x800, 768x1024, 390x844
- estados: default (topo inicial + passos de rolagem via capture_scroll_steps)

## Ajustes Aplicados
- Atualização de title/description e hero heading/subtitle/CTA conforme `data.json`.
- Textos de about, specialise e logos substituídos pelo conteúdo novo.
- Favicon migrado para o asset real do clean e remoção de placeholders órfãos.

## Páginas e Componentes Estruturais
| Caminho novo | Papel |
| --- | --- |
| `modelos/jameswilliams.design/novo-site/app.py` | App Flask com rota base e páginas dinâmicas |
| `modelos/jameswilliams.design/novo-site/templates/base.html` | Base HTML, meta e includes |
| `modelos/jameswilliams.design/novo-site/templates/index.html` | Página principal migrada |
| `modelos/jameswilliams.design/novo-site/static/css/` | Tokens e componentes CSS |
| `modelos/jameswilliams.design/novo-site/static/js/main.js` | Motion GSAP/ScrollTrigger |

## Placeholderização Aplicada
- textos: conteúdo novo de `data.json` (PT-BR)
- imagens: mantidas do clean (hero/background/logos/cases)
- vídeos: não há
- blocos comerciais: nome principal atualizado para Vinícius Tasso

## Gaps Ainda Visíveis
- diferenças maiores em 390x844 por variação de altura do conteúdo e número de steps (raw 8 vs novo-site 9).

## Casos Delicados
- motion: scroll stacking via GSAP/ScrollTrigger preservado; diferenças de texto alteram timing percebido.
- responsivo: mobile 390x844 apresenta maior divergência visual por conteúdo mais extenso.
- assets: todos os assets restantes estão referenciados no HTML/CSS.

## Pendências Estruturais
- avaliar se o texto longo do about deve ser condensado para reduzir gaps no mobile.

## Estado Atual para a Auditoria Final
- captura e comparação por scroll steps concluídas (raw vs novo-site); maiores gaps concentrados no viewport 390x844.
