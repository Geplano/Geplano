# 🚀 Configuração de Deploy no Vercel - Geplano

## ⚙️ Configurações do Vercel (Passo a Passo)

### 📋 CAMPOS DE CONFIGURAÇÃO

Quando for fazer deploy no Vercel, use exatamente estas configurações:

---

### 1️⃣ **Framework Preset**

```
Next.js
```

✅ O Vercel detecta automaticamente, mas confirme que está selecionado.

---

### 2️⃣ **Root Directory**

```
./
```

✅ Deixe vazio ou use `./` (raiz do projeto)

---

### 3️⃣ **Build Command**

```
npm run build
```

**⚠️ IMPORTANTE:** O script `build` no `package.json` já inclui o TinaCMS:

```json
"build": "tinacms build && next build"
```

Isso garante que:

1. TinaCMS gera os arquivos necessários (GraphQL, types)
2. Next.js compila o site

---

### 4️⃣ **Output Directory**

```
.next
```

✅ Ou deixe como "Next.js default" (Vercel preenche automaticamente)

---

### 5️⃣ **Install Command**

```
npm install
```

✅ Ou deixe vazio (Vercel usa automaticamente)

---

## 🔐 Variáveis de Ambiente (Environment Variables)

### **⚠️ IMPORTANTE: Configuração Necessária para Build**

Para o build funcionar no Vercel, você **DEVE** adicionar variáveis de ambiente
(mesmo vazias):

**No Vercel (Settings → Environment Variables), adicione:**

```env
NEXT_PUBLIC_TINA_CLIENT_ID=
TINA_TOKEN=
```

**Sim, deixe os valores VAZIOS!** Isso permite que o build funcione sem TinaCMS
Cloud.

---

### **MODO 1: Sem TinaCMS Cloud (Recomendado - Grátis)**

✅ **Configuração mínima (apenas para build funcionar):**

1. Vá em **Vercel → Settings → Environment Variables**
2. Adicione as variáveis **VAZIAS**:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID = (deixe vazio)
   TINA_TOKEN = (deixe vazio)
   ```
3. Deploy funcionará normalmente
4. Para editar conteúdo: use GitHub (edite `hero.json` direto)

---

### **MODO 2: Com TinaCMS Cloud (Painel visual em produção - Pago)**

Se quiser usar o painel `/admin` em produção, configure:

1. Crie projeto em https://app.tina.io
2. Conecte com seu repositório GitHub
3. Copie as credenciais geradas
4. Adicione no Vercel:

```env
NEXT_PUBLIC_TINA_CLIENT_ID=seu_client_id_aqui
TINA_TOKEN=seu_token_secreto_aqui
NEXT_PUBLIC_TINA_BRANCH=main
```

⚠️ **Importante:**

- `NEXT_PUBLIC_*` = Variáveis públicas (vão pro browser)
- `TINA_TOKEN` = Secreta (só no servidor)

---

## 📸 Screenshot da Configuração

```
┌────────────────────────────────────────────┐
│ Project Settings                           │
├────────────────────────────────────────────┤
│                                            │
│ Framework Preset:  [Next.js ▼]           │
│                                            │
│ Root Directory:    ./                      │
│                                            │
│ Build Command:     npm run build           │
│                                            │
│ Output Directory:  .next                   │
│                                            │
│ Install Command:   npm install             │
│                                            │
└────────────────────────────────────────────┘
```

---

## 🎯 Checklist Pré-Deploy

Antes de fazer o deploy, confirme:

- [x] ✅ Commit feito com sucesso
- [ ] ✅ Script `build` atualizado no `package.json`
- [ ] ✅ Repositório criado no GitHub
- [ ] ✅ Push feito para o GitHub
- [ ] ✅ Vercel conectado ao repositório
- [ ] ✅ Configurações preenchidas corretamente

---

## 🔄 Passo a Passo Completo

### **Passo 1: Commit das mudanças**

```bash
git add package.json
git commit -m "fix: Adiciona TinaCMS ao script de build"
```

### **Passo 2: Criar repositório no GitHub**

1. Acesse: https://github.com/new
2. Nome: `geplano-site`
3. Descrição: "Site institucional da Geplano com TinaCMS"
4. Público ou Privado (sua escolha)
5. **NÃO** marque "Add README" (já temos)
6. Clique em "Create repository"

### **Passo 3: Conectar e fazer push**

```bash
# Adicionar remote (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/geplano-site.git

# Verificar branch
git branch

# Se for 'master', renomear para 'main' (recomendado)
git branch -M main

# Push
git push -u origin main
```

### **Passo 4: Deploy no Vercel**

#### Opção A: Via Dashboard (Recomendado)

1. Acesse: https://vercel.com/new
2. Clique em "Import Git Repository"
3. Selecione `geplano-site`
4. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install` (ou deixe vazio)
5. Clique em "Deploy"

#### Opção B: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

## ⏱️ Tempo de Build Esperado

