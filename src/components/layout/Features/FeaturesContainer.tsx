export function FeaturesContainer({ children }: { children: React.ReactNode }) {
  return (
    <section id="diferenciais" className="section-padding bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
