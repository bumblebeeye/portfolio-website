import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Home"
};

const featuredProjects = projects.filter((project) => project.status === "featured");

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Software Portfolio</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-700">{siteConfig.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">{siteConfig.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              View Projects
            </Link>
            <a
              href={siteConfig.resumePath}
              download
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <Section title="Tech Stack" subtitle="Core technologies I currently use for full-stack and data-driven projects.">
        <ul className="flex flex-wrap gap-3">
          {siteConfig.techStack.map((tech) => (
            <li key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              {tech}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Featured Projects"
        subtitle="A quick look at selected work. Visit the projects page for full details and upcoming builds."
        className="bg-slate-50"
      >
        <div className="grid gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            See all projects →
          </Link>
        </div>
      </Section>

      <Section
        title="Let’s Connect"
        subtitle="I’m open to junior software engineering, web development, and data-related opportunities."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="text-slate-700">
            If you are hiring or would like to discuss projects, I would be glad to connect.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Contact Me
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
