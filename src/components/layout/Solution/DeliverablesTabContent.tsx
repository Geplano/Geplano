import type { DeliverableItem } from "./solution.types";

interface DeliverablesTabContentProps {
  deliverables: DeliverableItem[];
}

export function DeliverablesTabContent({
  deliverables,
}: DeliverablesTabContentProps) {
  return (
    <div className="p-6 text-center">
      <h3 className="text-2xl font-bold text-gray-900 uppercase">Método G10</h3>
      <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-700">
        Entregamos uma{" "}
        <span className="font-bold text-geplano-gold">GESTÃO INTEGRADA</span>{" "}
        única e exclusiva na região de atuação, que engloba o gerenciamento de
        todos os processos do pré-obra ao pós-obra.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-2 lg:text-center"
          >
            <div className="text-4xl font-bold text-geplano-gold">
              {item.number}
            </div>
            <p className="text-sm font-semibold text-gray-700 uppercase">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
