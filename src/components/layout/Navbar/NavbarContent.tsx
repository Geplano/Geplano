import type { ReactNode } from "react";

interface NavbarContentProps {
  children: ReactNode;
}

export function NavbarContent({ children }: NavbarContentProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20 md:h-24">
        {children}
      </div>
    </div>
  );
}