```
1. Install (npm install)          ~2-3 min
2. TinaCMS Build                   ~30 seg
3. Next.js Build                   ~1-2 min
──────────────────────────────────────────
   TOTAL                           ~4-6 min
```

---

## ✅ Verificação Pós-Deploy

Após deploy bem-sucedido:

### 1. **Acessar o site**

```
https://geplano-site.vercel.app
```

### 2. **Verificar seções**

- ✅ Hero (slider de imagens)
- ✅ Sobre (estatísticas)
- ✅ Soluções (abas)
- ✅ Diferenciais
- ✅ Projetos (filtros)
- ✅ Contato (formulário)

### 3. **Testar fontes**

- ✅ Títulos com TarunoWide
- ✅ Textos com Montserrat

### 4. **Testar responsivo**

- ✅ Desktop (1920px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

---

## 🐛 Troubleshooting

### **Erro: "Command failed: tinacms build"**

**Solução:**

```bash
# Verificar se @tinacms/cli está instalado
npm list @tinacms/cli

# Se não estiver, instalar
npm install --save-dev @tinacms/cli
```

### **Erro: "Module not found: Can't resolve 'fs'"**

**Solução:** Já está resolvido no `next.config.ts`:

```typescript
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.resolve.fallback = { fs: false };
  }
  return config;
};
```

### **Erro: Build muito lento (> 10 min)**

**Possíveis causas:**

- Muitos arquivos de fontes (200+ arquivos)
- Imagens grandes sem otimização

**Solução:**

```bash
# Ver tempo detalhado
npm run build

# Se demorar muito, considere otimizar fontes
```

### **Erro: "ENOENT: no such file or directory 'hero.json'"**

**Solução:** Verificar que `src/content/sections/hero.json` existe:

```bash
ls src/content/sections/
```

---

## 🔄 Redeploy Automático

Toda vez que você fizer push para o GitHub:

```bash
git add .
git commit -m "feat: Nova funcionalidade"
git push
```

O Vercel vai:

1. ✅ Detectar o commit
2. ✅ Iniciar build automático
3. ✅ Fazer deploy (~5 min)
4. ✅ Atualizar o site

---

## 📝 Editar Conteúdo em Produção

### **Método 1: GitHub (sem TinaCMS Cloud)**

1. Acesse: `https://github.com/SEU-USUARIO/geplano-site`
2. Navegue: `src/content/sections/hero.json`
3. Clique em ✏️ Edit
4. Edite o JSON
5. Commit changes
6. Vercel faz redeploy automático (~2 min)
7. Site atualizado

### **Método 2: TinaCMS Cloud (com painel visual)**

1. Configure variáveis de ambiente (ver acima)
2. Redeploy no Vercel
3. Acesse: `https://seusite.vercel.app/admin`
4. Login com GitHub
5. Edite visualmente
6. Save
7. TinaCMS cria commit no GitHub
8. Vercel faz redeploy (~2 min)

---

## 🎨 Custom Domain (Opcional)

Depois do deploy inicial, você pode configurar domínio personalizado:

1. **No Vercel:**
   - Settings → Domains
   - Add domain: `geplano.com.br`

2. **No seu provedor DNS:**
   - Tipo: `A`
   - Nome: `@`
   - Valor: `76.76.21.21` (Vercel IP)
   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `cname.vercel-dns.com`

3. **Aguardar propagação:** ~24h

---

## 📊 Performance Esperada

Após deploy no Vercel:

| Métrica                      | Valor Esperado |
| ---------------------------- | -------------- |
| **Lighthouse Performance**   | 90-100         |
| **First Contentful Paint**   | < 1.5s         |
| **Largest Contentful Paint** | < 2.5s         |
| **Time to Interactive**      | < 3s           |
| **Total Blocking Time**      | < 300ms        |

---

## 🔒 Segurança

### **Arquivos ignorados (.gitignore):**

✅ `.env.local` (não vai pro Git) ✅ `node_modules/` (não vai pro Git) ✅
`.next/` (gerado no build)

### **Variáveis sensíveis:**

✅ `TINA_TOKEN` (secreta, só no Vercel) ❌ Nunca commitar `.env.local`

---

## 📚 Links Úteis

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **TinaCMS Cloud:** https://app.tina.io
- **GitHub Repo:** https://github.com/SEU-USUARIO/geplano-site

---

## ✅ Resumo Final

### **Configuração Vercel:**

```
Framework:  Next.js
Build:      npm run build
Output:     .next
Install:    npm install
```

### **Variáveis (Opcional):**

```env
# Só se usar TinaCMS Cloud
NEXT_PUBLIC_TINA_CLIENT_ID=...
TINA_TOKEN=...
NEXT_PUBLIC_TINA_BRANCH=main
```

### **Próximo Passo:**

1. Commit da mudança no `package.json`
2. Push para GitHub
3. Deploy no Vercel
4. ✅ Site no ar!

---

**Status:** ✅ PRONTO PARA DEPLOY  
**Tempo estimado:** 10-15 minutos  
**Dificuldade:** Fácil 😊
