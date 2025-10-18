import type { PillarItem } from "./solution.types";

interface PillarsTabContentProps {
  pillars: PillarItem[];
}

export function PillarsTabContent({ pillars }: PillarsTabContentProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 text-center">
      {pillars.map((pillar, index) => (
        <div key={index} className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
          <p className="mt-2 text-gray-600">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
}
