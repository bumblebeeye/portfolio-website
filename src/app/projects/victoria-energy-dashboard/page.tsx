import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import TableauEmbed from "@/components/projects/TableauEmbed";

export const metadata: Metadata = {
  title: "Victoria Energy Dashboard"
};

const tableauUrl = "https://public.tableau.com/views/assignment1_17249770904430/Dashboard1?:showVizHome=no";

export default function VictoriaEnergyDashboardPage() {
  return (
    <>
      <Section
        title="Victoria's Energy Landscape: Demand, Pricing, and Environmental Impact"
        subtitle="Tableau case study exploring electricity demand, regional reference pricing, temperature effects, and emission patterns in Victoria."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="text-base font-semibold text-slate-900">Project Context</h3>
          <p className="mt-3 leading-7 text-slate-700">
            This dashboard investigates how demand and market pricing move across time and weather conditions, then links
            those energy patterns to greenhouse gas emissions by source. The goal is to support clearer energy planning
            and sustainability decisions.
          </p>

          <h3 className="mt-6 text-base font-semibold text-slate-900">Key Insights / Outcomes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Electricity demand and regional reference prices are both lower on holidays than on non-holidays.</li>
            <li>
              Quarterly demand stays high for most of the year, with repeatable end-of-year softening shown in the trend
              view.
            </li>
            <li>Hotter days are associated with higher demand and price pressure, indicating weather-sensitive cost risk.</li>
            <li>
              Moderate temperature ranges generally align with lower demand and lower pricing, suggesting more stable
              operating conditions.
            </li>
            <li>
              Commercial facilities contribute the largest share of total emissions, making them a priority target for
              decarbonization action.
            </li>
          </ul>

        </div>
      </Section>

      <Section
        title="Dashboard Preview"
        subtitle="Use the button below to open the full interactive Tableau dashboard in a new tab."
        className="bg-slate-50"
      >
        <TableauEmbed
          title="Victoria Energy Dashboard"
          previewImageSrc="/images/projects/victoria-energy-dashboard-preview.png"
          previewImageAlt="Preview of Victoria energy demand, pricing, and emissions Tableau dashboard."
          openUrl={tableauUrl}
        />
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <Link
            href="/projects"
            className="inline-flex rounded-lg border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            ← Back to Projects
          </Link>
        </div>
      </Section>
    </>
  );
}
