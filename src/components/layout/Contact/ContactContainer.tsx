export function ContactContainer({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="contato"
      className="section-padding bg-geplano-green-section text-white w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
