import type { TabId, TabButton } from "./solution.types";

interface SolutionTabsProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
  tabs: TabButton[];
}

export function SolutionTabs({
  activeTab,
  onTabChange,
  tabs,
}: SolutionTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav
        className="-mb-px flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-x-4"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-3 sm:py-4 px-6 sm:border-b-2 border-l-4 sm:border-l-0 font-medium text-base sm:text-lg transition-all duration-300 text-left sm:text-center sm:min-w-[200px] ${
              activeTab === tab.id
                ? "border-geplano-gold text-geplano-gold bg-amber-50 sm:bg-transparent"
                : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 sm:hover:bg-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
