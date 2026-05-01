# AI Design Kit — Refatoração de Sites (Python)

Kit de prompts, guias e handoffs para transformar um site baixado em um template refatorado, reutilizável e fiel ao original.

Este `README` é para desenvolvedores. Os agentes não devem lê-lo por padrão. Eles devem ler `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md` e os arquivos específicos da etapa.

## Ideia central

O processo foi desenhado para trabalhar bem com IAs em chats separados, com contexto limitado.

Em vez de tentar fazer uma única IA ler tudo, entender tudo e refatorar tudo de uma vez, o fluxo divide o trabalho em etapas curtas, com handoffs internos.

Cada etapa:

1. lê só o contexto mínimo necessário
2. faz uma parte específica do trabalho
3. documenta o que produziu
4. encerra o chat

O próximo chat continua a partir dessa documentação curta, não a partir do histórico inteiro do chat anterior.

## Modelo prático das pastas do projeto

Quando você copia este kit para dentro de um site baixado, o cenário esperado é:

```text
./
├── raw/
├── clean/
├── site-refatorado/  # opcional no início
└── aidesign-kit-refatoracao-de-sites-python/
```

### `raw/`

É a fonte de verdade visual.

- é o mais fiel ao site original no browser
- é o melhor baseline para print, auditoria visual e comparação final
- deve ser usado para rodar o site por automação e capturar screenshots
- se houver divergência entre `raw/` e `clean/`, na parte visual o `raw/` vence

### `clean/`

É a fonte de leitura técnica principal.

- costuma estar mais organizado que o `raw/`
- separa scripts e assets em pastas melhores
- pode continuar contendo lixo, tracking e código morto
- pode quebrar alguma coisa no Chrome por causa da reorganização automática
- ajuda muito na leitura de HTML, CSS, JS e assets
- não deve ser tratado como baseline visual absoluto

### `site-refatorado/`

É o projeto novo.

- pode ainda não existir na etapa 1
- nasce na etapa de HTML
- por padrão usa `Flask + Jinja2 + HTML + CSS + JS modular`
- é onde a refatoração final acontece

## Regra de higiene de assets e código

O projeto novo não deve espelhar o legado.

- CSS autoral deve viver em `site-refatorado/static/css/`
- JS autoral deve viver em `site-refatorado/static/js/`
- `site-refatorado/static/assets/` deve existir só para assets realmente usados
- não devem existir diretórios como `site-refatorado/static/assets/css/` ou `site-refatorado/static/assets/js/`
- não devem existir HTMLs auxiliares, SDKs, dumps de CSS ou dumps de JS copiados “por garantia”
- ao final de cada etapa, o agente deve remover arquivos órfãos e registrar só o que ficou de fato em uso

## Estrutura do kit

```text
aidesign-kit-refatoracao-de-sites-python/
├── 00-contexto-compartilhado.md
├── README.md
├── guides/
│   ├── 01-guia-html-tools-debug-edicao.md
│   ├── 02-guia-css-tools-debug-edicao.md
│   ├── 03-guia-js-tools-debug-edicao.md
│   ├── 04-guia-paridade-visual.md
│   └── HOW_2_WRITE_PROMPTS.md
├── tools/
│   ├── README.md
│   ├── paths/
│   ├── html/
│   ├── css/
│   ├── js/
│   └── parity/
├── handoffs/
│   ├── 01-contexto-projeto.md
│   ├── 02-html-handoff.md
│   ├── 03-css-handoff.md
│   ├── 04-js-handoff.md
│   ├── 05-polimento-handoff.md
│   ├── 06-contexto-problemas-paridade.md
│   └── 06-prompt-correcao-final.md
└── prompts/
    ├── 01-prompt-contexto-inicial.md
    ├── 02-prompt-refatoracao-html.md
    ├── 03-prompt-refatoracao-css.md
    ├── 04-prompt-refatoracao-js.md
    ├── 05-prompt-polimento-final.md
    └── 06-prompt-auditoria-paridade.md
```

## Regras do processo

1. `raw/` é a verdade visual.
2. `clean/` é a base técnica de leitura.
3. O projeto final nasce em `site-refatorado/`.
4. Cada etapa acontece em um chat novo.
5. Cada etapa gera um handoff curto dentro de `aidesign-kit-refatoracao-de-sites-python/handoffs/`.
6. Cada agente lê só o guia específico da etapa dele.
7. Só a etapa 6 lê todos os guias.
8. O `README` não é parte do contexto dos agentes.
9. Python continua permitido, mas só com `uv` e `.venv`.
10. O prompt 6 é a única etapa que pode usar `HOW_2_WRITE_PROMPTS.md`.

## Tools oficiais

As tools oficiais ficam em `aidesign-kit-refatoracao-de-sites-python/tools/`.

- o README curto das tools está em `aidesign-kit-refatoracao-de-sites-python/tools/README.md`
- cada etapa deve usar só a própria família oficial
- a etapa 6 prioriza `parity/` e consulta o restante só quando precisar localizar a origem do gap

## Como gerenciar os chats

Este processo pressupõe contexto curto e isolado.

### Regra principal

Abra um chat novo ao final de cada etapa.

Não continue no mesmo chat para HTML, CSS, JS, polimento e auditoria. Isso gasta contexto, mistura decisões e faz a IA reler material demais.

### Como iniciar cada chat

Em cada etapa:

