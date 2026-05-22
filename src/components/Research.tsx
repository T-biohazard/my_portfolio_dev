import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { researchDomains, researchInterests } from "../data/portfolio";
import { Section } from "./Section";

const domainColors: Record<string, string> = {
  mint: "from-mint/20 to-transparent border-mint/20",
  accent: "from-accent/20 to-transparent border-accent/20",
  violet: "from-violet/20 to-transparent border-violet/20",
  amber: "from-amber/20 to-transparent border-amber/20",
};

export function Research() {
  return (
    <>
      <Section
        id="research"
        label="Research"
        title="What I explore"
        subtitle="From semi-supervised crop disease detection to agentic wellness — always with explainability and real-world impact."
        className="bg-ink-900/40"
      >
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {researchInterests.map((item, i) => (
            <article
              key={item.title}
              className={`reveal glass-card group p-5 transition hover:-translate-y-1 hover:border-white/15 sm:p-6`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-2xl" role="img" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-white sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-500 sm:text-sm">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-white/[0.04] py-16 sm:py-20">
        <div className="page-container">
          <p className="section-label">Research domains</p>
          <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
            Projects by field
          </h3>
          <p className="mt-2 max-w-2xl text-ink-400">
            A snapshot of ongoing and published work — swipe on mobile, scroll on desktop.
          </p>

          <div className="mt-10 domain-swiper lg:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={16}
              slidesPerView={1.05}
              pagination={{ clickable: true }}
              autoplay={{ delay: 8000, disableOnInteraction: true }}
              className="!pb-12"
            >
              {researchDomains.map((d) => (
                <SwiperSlide key={d.domain}>
                  <DomainCard domain={d} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-2">
            {researchDomains.map((d) => (
              <DomainCard key={d.domain} domain={d} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DomainCard({
  domain: d,
}: {
  domain: (typeof researchDomains)[number];
}) {
  const gradient = domainColors[d.color] ?? domainColors.accent;
  return (
    <article
      className={`rounded-2xl border bg-gradient-to-br p-6 sm:p-8 ${gradient}`}
    >
      <h4 className="text-lg font-semibold text-white">{d.domain}</h4>
      <p className="mt-2 text-sm text-ink-400">{d.summary}</p>
      <ul className="mt-5 space-y-2.5">
        {d.projects.map((p) => (
          <li key={p} className="flex gap-2 text-sm text-ink-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}
