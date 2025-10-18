"use client";

import { useState, useMemo, useEffect } from "react";
import { ProjectsContainer } from "./ProjectsContainer";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectGrid } from "./ProjectGrid";
import {
  FILTER_BUTTONS,
  PROJECTS,
  type ProjectCategory,
} from "./projects.types";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Re-initialize scroll reveal when filtered projects change
  useEffect(() => {
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    scrollRevealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      scrollRevealElements.forEach((el) => {
        revealObserver.unobserve(el);
      });
    };
  }, [filteredProjects]);

  return (
    <ProjectsContainer>
      <ProjectsHeader />
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={FILTER_BUTTONS}
      />
      <ProjectGrid projects={filteredProjects} />
    </ProjectsContainer>
  );
}
