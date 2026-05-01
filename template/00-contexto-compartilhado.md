# Contexto Compartilhado Curto

Arquivo base para todos os agentes deste kit.

Leia este arquivo no início de cada etapa. Não leia o `README.md` por padrão.

## Natureza da refatoração

- isto não é um redesign
- o objetivo é recriar o site baixado inteiro com máxima fidelidade visual e comportamental
- o resultado final deve ser essencialmente o mesmo site, só que limpo, organizado, separado por arquivos, placeholderizado e mais fácil de editar
- você pode trocar a stack quando o processo pedir, mas não pode trocar a identidade visual, a hierarquia, a sensação de layout ou o comportamento principal
- se houver dúvida entre inventar uma solução nova ou reproduzir o original, reproduza o original
- placeholders devem manter o volume visual aproximado do conteúdo original
- placeholder não significa “substituir qualquer asset”
- placeholderize principalmente: textos, imagens de conteúdo, vídeos, nomes de marca, preços e copy comercial
- preserve como parte do sistema visual: modelos 3D, canvas, SVGs estruturais, ícones, texturas, gradientes, assets que compõem layout, assets usados por motion e assets necessários para comportamento visual
- só substitua um asset estrutural se ele estiver realmente corrompido ou ausente, e nesse caso use um equivalente da mesma categoria, não uma imagem genérica

## Regra de intake de assets e código legado

- `site-refatorado/` é uma reimplementação limpa, não um espelho de `clean/` ou `raw/`
- só leve para o projeto novo arquivos realmente referenciados pelo código novo
- descubra primeiro quais arquivos o HTML, o CSS e o JS novos realmente usam; copie ou crie os assets só depois disso
- não mantenha arquivos “por garantia”, “vai que precisa” ou “porque existiam no legado”
- CSS autoral do projeto novo fica em `site-refatorado/static/css/`
- JS autoral do projeto novo fica em `site-refatorado/static/js/`
- `site-refatorado/static/assets/` existe apenas para assets de runtime realmente usados
- dentro de `static/assets/`, prefira apenas subpastas como `images/`, `videos/`, `icons/`, `fonts/`, `models/`, `data/` e `placeholders/`, quando forem realmente necessárias
- nunca crie `site-refatorado/static/assets/css/` ou `site-refatorado/static/assets/js/`
- nunca despeje folhas CSS antigas, bundles JS antigos, HTMLs auxiliares, SDKs, dumps de rastreamento ou diretórios espelhados dentro de `static/assets/`
- se uma lib conhecida existir no legado, prefira CDN oficial em vez de copiar o arquivo bruto
- antes de encerrar cada etapa, remova assets órfãos e registre no handoff apenas os assets realmente mantidos

## Pastas do projeto

### `./raw/`

- referência visual absoluta
- melhor fonte para rodar o site e tirar screenshots
- vence qualquer divergência visual contra `clean/`

### `./clean/`

- base técnica principal para leitura
- mais organizado que `raw/`
- ainda pode conter scripts lixo e tracking
- pode renderizar com pequenas quebras por causa da reorganização automática

### `./site-refatorado/`

- projeto novo
- pode ainda não existir na etapa 1
- nasce na etapa de HTML
- é o alvo de todas as etapas de refatoração

## Tools oficiais do kit

As tools oficiais vivem em:

- `aidesign-kit-refatoracao-de-sites-python/tools/`

Leia `aidesign-kit-refatoracao-de-sites-python/tools/README.md` só se precisar lembrar o contrato geral das CLIs.

## Bootstrap obrigatório das tools

Antes da primeira tool do chat, prepare o ambiente.

Todos os comandos do kit assumem que o shell já está dentro de `aidesign-kit-refatoracao-de-sites-python/`.

Use este bootstrap idempotente:

```bash
if [ -d aidesign-kit-refatoracao-de-sites-python ]; then
  cd aidesign-kit-refatoracao-de-sites-python
fi
uv sync
```

Se a etapa usar tools de paridade visual, rode também:

```bash
uv run playwright install chromium
```

Regras importantes:

- não rode `python3 tools/...` direto
- rode `uv run python tools/...`
- se aparecer o aviso `VIRTUAL_ENV=/usr ... will be ignored`, trate como aviso normal do `uv`
- não repita `cd aidesign-kit-refatoracao-de-sites-python` se você já estiver dentro da pasta
- os exemplos do kit assumem que o bootstrap acima já foi feito

### Família por etapa

- etapa 1: apenas `tools/paths/`
- etapa 2: apenas `tools/paths/` e `tools/html/`
- etapa 3: apenas `tools/css/`
- etapa 4: apenas `tools/js/`
- etapa 5: apenas `tools/parity/`
- etapa 6: priorize `tools/parity/` e consulte o resto só quando o gap exigir outra camada

### Regra principal de uso

- cada etapa deve preferir a própria família oficial
- não puxe tools de outras famílias por conveniência
- exceção: a etapa 6 pode consultar o restante para localizar a origem do gap, mas a evidência principal continua vindo de `parity/`

## Stack padrão

Use por padrão:

- `Flask + Jinja2`
- `HTML`
- `CSS`
- `JavaScript` modular

Só escolha outra stack se houver motivo técnico objetivo.

## Arquitetura alvo do projeto novo

O `site-refatorado/` deste kit Python deve nascer assim por padrão:

```text
site-refatorado/
  app.py
  pyproject.toml
  templates/
    base.html
    index.html
  static/
    css/
      tokens.css
      components/
    js/
    assets/  # opcional, só para assets realmente usados
```

Regras:

- prefira HTML + Jinja em `templates/`
- prefira CSS autoral em `static/css/`
- prefira JS autoral em `static/js/`
- assets confirmados ficam em `static/assets/` só quando realmente forem usados
- frameworks e libs visuais conhecidas devem preferir CDN oficial em vez de cópias locais

## Regra de verdade por camada

- visual: `raw/`
- leitura técnica de origem: `clean/`
- código novo: `site-refatorado/`

## Regras de processo

1. Cada etapa gera um handoff curto dentro de `aidesign-kit-refatoracao-de-sites-python/handoffs/`.
2. O próximo agente deve preferir ler o handoff anterior antes de reler código antigo.
3. Cada handoff deve explicar o suficiente para o próximo chat continuar sem repetir a investigação inteira da etapa anterior.
4. Não use todos os guias; use apenas o guia da sua etapa.
5. Exceção: a etapa 6 pode ler todos os guias.
6. Só a etapa 6 pode usar `aidesign-kit-refatoracao-de-sites-python/guides/HOW_2_WRITE_PROMPTS.md`.
7. As tools oficiais devem ser preferidas a leituras brutais de arquivos.
8. Saída padrão das tools: `text` compacto. Use `json` só quando ajudar a automatizar ou salvar artefato curto.

## Regras de implementação

- não copie bundles minificados para o projeto final
- não copie folhas CSS antigas para `site-refatorado/static/assets/`
- não copie arquivos JS legados para `site-refatorado/static/assets/js/`
- não trate `clean/` como verdade visual
- não “adivinhe” frameworks ou libs; classifique só o que tiver evidência direta
- não use Python global do sistema
- se usar Python, use `uv`
- não replique libs conhecidas como arquivos locais se um CDN oficial resolver melhor
- não transforme o site em uma versão “inspirada”; preserve a identidade do original
- valide a etapa antes de encerrar

## Caminho dos handoffs

- `aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/04-js-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/05-polimento-handoff.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/06-contexto-problemas-paridade.md`
- `aidesign-kit-refatoracao-de-sites-python/handoffs/06-prompt-correcao-final.md`
