import type { ReactNode } from "react";
import { forwardRef } from "react";

interface NavbarContainerProps {
  children: ReactNode;
  scrolled: boolean;
  menuOpen: boolean;
}

export const NavbarContainer = forwardRef<HTMLElement, NavbarContainerProps>(
  function NavbarContainer({ children, scrolled, menuOpen }, ref) {
    return (
      <header
        ref={ref}
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuOpen ? "menu-open" : scrolled ? "scrolled" : "transparent"
        }`}
      >
        {children}
      </header>
    );
  },
);
