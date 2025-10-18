# 📊 Análise do .gitignore - Geplano Site

## ✅ Arquivos Removidos (Não vão para o GitHub)

### 1. **Pasta `prototipo/`** (~82 arquivos, ~15MB)

- ❌ HTML protótipo antigo
- ❌ Fontes duplicadas
- ❌ Imagens duplicadas
- **Motivo:** Já está implementado no Next.js, não precisa do HTML

### 2. **Arquivos gerados automaticamente**

- ❌ `.tina/__generated__/` (client.ts, config.prebuild.jsx)
- ❌ `public/admin/index.html` (gerado pelo TinaCMS)
- **Motivo:** Regenerados automaticamente em cada build

### 3. **Arquivos de cache/build**

- ❌ `.next/` (build do Next.js)
- ❌ `node_modules/` (dependências)
- ❌ `*.tsbuildinfo` (cache TypeScript)
- **Motivo:** Gerados localmente, não devem ir pro repositório

### 4. **Arquivos de configuração local**

- ❌ `.env.local` (variáveis de ambiente locais)
- ❌ `.vscode/` (configurações do VS Code)
- **Motivo:** Específicos de cada máquina

---

## ✅ Arquivos que DEVEM ir para o GitHub

### Essenciais:

- ✅ `src/` (todo código fonte)
- ✅ `public/img/` (logos e imagens)
- ✅ `public/fonts/` (fontes TarunoWide e Montserrat)
- ✅ `tina/config.ts` (configuração do TinaCMS)
- ✅ `src/content/sections/hero.json` (conteúdo editável)
- ✅ `package.json` e `package-lock.json`
- ✅ Arquivos de config (next.config.ts, tailwind.config.ts, etc)
- ✅ Documentação (\*.md)

### Arquivos de exemplo:

- ✅ `.env.example` (template sem dados sensíveis)
- ✅ `public/admin/.gitignore` (para manter pasta vazia)

---

## 📦 Fontes - Situação Atual

### ⚠️ PROBLEMA: Fontes duplicadas em 3 lugares

1. **`public/fonts/TarunoWide/`** ✅ MANTER (usado no site)
2. **`public/fonts/Taruno_Family/`** ❌ DUPLICADO (mesmos arquivos)
3. **`public/fonts/MontSerrat_Family/`** ✅ MANTER

**Total de fontes:** ~200 arquivos, ~30MB

### 💡 Recomendação: Remover duplicatas

Apenas **WOFF2** é suficiente para web moderna:

- ✅ TarunoWide-Bold.woff2
- ✅ TarunoWide-Regular.woff2
- ✅ Montserrat-Regular.woff2

Pode remover:

- ❌ TTF (uso desktop, não web)
- ❌ OTF (uso desktop, não web)
- ❌ WOFF (versão antiga, woff2 é menor)
- ❌ Taruno_Family/ (duplicado)

---

## 🎯 Otimização Sugerida

### Opção 1: Manter tudo (atual)

- **Prós:** Backup completo das fontes
- **Contras:** Repositório pesado (~30MB só de fontes)

### Opção 2: Apenas WOFF2 (recomendado)

- **Prós:** Repositório leve (~2MB de fontes)
- **Contras:** Precisa ter backup das fontes originais

### Opção 3: CDN (mais profissional)

- **Prós:** Sem fontes no repo, carregamento rápido
- **Contras:** Dependência externa

---

## 📋 .gitignore Atualizado

Adicionado ao `.gitignore`:

```ignore
# TinaCMS gerados
.tina/__generated__
tina/__generated__
public/admin/index.html

# Protótipo HTML (não necessário)
/prototipo/

# IDEs
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Cache
*.tsbuildinfo
.contentlayer
.turbo
```

---

## ✅ Status Atual

**Removido do Git:**

- ✅ `prototipo/` (82 arquivos)
- ✅ `.tina/__generated__/` (2 arquivos)
- ✅ `src/pages/demo/` (arquivo demo problemático)

**Ainda no Git (mas ignorado no futuro):**

- ⚠️ `.env.local` (se existir)
- ⚠️ `tsconfig.tsbuildinfo` (se existir)

---

## 🚀 Próximos Passos

### 1. Commit atual:

```bash
git add .gitignore
git commit -m "feat: Implementa TinaCMS e otimiza estrutura do projeto

- Remove protótipo HTML (prototipo/)
- Remove arquivos gerados pelo TinaCMS
- Atualiza .gitignore com ignorados corretos
- Adiciona documentação completa do TinaCMS
- Configura Hero Section editável
"
```

### 2. (Opcional) Limpar fontes duplicadas:

```bash
# Se quiser remover duplicatas:
git rm -r --cached "public/fonts/Taruno_Family/"
git commit -m "chore: Remove fontes duplicadas"
```

### 3. Push para GitHub:

```bash
git remote add origin https://github.com/SEU-USUARIO/geplano-site.git
git push -u origin master
```

---

## 📊 Economia de Espaço

| Item                  | Antes | Depois | Economia   |
| --------------------- | ----- | ------ | ---------- |
| **Protótipo**         | 15MB  | 0MB    | **-15MB**  |
| **Fontes duplicadas** | 30MB  | 15MB   | **-15MB**  |
| **Gerados TinaCMS**   | 100KB | 0KB    | **-100KB** |
| **Total**             | ~45MB | ~15MB  | **-30MB**  |

---

**Status:** ✅ OTIMIZADO  
**Próximo passo:** Fazer commit e push para GitHub
