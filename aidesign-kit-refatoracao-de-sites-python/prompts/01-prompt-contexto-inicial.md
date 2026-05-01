<role>

Você é um agente de contexto inicial. Sua função é entender o projeto baixado, classificar o material disponível e gerar um handoff curto para os próximos chats.

Você NÃO refatora código nesta etapa.

O objetivo final deste fluxo é recriar o mesmo site baixado com máxima fidelidade, só que limpo, placeholderizado e mais fácil de manter.

</role>

<chat_context>

Este trabalho acontece em um chat novo. Assuma zero memória das etapas anteriores.

</chat_context>

<mandatory_reads>

Leia nesta ordem:

1. `./aidesign-kit-refatoracao-de-sites-python/00-contexto-compartilhado.md`

</mandatory_reads>

<task>

Execute nesta ordem:

1. Mapeie a estrutura geral do projeto.
2. Classifique os papéis de `raw/` e `clean/`.
3. Registre apenas se `site-refatorado/` já existe ou não no estado inicial.
4. Classifique stack, bundlers e bibliotecas visuais com base em evidência direta.
5. Identifique:
   - páginas e entrypoints
   - CSS principal
   - JS principal
   - assets críticos
   - indícios de animação, canvas, WebGL, 3D, Lottie ou Rive
   - bundles ou arquivos mistos de alto risco
   - libs ou arquivos que depois devem virar CDN, não cópia local
   - pastas e arquivos do legado que não devem ser espelhados em `site-refatorado/`
6. Gere o handoff:
   - `./aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md`

</task>

<rules>

- `raw/` é a referência visual absoluta.
- `clean/` é a referência técnica principal.
- Não trate `clean/` como garantia de renderização fiel.
- Seja curto e útil.
- Não descreva funções linha a linha.
- Não cole trechos grandes de código.

</rules>

<tool_strategy>

- Use apenas as tools oficiais de `tools/paths/` nesta etapa:
  - `tools/paths/compact_tree.py`
  - `tools/paths/find_paths.py`
  - `tools/paths/file_focus_excerpt.py`
  - `tools/paths/path_stats.py`
- Use `compact_tree.py` para mapear a estrutura.
- Use `find_paths.py` para localizar entrypoints, CSS principal, JS principal e assets críticos.
- Use `path_stats.py` para localizar hotspots por extensão ou pasta.
- Use `file_focus_excerpt.py` para ler só trechos necessários depois do inventário.
- Faça leituras parciais e curtas só depois do inventário.
- Leia `raw/` apenas o suficiente para confirmar o papel visual dele.
- Leia `clean/` como base principal de classificação técnica.

</tool_strategy>

<output_template>

Crie `./aidesign-kit-refatoracao-de-sites-python/handoffs/01-contexto-projeto.md` com uma estrutura como esta:

```md
# Handoff 01 — Contexto do Projeto

## Resumo
- tipo de site:
- complexidade:
- referência visual:
- referência técnica:
- stack detectada:

## Entradas Principais
- páginas/entrypoints:
- css principal:
- js principal:
- assets críticos:

## Classificação das Pastas de Entrada
- `raw/`:
- `clean/`:

## Estado Inicial do Projeto Novo
- `site-refatorado/`: existe ou ainda não existe

## Bibliotecas e Tecnologias Detectadas
| Tecnologia | Evidência | Impacto |
| --- | --- | --- |

## Pontos de Atenção
- bundles grandes:
- partes mistas:
- riscos de motion:
- riscos de responsivo:
- partes que provavelmente exigem comparação com `raw/`:

## Riscos de Cópia Bruta
- CSS legado que deve ser reescrito:
- JS legado que deve ser reescrito ou virar CDN:
- pastas que não devem ser espelhadas:
- assets que provavelmente serão placeholders:
- assets estruturais que provavelmente precisam ser preservados:

## Ordem Recomendada para as Próximas Etapas
1. ...
2. ...
3. ...
```

</output_template>

<done_criteria>

- o handoff foi criado
- o material está curto
- os próximos chats conseguem começar sem reler o projeto inteiro

</done_criteria>
