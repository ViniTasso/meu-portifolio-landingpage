# meu-portifolio-landingpage
Landing Page com Portifólio pessoal, empresarial e outras informações.

# 📦 Padrão de Versionamento Git – Projetos de Sites

Este repositório segue um padrão de versionamento focado em:

* 📌 Rastreabilidade de versões (cada site finalizado)
* 🧠 Histórico limpo e organizado
* 🚀 Facilidade para revisitar projetos antigos

---

# 🧠 Conceitos Utilizados

## 🔖 Tags (Principal estratégia)

Tags são usadas para marcar pontos específicos no tempo (versões finalizadas de sites).

👉 Uma tag aponta para um commit específico e **não muda**.

Exemplo:

```
site1-final
site2-final
landing-x-v1
```

---

# 🚀 Fluxo Principal (Recomendado)

## ✔️ Desenvolvimento contínuo na `main`

Todo desenvolvimento ocorre diretamente na branch `main`.

---

## ✔️ Finalização de um site

1. Finalize o desenvolvimento:

```bash
git add .
git commit -m "feat: site1 finalizado"
```

2. Crie uma tag:

```bash
git tag site1-final
```

3. Envie para o repositório:

```bash
git push origin main site1-final
```

---

## ✔️ Novo site

Continue normalmente:

```bash
git add .
git commit -m "feat: site2 finalizado"
git tag site2-final
git push origin main site2-final
```

---

## 🧭 Resultado

```text
main: A → B → C → D → E

tags:
site1-final → C
site2-final → E
```

---

## 🔍 Acessar versões antigas

```bash
git checkout site1-final
```

---

# 🧪 Fluxo Alternativo (Branch por Site + Squash)

⚠️ Este fluxo é opcional e utilizado para estudo/organização isolada por projeto.

---

## ✔️ Criar uma branch para o site

```bash
git switch -c site/site1
```

---

## ✔️ Desenvolvimento livre

Commits podem ser feitos sem preocupação com organização:

```bash
git commit -m "WIP: layout inicial"
git commit -m "ajustes visuais"
git commit -m "finalização"
```

---

## ✔️ Finalização com squash

1. Voltar para `main`:

```bash
git switch main
```

2. Fazer merge com squash:

```bash
git merge --squash site/site1
```

3. Criar commit final:

```bash
git commit -m "feat: site1 completo"
```

4. Criar tag:

```bash
git tag site1-final
```

5. Enviar:

```bash
git push origin main site1-final
```

---

## 🧭 Resultado

```text
main: A → B → C

(site1 teve 50 commits, mas virou 1 commit limpo)
```

---

## 🧹 Limpeza

Após merge:

```bash
git branch -d site/site1
git push origin --delete site/site1
```

---

# 🔥 Boas práticas adotadas

* ✔️ Commits frequentes
* ✔️ Tags para versionamento
* ✔️ Histórico limpo na `main`
* ✔️ Separação opcional por branch
* ✔️ Uso de squash para simplificação

---

# ⚠️ Observações importantes

* Tags não são enviadas automaticamente → usar:

```bash
git push --tags
```

ou:

```bash
git push origin main nome-da-tag
```

* Tags são imutáveis por padrão (não reutilizar nomes)

---

# 🧠 Insight Final

* `commit` → evolução do código
* `branch` → linha de desenvolvimento
* `tag` → ponto fixo no tempo

👉 Este repositório utiliza **tags como principal mecanismo de rastreabilidade**.

---

# 🚀 Evoluções futuras

* Versionamento semântico (`v1.0`, `v2.0`)
* Automação de releases
* Integração com CI/CD
* Organização por múltiplos projetos

---
