import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <Section
        title="About Me"
        subtitle="A short professional snapshot that you can customize for specific roles and industries."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="leading-7 text-slate-700">
            I am Peter (Xinpei Ye), a recent Data and AI graduate with a strong interest in software engineering and web
            development. I enjoy turning ideas into practical products, especially when they involve clean interfaces,
            reliable backend logic, and measurable user impact.
          </p>
        </div>
      </Section>

      <Section title="Education" className="bg-slate-50">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">[Your University Name]</h3>
          <p className="mt-2 text-slate-700">Bachelor / Master in Data Science, AI, or related field</p>
          <p className="mt-1 text-sm text-slate-500">Graduation Year: 20XX</p>
          <p className="mt-4 text-slate-600">
            Placeholder: Add key coursework, honors, capstone project, or exchange programs relevant to target roles.
          </p>
        </div>
      </Section>

      <Section title="Skills & Tools">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold text-slate-900">Languages</h3>
            <p className="mt-2 text-slate-600">TypeScript, JavaScript, Python, SQL</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold text-slate-900">Frontend</h3>
            <p className="mt-2 text-slate-600">React, Next.js, Tailwind CSS, HTML/CSS</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold text-slate-900">Backend & Data</h3>
            <p className="mt-2 text-slate-600">Node.js, REST APIs, PostgreSQL, data analysis workflows</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold text-slate-900">Tools</h3>
            <p className="mt-2 text-slate-600">Git/GitHub, VS Code, Netlify, testing and debugging practices</p>
          </div>
        </div>
      </Section>

      <Section title="What I’m Looking For" className="bg-slate-50">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="leading-7 text-slate-700">
            I am currently looking for junior software engineering, web development, or data-focused roles where I can
            contribute to production systems, learn from experienced teams, and continue strengthening both product and
            engineering fundamentals.
          </p>
        </div>
      </Section>
    </>
  );
}
