# ✅ Como Editar o Conteúdo do Site

## 🎯 Método Simples: Editar Diretamente o JSON

Esqueça painéis complicados! Você pode editar o conteúdo simplesmente editando o
arquivo JSON.

---

## 📝 Editar Hero Section

### 1. Abra o Arquivo

```
src/content/sections/hero.json
```

### 2. Edite o Conteúdo

```json
{
  "title": "SEU TÍTULO AQUI EM MAIÚSCULAS",
  "subtitle": "Seu subtítulo em dourado",
  "description": "Descrição completa da sua empresa aqui...",
  "ctaLabel": "Solicitar Orçamento",
  "ctaHref": "#contato",
  "slides": [
    {
      "id": "slide-1",
      "image": "/img/hero-1.jpg",
      "alt": "Descrição da imagem para acessibilidade"
    },
    {
      "id": "slide-2",
      "image": "https://exemplo.com/imagem.jpg",
      "alt": "Outra descrição"
    }
  ]
}
```

### 3. Salve (Ctrl+S)

### 4. Atualize o Navegador (F5)

### 5. Pronto! ✅

---

## 🎨 O Que Cada Campo Faz

| Campo         | Onde Aparece                   | Exemplo                              |
| ------------- | ------------------------------ | ------------------------------------ |
| `title`       | Título grande em branco        | "CONSTRUIR NUNCA FOI TÃO TRANQUILO"  |
| `subtitle`    | Texto dourado abaixo do título | "Transformando desafios em soluções" |
| `description` | Parágrafo descritivo cinza     | "Somos uma empresa especializada..." |
| `ctaLabel`    | Texto do botão dourado         | "Solicitar Orçamento"                |
| `ctaHref`     | Link do botão                  | "#contato" ou "https://wa.me/..."    |
| `slides[]`    | Imagens do carrossel de fundo  | Array de objetos                     |

---

## 💡 Exemplos Práticos

### Mudar o Título

**ANTES:**

```json
"title": "Gestão e Consultoria de Obras"
```

**DEPOIS:**

```json
"title": "EXCELÊNCIA EM GESTÃO DE OBRAS"
```

### Mudar o Botão para WhatsApp

**ANTES:**

```json
"ctaLabel": "Solicitar Orçamento",
"ctaHref": "#contato"
```

**DEPOIS:**

```json
"ctaLabel": "Falar no WhatsApp",
"ctaHref": "https://wa.me/5511999999999"
```

### Adicionar Nova Imagem ao Carrossel

Adicione um novo objeto no array `slides`:

```json
{
  "id": "slide-4",
  "image": "/public/uploads/nova-imagem.jpg",
  "alt": "Descrição da nova imagem"
}
```

---

## ⚠️ Dicas Importantes

### ✅ Fazer

- Usar aspas duplas `"` (não simples `'`)
- Manter vírgulas entre itens do array
- Salvar o arquivo após editar
- Atualizar o navegador para ver mudanças

### ❌ Não Fazer

- Não remover aspas ou vírgulas
- Não usar aspas simples
- Não esquecer de salvar
- Não adicionar vírgula após o último item

### Validar JSON

Se tiver dúvida se o JSON está correto, cole em: 👉 **https://jsonlint.com/**

---

## 🔄 Fluxo Completo

```
┌──────────────┐
│ 1. Abrir     │
│  hero.json   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ 2. Editar    │
│  campos      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ 3. Salvar    │
│  (Ctrl+S)    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ 4. Atualizar │
│  navegador   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ ✅ Pronto!   │
└──────────────┘
```

---

## 📁 Onde Estão os Arquivos

```
geplano-site/
├── src/
│   └── content/
│       └── sections/
│           └── hero.json  ← EDITE AQUI!
```

Para adicionar imagens:

```
geplano-site/
├── public/
│   ├── img/        ← Imagens do site
│   └── uploads/    ← Upload de novas imagens
```

---

## ❓ Problemas?

### Mudanças não aparecem

1. ✅ Salvou o arquivo?
2. ✅ Atualizou o navegador (F5)?
3. ✅ Servidor está rodando? (`npm run dev`)

### Erro "Unexpected token"

- JSON mal formatado
- Faltou vírgula ou aspas
- Use jsonlint.com para validar

### Imagem não carrega

- Verifique o caminho: `/img/nome.jpg`
- Imagem está em `public/img/`?
- URL externa está correta?

---

## 🚀 Próximas Seções

Quer adicionar outras seções editáveis?

O mesmo padrão funciona para:

- `about.json` - Seção "Quem Somos"
- `features.json` - Funcionalidades do App
- `projects.json` - Portfólio de Projetos
- `contact.json` - Informações de Contato

**Veja como implementar:** `TINACMS_DEV_GUIDE.md`

---

## 📚 Mais Informações

- **TINACMS_GUIDE.md** - Guia completo
- **TINACMS_DEV_GUIDE.md** - Para desenvolvedores
- **TINACMS_IMPLEMENTATION.md** - O que foi feito

---

**🎉 Editar conteúdo é simples: abrir JSON → editar → salvar → atualizar!**

Não precisa de painel visual, não precisa de servidor extra.  
Apenas edite o JSON e está pronto! 🚀
