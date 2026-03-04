import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Feel free to reach out for opportunities, collaborations, or networking.">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</h3>
          <Link href={`mailto:${siteConfig.email}`} className="mt-3 block text-base font-medium text-slate-900 hover:text-brand-700">
            {siteConfig.email}
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">LinkedIn</h3>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-base font-medium text-slate-900 hover:text-brand-700"
          >
            linkedin.com/xinpei-ye
          </Link>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">GitHub</h3>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-base font-medium text-slate-900 hover:text-brand-700"
          >
            github.com/xinpeiye
          </Link>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
        <h3 className="text-base font-semibold text-slate-900">Optional: Contact Form Placeholder</h3>
        <p className="mt-2 text-slate-600">
          reminder: add a simple front-end form here later if needed
        </p>
      </div>
    </Section>
  );
}
