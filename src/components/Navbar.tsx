import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

export function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink-950/90 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <a
          href="#"
          className="group flex min-w-0 shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-mint text-sm font-bold text-ink-950 shadow-lg shadow-accent/20 sm:h-10 sm:w-10"
            aria-hidden
          >
            {profile.initials}
          </span>
          <span className="min-w-0 truncate font-serif text-lg leading-none text-white sm:text-xl">
            <span className="md:hidden">{profile.brandShort}</span>
            <span className="hidden md:inline">{profile.brandFull}</span>
          </span>
        </a>

        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-sm transition xl:px-3 ${
                  active === item.id
                    ? "bg-white/10 text-white"
                    : "text-ink-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-3 py-2 text-xs font-semibold text-ink-950 transition hover:bg-accent-light sm:inline-flex sm:px-4 sm:text-sm"
          >
            Scholar
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-ink-950/98 px-4 py-4 lg:hidden">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block rounded-xl px-3 py-3 text-center text-sm ${
                    active === item.id ? "bg-accent/15 text-accent" : "text-ink-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-accent py-3 text-sm font-semibold text-ink-950"
          >
            Google Scholar
          </a>
        </div>
      )}
    </header>
  );
}
