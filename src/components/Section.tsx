import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-14 sm:scroll-mt-24 sm:py-20 md:py-24 ${className}`}>
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-label">{label}</p>
          <h2 className="mt-2 font-serif text-3xl text-white sm:mt-3 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-ink-400 sm:text-lg">{subtitle}</p>
          )}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
