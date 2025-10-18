import { ProjectCard } from "./ProjectCard";
import type { Project } from "./projects.types";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="scroll-reveal">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