1. use o prompt da etapa correspondente em `aidesign-kit-refatoracao-de-sites-python/prompts/`
2. deixe o agente ler o `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
3. deixe o agente ler só o guia da etapa
4. deixe o agente ler só os handoffs necessários
5. não carregue o histórico do chat anterior

### O que muda na prática

- o agente de HTML não precisa herdar o chat do contexto inicial
- o agente de CSS não precisa reler tudo que o de HTML leu
- o agente de JS não precisa reabrir toda a origem do zero
- o agente de polimento trabalha mais por handoff + comparação visual
- o agente de auditoria final é o único com visão completa

## Fluxo completo

### Etapa 1 — Contexto inicial

Prompt:

- `aidesign-kit-refatoracao-de-sites-python/prompts/01-prompt-contexto-inicial.md`

Saída:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`

Objetivo:

- entender o projeto
- classificar os arquivos
- detectar stack, bundlers, assets e riscos
- preparar uma visão curta para as próximas etapas

### Etapa 2 — HTML

Prompt:

- `aidesign-kit-refatoracao-de-sites-python/prompts/02-prompt-refatoracao-html.md`

Leituras principais:

- `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
- `aidesign-kit-refatoracao-de-sites-python/guides/01-guia-html-tools-debug-edicao.md`

Saída:

- `site-refatorado/`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`

Objetivo:

- criar a base estrutural em Flask + Jinja2
- traduzir conteúdo e placeholderizar
- preservar wrappers, IDs, `data-*` e landmarks

### Etapa 3 — CSS

Prompt:

- `aidesign-kit-refatoracao-de-sites-python/prompts/03-prompt-refatoracao-css.md`

Leituras principais:

- `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/guides/02-guia-css-tools-debug-edicao.md`

Saída:

- CSS aplicado no `site-refatorado/`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`

Objetivo:

- aplicar fidelidade visual
- centralizar tokens
- deixar o layout e a aparência principal corretos

### Etapa 4 — JS

Prompt:

- `aidesign-kit-refatoracao-de-sites-python/prompts/04-prompt-refatoracao-js.md`

Leituras principais:

- `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/guides/03-guia-js-tools-debug-edicao.md`

Saída:

- JS refatorado no `site-refatorado/`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/04-js-handoff.md`

Objetivo:

- recriar interações, motion e comportamento visível
- separar bundles mistos
- usar libs adequadas na stack nova

### Etapa 5 — Polimento final

Prompt:

- `aidesign-kit-refatoracao-de-sites-python/prompts/05-prompt-polimento-final.md`

Leituras principais:

- `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/04-js-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/guides/04-guia-paridade-visual.md`

Saída:

- ajustes finos no `site-refatorado/`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/05-polimento-handoff.md`

Objetivo:

- corrigir responsividade
- fechar detalhes visuais
- ajustar motion fino
- reduzir gaps mais visíveis

### Etapa 6 — Auditoria final de paridade

Prompt:

- `aidesign-kit-refatoracao-de-sites-python/prompts/06-prompt-auditoria-paridade.md`

Leituras principais:

- `aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/04-js-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/05-polimento-handoff.md`
- todos os guias
- `HOW_2_WRITE_PROMPTS.md`

Saídas:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/06-contexto-problemas-paridade.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/06-prompt-correcao-final.md`

Objetivo:

- comparar `raw/` vs `site-refatorado/`
- registrar gaps com evidência
- gerar o prompt técnico final para o agente corretor

## Como usar os guias

### `aidesign-kit-refatoracao-de-sites-python/guides/01-guia-html-tools-debug-edicao.md`

Use quando a etapa for estrutural:

- HTML
- Jinja
- landmarks
- placeholders
- wrappers

### `aidesign-kit-refatoracao-de-sites-python/guides/02-guia-css-tools-debug-edicao.md`

Use quando a etapa for visual:

- tokens
- layout
- cascade
- breakpoints
- keyframes

### `aidesign-kit-refatoracao-de-sites-python/guides/03-guia-js-tools-debug-edicao.md`

Use quando a etapa for comportamental:

- eventos
- motion
- bundles
- source maps
- canvas
- WebGL

### `aidesign-kit-refatoracao-de-sites-python/guides/04-guia-paridade-visual.md`

Use quando a etapa for comparar resultado:

- screenshots por viewport
- diff
- trace
- motion parity
- responsividade

## Regra especial da comparação visual

Não use screenshot de página inteira como artefato principal para IA.

O método preferido é:

1. definir a altura da viewport
2. capturar `y=0`
3. rolar exatamente uma altura de viewport
4. capturar `y=1vh`
5. repetir até o fim

Isso dá para a IA uma sequência de imagens legíveis, em vez de um print gigante pouco confiável.

## Stack padrão do projeto novo

Por padrão, o kit assume:

- `Flask`
- `Jinja2`
- `HTML`
- `CSS`
- `JavaScript` modular
- `uv`

Use outra stack só se houver motivo técnico real.

## Uso de Python

Python continua muito útil para:

- parsing
- auditoria
- scripts auxiliares
- análise de logs
- transformação de dados

Mas a regra continua:

- nunca instalar no Python global
- sempre usar `uv`
- sempre usar `.venv`

## Resultado esperado

Ao final do fluxo, você deve ter:

- `site-refatorado/` funcional
- um histórico curto de handoffs por etapa
- uma auditoria final objetiva
- um prompt final de correção pronto para nova rodada

Esse kit não tenta substituir leitura de código. Ele organiza a leitura certa, no momento certo, com o mínimo de contexto desperdiçado.
