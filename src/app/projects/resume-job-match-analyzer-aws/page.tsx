import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Analyzer Case Study (AWS)"
};

export default function ResumeAnalyzerAwsCaseStudyPage() {
  return (
    <Section title="Resume Job Match Analyzer (AWS Deployment Track)" subtitle="Case study: AWS deployment track for the same product scope.">
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
              I deployed my full-stack Resume Job Match Analyzer to AWS as a separate demonstration track, while
              keeping the existing production stack (Vercel + Render + Railway) unchanged.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Tech Stack</h3>
            <p className="mt-2 leading-7">
              FastAPI, Next.js (App Router), PostgreSQL, AWS App Runner, AWS Amplify, AWS RDS, AWS S3, AWS Secrets
              Manager.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Goals</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Deploy backend to AWS with managed compute.</li>
              <li>Move file storage to S3.</li>
              <li>Keep PostgreSQL on RDS.</li>
              <li>Deploy frontend to AWS and fully integrate with backend.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Existing App Scope (Preserved)</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Resume upload + job description analysis flow.</li>
              <li>History list and detail pages.</li>
              <li>Gemini-powered suggestions with fallback logic.</li>
              <li>Existing API tests and architecture.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">AWS Architecture</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Frontend: AWS Amplify (Next.js)</li>
              <li>Backend: AWS App Runner (FastAPI)</li>
              <li>Database: Amazon RDS for PostgreSQL</li>
              <li>File storage: Amazon S3</li>
              <li>Secrets: AWS Secrets Manager</li>
              <li>Region: ap-southeast-2 (Sydney)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Why This Architecture</h3>
            <p className="mt-2 leading-7">
              I chose managed services (App Runner + Amplify) over EC2 to reduce operational overhead.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>no manual server patching</li>
              <li>no manual process manager/reverse proxy setup</li>
              <li>faster deployment and easier maintenance for a portfolio project</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Implementation Summary</h3>
            <p className="mt-2 font-semibold text-slate-800">Foundation</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Created RDS PostgreSQL instance and initialized schema.</li>
              <li>Created S3 bucket for resume files.</li>
              <li>Stored database URL and API key in Secrets Manager.</li>
              <li>Added budget/cost guardrails.</li>
            </ul>

            <p className="mt-4 font-semibold text-slate-800">Backend Deployment</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Deployed FastAPI to App Runner from GitHub branch.</li>
              <li>Connected runtime to Secrets Manager values.</li>
              <li>Verified <code>/health</code> and <code>/api/analyze</code>.</li>
              <li>Added minimal code patch to support S3 uploads with local fallback.</li>
            </ul>

            <p className="mt-4 font-semibold text-slate-800">Frontend Deployment</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Deployed Next.js app to Amplify from monorepo frontend root.</li>
              <li>Set <code>NEXT_PUBLIC_API_BASE_URL</code> to App Runner URL.</li>
              <li>Updated backend <code>CORS_ORIGINS</code> to allow Amplify domain.</li>
              <li>
                Ran end-to-end checks on <code>/analyze</code>, <code>/history</code>, and <code>/history/[id]</code>.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Key Problems I Solved</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                App Runner build failures (pip not found / uvicorn import issues): fixed build/start commands and
                runtime setup.
              </li>
              <li>
                Amplify build failure (npm ci lockfile mismatch): resolved with cache-cleared redeploy and build config
                validation.
              </li>
              <li>CORS integration: validated with explicit Origin header testing.</li>
              <li>Storage migration: moved resume uploads to S3 without breaking local/dev behavior.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Results</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>AWS frontend and backend are fully integrated and running.</li>
              <li>Upload/analysis/history flow works end-to-end on AWS.</li>
              <li>Resume files are persisted in S3.</li>
              <li>Existing Vercel/Render/Railway deployment remains intact as a separate track.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Security and Cost Notes</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Secrets are managed via Secrets Manager (not hardcoded in app config).</li>
              <li>IAM role-based access is used for App Runner.</li>
              <li>Budget alerts were configured early.</li>
              <li>Next hardening step: tighten temporary broad RDS ingress rule after network setup refinement.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </Section>
  );
}
