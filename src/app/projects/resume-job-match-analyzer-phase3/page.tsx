import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Analyzer Case Study (Phase 3)"
};

export default function ResumeAnalyzerPhase3Page() {
  return (
    <Section
      title="Phase 7: Hardening & DevOps (In Progress)"
      subtitle="Resume–Job Match Analyzer Phase 3 — Security Hardening and Operational Maturity."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <div className="space-y-8 text-slate-700">
          <div>
            <p className="leading-7">
              After deploying the AWS MVP, I began a hardening and DevOps phase to make the project more
              production-aware. The focus of this stage is not adding new user-facing features, but improving how the
              system behaves in real-world delivery: reliability, security, debuggability, and safer deployment
              practices.
            </p>
            <p className="mt-3 leading-7">So far, I have completed the following:</p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">1) CI pipeline</h3>
            <p className="mt-2 leading-7">
              I added GitHub Actions to automatically run backend tests and frontend quality checks on every push and
              pull request.
            </p>
            <p className="mt-3">The pipeline currently verifies:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>backend pytest</li>
              <li>frontend type checking</li>
              <li>frontend linting</li>
              <li>frontend production build</li>
            </ul>
            <p className="mt-3 leading-7">
              This gives the project a repeatable quality gate and helps catch “works on my machine” issues earlier.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">2) Security scanning in CI</h3>
            <p className="mt-2 leading-7">I extended CI with automated security checks, including:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>secret scanning</li>
              <li>Python dependency vulnerability auditing</li>
              <li>npm dependency auditing</li>
            </ul>
            <p className="mt-3 leading-7">
              I also updated vulnerable backend packages to patched versions so the audit could pass cleanly. This
              moved security checks from manual awareness to automated enforcement.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">3) Backend input safety</h3>
            <p className="mt-2 leading-7">I hardened file upload handling by adding:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>maximum upload size enforcement</li>
              <li>MIME type validation aligned with supported resume formats</li>
              <li>tests for invalid content types and oversized uploads</li>
            </ul>
            <p className="mt-3 leading-7">
              This reduces the chance of malformed or unnecessarily large files reaching storage and parsing logic.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">4) Standardized backend error handling and request IDs</h3>
            <p className="mt-2 leading-7">I introduced:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>consistent JSON error responses</li>
              <li>request IDs attached to every request and response</li>
              <li>standardized handling for common API failure cases</li>
            </ul>
            <p className="mt-3 leading-7">
              This improves debugging and operational clarity. Request IDs make it easier to trace issues through logs,
              while a stable error structure makes frontend integration more predictable.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">5) Basic API protection with rate limiting</h3>
            <p className="mt-2 leading-7">
              I added lightweight rate limiting to the analysis endpoint, keyed by client IP and time window.
            </p>
            <p className="mt-3 leading-7">
              For this stage of the project, this provides a practical first layer of abuse protection without
              introducing a heavier authentication system. I also considered frontend-shared API keys, but deliberately
              avoided them because browser-exposed keys are not meaningful protection.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Result so far</h3>
            <p className="mt-2 leading-7">
              By the end of this phase, the project had moved from a functional deployed app to a more
              production-aware system with:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>automated CI quality gates</li>
              <li>automated security checks</li>
              <li>safer upload handling</li>
              <li>more consistent API behavior</li>
              <li>basic abuse protection</li>
            </ul>
            <p className="mt-3 leading-7">
              This phase reflects how I think about software beyond feature delivery: not just building something that
              works, but building something that is easier to test, debug, secure, and operate.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">Current progress</h3>
            <p className="mt-2 leading-7">
              This hardening and DevOps phase is still in progress. The remaining work is focused on AWS-side
              operational improvements, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>a private network path for RDS access</li>
              <li>observability and CloudWatch alarms</li>
              <li>a safer deployment workflow</li>
              <li>runbooks and final portfolio documentation</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/projects/resume-job-match-analyzer-aws"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            ← Previous Phase
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
