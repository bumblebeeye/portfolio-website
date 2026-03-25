import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Analyzer Case Study (Phase 3)"
};

export default function ResumeAnalyzerPhase3Page() {
  return (
    <Section
      title="Phase 3: Security Hardening and Operational Maturity"
      subtitle="This phase page is prepared and will be published with the final hardening implementation details."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <p className="leading-7 text-slate-700">
          Content for Phase 3 is coming soon. It will focus on security hardening, operational maturity, and production
          reliability improvements.
        </p>

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
