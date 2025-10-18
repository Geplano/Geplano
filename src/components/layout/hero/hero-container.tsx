import type { ReactNode } from "react";

export function HeroContainer({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full">
      {children}
    </div>
  );
}
