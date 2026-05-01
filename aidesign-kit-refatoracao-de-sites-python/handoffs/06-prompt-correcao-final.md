# Handoff 06 — Prompt de Correção Final de Paridade

<role>

Você é um engenheiro de front-end responsável por ajustar a paridade visual entre o site original `raw/` e a refatoração `site-refatorado/`. Sua missão é fechar todos os gaps identificados no handoff de paridade anterior, melhorando o score de diferença média de 38.18 (desktop) e 35.43 (mobile).

Você **não redesenha**, não **inventa novos componentes**, não **rompe a arquitetura existente** — você ajusta CSS, dimensionamentos e espaçamentos para que o refatorado fique visualmente idêntico ao raw.

</role>

<mandatory_reads>

Leia nesta ordem antes de começar qualquer correção:

1. `./aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md` — regras gerais do kit.
2. `./aidesign-kit-refatoracao-de-sites-python/handoffs/06-contexto-problemas-paridade.md` — matriz de 14 gaps identificados com scores visuais.
3. `./aidesign-kit-refatoracao-de-sites-python/guides/02-guia-css-tools-debug-edicao.md` — técnicas de CSS debug.
4. `./aidesign-kit-refatoracao-de-sites-python/guides/04-guia-paridade-visual.md` — validação visual pós-correção.

</mandatory_reads>

<project_context>

## Stack
- Flask + Jinja2 + CSS autoral + JavaScript modular.

## Localização
- Raw (referência visual): `./modelos/base44.com/raw/`
- Site refatorado: `./modelos/base44.com/site-refatorado/`
- Kit de auditoria: `./aidesign-kit-refatoracao-de-sites-python/`

## Estado Atual
- Score de paridade: 38.18 (desktop 1440x900), 35.43 (mobile 390x844) — ambos "bons", mas com espaço para melhora.
- 14 gaps identificados: 3 responsivos (height) + 6 visuais finos (espaçamento/tipografia) + 1 asset (logo icon, intencional) + 4 informativos.
- Nenhum gap estrutural crítico. Wrappers, IDs e data-hooks preservados.

## Arquivos Alvo de Correção
- `site-refatorado/static/css/components/sections.css` — estilos de seções (FAQ, features, pricing).
- `site-refatorado/static/css/components/layout.css` — header, spacing macro.
- `site-refatorado/static/css/style.css` — base global de tipografia/grid.

## Gaps Alvo

**Prioridade 1 (impacto visual máximo):**
- **G004**: FAQ accordion dimensionamento (y=7200, score 43.62)
- **G005**: FAQ spacing com sendoff (y=8100, score 41.94)
- **G010**: Header mobile layout (y=1688 mobile, score 44.0)

**Prioridade 2 (impacto visual menor):**
- **G006, G007, G009, G011, G012**: Proporcionalidade entre seções.
- **G008**: Header desktop styling (y=0, score 26.91).

**Prioridade 3 (bloqueadores opcionais):**
- **G001, G002, G003**: Height gap do FAQ (~2000px faltando). Aceitável se placeholder. Aumentar artificialmente só se for prioritário.
- **G013**: Logo SVG (intencional, requer asset não disponível).

</project_context>

<source_of_truth>

- Visual: `./modelos/base44.com/raw/` — única fonte de verdade para paridade.
- Técnica: `./modelos/base44.com/site-refatorado/` — código novo a corrigir.
- Apoio técnico: `./modelos/base44.com/clean/` — apenas para localizar origem de problemas herdados.

</source_of_truth>

<execution>

Execute nesta ordem **exata**:

1. **Bootstrap do ambiente**:
   ```bash
   cd aidesign-kit-refatoracao-de-sites-python
   uv sync
   uv run playwright install chromium
   ```

2. **Sirva os dois sites em paralelo** (em terminais separados):
   - Raw: `cd modelos/base44.com/raw && python serve.py` (escolha RAW)
   - Refatorado: `cd modelos/base44.com/site-refatorado && uv run python app.py --port 5000`

3. **Abra navegador e navegue manualmente**:
   - Inspecione raw em http://localhost:8000 e refatorado em http://localhost:5000.
   - Para cada gap (G001-G014), tire screenshot em ambos e compare no DevTools.

4. **Para cada gap de Prioridade 1 (G004, G005, G010)**:
   - Identifique qual arquivo CSS está afetando (sections.css ou layout.css).
   - Ajuste margin/padding/font-size/line-height/letter-spacing para reduzir diferença visual.
   - Use `probe_selector_metrics.py` ou `compare_selector_metrics.py` do kit para confirmar dimensões.
   - Teste responsividade em mobile (390x844) também.

5. **Após cada ajuste CSS**:
   - Rode `compare_scroll_steps.py` entre raw e refatorado para novo score.
   - Meta: reduzir score para < 25.0 por step principal (hero, FAQ, features).

6. **Para gaps de Prioridade 2**:
   - Aplique tweaks finos de espaçamento.
   - Não toque em layout structur — só ajuste whitespace.

7. **Para gaps de Prioridade 3 (G001-G003, G013)**:
   - Se aumentar FAQ height: adicionar padding/margin ao `#comp-mknvgyk7` ou aumentar placeholder text volume.
   - Logo SVG: marcar como "aceito como design delta" se asset não estiver disponível.

8. **Validação final**:
   - Rode `capture_scroll_steps.py` para ambos os sites.
   - Rode `compare_scroll_steps.py` para score final.
   - Meta: score < 35.0 (ambos viewports).
   - Teste manualmente em navegador: desktop 1440x900, mobile 390x844, responsividade tablet 768x1024.

</execution>

<validation>

### Critérios de Sucesso

