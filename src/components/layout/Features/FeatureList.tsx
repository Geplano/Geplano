import type { AppFeature } from "./features.types";

interface FeatureListProps {
  features: AppFeature[];
  activeFeature: string;
  onFeatureClick: (id: string) => void;
}

export function FeatureList({
  features,
  activeFeature,
  onFeatureClick,
}: FeatureListProps) {
  return (
    <ul className="mt-6 space-y-4">
      {features.map((feature) => (
        <li key={feature.id}>
          <button
            onClick={() => onFeatureClick(feature.id)}
            className={`w-full text-left p-3 rounded-lg transition-colors duration-300 ${
              activeFeature === feature.id
                ? "bg-gray-100 font-bold"
                : "hover:bg-gray-50"
            }`}
          >
            {feature.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
