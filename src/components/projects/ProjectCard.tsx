import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";
  const isCurrentSite = project.isCurrentSite === true;
  const hasGithub = Boolean(project.githubUrl);
  const hasCaseStudy = Boolean(project.detailsPath);
  const hasLiveDemo = Boolean(project.liveDemoUrl) && !isCurrentSite && !hasCaseStudy;

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
      {isCurrentSite ? (
        <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
          You are currently viewing this live project.
        </p>
      ) : null}
      {project.progressNote ? (
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
          {project.progressNote}
        </p>
      ) : null}

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

      <div className="mt-6 flex flex-wrap gap-3">
        {hasGithub ? (
          <Link
            href={project.githubUrl!}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            {isComingSoon ? "GitHub (Placeholder)" : "GitHub"}
          </Link>
        ) : null}
        {isCurrentSite ? (
          <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            You Are Here
          </span>
        ) : hasCaseStudy ? (
          <Link
            href={project.detailsPath!}
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-800"
          >
            View Case Study
          </Link>
        ) : hasLiveDemo ? (
          <Link
            href={project.liveDemoUrl!}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-800"
          >
            {isComingSoon ? "Live Demo (Placeholder)" : "Live Demo"}
          </Link>
        ) : (
          <span className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
            Demo details coming soon
          </span>
        )}
      </div>
    </article>
  );
}
