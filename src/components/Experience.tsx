import { experience } from "../data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've built & shipped"
      subtitle="Industry platforms, research labs, and the bridge between them."
    >
      <div className="relative">
        <div className="absolute left-[1.15rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-mint/50 to-transparent sm:left-8 lg:block" />

        <div className="space-y-8 sm:space-y-10">
          {experience.map((job, i) => (
            <article
              key={job.id}
              className="reveal relative lg:pl-20"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border-2 border-accent bg-ink-950 shadow-[0_0_12px_rgba(61,156,245,0.6)] lg:block" />

              <div className="glass-card glow-border overflow-hidden transition hover:border-accent/20">
                <div className="border-b border-white/[0.06] bg-white/[0.02] px-5 py-4 sm:px-8 sm:py-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                          {job.role}
                        </h3>
                        {"badge" in job && job.badge && (
                          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                            {job.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-accent">
                        {job.org}
                        {"orgParent" in job && job.orgParent && (
                          <span className="text-ink-500"> · {job.orgParent}</span>
                        )}
                      </p>
                      <p className="mt-1 text-sm text-ink-500">
                        {job.location} · {job.period}
                      </p>
                      {"supervisor" in job && job.supervisor && (
                        <p className="mt-1 text-xs text-ink-500">
                          Supervisor: {job.supervisor}
                        </p>
                      )}
                    </div>
                    <span className="font-serif text-3xl text-ink-800 sm:text-4xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400">
                    {job.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 p-5 min-[520px]:grid-cols-2 sm:p-8">
                  {job.highlights.map((h) => (
                    <div
                      key={h.title}
                      className="rounded-xl border border-white/[0.05] bg-ink-900/50 p-4 transition hover:border-white/10"
                    >
                      <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-500 sm:text-sm">
                        {h.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
