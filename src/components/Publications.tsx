import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  profile,
  pubFilters,
  publications,
  type Publication,
  type PublicationType,
} from "../data/portfolio";
import { Section } from "./Section";

const typeBadge: Record<PublicationType, string> = {
  journal: "bg-accent/15 text-accent",
  conference: "bg-violet/15 text-violet-light",
  dataset: "bg-mint/15 text-mint",
  thesis: "bg-amber/15 text-amber",
  pending: "bg-ink-700 text-ink-300",
  accepted: "bg-mint/15 text-mint",
};

export function Publications() {
  const [filter, setFilter] = useState<PublicationType | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? publications
        : publications.filter((p) => p.type === filter),
    [filter],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: publications.length };
    publications.forEach((p) => {
      c[p.type] = (c[p.type] ?? 0) + 1;
    });
    return c;
  }, []);

  return (
    <Section
      id="publications"
      label="Publications"
      title="Peer-reviewed work"
      subtitle="17+ accepted outputs across Elsevier Q1 journals, IEEE, Springer Nature, and public datasets — aligned with Google Scholar."
      className="bg-ink-900/40"
    >
      <a
        href={profile.links.scholar}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal mb-8 flex flex-col gap-3 rounded-2xl border border-accent/25 bg-gradient-to-r from-accent/10 via-transparent to-mint/10 p-5 transition hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div>
          <p className="text-sm font-semibold text-white">Google Scholar Profile</p>
          <p className="mt-1 text-sm text-ink-400">
            {profile.scholarAffiliation} — verified @ std.ewubd.edu
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
          View all citations
          <span aria-hidden>↗</span>
        </span>
      </a>

      <div className="reveal -mx-1 flex gap-2 overflow-x-auto pb-2 scrollbar-thin sm:mx-0 sm:flex-wrap sm:overflow-visible sm:pb-0">
        {pubFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
              filter === f.id
                ? "bg-accent text-ink-950"
                : "border border-white/10 text-ink-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {f.label}
            <span className="ml-1.5 opacity-70">({counts[f.id] ?? 0})</span>
          </button>
        ))}
      </div>

      <div className="mt-8 hidden md:block">
        <div className="grid max-h-[32rem] gap-4 overflow-y-auto pr-2 scrollbar-thin md:grid-cols-2">
          {filtered.map((pub) => (
            <PubCard key={pub.title} pub={pub} />
          ))}
        </div>
      </div>

      <div className="mt-8 pub-swiper md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 7500, disableOnInteraction: true }}
          className="!pb-14"
        >
          {filtered.map((pub) => (
            <SwiperSlide key={pub.title}>
              <PubCard pub={pub} tall />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-ink-500">No publications in this category.</p>
      )}
    </Section>
  );
}

function PubCard({ pub, tall }: { pub: Publication; tall?: boolean }) {
  return (
    <article
      className={`glass-card flex flex-col p-5 transition hover:border-accent/20 sm:p-6 ${
        tall ? "min-h-[280px]" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${typeBadge[pub.type]}`}
        >
          {pub.type}
        </span>
        {pub.year && (
          <span className="text-xs text-ink-500">{pub.year}</span>
        )}
        {pub.award && (
          <span className="text-xs font-medium text-amber">{pub.award}</span>
        )}
      </div>
      <h3 className="mt-3 flex-1 text-sm font-medium leading-snug text-white sm:text-base">
        {pub.title}
      </h3>
      <p className="mt-2 text-xs text-accent sm:text-sm">{pub.venue}</p>
      <p className="mt-1 text-xs text-ink-500">{pub.role}</p>
      {pub.detail && (
        <p className="mt-3 text-xs leading-relaxed text-ink-400">{pub.detail}</p>
      )}
      {pub.doi && (
        <a
          href={
            pub.type === "dataset"
              ? `https://data.mendeley.com/datasets/fyj9by2t22/1`
              : `https://doi.org/${pub.doi}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-xs text-mint hover:underline"
        >
          DOI: {pub.doi}
        </a>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {pub.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] text-ink-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
