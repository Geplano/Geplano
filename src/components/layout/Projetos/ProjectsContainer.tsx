export function ProjectsContainer({ children }: { children: React.ReactNode }) {
  return (
    <section id="projetos" className="section-padding bg-gray-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
