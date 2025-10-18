# Navbar Component

Componente de navegação modular e componentizado para facilitar manutenção.

## Estrutura de Componentes

```
Navbar/
├── index.ts                    # Exportações centralizadas
├── navbar.types.ts             # Tipos e constantes
├── Navbar.tsx                  # Componente principal (orquestrador)
├── NavbarContainer.tsx         # Container com estado (scrolled, menuOpen)
├── NavbarContent.tsx           # Wrapper do conteúdo interno
├── NavbarLogo.tsx              # Logo com versões branca e preta
├── NavbarDesktopMenu.tsx       # Menu para desktop
├── NavbarMobileMenu.tsx        # Menu dropdown para mobile
└── NavbarMobileButton.tsx      # Botão hamburger
```

## Uso

```tsx
import Navbar from "@/components/layout/Navbar";

// ou importar componentes individuais
import { NavbarLogo, NavbarDesktopMenu } from "@/components/layout/Navbar";
```

## Responsabilidades

- **Navbar.tsx**: Gerencia estado (scroll, menu aberto/fechado) e orquestra os
  subcomponentes
- **NavbarContainer.tsx**: Aplica classes CSS baseadas no estado (transparent,
  scrolled, menu-open)
- **NavbarContent.tsx**: Layout flex para logo, menus e botão mobile
- **NavbarLogo.tsx**: Renderiza logos com alternância automática via CSS
- **NavbarDesktopMenu.tsx**: Links de navegação para telas grandes
- **NavbarMobileMenu.tsx**: Menu dropdown para mobile com links
- **NavbarMobileButton.tsx**: Botão hamburger para abrir/fechar menu mobile
- **navbar.types.ts**: Define tipos TypeScript e constantes (NAV_LINKS)

## Customização

Para adicionar/remover links, edite `navbar.types.ts`:

```typescript
export const NAV_LINKS: NavLink[] = [
  { href: "#section", label: "Label" },
  { href: "https://...", label: "External", external: true },
];
```
