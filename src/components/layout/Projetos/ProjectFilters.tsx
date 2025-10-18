import type { ProjectCategory, FilterButton } from "./projects.types";

interface ProjectFiltersProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
  filters: FilterButton[];
}

export function ProjectFilters({
  activeFilter,
  onFilterChange,
  filters,
}: ProjectFiltersProps) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-4 scroll-reveal">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-4 py-2 text-sm md:text-base font-semibold border-2 rounded-full transition-all ${
            activeFilter === filter.id
              ? "bg-gray-900 text-white border-gray-900"
              : "border-gray-900 text-gray-900 hover:bg-gray-100"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
