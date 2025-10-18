# 🔧 TinaCMS - Referência para Desenvolvedores

> **Guia técnico para implementar novas seções editáveis**

---

## 🎯 Padrão de Implementação

Para tornar qualquer seção editável via TinaCMS, siga estes 5 passos:

### 1️⃣ Criar arquivo de conteúdo JSON

**Local:** `src/content/sections/[nome-secao].json`

```json
{
  "title": "Título da Seção",
  "description": "Descrição...",
  "items": []
}
```

### 2️⃣ Adicionar Collection no `tina.config.ts`

```typescript
{
  name: 'nomeDaSecao',
  label: 'Nome da Seção',
  path: 'src/content/sections',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,  // Evita criar múltiplos arquivos
      delete: false,
    },
  },
  match: {
    include: 'nome-secao',  // Nome do arquivo sem extensão
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Título',
      required: true,
    },
    // Mais campos...
  ],
}
```

### 3️⃣ Criar interface TypeScript

**Local:** `src/components/layout/[secao]/[secao].types.ts`

```typescript
export interface SecaoContent {
  title: string;
  description: string;
  items: SecaoItem[];
}

export interface SecaoItem {
  id: string;
  title: string;
  // ...
}
```

### 4️⃣ Criar helper function

**Local:** `src/lib/tina-client.ts`

```typescript
export async function getSecaoContent(): Promise<SecaoContent> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/content/sections/nome-secao.json",
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading secao content:", error);
    return {
      title: "Título Padrão",
      description: "Descrição padrão",
      items: [],
    };
  }
}
```

### 5️⃣ Refatorar componente

**De:**

```typescript
'use client';

export function MinhaSecao() {
  const title = "Título Hardcoded";
  return <div>{title}</div>;
}
```

**Para:**

```typescript
import { getSecaoContent } from '@/lib/tina-client';

export async function MinhaSecao() {
  const content = await getSecaoContent();
  return <div>{content.title}</div>;
}
```

---

## 📦 Tipos de Campos Disponíveis

### String

```typescript
{
  type: 'string',
  name: 'title',
  label: 'Título',
  required: true,
}
```

### Textarea

```typescript
{
  type: 'string',
  name: 'description',
  label: 'Descrição',
  ui: {
    component: 'textarea',
  },
}
```

### Number

```typescript
{
  type: 'number',
  name: 'order',
  label: 'Ordem',
}
```

### Boolean

```typescript
{
  type: 'boolean',
  name: 'isActive',
  label: 'Ativo?',
}
```

### Image

```typescript
{
  type: 'image',
  name: 'image',
  label: 'Imagem',
  required: true,
}
```

### Rich Text (Markdown)

```typescript
{
  type: 'rich-text',
  name: 'body',
  label: 'Conteúdo',
}
```

### Object (Single)

```typescript
{
  type: 'object',
  name: 'metadata',
  label: 'Metadados',
  fields: [
    { type: 'string', name: 'author', label: 'Autor' },
    { type: 'datetime', name: 'date', label: 'Data' },
  ],
}
```

### Object List

```typescript
{
  type: 'object',
  name: 'items',
  label: 'Items',
  list: true,  // ← Importante!
  ui: {
    itemProps: (item) => {
      return { label: item?.title || 'Item' };
    },
  },
  fields: [
    { type: 'string', name: 'title', label: 'Título' },
    { type: 'string', name: 'description', label: 'Descrição' },
  ],
}
```

### Reference (Relacionamento)

```typescript
{
  type: 'reference',
  name: 'author',
  label: 'Autor',
  collections: ['authors'],
}
```

---

## 🎨 Customizações UI

### Label customizado para lista

```typescript
ui: {
  itemProps: (item) => {
    return { label: item?.name || 'Sem nome' };
  },
}
```

### Descrição do campo

```typescript
{
  type: 'string',
  name: 'slug',
  label: 'URL Slug',
  description: 'URL amigável (ex: meu-artigo)',
}
```

### Desabilitar ações

```typescript
ui: {
  allowedActions: {
    create: false,
    delete: false,
  },
}
```

### Valor padrão

```typescript
{
  type: 'boolean',
  name: 'published',
  label: 'Publicado?',
  required: true,
  defaultValue: false,
}
```

