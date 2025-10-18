# 🎨 TinaCMS - Como Acessar o Painel

## ✅ Servidor Está Rodando!

O TinaCMS está ativo e funcionando perfeitamente! Aqui está como acessar:

---

## 🔗 URLs para Acessar

### 📍 Painel do TinaCMS (Editor Visual)

```
http://localhost:3001/admin
```

**OU**

```
http://localhost:3001/admin/index.html
```

### 🌐 Site Principal

```
http://localhost:3001
```

### 🔧 API GraphQL (Avançado)

```
http://localhost:4001/graphql
```

---

## 🎯 Como Editar a Hero Section

### 1. Acesse o Painel

Abra no navegador:

```
http://localhost:3001/admin
```

### 2. Navegação no Painel

- Na barra lateral esquerda, você verá: **"Hero Section"**
- Clique em **"Hero Section"**

### 3. Editar Conteúdo

Você verá um formulário com os campos:

| Campo                | O que editar                  |
| -------------------- | ----------------------------- |
| **Título Principal** | Título grande em branco       |
| **Subtítulo**        | Texto dourado abaixo          |
| **Descrição**        | Parágrafo descritivo          |
| **Texto do Botão**   | Label do botão CTA            |
| **Link do Botão**    | Para onde o botão leva        |
| **Slides**           | Lista de imagens do carrossel |

### 4. Gerenciar Slides

- Clique em **"Slides"** para expandir
- **Adicionar slide:** Botão "+ Add Item"
- **Editar slide:** Clique no item existente
- **Remover slide:** Ícone de lixeira
- **Reordenar:** Drag and drop

### 5. Upload de Imagens

- Clique no campo "Imagem"
- Botão "Choose File" ou "Upload"
- Selecione imagem do computador
- Imagens vão para `public/uploads/`

### 6. Salvar Mudanças

- Botão **"Save"** no topo direito
- Arquivo `src/content/sections/hero.json` é atualizado automaticamente
- Atualize o site (`http://localhost:3001`) para ver mudanças

---

## 🎬 Passo a Passo Completo

```
1. Abrir navegador
2. Ir para: http://localhost:3001/admin
3. Clicar em "Hero Section" na lateral
4. Editar campos desejados
5. Upload de novas imagens (opcional)
6. Clicar em "Save"
7. Ir para http://localhost:3001
8. Ver mudanças aplicadas! ✅
```

---

## 🔄 Iniciando o Servidor

Se o servidor não estiver rodando, inicie com:

```bash
npm run dev:tina
```

**Aguarde aparecer:**

```
✓ Ready in 2.1s
```

**Então acesse:**

```
http://localhost:3001/admin
```

---

## 📦 O Que Acontece Quando Você Salva

1. **Você clica em Save no painel**
2. **TinaCMS atualiza o arquivo:** `src/content/sections/hero.json`
3. **Next.js detecta a mudança**
4. **Página é recompilada automaticamente**
5. **Mudanças aparecem no site**

---

## 🎨 Interface do Painel

O painel TinaCMS tem 3 áreas:

```
┌─────────────────────────────────────────┐
│  [Logo Tina]                    [Save]  │  ← Barra superior
├──────────┬──────────────────────────────┤
│          │                              │
│  Hero    │   📝 Formulário de Edição    │
│  Section │                              │
│          │   Título Principal: ______   │
│  (menu)  │   Subtítulo: _____________   │
│          │   Descrição: _____________   │
│          │   ...                        │
│          │                              │
│          │   🖼️ Slides                  │
│          │   [+ Add Item]               │
│          │                              │
└──────────┴──────────────────────────────┘
```

---

## ⚠️ Importante

### Portas Usadas

- **3001** = Site Next.js (era 3000, mas estava ocupada)
- **4001** = API do TinaCMS (GraphQL)

### Modo Local

- ✅ Não precisa de autenticação
- ✅ Não precisa de conta TinaCloud
- ✅ Edições salvam direto no arquivo JSON
- ✅ Funciona offline

### Para Não-Desenvolvedores

1. **Não precisa saber programar!**
2. **Interface visual intuitiva**
3. **Apenas preencher formulário e clicar em Save**
4. **Preview em tempo real**

---

## 🐛 Problemas Comuns

### Painel não carrega

✅ Servidor está rodando? Rode `npm run dev:tina`  
✅ Aguardou aparecer "✓ Ready in 2.1s"?  
✅ URL correta? `http://localhost:3001/admin`

### Mudanças não aparecem

✅ Clicou em "Save" no painel?  
✅ Atualizou a página do site (F5)?  
✅ Verificou se `hero.json` foi alterado?

### Erro 404 no painel

✅ Use `/admin` não `/admin/index.html`  
✅ Porta correta? 3001 não 3000

---

## 📚 Arquivos Envolvidos

```
geplano-site/
├── src/content/sections/
│   └── hero.json              ← CONTEÚDO EDITÁVEL
│
├── public/
│   ├── admin/
│   │   └── index.html         ← PAINEL TINACMS
│   └── uploads/               ← IMAGENS UPADAS
│
└── tina/
    ├── config.ts              ← CONFIGURAÇÃO
    └── __generated__/         ← ARQUIVOS GERADOS
```

---

## 🎉 Pronto para Usar!

**Acesse agora:**

```
http://localhost:3001/admin
```

**E comece a editar o conteúdo da Hero Section visualmente!** 🚀

Qualquer editor não-técnico consegue usar o painel sem problemas.

---

## 🔮 Próximos Passos

Quer adicionar mais seções editáveis?

Podemos implementar:

- ✅ About Section (Quem Somos)
- ✅ Features Section (Funcionalidades)
- ✅ Projects Section (Portfólio)
- ✅ Contact Section (Contato)
- ✅ Footer

Todas seguindo o mesmo padrão da Hero! 🎨
