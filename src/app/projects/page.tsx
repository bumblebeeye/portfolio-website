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
      subtitle="A growing collection of software and data projects."
    >
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">More Projects Coming</p>
        <p className="mt-2 text-slate-700">
          I am actively building new software and data projects, and I will continue adding case studies here.
        </p>
      </div>
    </Section>
  );
}
