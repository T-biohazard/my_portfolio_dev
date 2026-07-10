import { useEffect, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { ProfileAvatar } from "./ProfileAvatar";
import { scrollToId, scrollToTop } from "../lib/smoothScroll";

export function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-smooth ${
        scrolled
          ? "border-white/[0.08] bg-ink-950/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "border-white/[0.04] bg-ink-950/80 backdrop-blur-lg"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 ease-smooth sm:gap-4 sm:px-6 ${
          scrolled ? "py-2.5 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <a
          href="#"
          className="group flex min-w-0 shrink-0 items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            scrollToTop();
          }}
        >
          <ProfileAvatar size="sm" className="shadow-lg shadow-accent/20" />
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
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.id);
                }}
                className={`relative whitespace-nowrap rounded-lg px-2.5 py-2 text-sm transition-all duration-200 ease-smooth xl:px-3 ${
                  active === item.id
                    ? "bg-white/10 text-white"
                    : "text-ink-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={profile.links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            Scholar
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition-all duration-200 ease-smooth hover:border-white/25 hover:bg-white/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ease-smooth ${open ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-ink-950/98 transition-all duration-300 ease-smooth lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.id);
                  }}
                  className={`block rounded-xl px-3 py-3 text-center text-sm transition-all duration-200 ease-smooth ${
                    active === item.id
                      ? "bg-accent/15 text-accent"
                      : "text-ink-300 hover:bg-white/5 hover:text-white"
                  }`}
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
            className="btn-primary mt-4 flex w-full justify-center"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </header>
  );
}
