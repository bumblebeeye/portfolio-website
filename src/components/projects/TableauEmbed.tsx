import Image from "next/image";
import Link from "next/link";

type TableauEmbedProps = {
  title: string;
  previewImageSrc: string;
  previewImageAlt: string;
  openUrl: string;
};

export default function TableauEmbed({ title, previewImageSrc, previewImageAlt, openUrl }: TableauEmbedProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-6">
      <Image
        src={previewImageSrc}
        alt={previewImageAlt}
        width={1700}
        height={2200}
        className="h-auto w-full rounded-xl border border-slate-200"
        priority={false}
      />

      <div className="mt-4">
        <Link
          href={openUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${title} in new tab`}
          className="inline-flex rounded-lg bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
        >
          Open Interactive Dashboard in New Tab
        </Link>
      </div>
    </div>
  );
}
