# 🚀 Deploy e TinaCMS em Produção

## ⚠️ IMPORTANTE: Diferenças entre Desenvolvimento e Produção

### 🏠 Modo Local (Desenvolvimento - Como está agora)

```bash
npm run dev:tina
# Acessa: http://localhost:3001/admin
```

**Como funciona:**

- ✅ Sem autenticação (qualquer um pode editar)
- ✅ Edita arquivos JSON diretamente no disco
- ✅ Mudanças são instantâneas
- ❌ NÃO funciona em produção (Vercel)
- ❌ NÃO permite editar remotamente

---

### 🌐 Modo Produção (Vercel)

Você tem **2 OPÇÕES**:

## Opção 1: 🔓 Edição pelo GitHub (MAIS SIMPLES - RECOMENDADO)

### Como funciona:

1. Você faz deploy no Vercel
2. Para editar o conteúdo: **edita o arquivo `hero.json` diretamente no GitHub**
3. Vercel detecta a mudança e faz redeploy automático
4. Site atualizado em ~2 minutos

### ✅ Vantagens:

- **Sem configuração adicional**
- **Sem custos**
- **Funciona imediatamente**
- Histórico de mudanças (commits do Git)

### ❌ Desvantagens:

- Precisa saber usar GitHub (interface web é fácil)
- Não tem preview visual antes de salvar
- Precisa esperar redeploy (~2 min)

### 📝 Passo a passo:

#### 1. Fazer deploy inicial:

```bash
# No seu computador:
git init
git add .
git commit -m "Deploy inicial Geplano"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/geplano-site.git
git push -u origin main
```

#### 2. Conectar no Vercel:

1. Acesse https://vercel.com
2. Clique em "Import Project"
3. Selecione o repositório `geplano-site`
4. Clique em "Deploy"

#### 3. Editar conteúdo (depois do deploy):

1. Acesse: `https://github.com/SEU-USUARIO/geplano-site`
2. Navegue até: `src/content/sections/hero.json`
3. Clique no ícone de lápis (✏️ Edit)
4. Edite o JSON:
   ```json
   {
     "title": "NOVO TÍTULO AQUI",
     "description": "Nova descrição...",
     ...
   }
   ```
5. Clique em "Commit changes"
6. Vercel detecta e faz redeploy automático
7. Site atualizado em ~2 minutos

---

## Opção 2: 🔐 TinaCMS Cloud (PAINEL VISUAL - PROFISSIONAL)

### Como funciona:

1. Cria conta no TinaCMS Cloud (tina.io)
2. Conecta com GitHub
3. Acessa `seusite.com/admin` e edita visualmente
4. TinaCMS cria commits automáticos no GitHub
5. Vercel faz redeploy automático

### ✅ Vantagens:

- **Painel visual** igual ao localhost
- **Preview em tempo real**
- **Gerenciamento de mídia** (upload de imagens)
- **Controle de acesso** (login/senha, múltiplos usuários)
- Ideal para clientes/não-devs

### ❌ Desvantagens:

- Requer configuração adicional
- **Plano Gratuito:** 2 usuários, 1000 requests/mês
- **Plano Pago:** $29/mês (usuários ilimitados)

### 📝 Passo a passo:

#### 1. Criar conta TinaCMS:

1. Acesse: https://app.tina.io
2. Clique em "Sign Up"
3. Use GitHub OAuth (conecta sua conta)

#### 2. Criar projeto TinaCMS:

1. No dashboard, clique em "Create Project"
2. Selecione o repositório `geplano-site`
3. TinaCMS vai gerar:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`

#### 3. Configurar variáveis no Vercel:

1. Acesse o projeto no Vercel
2. Settings → Environment Variables
3. Adicione:
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID=seu_client_id_aqui
   TINA_TOKEN=seu_token_aqui
   NEXT_PUBLIC_TINA_BRANCH=main
   ```

#### 4. Fazer redeploy:

```bash
# Vercel vai usar as novas variáveis
# Ou force manualmente no dashboard: Deployments → Redeploy
```

#### 5. Usar em produção:

1. Acesse: `https://seusite.vercel.app/admin`
2. Faça login com GitHub
3. Edite visualmente
4. Clique em "Save"
5. TinaCMS cria commit no GitHub
6. Vercel faz redeploy (~2 min)

---

## 🤔 Qual Opção Escolher?

### Use **Opção 1 (GitHub direto)** se:

- ✅ Você mesmo vai editar o conteúdo
- ✅ Quer algo simples e gratuito
- ✅ Não se importa em editar JSON manualmente
- ✅ Faz poucas mudanças (1-2 por semana)

### Use **Opção 2 (TinaCMS Cloud)** se:

