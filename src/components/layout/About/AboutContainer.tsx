import type { ReactNode } from "react";

interface AboutContainerProps {
  children: ReactNode;
}

export function AboutContainer({ children }: AboutContainerProps) {
  return (
    <section id="sobre" className="section-padding bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
