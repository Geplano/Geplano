"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>
          &copy; {currentYear} Geplano Gestão e Consultoria de Obras. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
