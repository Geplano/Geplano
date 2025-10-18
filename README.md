# DOCS — Geplano Site

> Documentação completa do projeto: tecnologias, propósito e como usar cada
> item.

> **Última atualização:** 17 de outubro de 2025  
> **Status:** ✅ Parcialmente implementado - ver seção "Status de Implementação"

---

## Sumário

- [Status de Implementação](#status-de-implementa%C3%A7%C3%A3o)

- [Visão Geral](#vis%C3%A3o-geral)
- [Stack Principal](#stack-principal)
- [Por que cada tecnologia?](#por-que-cada-tecnologia)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Arquivos de Configuração-chave](#arquivos-de-configura%C3%A7%C3%A3o-chave)
- [Setup de Desenvolvimento — comandos essenciais](#setup-de-desenvolvimento--comandos-essenciais)
- [Variáveis de Ambiente](#vari%C3%A1veis-de-ambiente)
- [Fluxo Editorial (TinaCMS)](#fluxo-editorial-tinacms)
- [Webhook & Revalidação (on-demand)](#webhook--revalida%C3%A7%C3%A3o-on-demand)
- [Qualidade, Tests e CI/CD](#qualidade-tests-e-cicd)
- [Checklist de Deploy / Produção](#checklist-de-deploy--produ%C3%A7%C3%A3o)
- [Boas práticas / Gotchas](#boas-pr%C3%A1ticas--gotchas)
- [Próximos passos sugeridos](#pr%C3%B3ximos-passos-sugeridos)

---

## Status de Implementação

### ✅ Totalmente Implementado

- ✅ **Stack completa instalada** - Next.js 15.5.6, TypeScript, Tailwind CSS,
  shadcn/ui, next-intl, next-themes, TinaCMS, Contentlayer, TanStack Query,
  React Hook Form, zod, lucide-react
- ✅ **Ferramentas de qualidade** - ESLint, Prettier, Husky, lint-staged,
  Vitest, Playwright
- ✅ **Estrutura de pastas** - src/app/, src/components/, src/locales/,
  src/styles/, src/lib/, src/hooks/, src/content/
- ✅ **Scripts npm** - dev, build, lint, typecheck, contentlayer, test, test:e2e
- ✅ **Configurações** - contentlayer.config.ts, tina.config.ts,
  tailwind.config.ts, next.config.ts
- ✅ **API de revalidação** - src/app/api/revalidate/route.ts implementado
- ✅ **Internacionalização** - Estrutura [lang]/ e arquivos de tradução pt-BR/en
- ✅ **Variáveis de ambiente** - .env.local criado com REVALIDATE_SECRET
- ✅ **Estrutura de conteúdo** - src/content/projects/ e src/content/pages/
- ✅ **Componentes implementados:**
  - Hero Section (6 componentes + tipos + README)
  - Navbar (9 componentes + tipos + README)
  - About Section (8 componentes + tipos + README)
  - Solution Section (8 componentes + tipos + README) - **NOVO!**
  - Features Section (9 componentes + tipos + README) - **NOVO!**
  - Projects Section (8 componentes + tipos) - **NOVO!**
  - Contact Section (6 componentes + tipos) - **NOVO!**
  - Footer - **NOVO!**
  - Custom hook useScrollReveal
- ✅ **Fontes customizadas** - Montserrat (Google Fonts) + TarunoWide (CDN)
- ✅ **Tema dark/light** - ThemeProvider configurado
- ✅ **Animações** - Scroll reveal, hero slider, navbar states, hover effects

### ⚠️ Ajustes Necessários

1. **Contentlayer com Next.js 15**
   - ⚠️ Contentlayer não é compatível com Next.js 15
   - ✅ Comentário adicionado no next.config.ts
   - ✅ TinaCMS será usado para gerenciamento de conteúdo MDX

### 🚧 Pendente de Implementação

- ⏳ **TinaCloud** - Conectar e configurar autenticação (precisa criar conta e
  obter tokens)
- ⏳ **Webhook Tina** - Configurar para chamar /api/revalidate (após conectar
  TinaCloud)
- ⏳ **Lógica de envio de formulário** - Implementar integração com serviço de
  email no ContactForm
- ⏳ **CI/CD** - GitHub Actions (opcional se usar Vercel)
- ⏳ **Deploy** - Configurar Vercel com variáveis de ambiente

### 📊 Progresso Geral

**Implementado:** ~95%  
**Infraestrutura:** 100% ✅  
**Componentes UI:** 100% ✅ (8 de 8 seções)  
**Integração CMS:** 60% (configurado, falta conectar cloud)  
**Deploy:** 0% (não solicitado)

---

## Visão Geral

Este documento descreve **tudo** que será usado no projeto Geplano — a pilha
técnica, responsabilidades de cada biblioteca/ferramenta, configuração inicial,
estrutura do repositório, fluxos de edição por não-desenvolvedores (TinaCMS),
revalidação on-demand e boas práticas de desenvolvimento.

O objetivo é prover um recurso único para desenvolvedores, devops e editores.

---

## Stack Principal

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes UI:** shadcn/ui (base Radix + Tailwind)
- **Internacionalização:** next-intl
- **Tema (Dark/Light):** next-themes
- **CMS git-backed:** TinaCMS (TinaCloud recomendado)
- **Conteúdo tipado / MDX:** Contentlayer
- **Fetch / cache client:** TanStack Query
- **Formulários & Validação:** React Hook Form + zod
- **Icons & utilitários:** lucide-react, clsx, tailwind-merge
- **Lint & format:** ESLint, Prettier, prettier-plugin-tailwindcss
- **Pre-commit:** Husky + lint-staged
- **Testes unit:** Vitest
- **Testes E2E:** Playwright
- **Host / Deploy:** Vercel (recomendado)

---

## Por que cada tecnologia?

### Next.js (App Router)

- Renderização híbrida (Server Components / SSR / SSG)
- App Router moderno com layouts aninhados e rotas por arquivo
- Suporte para revalidação on-demand e API route handlers
- Excelente integração com Vercel

### TypeScript

- Tipagem segura para reduzir bugs
- Melhor autocompletar e manutenção em equipe

### Tailwind CSS

- Produtividade com utilitários CSS
- Facilita design tokens via CSS variables
- Integrado ao workflow (Prettier plugin)

### shadcn/ui

- Componentes acessíveis e reutilizáveis
- Código entregue ao repo (customizável)

### next-intl

- Integração direta com App Router
- Carregamento server/client de mensagens por rota
- Hooks úteis (`useTranslations`) e formatação local

### next-themes

- Implementação simples de tema (class on `<html>`)
- Persistência localStorage + opção `system`

### TinaCMS / TinaCloud

- Edição inline e painel `/admin` para não-devs
- Git-backed: salva alterações como commits/PRs
- TinaCloud oferece auth e fluxo editorial gerenciado

### Contentlayer

- Transforma MD/MDX/JSON em documentos tipados TypeScript
- Consumo seguro no build / pages

### TanStack Query

- Cache e sincronização de dados assíncronos no client

### React Hook Form + zod

- Formulários performáticos e validação robusta

---

## Estrutura de Pastas (sugerida vs implementada)

### Estrutura Atual (Implementada)

```
geplano-site/
├── .husky/                     ✅ Configurado
├── public/
│   └── img/                    ✅ Logos Geplano
├── src/
│   ├── app/
│   │   ├── layout.tsx          ✅ Root layout (ThemeProvider)
│   │   ├── globals.css         ✅ Estilos globais
│   │   ├── page.tsx            ✅ Página raiz
│   │   ├── api/
│   │   │   └── revalidate/
│   │   │       └── route.ts    ✅ Endpoint revalidação
│   │   ├── admin/              ✅ TinaCMS mounting
│   │   │   └── page.tsx
│   │   └── [lang]/             ✅ Rotas por idioma
│   │       ├── layout.tsx      ✅ Int provider
│   │       └── page.tsx        ✅ Home por locale
│   ├── components/
│   │   ├── ui/                 ✅ shadcn components + theme-provider
│   │   ├── layout/             ✅ Hero, Navbar, About (componentizados)
│   │   │   ├── hero/           ✅ 6 componentes + tipos + README
│   │   │   ├── Navbar/         ✅ 9 componentes + tipos + README
│   │   │   └── About/          ✅ 8 componentes + tipos + README
│   │   └── sections/           ⚠️ Sugerido na doc, não criado
│   ├── content/                ⚠️ Verificar se existe (para Contentlayer)
│   │   ├── projects/           ⚠️ Precisa criar MDX files
│   │   └── pages/              ⚠️ Precisa criar
│   ├── locales/                ✅ JSON i18n files
│   │   ├── pt-BR/
│   │   │   └── common.json     ✅ Traduções PT
│   │   └── en/
│   │       └── common.json     ✅ Traduções EN
│   ├── styles/                 ✅ CSS customizado
│   │   ├── globals.css         ✅ Base
│   │   ├── fonts.css           ✅ TarunoWide
│   │   ├── navbar.css          ✅ Estados navbar + hero
│   │   └── geplano-colors.css  ✅ Cores + animations
│   ├── lib/                    ✅ Helpers
│   │   ├── i18n.ts             ✅ Loaders i18n
│   │   ├── i18n.tsx            ✅ Provider
│   │   └── utils.ts            ✅ Utilitários
│   ├── hooks/                  ✅ Custom hooks
│   │   └── useScrollReveal.ts  ✅ Scroll animations
│   └── utils/                  ⚠️ Sugerido, não criado
├── contentlayer.config.ts      ✅ Configurado (Project type)
├── tina.config.ts              ✅ Configurado (pages, translations)
├── next.config.ts              ⚠️ Falta integrar Contentlayer
├── tailwind.config.ts          ✅ Fontes + cores customizadas
├── package.json                ✅ Todos scripts + dependências
├── .env.local                  ❌ PRECISA CRIAR
└── README.md                   ✅ Este arquivo
```

### Nota sobre nomenclatura

A documentação sugere `src/components/sections/` mas implementamos
`src/components/layout/` - **mantemos a implementação atual** pois o termo
"layout" é semanticamente mais apropriado para componentes estruturais como
Hero, Navbar e About.

---

## Arquivos de Configuração-chave (o que são e por que existem)

### next.config.mjs

⚠️ **ATENÇÃO:** Atual está em TypeScript (.ts) e falta integração com
Contentlayer.

**Configuração recomendada (precisa ajustar):**

```js
import { withContentlayer } from "next-contentlayer";

export default withContentlayer({
  reactStrictMode: true,
  experimental: { appDir: true },
});
```

**Atual:**

```ts
const nextConfig: NextConfig = {
  reactStrictMode: true,
};
```

Configurações do Next.js (App Router, integrações, optimizações) — usado para
habilitar features experimentais e integrar plugins como Contentlayer.

### `tina.config.ts`

✅ **STATUS:** Implementado e configurado com collections para pages e
translations.

Schema e settings do TinaCMS (coleções, media, build output). Define quais
pastas/arquivos o Tina permite editar e como os campos aparecem no painel.

### `contentlayer.config.ts`

✅ **STATUS:** Implementado com tipo `Project` (MDX).

Define document types (ex.: `Project`) para MDX/Markdown e aponta para
`src/content`.

### `src/app/layout.tsx` e `src/app/[lang]/layout.tsx`

✅ **STATUS:** Implementados. Root layout com ThemeProvider e fontes; layout
[lang] com providers i18n.

Root layout (ThemeProvider) e layout por idioma (carrega mensagens i18n e
envolve o app com providers necessários).

### `src/app/api/revalidate/route.ts`

✅ **STATUS:** Implementado corretamente com validação de token.

Endpoint para revalidação on-demand. Deve validar um token secreto antes de
chamar `revalidatePath`.

### `src/locales/*/common.json`

✅ **STATUS:** Implementados para pt-BR e en.

Arquivos de mensagens i18n consumidos por `next-intl`.

### `.env.local`

❌ **STATUS:** NÃO CRIADO - **AÇÃO NECESSÁRIA**

**Variáveis necessárias:**

```env
NEXT_PUBLIC_BRANCH=main
NEXT_PUBLIC_TINA_CLIENT_ID=seu_client_id_aqui
TINA_TOKEN=seu_token_privado_aqui
REVALIDATE_SECRET=gere_um_token_secreto_seguro
NEXT_PUBLIC_URL=http://localhost:3000
```

Variáveis de ambiente locais (tokens, secrets). Nunca comitar.

---

## Setup de Desenvolvimento — comandos essenciais

Execute estes passos na ordem:

1. Criar projeto (Next.js + TypeScript + Tailwind + ESLint):

```bash
npx create-next-app@latest geplano-site --typescript --tailwind --eslint
cd geplano-site
```

2. Instalar dependências (exemplo com `npm`):

```bash
npm install next-intl next-themes contentlayer @contentlayer/core @contentlayer/source-files tinacms @tinacms/cli shadcn-ui lucide-react clsx tailwind-merge @tanstack/react-query react-hook-form zod

npm install -D vitest playwright eslint-config-prettier prettier prettier-plugin-tailwindcss husky lint-staged @types/node @types/react @types/react-dom
```

3. Inicializar shadcn UI (opcional):

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input card
```

4. Criar scripts no `package.json` (exemplos):

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit",
  "contentlayer": "contentlayer build",
  "prepare": "husky install",
  "test": "vitest",
  "test:e2e": "playwright test"
}
```

5. Criar estrutura de pastas (ver seção Estrutura de Pastas).

6. Configurar Tailwind (ex.: `tailwind.config.ts`), PostCSS
   (`postcss.config.mjs`) e `globals.css`.

7. Criar `contentlayer.config.ts` (se usar MDX).

8. Criar arquivos `src/locales/pt-BR/common.json` e
   `src/locales/en/common.json`.

9. Criar layouts `src/app/layout.tsx` (ThemeProvider) e
   `src/app/[lang]/layout.tsx` (Intl provider loader).

10. Criar `tina.config.ts` e uma rota `/admin` simples que monta o Tina.

11. Criar endpoint de revalidação `src/app/api/revalidate/route.ts` e configurar
    `REVALIDATE_SECRET`.

12. `npm run dev` → abrir `http://localhost:3000/pt-BR`.

---

## Exemplos rápidos de snippets (copiar/colar)

### next.config.mjs

```js
import { withContentlayer } from "next-contentlayer";

export default withContentlayer({
  reactStrictMode: true,
  experimental: { appDir: true },
});
```

### contentlayer.config.ts

```ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Project],
});
```

### Exemplo `src/app/api/revalidate/route.ts`

```ts
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const body = await req.json();
  const secret = process.env.REVALIDATE_SECRET;
  if (!body?.token || body.token !== secret)
    return NextResponse.json({ ok: false }, { status: 401 });

  const path = body.path || "/";
  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { revalidated: false, error: String(err) },
      { status: 500 },
    );
  }
}
```

### `tina.config.ts` (exemplo simplificado)

```ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_BRANCH || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        fields: [
          { type: "string", name: "title", label: "Title" },
          { type: "rich-text", name: "body", label: "Body" },
        ],
      },
      {
        name: "translations",
        label: "Translations",
        path: "src/locales",
        format: "json",
        fields: [
          { type: "string", name: "key", label: "Key" },
          { type: "string", name: "value", label: "Value" },
        ],
      },
    ],
  },
});
```

---

## Variáveis de Ambiente (lista e propósito)

- `NEXT_PUBLIC_BRANCH` — branch padrão (ex: `main`)
- `NEXT_PUBLIC_TINA_CLIENT_ID` — Client ID público do TinaCloud
- `TINA_TOKEN` — token privado para operações Tina (não comitar)
- `REVALIDATE_SECRET` — segredo para proteger o webhook de revalidação
- `NEXT_PUBLIC_URL` — URL pública do site (ex: `https://geplano.vercel.app`)

> Sempre configure essas variáveis no Vercel (ou provedor de hospedagem) e em
> `.env.local` para desenvolvimento local.

---

## Fluxo Editorial (etapas para editores não técnicos)

1. Entrar no painel Tina (`/admin`) e logar via TinaCloud (ou GitHub) — convidar
   o editor pelo TinaCloud.
2. No painel, selecionar a coleção (Pages, Projetos, Traduções, etc.).
3. Editar campos (título, subtítulo, corpo, imagens) via formularios ou edição
   inline.
4. Salvar:
   - **Commit direto (publish):** Tina grava commit no branch configurado e
     dispara webhook para `api/revalidate`.
   - **Criar PR:** Tina cria branch + PR; reviewer aprova; PR é mesclado;
     deploy / revalidation ocorre em seguida.

5. Conteúdo atualiza no site (via revalidation / ISR) sem rebuild completo.

---

## Webhook & Revalidação (on-demand)

- Configure um endpoint protegido (`/api/revalidate`) que aceita POST com
  `{ token, path }`.
- No painel do Tina (ou GitHub Actions), configurar webhook para chamar esse
  endpoint após publish.
- No handler, valide `token` com `REVALIDATE_SECRET`, então chame
  `revalidatePath(path)` (App Router) ou `res.revalidate(path)` (Pages Router).

---

## Qualidade, Tests e CI/CD

- **Linters & Formatting:** ESLint + Prettier + prettier-plugin-tailwindcss
- **Pre-commit hooks:** Husky + lint-staged (executa lint/format antes do
  commit)
- **Unit tests:** Vitest (rodar no pipeline)
- **E2E tests:** Playwright (rodar em PRs e CD)
- **CI:** GitHub Actions (opcional se usar Vercel)
- **Deploy:** Vercel (recomendada) — configurar variáveis de ambiente e proteção
  de branch

---

## Checklist de Deploy / Produção

- [ ] Branch `main` protegido com revisões obrigatórias
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] TinaCloud conectado ao repo e GitHub App autorizado
- [ ] Webhook Tina → `https://<site>/api/revalidate` configurado com token
- [ ] Testes unitários e E2E rodando no CI
- [ ] Documentação para editores (README do painel Tina)

---

## Boas práticas / Gotchas

- Proteja endpoints sensíveis com tokens secretos.
- Prefira PR flow para editores em ambientes corporativos.
- Use `contentlayer` build quando adicionar/editar MDX: `npm run contentlayer`.
- Configure `darkMode: 'class'` no Tailwind para compatibilidade com
  next-themes.
- Não comite arquivos de secrets (`.env.local`) no repositório.

---

## ⚡ Checklist de Ações Imediatas

### ✅ Crítico (CONCLUÍDO)

- [x] **Criar arquivo `.env.local`** ✅
  - Arquivo criado com REVALIDATE_SECRET gerado
  - Variáveis TinaCMS aguardando credenciais do TinaCloud

- [x] **Ajustar `next.config.ts`** ✅
  - Nota adicionada sobre incompatibilidade Contentlayer + Next.js 15
  - TinaCMS será usado para conteúdo MDX

- [x] **Criar pasta `src/content/`** ✅
  - Criadas: src/content/projects/ e src/content/pages/
  - Arquivos .gitkeep adicionados

### ✅ Importante (CONCLUÍDO)

- [x] Implementar seção "Nossa Solução" ✅ (8 componentes + tabs interativos)
- [x] Implementar seção "Diferenciais" ✅ (9 componentes + app showcase)
- [x] Implementar seção "Projetos" ✅ (8 componentes + filtros)
- [x] Implementar seção "Contato" ✅ (6 componentes + formulário)
- [x] Implementar Footer ✅

### 🟡 Pendente (Próximas Ações)

- [ ] **Configurar TinaCloud**
  1. Criar conta em https://app.tina.io/
  2. Obter NEXT_PUBLIC_TINA_CLIENT_ID e TINA_TOKEN
  3. Adicionar ao .env.local
  4. Testar edição no /admin

- [ ] **Testar fluxo completo**
  - [ ] Editar conteúdo no Tina → commit → webhook → revalidate
  - [ ] Verificar se revalidação funciona corretamente

- [ ] **Implementar lógica de envio de formulário**
  - [ ] Integrar com serviço de email (SendGrid, Resend, etc.)
  - [ ] Adicionar validação com zod
  - [ ] Adicionar feedback de sucesso/erro

### 🟢 Melhorias Futuras

- [ ] Adicionar testes unitários para componentes
- [ ] Adicionar testes E2E com Playwright
- [ ] Configurar CI/CD com GitHub Actions
- [ ] Otimizar imagens e performance
- [ ] Adicionar analytics (Google Analytics, etc.)
- [ ] Configurar SEO (meta tags, sitemap, robots.txt)

---

## Próximos passos sugeridos

- Gerar `README.md` para o repositório com instruções condensadas de setup.
- Criar `tina.config.ts`, `contentlayer.config.ts` e
  `src/app/api/revalidate/route.ts` no repositório com os exemplos já neste
  documento.
- Configurar TinaCloud e testar o fluxo de edição → commit → webhook →
  revalidate.

---

## Comandos Rápidos (resumo)

```bash
# dev
npm run dev

# build
npm run build

# contentlayer
npm run contentlayer

# lint
npm run lint

# tests
npm run test
npm run test:e2e

# prepare (husky)
npm run prepare
```

---

> Documentação criada para uso imediato. Atualize conforme versões de
> dependências e políticas do time.
