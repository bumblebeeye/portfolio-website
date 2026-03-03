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
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="leading-7 text-slate-700">
          I am Peter (Xinpei Ye), a recent graduate with a background in software, data, and business analytics. 
          I enjoy turning ideas into practical products, especially when they involve clean interfaces, reliable logic, and measurable real-world impact.
          </p>
        </div>
      </Section>

      <Section title="Education" className="bg-slate-50">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Bachelor: Monash University</h3>
          <p className="mt-2 text-lg text-slate-700">data science and software engineering</p>
          <p className="mt-1 text-sm text-slate-500">Graduation Year: 2024</p>
          <p className="mt-4 text-slate-600">
            Wam: 78
          </p>
        </div>
        
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Master: Melbourne Business School</h3>
          <p className="mt-2 text-lg text-slate-700">business analytics</p>
          <p className="mt-1 text-sm text-slate-500">Graduation Year: 2025</p>
          <p className="mt-4 text-slate-600">
            Wam: 75
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
