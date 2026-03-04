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
        className="py-10 sm:py-12"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="leading-7 text-slate-700">
          I am Peter (Xinpei Ye), a recent graduate with a background in software, data, and business analytics. 
          I enjoy turning ideas into practical products, especially when they involve clean interfaces, reliable logic, and measurable real-world impact.
          </p>
        </div>
      </Section>

      <Section title="Internship Experience" className="py-8 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">AustralianSuper – Data Scientist Intern</h3>
            </div>
            <p className="text-sm font-medium text-slate-500">Jul 2025 – Sep 2025</p>
          </div>

          <p className="mt-4 leading-7 font-semibold text-slate-700">
            Delivered finance-focused anomaly detection using machine learning models 
            and present to the stakeholders using Power BI.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Built anomaly detection pipelines with K-Means, ARIMA, and Isolation Forest for GL transaction monitoring.</li>
            <li>Developed automated data cleaning pipelines to standardize, deduplicate, and align finance hierarchies.</li>
            <li>Partnered with Finance and Data Science teams to translate business requirements into scalable analytics solutions.</li>
            <li>Used Git for reproducible workflows and created interactive Power BI dashboards for finance stakeholders.</li>
          </ul>
        </div>
      </Section>

      <Section title="Education" className="bg-slate-50 py-8 sm:py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Bachelor: Monash University</h3>
          <p className="mt-2 text-lg text-slate-700">data science and software engineering</p>
          <p className="mt-1 text-sm text-slate-500">Graduation Year: 2024</p>
          <p className="mt-4 text-slate-600">
            Wam: 78
          </p>
        </div>
        
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-lg font-semibold text-slate-900">Master: Melbourne Business School</h3>
          <p className="mt-2 text-lg text-slate-700">business analytics</p>
          <p className="mt-1 text-sm text-slate-500">Graduation Year: 2025</p>
          <p className="mt-4 text-slate-600">
            Wam: 75
          </p>
        </div>
      </Section>

      <Section title="What I’m Looking For" className="bg-slate-50 py-8 sm:py-10">
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