- ✅ Clientes/não-devs vão editar
- ✅ Precisa de painel visual profissional
- ✅ Faz muitas mudanças frequentes
- ✅ Quer upload de imagens pelo painel
- ✅ Precisa de múltiplos usuários com permissões

---

## 📊 Comparação Lado a Lado

| Recurso                | GitHub Direto   | TinaCMS Cloud                |
| ---------------------- | --------------- | ---------------------------- |
| **Custo**              | Grátis          | Grátis (limitado) ou $29/mês |
| **Configuração**       | 0 minutos       | ~15 minutos                  |
| **Painel Visual**      | ❌ Não          | ✅ Sim                       |
| **Preview**            | ❌ Não          | ✅ Sim                       |
| **Upload Imagens**     | Manual (commit) | ✅ Pelo painel               |
| **Autenticação**       | GitHub login    | GitHub OAuth                 |
| **Tempo de deploy**    | ~2 min          | ~2 min                       |
| **Para não-devs**      | ⚠️ Difícil      | ✅ Fácil                     |
| **Controle de versão** | ✅ Git nativo   | ✅ Git (automático)          |

---

## 🎯 Recomendação para o Geplano

### Para começar:

**USE OPÇÃO 1** (GitHub direto)

- Deploy rápido
- Sem custos
- Testa o site em produção primeiro

### Se crescer:

**MIGRE PARA OPÇÃO 2** (TinaCMS Cloud)

- Quando contratar alguém para gerenciar conteúdo
- Quando precisar trocar textos com frequência
- Quando quiser profissionalizar

---

## 🛠️ Configuração Vercel (Ambas Opções)

### Build Settings:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### Variáveis de Ambiente (Opção 2):

```env
NEXT_PUBLIC_TINA_CLIENT_ID=<seu_client_id>
TINA_TOKEN=<seu_token>
NEXT_PUBLIC_TINA_BRANCH=main
```

---

## 📱 Workflow Típico - Opção 1 (GitHub)

### Desenvolvedor/Gestor de Conteúdo:

**1. Editar Hero Section:**

```
https://github.com/usuario/geplano-site
↓
src/content/sections/hero.json
↓
Clicar no ícone de lápis ✏️
↓
Editar JSON:
{
  "title": "NOVO TÍTULO",
  "description": "Nova descrição",
  ...
}
↓
Commit changes (botão verde)
```

**2. Aguardar deploy:**

```
GitHub detecta commit
↓
Webhook avisa Vercel
↓
Vercel faz build (~1-2 min)
↓
Site atualizado automaticamente
```

**3. Verificar:**

```
Acessa: https://seusite.vercel.app
↓
Refresh (Ctrl+F5)
↓
Vê mudanças aplicadas
```

---

## 📱 Workflow Típico - Opção 2 (TinaCMS Cloud)

### Cliente/Não-Dev:

**1. Acessar painel:**

```
https://seusite.vercel.app/admin
↓
Login com GitHub (OAuth)
↓
Dashboard TinaCMS carrega
```

**2. Editar conteúdo:**

```
Sidebar: Hero Section
↓
Formulário visual aparece
↓
Preview em tempo real à esquerda
↓
Editar campos no formulário
↓
Clicar em "Save" (canto superior direito)
```

**3. TinaCMS faz commit:**

```
TinaCMS cria commit no GitHub
↓
Mensagem: "Update from TinaCMS"
↓
GitHub webhook → Vercel
↓
Build automático (~1-2 min)
```

**4. Verificar:**

```
Aguarda deploy concluir
↓
Acessa site principal
↓
Mudanças aplicadas
```

---

## 🔒 Segurança

### Opção 1 (GitHub):

- Login necessário: GitHub account
- Permissões: Quem tem acesso ao repositório
- Recomendação: Criar equipe no GitHub, adicionar colaboradores

### Opção 2 (TinaCMS):

- Login necessário: Conta TinaCMS
- Permissões: Gerenciadas pelo TinaCMS (mais granular)
- Suporta: Roles (Editor, Admin, Viewer)

---

## 💰 Custos Estimados

### Opção 1 (GitHub):

- **GitHub:** Grátis (repositórios públicos ilimitados)
- **Vercel:** Grátis (100GB bandwidth, 100 builds/mês)
- **Total:** R$ 0/mês

### Opção 2 (TinaCMS):

- **GitHub:** Grátis
- **Vercel:** Grátis
- **TinaCMS Free Tier:** Grátis (2 usuários, 1000 req/mês)
- **TinaCMS Starter:** $29/mês (10 usuários, 10k req/mês)
- **Total:** R$ 0 a R$ 150/mês

---

## 🚨 Limitações Importantes

