"use client";

import { useState } from "react";
import { FeaturesContainer } from "./FeaturesContainer";
import { FeaturesHeader } from "./FeaturesHeader";
import { FeaturesContent } from "./FeaturesContent";
import { AppScreen } from "./AppScreen";
import { APP_FEATURES } from "./features.types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(APP_FEATURES[0].id);

  useScrollReveal();

  const currentFeature =
    APP_FEATURES.find((f) => f.id === activeFeature) || APP_FEATURES[0];

  return (
    <FeaturesContainer>
      <FeaturesHeader />
      <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
        <FeaturesContent
          features={APP_FEATURES}
          activeFeature={activeFeature}
          onFeatureClick={setActiveFeature}
        />
        <div className="flex justify-center scroll-reveal">
          <AppScreen
            imageUrl={currentFeature.imageUrl}
            title={currentFeature.title}
          />
        </div>
      </div>
    </FeaturesContainer>
  );
}
