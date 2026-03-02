import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
        {project.status ? (
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            {project.status === "coming-soon" ? "Coming Soon" : "Featured"}
          </span>
        ) : null}
      </div>

      <p className="text-slate-600">{project.summary}</p>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-slate-800">Tech Stack</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-slate-800">Key Contribution / Impact</h4>
        <p className="mt-1 text-slate-600">{project.impact}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          {isComingSoon ? "GitHub (Placeholder)" : "GitHub"}
        </Link>
        <Link
          href={project.liveDemoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-800"
        >
          {isComingSoon ? "Live Demo (Placeholder)" : "Live Demo"}
        </Link>
      </div>
    </article>
  );
}
