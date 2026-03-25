import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Analyzer Case Study (VRR)"
};

export default function ResumeAnalyzerVrrCaseStudyPage() {
  return (
    <Section
      title="Case Study 1: Resume Job Match Analyzer MVP and initial production deployment"
      subtitle="Full-stack web app with explainable scoring, AI-assisted suggestions, and persistent history."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="https://resume-job-match-analyzer-rosy.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/bumblebeeye/Resume-Job-Match-Analyzer"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            GitHub
          </Link>
        </div>

        <div className="space-y-8 text-slate-700">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Overview</h3>
            <p className="mt-2 leading-7">
              I built a full-stack web application that compares a resume with a job description, calculates a match
              score, highlights overlapping and missing skills, and generates practical improvement suggestions.
            </p>
            <p className="mt-3 leading-7">
              The project was designed to demonstrate end-to-end product delivery across frontend, backend, database
              design, deployment, and AI integration.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">What I Built</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Resume upload and text extraction</li>
              <li>Match scoring and structured analysis</li>
              <li>Skill gap detection</li>
              <li>Saved history and detail views</li>
              <li>AI-enhanced suggestions with safe fallback logic</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">My Contribution</h3>
            <p className="mt-2 leading-7">
              I independently scoped the product, designed the architecture, built the frontend and backend, modeled
              the database, integrated Gemini-based suggestions, deployed the app, and added backend tests.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Key Decisions</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Kept scoring deterministic and explainable</li>
              <li>Used AI only to enhance suggestions, not core scoring</li>
              <li>Added fallback logic so AI failure would not break the workflow</li>
              <li>Deployed across Vercel, Render, and Railway</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Challenges Solved</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Fixed PostgreSQL setup and schema issues locally</li>
              <li>Resolved Render startup problems caused by CORS parsing</li>
              <li>Upgraded Next.js after Vercel blocked deployment on a vulnerable version</li>
              <li>Normalised file storage paths across environments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Tech Stack</h3>
            <p className="mt-2 leading-7">
              Next.js, TypeScript, Tailwind CSS, FastAPI, Python, SQLAlchemy, PostgreSQL, Gemini API, Pytest,
              Vercel, Render, Railway, Docker, GitHub
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">What This Demonstrates</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Full-stack web development</li>
              <li>API and database design</li>
              <li>Safe AI integration with fallback thinking</li>
              <li>Real-world debugging and deployment skills</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
          <Link
            href="/projects/resume-job-match-analyzer-aws"
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Next Phase →
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <Link
          href="/projects"
          className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
        >
          Back to Projects
        </Link>
      </div>
    </Section>
  );
}