---

## 🔄 Migração Server Component ↔ Client Component

### Componente que precisa ser Server

- Busca dados assíncronos
- Usa `await`
- Não tem interatividade (hooks, eventos)

```typescript
// ✅ Server Component
export async function Secao() {
  const data = await getData();
  return <div>{data.title}</div>;
}
```

### Componente que precisa ser Client

- Usa hooks (`useState`, `useEffect`)
- Tem event listeners
- Usa browser APIs

```typescript
'use client';  // ← Importante!

export function Secao({ data }) {
  const [active, setActive] = useState(false);
  return <div onClick={() => setActive(!active)}>{data.title}</div>;
}
```

### Padrão: Server busca, Client renderiza

```typescript
// server.tsx
import { ClientComponent } from './client';

export async function ServerWrapper() {
  const data = await getData();
  return <ClientComponent data={data} />;
}

// client.tsx
'use client';

export function ClientComponent({ data }) {
  const [state, setState] = useState();
  // ... lógica client
  return <div>{data.title}</div>;
}
```

---

## 📂 Exemplo Completo: About Section

### 1. Criar `src/content/sections/about.json`

```json
{
  "title": "Quem Somos",
  "description": "Empresa especializada...",
  "stats": [
    {
      "id": "stat-1",
      "number": "500+",
      "label": "Projetos Concluídos"
    },
    {
      "id": "stat-2",
      "number": "15+",
      "label": "Anos de Experiência"
    }
  ]
}
```

### 2. Adicionar no `tina.config.ts`

```typescript
{
  name: 'about',
  label: 'About Section',
  path: 'src/content/sections',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'about',
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Título',
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Descrição',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'object',
      name: 'stats',
      label: 'Estatísticas',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.label || 'Estatística' };
        },
      },
      fields: [
        {
          type: 'string',
          name: 'id',
          label: 'ID',
          required: true,
        },
        {
          type: 'string',
          name: 'number',
          label: 'Número',
          required: true,
        },
        {
          type: 'string',
          name: 'label',
          label: 'Label',
          required: true,
        },
      ],
    },
  ],
}
```

### 3. Criar `about.types.ts`

```typescript
export interface AboutStat {
  id: string;
  number: string;
  label: string;
}

export interface AboutContent {
  title: string;
  description: string;
  stats: AboutStat[];
}
```

### 4. Adicionar helper em `tina-client.ts`

```typescript
export async function getAboutContent(): Promise<AboutContent> {
  try {
    const filePath = path.join(
      process.cwd(),
      "src/content/sections/about.json",
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading about content:", error);
    return {
      title: "Quem Somos",
      description: "Empresa especializada...",
      stats: [],
    };
  }
}
```

### 5. Refatorar `AboutSection.tsx`

```typescript
import { getAboutContent } from '@/lib/tina-client';
import { AboutStats } from './AboutStats';

export async function AboutSection() {
  const content = await getAboutContent();

  return (
    <section id="sobre">
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <AboutStats stats={content.stats} />
    </section>
  );
}
```

---

## 🚀 Checklist para Nova Seção

- [ ] Criar arquivo JSON em `src/content/sections/`
- [ ] Adicionar collection no `tina.config.ts`
- [ ] Criar interface TypeScript em `.types.ts`
- [ ] Adicionar função helper em `tina-client.ts`
- [ ] Refatorar componente principal (Server Component)
- [ ] Passar dados para componentes client via props
- [ ] Testar no painel `/admin`
- [ ] Verificar preview em tempo real
- [ ] Commit e push

---

## 🎓 Próximos Passos

1. **Implementar About Section** (usar exemplo acima)
2. **Implementar Features Section**
3. **Implementar Projects Section** (com imagens)
4. **Implementar Contact Section**
5. **Implementar Footer**
6. **Configurar TinaCloud** (produção)

---

## 📚 Recursos

- [TinaCMS Schema Reference](https://tina.io/docs/schema/)
- [TinaCMS Field Types](https://tina.io/docs/reference/schema/fields/)
- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

**Dúvidas?** Consulte `TINACMS_GUIDE.md` para guia do usuário final.
