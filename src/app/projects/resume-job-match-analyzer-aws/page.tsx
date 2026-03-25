import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Analyzer Case Study (AWS)"
};

export default function ResumeAnalyzerAwsCaseStudyPage() {
  return (
    <Section
      title="Case Study 2: AWS Deployment and cloud architecture extension"
      subtitle="Managed AWS deployment of the same product using App Runner, Amplify, RDS, S3, and Secrets Manager."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <Link
            href="https://codex-aws-phase6.d7aj7hvvxk2xv.amplifyapp.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/bumblebeeye/Resume-Job-Match-Analyzer/tree/codex/aws-phase6"
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
              I created a separate AWS deployment track for the same Resume Job Match Analyzer to demonstrate cloud
              architecture, managed service integration, and deployment troubleshooting, while keeping the original
              production stack unchanged.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">What I Implemented</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Deployed the FastAPI backend to AWS App Runner</li>
              <li>Deployed the Next.js frontend to AWS Amplify</li>
              <li>Used Amazon RDS for PostgreSQL</li>
              <li>Moved resume file storage to Amazon S3</li>
              <li>Managed secrets with AWS Secrets Manager</li>
              <li>Verified the full upload, analysis, and history workflow end-to-end</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Why This Matters</h3>
            <p className="mt-2 leading-7">
              This phase was not just about hosting the app on another platform. It showed that I could migrate a
              working full-stack product into a managed AWS architecture and make multiple services work together
              reliably.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Challenges Solved</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Fixed App Runner build and runtime issues</li>
              <li>Resolved Amplify build and lockfile problems</li>
              <li>Corrected CORS integration between frontend and backend</li>
              <li>Added S3-backed storage without breaking local development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Security and Ops Notes</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Used Secrets Manager instead of hardcoded credentials</li>
              <li>Used IAM role-based access for App Runner</li>
              <li>Added early budget and cost guardrails</li>
              <li>Identified further hardening as the next phase</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Tech Stack</h3>
            <p className="mt-2 leading-7">
              AWS Amplify, AWS App Runner, Amazon RDS, Amazon S3, AWS Secrets Manager,
              GitHub
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">What This Demonstrates</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Managed AWS deployment skills</li>
              <li>Cloud service integration across frontend, backend, database, storage, and secrets</li>
              <li>Real deployment debugging in AWS</li>
              <li>Practical cloud architecture decisions</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/projects/resume-job-match-analyzer-vrr"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            ← Previous Phase
          </Link>
          <Link
            href="/projects/resume-job-match-analyzer-phase3"
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
