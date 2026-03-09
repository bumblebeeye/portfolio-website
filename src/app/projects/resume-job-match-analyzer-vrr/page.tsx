import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Analyzer Case Study (VRR)"
};

export default function ResumeAnalyzerVrrCaseStudyPage() {
  return (
    <Section title="Resume-Job Match Analyzer" subtitle="Case study: Vercel + Render + Railway deployment version.">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="text-lg font-medium text-slate-800">
          A full-stack web app that compares a resume with a job description, scores fit, highlights skill gaps, and
          generates AI-assisted improvement suggestions.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
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

        <div className="mt-8 space-y-8 text-slate-700">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Overview</h3>
            <p className="mt-2 leading-7">
              This project was built as a portfolio-quality MVP to demonstrate practical full-stack engineering: product
              scoping, backend API design, database modeling, deployment, and AI integration.
            </p>
            <p className="mt-3">The app supports a complete workflow:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Upload resume</li>
              <li>Paste job description</li>
              <li>Get match analysis</li>
              <li>Review saved history and detail views</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Problem</h3>
            <p className="mt-2 leading-7">
              Job seekers often struggle to quickly understand how well their resume aligns with a role, and what to
              improve next.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Solution</h3>
            <p className="mt-2">I built an explainable analyzer with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Deterministic match scoring (keyword overlap)</li>
              <li>Overlapping vs missing skill extraction</li>
              <li>Structured summary and suggestions</li>
              <li>Persistent history of analyses</li>
              <li>Optional Gemini-powered suggestion enhancement (with safe fallback)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">My Role</h3>
            <p className="mt-2 leading-7">
              Solo full-stack developer. I designed and implemented frontend, backend, database schema, deployment
              pipeline, and test baseline.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Tech Stack</h3>
            <p className="mt-2 leading-7">
              Next.js, TypeScript, Tailwind CSS, FastAPI, Python, SQLAlchemy, PostgreSQL, Gemini API, Pytest, Vercel,
              Render, Railway, Docker, GitHub
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Architecture</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Frontend (Next.js): UI pages <code>/</code>, <code>/analyze</code>, <code>/history</code>,{" "}
                <code>/history/[id]</code>
              </li>
              <li>Backend (FastAPI): analysis endpoints and services</li>
              <li>Database (PostgreSQL): stores resumes, job descriptions, analyses</li>
              <li>AI (Gemini): generates improvement suggestions only when missing skills exist</li>
              <li>If AI is disabled/fails/timeouts, rule-based suggestions are returned</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Core Features Delivered</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Resume upload and text extraction (PDF/TXT/MD)</li>
              <li>Match score and summary</li>
              <li>Overlapping skills and missing skills</li>
              <li>Improvement suggestions</li>
              <li>Saved history list and detail pages</li>
              <li>AI-enhanced suggestions for missing skills</li>
              <li>Deployment to production (Vercel + Render + Railway)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">API Design</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <code>POST /api/analyze</code>: accepts resume file + role/company/job text, returns structured
                analysis and saves record.
              </li>
              <li>
                <code>GET /api/analyses</code>: returns analysis history list.
              </li>
              <li>
                <code>GET /api/analyses/{`{id}`}</code>: returns detailed analysis record.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Database Design</h3>
            <p className="mt-2">Main tables:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <code>resumes</code>
              </li>
              <li>
                <code>job_descriptions</code>
              </li>
              <li>
                <code>analyses</code>
              </li>
            </ul>
            <p className="mt-3 leading-7">
              <code>analyses</code> links to resume/job records with foreign keys and stores structured output
              (overlapping_skills, missing_skills, suggestions, metadata JSON).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">AI Integration</h3>
            <p className="mt-2">AI is intentionally scoped for low risk:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Score logic remains deterministic and explainable.</li>
              <li>Gemini is used only to improve suggestion quality.</li>
              <li>
                AI is triggered only when <code>missing_skills</code> is non-empty.
              </li>
              <li>
                Metadata tracks source: <code>suggestions_source</code> (AI or fallback mode).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Deployment</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Frontend: Vercel</li>
              <li>Backend: Render</li>
              <li>Database: Railway PostgreSQL</li>
            </ul>
            <p className="mt-3">Production URLs:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Frontend:{" "}
                <Link
                  href="https://resume-job-match-analyzer-rosy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 hover:text-brand-800"
                >
                  resume-job-match-analyzer-rosy.vercel.app
                </Link>
              </li>
              <li>
                Backend health:{" "}
                <Link
                  href="https://resume-job-match-analyzer.onrender.com/health"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 hover:text-brand-800"
                >
                  resume-job-match-analyzer.onrender.com/health
                </Link>
              </li>
            </ul>
            <p className="mt-3">Key env vars:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Backend: <code>DATABASE_URL</code>, <code>CORS_ORIGINS</code>, <code>RESUME_STORAGE_PATH</code>,{" "}
                <code>AI_SUGGESTIONS_ENABLED</code>, <code>GEMINI_API_KEY</code>, <code>AI_MODEL</code>,{" "}
                <code>AI_TIMEOUT_SECONDS</code>
              </li>
              <li>
                Frontend: <code>NEXT_PUBLIC_API_BASE_URL</code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Testing</h3>
            <p className="mt-2 leading-7">I added a simple maintainable backend test baseline using Pytest + FastAPI TestClient:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Health check test</li>
              <li>Analyze flow test</li>
              <li>History list/detail tests</li>
              <li>Validation and not-found tests</li>
            </ul>
            <p className="mt-3">Run tests:</p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
{`cd backend
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m pytest -q`}
            </pre>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Challenges and Fixes</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                PostgreSQL connection failure locally (<code>localhost:5432</code>): fixed by running DB in Docker and
                applying schema.
              </li>
              <li>
                Render startup crash from <code>CORS_ORIGINS</code> parsing: config hardened to support JSON-array and
                comma-separated formats.
              </li>
              <li>Vercel blocked deployment for vulnerable Next.js version: upgraded Next.js to a patched version.</li>
              <li>
                Resume storage path inconsistency (<code>backend/backend/...</code>): normalized storage path config.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Reproducibility</h3>
            <p className="mt-2">To reproduce locally:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Start PostgreSQL and apply <code>database/schema.sql</code>.
              </li>
              <li>
                Start backend (<code>uvicorn main:app</code>).
              </li>
              <li>
                Start frontend (<code>npm run dev</code>).
              </li>
              <li>
                Open <code>/analyze</code> and run a sample analysis.
              </li>
              <li>
                Verify saved records in <code>/history</code>.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Impact</h3>
            <p className="mt-2">This project demonstrates:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>End-to-end product delivery across frontend, backend, database, and cloud</li>
              <li>Practical API and data modeling skills</li>
              <li>Safe AI integration with fallback strategy</li>
              <li>Debugging and deployment readiness in real environments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Next Improvement</h3>
            <p className="mt-2">Deploy with AWS.</p>
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
