import { skillGroups } from "../data/portfolio";
import { Section } from "./Section";

const levelLabel: Record<string, string> = {
  core: "Core expertise",
  strong: "Production-ready",
  specialty: "Research specialty",
  tools: "Tools & workflow",
};

const levelWidth: Record<string, string> = {
  core: "w-full",
  strong: "w-[88%]",
  specialty: "w-[92%]",
  tools: "w-[75%]",
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical toolkit"
      subtitle="Matched to my CV — from PyTorch research to Kubernetes production and biometric SDKs."
    >
      <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            className="reveal glass-card flex flex-col p-5 sm:p-6"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              <span className="shrink-0 text-[10px] uppercase tracking-wider text-ink-600">
                {levelLabel[group.level]}
              </span>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r from-accent to-mint ${levelWidth[group.level]}`}
              />
            </div>
            <div className="mt-4 flex flex-1 flex-wrap gap-2 content-start">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-ink-300 transition hover:border-accent/30 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
