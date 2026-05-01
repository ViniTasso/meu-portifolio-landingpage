# Guia HTML — Tools, Debug, Leitura e Edição

Use este guia quando a etapa principal for estrutural.

## Natureza do trabalho

Esta etapa não redesenha o site.

Ela recria o mesmo site baixado, com a mesma hierarquia, a mesma sensação visual e os mesmos blocos principais, mas em código limpo, separado e preparado para placeholders.

## Bootstrap desta etapa

Assuma que você já rodou o bootstrap do `00-contexto-compartilhado.md` e já está dentro de `aidesign-kit-refatoracao-de-sites-python/`.

## Fonte de verdade para HTML

- estrutura e código: `./clean/`
- verificação visual do resultado: `./raw/`

## Escopo desta etapa

- mapear páginas e seções
- migrar HTML para `templates/*.html` com Jinja2
- preservar wrappers, landmarks, IDs e hooks
- remover inline styles do markup
- placeholderizar conteúdo
- organizar a base estrutural do `site-refatorado/` com `app.py`, `templates/` e `static/`

## Tools oficiais desta etapa

Use apenas `tools/paths/` e `tools/html/`.

### `tools/paths/`

- `compact_tree.py`: mapa rápido da árvore
- `find_paths.py`: entrypoints, HTMLs, assets e arquivos-chave
- `file_focus_excerpt.py`: leitura curta e focada de trechos
- `path_stats.py`: hotspots por pasta e extensão

### `tools/html/`

- `find_sections.py`: landmarks, seções, IDs, `data-*`, mídia e wrappers
- `find_migration_issues.py`: inline styles, handlers, attrs delicados, IDs duplicados e tags que exigem revisão manual
- `query_dom.py`: busca por seletor, atributo, texto ou tag
- `find_asset_usage.py`: onde imagens, vídeos, poster, SVG, canvas e modelos aparecem
- `wrapper_map.py`: hierarquia curta de wrappers em blocos importantes

## Ordem recomendada

1. confirme que o bootstrap do kit já foi feito e que o shell já está dentro de `aidesign-kit-refatoracao-de-sites-python/`
2. rode `compact_tree.py` ou `path_stats.py` só para orientar a leitura
3. use `find_paths.py` para localizar os HTMLs e assets principais
4. rode `find_sections.py` no HTML principal
5. use `wrapper_map.py` e `query_dom.py` para confirmar blocos críticos
6. rode `find_migration_issues.py` nos arquivos que serão migrados
7. use `find_asset_usage.py` quando houver mídia, canvas, vídeo ou 3D
8. use `file_focus_excerpt.py` para ler só os trechos necessários

Exemplos seguros:

```bash
uv run python tools/paths/compact_tree.py clean --max-depth 3
uv run python tools/html/find_sections.py --file clean/index.html
uv run python tools/paths/file_focus_excerpt.py --file clean/index.html --lines 40-80
```

## O que preservar ao migrar

- ordem dos blocos
- wrappers que controlam spacing, overflow, clipping ou sticky
- IDs usados por âncora, CSS ou JS
- `data-*` usados por motion, tabs, sliders, accordions ou scroll
- `aria-*`, `role`, `alt`, `label`, `for`, `name`
- relações entre `picture`, `source` e `img`
- containers de vídeo, canvas e 3D
- a composição necessária para renderizar com Jinja sem perder a estrutura original

## O que pode ser refatorado

- textos
- nomes de marca
- produtos e preços
- copy comercial
- marcação redundante
- inline styles

Preserve o volume visual do conteúdo.

## Regra de intake de assets

- não espelhe `clean/assets/` ou `raw/` para dentro de `site-refatorado/static/assets/`
- só crie ou copie assets depois que o markup novo realmente referenciar esses arquivos
- `site-refatorado/static/assets/` deve receber apenas assets usados de verdade pelo código novo
- use subpastas simples e claras, como `images/`, `videos/`, `icons/`, `fonts/`, `models/`, `data/` e `placeholders/`, só quando forem necessárias
- nunca coloque CSS autoral ou JS autoral dentro de `site-refatorado/static/assets/`
- nunca crie `site-refatorado/static/assets/css/` ou `site-refatorado/static/assets/js/`
- não carregue logos, imagens, fontes ou modelos “por segurança”; mantenha apenas o que estiver em uso
- se você ainda não souber se um asset será usado, não copie agora; registre no handoff e deixe a etapa certa decidir

## Regra de placeholder

Placeholderize principalmente:

- textos
- imagens editoriais ou comerciais
- vídeos
- nomes, preços e conteúdo comercial

Não placeholderize por padrão:

- modelos 3D
- canvas
- SVGs estruturais ou ícones
- texturas, fundos e assets que compõem a atmosfera visual
- assets usados por motion, parallax, WebGL ou comportamento visual

Se um asset estrutural estiver ausente ou corrompido, substitua por um equivalente da mesma categoria, não por uma imagem genérica.

## Saída esperada desta etapa

Ao fim da etapa HTML, o projeto novo deve ter pelo menos:

- `site-refatorado/app.py`
- `site-refatorado/pyproject.toml`
- `site-refatorado/templates/base.html`
- `site-refatorado/templates/index.html`
- estrutura inicial de `site-refatorado/static/`

## Handoff desta etapa

Ao terminar a etapa HTML, gere:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/02-html-handoff.md`

Inclua:

- páginas e componentes criados
- wrappers, IDs e hooks preservados
- placeholders aplicados
- assets já mantidos porque o markup novo usa
- itens do legado que não devem ser copiados nas próximas etapas
- arquivos criados ou editados
- pontos que o agente de CSS precisa saber

## Antipadrões

- trocar todas as classes antes do CSS ser mapeado
- simplificar `picture`, `video` ou `canvas` cedo demais
- apagar `data-*` porque parecem supérfluos
- espelhar árvore de assets do legado para dentro de `site-refatorado/static/assets/`
- usar regex para grandes mudanças estruturais
- usar `clean/` como verdade visual