### Opção 1:

- ❌ Não tem preview visual
- ❌ Precisa saber JSON
- ❌ Redeploy a cada mudança (lento para testes)
- ❌ Não gerencia upload de imagens facilmente

### Opção 2:

- ❌ Limites no plano grátis (1000 requests/mês)
- ❌ Dependência de serviço externo (TinaCMS)
- ❌ Setup inicial mais complexo

---

## ✅ Checklist de Deploy - Opção 1 (RECOMENDADO PARA COMEÇAR)

### Antes do deploy:

- [ ] Código funcionando em localhost
- [ ] Criar repositório no GitHub
- [ ] Push do código para GitHub

### Deploy Vercel:

- [ ] Criar conta no Vercel (login com GitHub)
- [ ] Import project do GitHub
- [ ] Configurar build settings (Next.js preset)
- [ ] Deploy automático

### Testar:

- [ ] Acessar URL do Vercel (`seusite.vercel.app`)
- [ ] Verificar se Hero está renderizando
- [ ] Verificar imagens do Unsplash carregando

### Editar conteúdo (primeira vez):

- [ ] Ir no GitHub: `src/content/sections/hero.json`
- [ ] Clicar em ✏️ Edit
- [ ] Mudar o título para algo diferente
- [ ] Commit changes
- [ ] Aguardar deploy (~2 min)
- [ ] Refresh no site e ver mudança

---

## ✅ Checklist de Deploy - Opção 2 (SE QUISER PAINEL VISUAL)

### Configuração TinaCMS:

- [ ] Criar conta em https://app.tina.io
- [ ] Login com GitHub
- [ ] Create new project
- [ ] Selecionar repositório `geplano-site`
- [ ] Copiar `NEXT_PUBLIC_TINA_CLIENT_ID` e `TINA_TOKEN`

### Configurar Vercel:

- [ ] Settings → Environment Variables
- [ ] Adicionar `NEXT_PUBLIC_TINA_CLIENT_ID`
- [ ] Adicionar `TINA_TOKEN`
- [ ] Adicionar `NEXT_PUBLIC_TINA_BRANCH=main`
- [ ] Redeploy

### Testar:

- [ ] Acessar `seusite.vercel.app/admin`
- [ ] Fazer login com GitHub
- [ ] Editar Hero Section
- [ ] Clicar em Save
- [ ] Verificar commit no GitHub
- [ ] Aguardar redeploy
- [ ] Ver mudanças no site

---

## 🎓 Tutorial em Vídeo (Recomendações)

### Para GitHub + Vercel:

- "How to Deploy Next.js to Vercel" (YouTube)
- Documentação: https://vercel.com/docs

### Para TinaCMS Cloud:

- Documentação oficial: https://tina.io/docs/tina-cloud/
- "TinaCMS Self-Hosted vs TinaCMS Cloud" (tina.io/blog)

---

## 🆘 Troubleshooting

### Problema: `/admin` dá 404 em produção (Opção 1)

**Solução:** Normal! Você não configurou TinaCMS Cloud, use GitHub para editar.

### Problema: `/admin` pede login mas falha (Opção 2)

**Solução:**

1. Verifique variáveis de ambiente no Vercel
2. Confirme que `NEXT_PUBLIC_TINA_CLIENT_ID` está definida
3. Redeploy após adicionar variáveis

### Problema: Mudanças no GitHub não aparecem no site

**Solução:**

1. Verificar se Vercel está conectado ao repositório
2. Ver logs de build no Vercel
3. Forçar redeploy manual: Deployments → Redeploy

### Problema: Build falha no Vercel

**Solução:**

1. Ver logs de erro no Vercel
2. Testar `npm run build` localmente
3. Verificar se todas dependências estão no `package.json`

---

## 📞 Suporte

### Vercel:

- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

### TinaCMS:

- Docs: https://tina.io/docs
- Discord: https://discord.com/invite/zumN63Ybpf

### Next.js:

- Docs: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js

---

## 🎯 Decisão Final: O Que Eu Recomendo?

### PARA VOCÊ (Geplano):

**FASE 1 - AGORA (0-3 meses):** ✅ **Use Opção 1 (GitHub direto)**

- Deploy em 10 minutos
- Grátis
- Você aprende Git (essencial)
- Testa site em produção

**FASE 2 - DEPOIS (3-6 meses):** ✅ **Migre para Opção 2 (TinaCMS Cloud)**

- Quando tiver clientes editando
- Quando content manager entrar na equipe
- Quando precisar de painel profissional

---

**Status:** ✅ GUIA COMPLETO  
**Próximo passo:** Deploy no GitHub + Vercel (Opção 1)  
**Tempo estimado:** 15 minutos
