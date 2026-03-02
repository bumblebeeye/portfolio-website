import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            GitHub
          </Link>
          <Link href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            LinkedIn
          </Link>
          <Link href={`mailto:${siteConfig.email}`} className="hover:text-slate-900">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
