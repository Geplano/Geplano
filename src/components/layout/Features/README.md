# Features Section (Diferenciais)

Seção "Diferenciais" do site Geplano - apresenta o aplicativo exclusivo com showcase interativo de funcionalidades.

## Estrutura

```
Features/
├── features.types.ts          # Tipos e dados das features do app
├── FeaturesSection.tsx        # Componente orquestrador com estado
├── FeaturesContainer.tsx      # Wrapper da seção
├── FeaturesHeader.tsx         # Título e descrição
├── FeaturesContent.tsx        # Conteúdo textual + lista de features
├── FeatureList.tsx            # Lista interativa de features
├── AppScreen.tsx              # Mockup de smartphone com screenshot
├── index.ts                   # Exports
└── README.md                  # Este arquivo
```

## Componentes

### FeaturesSection

- **Tipo:** Client Component
- **Responsabilidade:** Gerencia feature ativa e renderiza interface
- **Estado:** `activeFeature` (id da feature selecionada)
- **Hooks:** useScrollReveal para animações

### FeaturesContainer

- **Responsabilidade:** Wrapper com ID para navegação
- **Classes:** section-padding, bg-white

### FeaturesHeader

- **Responsabilidade:** Título e descrição da seção
- **Conteúdo:** "Tecnologia e Método: Nossa Fórmula para a sua Tranquilidade"

### FeaturesContent

- **Responsabilidade:** Agrupa título "Sua Obra na Palma da Mão" e lista de features
- **Props:** features[], activeFeature, onFeatureClick

### FeatureList

- **Responsabilidade:** Renderiza lista de botões de features
- **Interação:** Click em feature atualiza estado
- **Estilo:** Feature ativa recebe bg-gray-100 e font-bold

### AppScreen

- **Responsabilidade:** Mockup de smartphone com screenshot
- **Props:** imageUrl, title
- **Layout:** 300x650px com borda arredondada e notch
- **Transição:** Opacity 500ms entre imagens

## Dados (features.types.ts)

### APP_FEATURES

Array com 4 features do app:

1. Acompanhamento do Cronograma
2. Relatórios Financeiros
3. Aprovação de Compras
4. Diário de Obra com Fotos

Cada feature tem: id, title, imageUrl (placeholder)

## Estilos

- **Layout:** Grid 2 colunas (md:grid-cols-2) com gap-16
- **Mockup:** Smartphone com rounded-[40px], border-[14px], shadow-2xl
- **Notch:** Elemento absolute top-[10px] para simular notch do iPhone
- **Animações:** scroll-reveal em ambas colunas
- **Transição:** duration-500 na troca de imagens

## Uso

```tsx
import { FeaturesSection } from "@/components/layout/Features";

<FeaturesSection />;
```

## Interatividade

- Click em feature atualiza `activeFeature` state
- AppScreen troca imageUrl dinamicamente
- Transição suave de opacity entre screenshots

## Protótipo

Baseado nas linhas 821-901 do prototipo/index.html
