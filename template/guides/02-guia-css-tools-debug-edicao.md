# Guia CSS — Tools, Debug, Leitura e Edição

Use este guia quando a etapa principal for visual.

## Natureza do trabalho

Esta etapa não cria uma nova direção de arte.

Ela reproduz o design do site baixado para que o resultado final pareça o mesmo site, só que refatorado e mais fácil de manter.

## Bootstrap desta etapa

Assuma que você já rodou o bootstrap do `00-contexto-compartilhado.md` e já está dentro de `aidesign-kit-refatoracao-de-sites-python/`.

## Fonte de verdade para CSS

- leitura e extração de estilos: `./clean/`
- validação visual final: `./raw/`

## Escopo desta etapa

- extrair tokens
- reconstruir layout e aparência
- organizar estilos por camada
- depurar cascata, media queries e motion CSS
- preencher a arquitetura de estilos do `site-refatorado/` servido por Flask/Jinja

## Tools oficiais desta etapa

Use apenas `tools/css/`.

- `find_tokens.py`: tokens reais, breakpoints, durations, easing e keyframes
- `link_html_css.py`: quais regras atingem um bloco do HTML
- `find_rule_overrides.py`: como a cascata muda ao longo dos arquivos
- `find_visual_patterns.py`: gradient, blur, backdrop, sticky, clip-path, mask, blend e filter
- `find_media_impact.py`: o que muda em cada breakpoint

## Ordem recomendada

1. rode `find_tokens.py`
2. use `find_visual_patterns.py` para localizar efeitos visuais densos
3. use `link_html_css.py` nas seções principais do HTML novo
4. use `find_rule_overrides.py` quando a cascata estiver obscura
5. use `find_media_impact.py` quando o responsivo estiver sensível
6. aplique layout macro, tipografia, superfícies e spacing fino
7. valide contra o `raw/`

## O que deve virar token

- cores
- fontes
- espaçamentos
- radius
- shadows
- borders
- breakpoints
- durations
- easing

## Organização recomendada

- `site-refatorado/static/css/tokens.css`
- `site-refatorado/static/css/style.css`
- `site-refatorado/static/css/components/motion.css`
- `site-refatorado/static/css/components/*.css`

Regras práticas:

- `tokens.css` deve concentrar variáveis reutilizáveis
- `base.html` deve carregar a base de CSS
- componentes ou seções podem ser separados em arquivos quando isso reduzir acoplamento

## Regra de assets para CSS

- CSS autoral fica em `site-refatorado/static/css/`, não em `site-refatorado/static/assets/`
- nunca crie `site-refatorado/static/assets/css/`
- não despeje folhas antigas do legado dentro de `site-refatorado`
- se o CSS novo precisar de fontes, imagens, SVGs ou vídeos de fundo, mantenha apenas os arquivos realmente referenciados
- não copie diretórios inteiros de fontes ou imagens só porque apareceram no legado
- se um asset visual não estiver mais referenciado depois da refatoração, ele deve ser removido

## Handoff desta etapa

Ao terminar a etapa CSS, gere:

- `aidesign-kit-refatoracao-de-sites-python/handoffs/03-css-handoff.md`

Inclua:

- tokens criados
- arquivos de estilo criados ou editados
- mapa seção -> estilo
- breakpoints e keyframes importantes
- fontes e assets visuais realmente mantidos
- css legado descartado e assets órfãos removidos
- gaps visuais restantes

## Antipadrões

- inventar tokens
- usar `!important` como atalho
- usar só `clean/` e ignorar o `raw/`
- esconder erro estrutural com compensação de CSS
- despejar CSS legado dentro de `static/assets/` para “ganhar tempo”
- concentrar tudo em um único arquivo gigante
