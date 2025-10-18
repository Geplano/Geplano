"use client";

import { useState } from "react";
import { SolutionContainer } from "./SolutionContainer";
import { SolutionHeader } from "./SolutionHeader";
import { SolutionTabs } from "./SolutionTabs";
import { PillarsTabContent } from "./PillarsTabContent";
import { AdvantagesTabContent } from "./AdvantagesTabContent";
import { DeliverablesTabContent } from "./DeliverablesTabContent";
import {
  TAB_BUTTONS,
  PILLARS,
  ADVANTAGES,
  DELIVERABLES,
  type TabId,
} from "./solution.types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SolutionSection() {
  const [activeTab, setActiveTab] = useState<TabId>("pilares");

  useScrollReveal();

  const renderTabContent = () => {
    switch (activeTab) {
      case "pilares":
        return <PillarsTabContent pillars={PILLARS} />;
      case "vantagens":
        return <AdvantagesTabContent advantages={ADVANTAGES} />;
      case "o-que-entregamos":
        return <DeliverablesTabContent deliverables={DELIVERABLES} />;
      default:
        return null;
    }
  };

  return (
    <SolutionContainer>
      <SolutionHeader />
      <div className="mt-12 max-w-6xl mx-auto scroll-reveal">
        <SolutionTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={TAB_BUTTONS}
        />
        <div className="mt-8">{renderTabContent()}</div>
      </div>
    </SolutionContainer>
  );
}
