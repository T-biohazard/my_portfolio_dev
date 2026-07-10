import { profile, socialLinks } from "../data/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's work together"
      subtitle="Whether it's a research collaboration, Ph.D. conversation, or an engineering role — I'd love to hear from you."
      className="bg-ink-900/40"
    >
      <div className="reveal mx-auto max-w-3xl">
        <div className="interactive-card glow-border overflow-hidden text-center">
          <div className="bg-gradient-to-b from-accent/10 to-transparent px-6 py-10 sm:px-12 sm:py-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-mint text-2xl font-bold text-ink-950 shadow-xl shadow-accent/20">
              {profile.initials}
            </div>
            <h3 className="mt-6 font-serif text-2xl text-white sm:text-3xl">
              {profile.name}
            </h3>
            <p className="mt-2 text-ink-400">{profile.title}</p>
            <p className="mt-1 text-sm text-ink-500">{profile.location}</p>
          </div>

          <div className="space-y-4 px-6 pb-8 sm:px-12 sm:pb-12">
            <a
              href={profile.links.email}
              className="block text-lg font-medium text-white transition hover:text-accent sm:text-xl"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="block text-ink-400 transition hover:text-white"
            >
              {profile.phone}
            </a>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col rounded-xl border px-4 py-4 text-left transition-all duration-200 ease-smooth ${
                    link.primary
                      ? "border-accent/30 bg-accent/5 hover:bg-accent/10"
                      : "border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${link.primary ? "text-accent" : "text-white"}`}
                  >
                    {link.label}
                    <span className="ml-1 inline-block transition group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </span>
                  <span className="mt-1 text-xs text-ink-500">{link.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
