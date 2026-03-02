import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="A growing collection of software and data projects. Replace placeholders with your final case studies anytime."
    >
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
