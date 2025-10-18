# About Section Component

Componente de seção "Sobre" modular e componentizado para facilitar manutenção.

## Estrutura de Componentes

```
About/
├── index.ts                # Exportações centralizadas
├── about.types.ts          # Tipos e constantes (dados das estatísticas)
├── AboutSection.tsx        # Componente principal (orquestrador)
├── AboutContainer.tsx      # Container da seção com padding e estilos
├── AboutContent.tsx        # Conteúdo textual (título e parágrafos)
├── AboutStats.tsx          # Grid de estatísticas
└── AboutStatCard.tsx       # Card individual de estatística
```

## Uso

```tsx
import { AboutSection } from "@/components/layout/About";

// ou importar componentes individuais
import { AboutContent, AboutStats } from "@/components/layout/About";
```

## Responsabilidades

- **AboutSection.tsx**: Orquestra todos os subcomponentes da seção
- **AboutContainer.tsx**: Wrapper da seção com ID, padding e container
- **AboutContent.tsx**: Renderiza título e textos descritivos da empresa
- **AboutStats.tsx**: Grid responsivo (2 colunas) com todas as estatísticas
- **AboutStatCard.tsx**: Card individual com valor e label de uma estatística
- **about.types.ts**: Define tipos TypeScript e array de estatísticas (ABOUT_STATS)

## Customização

Para alterar as estatísticas, edite `about.types.ts`:

```typescript
export const ABOUT_STATS: StatItem[] = [
  { value: "+10", label: "Anos de Experiência" },
  { value: "100%", label: "Obras Entregues" },
  // ...
];
```

## Efeitos Visuais

- ✅ Classe `scroll-reveal` para animação ao rolar a página
- ✅ Grid responsivo (1 coluna mobile, 2 colunas desktop)
- ✅ Tipografia: Taruno para títulos/valores, Montserrat para textos
- ✅ Cores: `text-geplano-gold` para valores das estatísticas
