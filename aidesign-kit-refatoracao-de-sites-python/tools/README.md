# Tools

Use as tools oficiais do kit a partir de `aidesign-kit-refatoracao-de-sites-python/`.

## Setup obrigatório

Todos os exemplos abaixo assumem que o shell já está dentro de `aidesign-kit-refatoracao-de-sites-python/`.

Use este bootstrap idempotente no início do chat:

```bash
if [ -d aidesign-kit-refatoracao-de-sites-python ]; then
  cd aidesign-kit-refatoracao-de-sites-python
fi
uv sync
```

Se a etapa usar `tools/parity/`:

```bash
uv run playwright install chromium
```

Regras:

- não rode `python3 tools/...` direto
- use `uv run python tools/...`
- o aviso `VIRTUAL_ENV=/usr ... will be ignored` do `uv` é esperado em alguns ambientes
- se você já estiver dentro do kit, não tente dar `cd aidesign-kit-refatoracao-de-sites-python` de novo

## Famílias

```text
tools/
  common/
  artifacts/
  custom/
  paths/
  html/
  css/
  js/
  parity/
```

## Contrato

- rode com `uv run python tools/...`
- `--root` é opcional e aponta por padrão para a pasta pai do kit
- quando `--root` for usado, caminhos posicionais devem ser relativos a ele
- saída padrão: `text` compacto
- saída opcional: `--format json`
- use `--output` quando quiser salvar resultado ou artefatos
- a saída deve preferir caminhos relativos ao projeto, não caminhos absolutos do sistema
- a doc curta de cada tool fica ao lado do arquivo
- exclusões padrão: `.git`, `.venv`, `__pycache__`, `.pytest_cache`, `node_modules`, `dist`, `build`, `.next`, `.nuxt`, `.turbo`, `.cache`, `.parcel-cache`, `coverage`, `playwright-report`, `test-results`, `.idea`, `.vscode`
