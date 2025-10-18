# Solution Section

Seção "Nossa Solução" do site Geplano - apresenta o método de trabalho da
empresa com sistema de tabs interativo.

## Estrutura

```
Solution/
├── solution.types.ts              # Tipos e dados (tabs, pilares, vantagens, método G10)
├── SolutionSection.tsx            # Componente orquestrador com estado de tabs
├── SolutionContainer.tsx          # Wrapper da seção com section e container
├── SolutionHeader.tsx             # Título e descrição da seção
├── SolutionTabs.tsx               # Navegação por tabs (3 abas)
├── PillarsTabContent.tsx          # Conteúdo "Os 3 Pilares" (grid 3 colunas)
├── AdvantagesTabContent.tsx       # Conteúdo "Suas Vantagens" (grid 2 colunas)
├── DeliverablesTabContent.tsx     # Conteúdo "O que Entregamos" - Método G10 (grid 5 colunas)
├── index.ts                       # Exports
└── README.md                      # Este arquivo
```

## Componentes

### SolutionSection

- **Tipo:** Client Component
- **Responsabilidade:** Gerencia estado ativo das tabs e renderiza conteúdo
  correspondente
- **Props:** Nenhuma
- **Estado:** `activeTab` (pilares | vantagens | o-que-entregamos)
- **Hooks:** useScrollReveal para animações

### SolutionContainer

- **Responsabilidade:** Wrapper estrutural com ID para navegação
- **Classes:** section-padding, bg-gray-50

### SolutionHeader

- **Responsabilidade:** Título principal e descrição do método
- **Conteúdo:** "O Método mais Econômico, Transparente e Tranquilo de Construir"

### SolutionTabs

- **Responsabilidade:** Navegação entre as 3 abas
- **Props:** activeTab, onTabChange, tabs[]
- **Estilo:** Border-bottom ativo com cor geplano-gold

### PillarsTabContent

- **Responsabilidade:** Exibe os 3 pilares do método Geplano
- **Layout:** Grid 3 colunas (md:grid-cols-3)
- **Conteúdo:** Gestão Completa | Faturamento Direto | Taxa de Administração

### AdvantagesTabContent

- **Responsabilidade:** Exibe as 4 vantagens do método
- **Layout:** Grid 2 colunas (md:grid-cols-2)
- **Conteúdo:** Acompanhamento Custo Real | Economia | Flexibilidade | Redução
  de Perdas

### DeliverablesTabContent

- **Responsabilidade:** Exibe o Método G10 com 10 entregas
- **Layout:** Grid 5 colunas (lg:grid-cols-5) com números grandes em dourado
- **Destaque:** Título "GESTÃO INTEGRADA" em negrito e cor gold

## Dados (solution.types.ts)

### TAB_BUTTONS

Array com 3 tabs: pilares, vantagens, o-que-entregamos

### PILLARS

Array com 3 objetos: { title, description }

### ADVANTAGES

Array com 4 objetos: { title, description }

### DELIVERABLES

Array com 10 objetos: { number, description } - numerados de '01' a '10'

## Estilos

- **Cores:** text-geplano-gold para destaques
- **Fontes:** font-taruno para números do Método G10
- **Animações:** scroll-reveal em header e container de tabs
- **Layout:** Responsivo com grid adaptativo

## Uso

```tsx
import { SolutionSection } from "@/components/layout/Solution";

<SolutionSection />;
```

## Interatividade

- Click em tab atualiza `activeTab` state
- Conteúdo muda dinamicamente via `renderTabContent()`
- Scroll reveal anima entrada de elementos

## Protótipo

Baseado nas linhas 493-817 do prototipo/index.html
