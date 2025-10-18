import type { AdvantageItem } from "./solution.types";

interface AdvantagesTabContentProps {
  advantages: AdvantageItem[];
}

export function AdvantagesTabContent({
  advantages,
}: AdvantagesTabContentProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 text-center">
      {advantages.map((advantage, index) => (
        <div key={index} className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
          <p className="mt-2 text-gray-600">{advantage.description}</p>
        </div>
      ))}
    </div>
  );
}
