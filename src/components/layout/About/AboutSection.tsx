"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AboutContainer } from "./AboutContainer";
import { AboutContent } from "./AboutContent";
import { AboutStats } from "./AboutStats";

export function AboutSection() {
  useScrollReveal();

  return (
    <AboutContainer>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AboutContent />
        <AboutStats />
      </div>
    </AboutContainer>
  );
}
