import {
  aboutIntro,
  aboutParagraphs,
  accomplishments,
  education,
  extracurricular,
  mentors,
  profile,
} from "../data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      label="About me"
      title="Research depth. Production discipline."
      subtitle="Ph.D. applicant (Fall 2026) · building AI that is adaptive, explainable, and safe for real people."
    >
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <div className="reveal space-y-5 lg:col-span-3">
          <p className="text-lg font-medium leading-relaxed text-white">{aboutIntro}</p>
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 48)} className="text-ink-400 leading-relaxed">
              {p}
            </p>
          ))}
          <p className="rounded-2xl border border-mint/20 bg-mint/5 px-5 py-4 text-sm text-mint-light">
            {profile.availability}
          </p>
        </div>

        <div className="reveal reveal-delay-1 space-y-5 lg:col-span-2">
          <div className="glass-card glow-border p-6">
            <h3 className="flex items-center gap-2 font-semibold text-white">
              <span className="text-accent">◎</span> Education
            </h3>
            <p className="mt-3 text-lg text-white">{education.degree}</p>
            <p className="text-ink-400">{education.school}</p>
            <p className="mt-2 text-sm text-ink-500">
              {education.period} · CGPA {education.gpa}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mint">{education.note}</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-white">Awards & milestones</h3>
            <ul className="mt-4 space-y-3">
              {accomplishments.map((item) => (
                <li key={item.title} className="border-l-2 border-accent/40 pl-3">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-ink-500">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-white">Research mentors</h3>
            <ul className="mt-3 space-y-2">
              {mentors.map((m) => (
                <li key={m} className="text-sm text-ink-400">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-white">Beyond papers</h3>
            <ul className="mt-3 space-y-2">
              {extracurricular.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-ink-400">
                  <span className="text-mint shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
