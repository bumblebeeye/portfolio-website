import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-16 ${className ?? ""}`.trim()}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-base text-slate-600">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
