# Hero Component

Componente Hero modular e componentizado para facilitar manutenção.

## Estrutura de Componentes

```
hero/
├── index.ts                # Exportações centralizadas
├── hero.types.ts           # Tipos TypeScript
├── hero-section.tsx        # Componente principal (orquestrador)
├── hero-container.tsx      # Container para posicionamento do conteúdo
├── hero-content.tsx        # Título, descrição e CTA
├── hero-overlay.tsx        # Overlay escuro sobre as imagens
└── hero-slider.tsx         # Slider de imagens com animação
```

## Uso

```tsx
import { HeroSection } from "@/components/layout/hero";

// ou importar componentes individuais
import { HeroContent, HeroSlider } from "@/components/layout/hero";
```

## Responsabilidades

- **hero-section.tsx**: Orquestra todos os subcomponentes do hero
- **hero-container.tsx**: Posiciona o conteúdo (centralizador)
- **hero-content.tsx**: Renderiza título, descrição e botão CTA com props
  customizáveis
- **hero-overlay.tsx**: Overlay escuro para melhorar legibilidade do texto
- **hero-slider.tsx**: Gerencia slider de imagens com transição automática (5s)
- **hero.types.ts**: Define tipos TypeScript para props

## Customização

O componente `HeroContent` aceita props opcionais:

```tsx
<HeroContent
  title="Seu Título"
  description="Sua descrição"
  ctaHref="#link"
  ctaLabel="Texto do Botão"
/>
```

Para alterar as imagens do slider, edite o array `heroImages` em
`hero-slider.tsx`.
