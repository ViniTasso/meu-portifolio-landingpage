# Handoff 01 — Contexto do Projeto

## Resumo
- tipo de site: landing page/marketing em uma única página principal (Wix Studio exportado)
- complexidade: alta (muitos bundles, CSS fragmentado e runtime Wix/Thunderbolt)
- referência visual: `raw/`
- referência técnica: `clean/`
- stack detectada: HTML + CSS + JS com runtime Wix/Thunderbolt (e libs empacotadas)

## Entradas Principais
- páginas/entrypoints: `clean/index.html`, `raw/index.html` (principal); auxiliares: `assets/resource_6cfe2736c69d.html`, `assets/cdcs/v/1.0.0/index.html`
- css principal: carregado no `<head>` de `clean/index.html` (`globals.css`, `selectors.css`, `fonts.css`, `base.css`, `styles.css` + `styles_002..013.css`, `important.css`, `keyframes.css`, `medias/base_medias.css`)
- js principal: bootstrap em `clean/index.html` com `index_script_1_2.js`, `utils_004..008.js` no topo e `index_script_23/25/26.js`, `utils_009..017.js` no fim; além de `assets/js/app.bundle.min.js`
- assets críticos: `assets/icons/*`, `assets/images/*`, `assets/fonts/*`, `assets/css/*`, `assets/js/*`, `assets/resource-map.json`, `assets/services/base44-header/.../app.bundle.min.js`

## Classificação das Pastas de Entrada
- `raw/`: captura bruta de referência visual/comportamental completa (inclui rastreadores, serviços externos e bundles originais)
- `clean/`: versão técnica reorganizada para leitura/refatoração, ainda com muito legado e artefatos de runtime

## Estado Inicial do Projeto Novo
- `site-refatorado/`: ainda não existe

## Bibliotecas e Tecnologias Detectadas
| Tecnologia | Evidência | Impacto |
| --- | --- | --- |
| Wix Studio / Wix Viewer | `meta generator="Wix.com Website Builder"` + dados `wix-fedops` e `wix-viewer-model` em `clean/index.html` | Estrutura e comportamento dependem do runtime Wix |
| Wix Thunderbolt | arquivos `thunderbolt_*.json` e `raw/assets/services/wix-thunderbolt/dist/*.chunk.min.js` | Alto acoplamento em bundles minificados |
| React (empacotado) | `clean/assets/js/react.production.min.js`, `react-dom.production.min.js` | Lib conhecida (preferir CDN na reimplementação quando aplicável) |
| Lodash (empacotado) | `clean/assets/js/lodash.min.js` | Lib conhecida (candidata a CDN/remoção) |
| Header app bundle | `assets/services/base44-header/.../app.bundle.min.js` | Bundle opaco e de alto risco para cópia bruta |

## Pontos de Atenção
- bundles grandes: família `script_0xx.js`, `utils_0xx.js`, `app.bundle.min.js`, e `raw/assets/services/wix-thunderbolt/dist/*`
- partes mistas: HTML contém conteúdo + configurações de runtime + bootstrap de scripts
- riscos de motion: `data-motion-part` em seções, `keyframes.css`, muitos GIFs e chunks de animação
- riscos de responsivo: forte dependência de classes geradas e CSS fragmentado por arquivos
- partes que provavelmente exigem comparação com `raw/`: header/menu, hero, transições, seções com background/motion e navegação mobile

## Riscos de Cópia Bruta
- CSS legado que deve ser reescrito: `assets/css/styles*.css`, `style_*.css`, `important.css`, `keyframes.css` (manter comportamento, não copiar estrutura bruta)
- JS legado que deve ser reescrito ou virar CDN: `react*.min.js`, `lodash.min.js`, `pm-rpc.min.js`, `es-module-shims.js`, `viewerApp.umd.min.js`, `app.bundle.min.js`, `script_*.js`, `utils_*.js`
- pastas que não devem ser espelhadas: `assets/services/wix-thunderbolt/`, `assets/_partials/`, `assets/p/`, `assets/cdcs/`, arquivos de tracking/ads (`bat.js`, `uwt.js`, `eventPicker.js`, `eventSetup.js`, `rw.js`)
- assets que provavelmente serão placeholders: textos/copy, imagens de conteúdo e imagens de casos/prints comerciais em `assets/images/`
- assets estruturais que provavelmente precisam ser preservados: ícones SVG de UI (`assets/icons/`), fontes usadas em layout (`assets/fonts/`), recursos de navegação e assets visuais que sustentam motion

## Ordem Recomendada para as Próximas Etapas
1. Extrair HTML limpo por seções (header/hero/blocos/footer) mantendo a hierarquia visual.
2. Reconstruir CSS autoral (tokens + componentes + responsivo) usando `raw/` para fidelidade.
3. Reimplementar JS comportamental mínimo (menu, interações e motion necessário), removendo runtime Wix e rastreadores.