- ✓ Score de paridade desktop 1440x900: < 35.0 (era 38.18).
- ✓ Score de paridade mobile 390x844: < 33.0 (era 35.43).
- ✓ Nenhum gap visual em steps críticos (0, 2, 6, 8, 9).
- ✓ Responsividade mantida (mobile collapsa, desktop expande).
- ✓ Nenhum novo gap introduzido em outras seções.

### Testes Manuais

1. **Desktop 1440x900**:
   - [ ] Header sticky funciona em ambos.
   - [ ] Hero tabs/input layout similar.
   - [ ] Feature slides 4-col vs 4-col, altura similar.
   - [ ] FAQ accordion 2-col em ambos, spacing similar.
   - [ ] Sendoff card alinhado.

2. **Mobile 390x844**:
   - [ ] Header mobile overlay funciona.
   - [ ] Hero 1-col stack correto.
   - [ ] Feature slides 1-col stack.
   - [ ] FAQ accordion 1-col, scroll similar.

3. **Motion / Hover**:
   - [ ] Fade-in ao entrar em viewport funciona.
   - [ ] Hover CTAs tem transição suave.
   - [ ] `prefers-reduced-motion` respeitado.

### Checklist Pré-Finalização

- [ ] Lidos todos os handoffs anteriores (05-polimento, 03-css, 02-html).
- [ ] Nenhum arquivo CSS/JS do legado copiado.
- [ ] Nenhum asset órfão em `site-refatorado/static/assets/`.
- [ ] `site-refatorado/` ainda roda sem erros: `uv run python app.py`.
- [ ] Todos os principais gaps reduzidos (scores < limites).

</validation>

<constraints>

### Abordagem Técnica

- NÃO copie CSS fragmentado do legado (`clean/assets/css/`, `styles*.css`, etc).
- NÃO mude a stack (continue Flask + Jinja2 + CSS autoral + JS modular).
- NÃO use `!important` excessivamente — refatore selector/cascata se precisar.
- NÃO remova data-hooks, wrappers ou IDs de componentes.
- NÃO crie novos componentes — ajuste os existentes.

### Estrutura de Arquivos

- Edite APENAS: `site-refatorado/static/css/components/sections.css`, `layout.css`, `style.css`.
- Edite MINIMAMENTE: `site-refatorado/static/css/tokens.css` (se ajustar cores/spacing tokens).
- NÃO altere estrutura de pastas.
- NÃO crie arquivos CSS/JS intermediários ou dumps de debug.

### Validação de Ruído

- Use `compare_scroll_steps.py` **só com viewports realmente comparáveis** (raw 1440x900 vs refatorado 1440x900, não misture).
- Não use fullPage screenshot como método principal — prefira passos de scroll.
- Compare seletores específicos (header, seção FAQ, features) quando precisar isolar um gap.

</constraints>

<techniques>

### Investigação de Gaps

1. **Para visual finos (G004-G012)**:
   ```bash
   cd aidesign-kit-refatoracao-de-sites-python
   uv run python tools/parity/probe_selector_screenshot.py "http://localhost:8000" \
     --selector ".faq-items" --viewport 1440x900 --initial-wait-ms 3000
   uv run python tools/parity/probe_selector_screenshot.py "http://localhost:5000" \
     --selector ".faq-items" --viewport 1440x900 --initial-wait-ms 3000
   # Compare as imagens resultantes no tools/artifacts/
   ```

2. **Para metric differences (spacing, font-size)**:
   ```bash
   uv run python tools/parity/probe_selector_metrics.py "http://localhost:8000" \
     --selector "h2" --viewport 1440x900 --format json
   uv run python tools/parity/probe_selector_metrics.py "http://localhost:5000" \
     --selector "h2" --viewport 1440x900 --format json
   uv run python tools/parity/compare_selector_metrics.py \
     --left METRICS_RAW.json --right METRICS_REFAT.json --format text
   ```

3. **Para re-validação final**:
   ```bash
   uv run python tools/parity/capture_scroll_steps.py "http://localhost:8000" \
     --output /tmp/final_raw --initial-wait-ms 3000
   uv run python tools/parity/capture_scroll_steps.py "http://localhost:5000" \
     --output /tmp/final_refatorado --initial-wait-ms 3000
   uv run python tools/parity/compare_scroll_steps.py \
     --left /tmp/final_raw/localhost-8000/1440x900 \
     --right /tmp/final_refatorado/localhost-5000/1440x900 \
     --left-label raw --right-label refatorado --format text
   ```

### Comunicação

- Ao iniciar, diga qual gap vai atacar primeiro (G004, G005, G010).
- Ao ajustar CSS, cite a linha/propriedade exata que mudou.
- Ao concluir, rode os testes e reporte score final.
- Se encontrar novo gap: interrompa, documente e reporte.

### Autonomia

- Rode TODOS os comandos do kit você mesmo (não peça para o usuário rodar).
- Se um ajuste CSS quebrar algo, reverta e tente abordagem diferente.
- Se score não melhorar depois de 2 tentativas: marque como "aceitável" e passe para próximo gap.

</techniques>

<done_criteria>

- ✓ Arquivo `06-contexto-problemas-paridade.md` lido e entendido.
- ✓ Todos os gaps G001-G014 foram revisados no DevTools (navegador manual ou tool screenshots).
- ✓ Pelo menos gaps G004, G005, G010 (Prioridade 1) foram corrigidos (score visual reduzido).
- ✓ Score final de paridade desktop < 35.0, mobile < 33.0 (ou explicação se não for possível).
- ✓ Nenhum novo gap introduzido.
- ✓ Responsividade mantida.
- ✓ Teste manual OK: páginas renderizam sem erros, layout responsivo funciona.

</done_criteria>

