import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight text-slate-900">
          {siteConfig.shortName}
        </Link>
        <ul className="flex items-center gap-2 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
