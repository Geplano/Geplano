import { FeatureList } from "./FeatureList";
import type { AppFeature } from "./features.types";

interface FeaturesContentProps {
  features: AppFeature[];
  activeFeature: string;
  onFeatureClick: (id: string) => void;
}

export function FeaturesContent({
  features,
  activeFeature,
  onFeatureClick,
}: FeaturesContentProps) {
  return (
    <div className="scroll-reveal">
      <h3 className="text-2xl font-bold text-gray-900">
        Sua Obra na Palma da Mão
      </h3>
      <p className="mt-4 text-gray-600">
        Com nosso aplicativo exclusivo, você tem o controle total do seu
        projeto, onde quer que esteja. É a materialização da nossa promessa de
        transparência e gestão inteligente.
      </p>
      <FeatureList
        features={features}
        activeFeature={activeFeature}
        onFeatureClick={onFeatureClick}
      />
    </div>
  );
}
