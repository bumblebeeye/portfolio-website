import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Resume Job Match Analyzer"
};

export default function ResumeJobMatchAnalyzerPage() {
  return (
    <>
      <Section
        title="Resume-Job Match Analyzer"
        subtitle="Full-stack product case study focused on explainable analysis, cloud delivery, and production-aware engineering decisions."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-base font-semibold text-slate-900">Project Summary</h3>
          <p className="mt-3 leading-7 text-slate-700">
            This project is a full-stack Resume-Job Match Analyzer that compares resumes with job descriptions,
            highlights skill gaps, and provides AI-assisted improvement suggestions. It evolved from an MVP into an
            AWS-deployed system with improved security, monitoring, CI, and deployment safety.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://github.com/bumblebeeye/Resume-Job-Match-Analyzer"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              GitHub
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title="Demo Video"
        subtitle="Recorded walkthrough of the product flow so reviewers can see the system behavior without requiring an always-on cloud demo."
        className="bg-slate-50"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-6">
          <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/jSlag55zyiA?si=vaTi4ALOUT38Lzsg"
              title="Resume-Job Match Analyzer demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-sm text-slate-600">
            This video demonstrates the end-to-end analysis flow, saved history experience, and the overall product
            behavior from a user’s perspective.
          </p>
        </div>
      </Section>

      <Section
        title="Main Architecture Diagram"
        subtitle="Primary system view for the documented AWS deployment track."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-6">
          <Image
            src="/images/projects/resume-job-match-analyzer-architecture.png"
            alt="Resume-Job Match Analyzer AWS architecture diagram."
            width={3035}
            height={1246}
            className="h-auto w-full rounded-xl border border-slate-200"
          />
        </div>
      </Section>

      <Section
        title="Security & DevOps Improvements"
        subtitle="Key production-aware improvements added as the project matured beyond the initial MVP."
        className="bg-slate-50"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <ul className="list-disc space-y-3 pl-5 text-slate-700">
            <li>CI pipeline for backend tests and frontend quality checks</li>
            <li>Automated secret and dependency security scanning</li>
            <li>Safer resume uploads with size and MIME type validation</li>
            <li>Standardized API errors and request IDs for debugging</li>
            <li>Basic rate limiting for API protection</li>
            <li>CloudWatch alarms for latency, database CPU, and storage</li>
            <li>Safer production release flow with manual approval and smoke tests</li>
            <li>Documented future AWS private networking and Bedrock migration plan</li>
          </ul>
        </div>
      </Section>

      <Section
        title="What I Learned / Trade-offs"
        subtitle="Design choices and operating decisions that shaped the final documented system."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <ul className="list-disc space-y-4 pl-5 text-slate-700">
            <li>
              Amplify, App Runner, and RDS were a good fit because they gave me managed frontend hosting, backend
              compute, and database infrastructure without adding EC2-level operational overhead.
            </li>
            <li>
              Security hardening was more effective as a later phase: I shipped the core workflow first, then added CI,
              scanning, upload controls, request tracing, rate limiting, and monitoring once the product path was
              stable.
            </li>
            <li>
              I deactivated the live AWS environment to control recurring cloud costs, and used the recorded demo,
              architecture diagram, and Terraform-based reconstruction path as deliberate documentation and
              rebuildability choices.
            </li>
            <li>
              Manual production deployment with approvals and smoke checks was the right trade-off for this project; it
              improved release safety without the cost and complexity of a full always-on staging stack.
            </li>
          </ul>
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
    </>
  );
}
