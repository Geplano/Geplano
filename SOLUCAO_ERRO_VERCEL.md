# 🔧 SOLUÇÃO RÁPIDA - Erro de Build no Vercel

## ❌ Erro que você está vendo:

```
Error: Client not configured properly. Missing clientId, token.
```

---

## ✅ SOLUÇÃO (2 minutos):

### **Passo 1: Adicionar Variáveis de Ambiente no Vercel**

1. Acesse seu projeto no Vercel
2. Vá em: **Settings** → **Environment Variables**
3. Adicione estas 2 variáveis (deixe os valores VAZIOS):

```
Nome: NEXT_PUBLIC_TINA_CLIENT_ID
Valor: (deixe vazio - não digite nada)
Environment: Production, Preview, Development (marque todos)
```

```
Nome: TINA_TOKEN
Valor: (deixe vazio - não digite nada)
Environment: Production, Preview, Development (marque todos)
```

4. Clique em **Save**

---

### **Passo 2: Fazer Redeploy**

1. Vá em **Deployments** (na barra superior)
2. Clique nos 3 pontinhos **(...)** do último deploy
3. Clique em **Redeploy**
4. Aguarde ~5 minutos

---

## 🎯 Por que isso funciona?

O TinaCMS **tenta se conectar** ao TinaCMS Cloud durante o build. Ao adicionar as variáveis (mesmo vazias), ele entende que está em **modo self-hosted** e não tenta conectar.

**Você NÃO paga nada** - continua 100% grátis!

---

## 📝 Como editar conteúdo depois do deploy?

### **Método 1: GitHub (Recomendado - Grátis)**

1. Vá no seu repositório: `https://github.com/LucasPedropl/Geplano`
2. Navegue: `src/content/sections/hero.json`
3. Clique em ✏️ **Edit this file**
4. Edite o JSON (título, descrição, etc)
5. Clique em **Commit changes**
6. Vercel faz redeploy automático (~2 min)
7. ✅ Site atualizado!

### **Método 2: TinaCMS Cloud (Painel Visual - $29/mês)**

Se quiser painel `/admin` em produção:

1. Crie conta em: https://app.tina.io
2. Conecte com GitHub
3. Copie `clientId` e `token`
4. Adicione nas variáveis do Vercel (com valores reais)
5. Redeploy
6. Acesse: `seusite.vercel.app/admin`

---

## 🚨 Checklist Rápido

- [ ] Adicionei `NEXT_PUBLIC_TINA_CLIENT_ID` (vazio) no Vercel
- [ ] Adicionei `TINA_TOKEN` (vazio) no Vercel
- [ ] Marquei todos os environments (Production, Preview, Development)
- [ ] Salvei as variáveis
- [ ] Fiz Redeploy
- [ ] Aguardei ~5 minutos
- [ ] ✅ Build passou!

---

## 📸 Screenshot das Variáveis

```
┌─────────────────────────────────────────────────────────┐
│ Environment Variables                                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ NEXT_PUBLIC_TINA_CLIENT_ID                             │
│ Value: [                                        ]       │
│ ☑ Production  ☑ Preview  ☑ Development                │
│                                                         │
│ TINA_TOKEN                                              │
│ Value: [                                        ]       │
│ ☑ Production  ☑ Preview  ☑ Development                │
│                                                         │
│                                        [Add]  [Cancel]  │
└─────────────────────────────────────────────────────────┘
```

---

**Depois que fizer isso, clique em Redeploy e vai funcionar! 🎉**
