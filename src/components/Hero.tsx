import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { heroSlides, profile, socialLinks } from "../data/portfolio";
import { scrollToId } from "../lib/smoothScroll";

const heroSocialLinks = socialLinks.filter((l) => l.label !== "Google Scholar");

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden gradient-mesh pt-[4.5rem] sm:pt-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] max-w-[90vw] rounded-full bg-accent/15 blur-[80px] animate-float md:blur-[100px]" />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 max-w-[70vw] rounded-full bg-mint/10 blur-[90px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
        <div className="grid w-full min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="reveal reveal-hero w-full min-w-0 max-w-none">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs leading-snug text-ink-300 sm:text-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="min-w-0">{profile.scholarAffiliation}</span>
            </div>

            <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-white min-[400px]:text-5xl sm:mt-5 sm:text-6xl lg:text-[3.5rem] xl:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-base font-medium text-accent sm:text-lg md:text-xl">
              {profile.title}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-400 sm:mt-5 sm:text-base md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-6 flex w-full min-w-0 flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-8">
              <a href={profile.links.email} className="btn-primary group w-full gap-2 xs:w-auto">
                Say hello
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href={profile.links.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full xs:w-auto"
              >
                Google Scholar
              </a>
            </div>

            <div className="mt-5 flex w-full min-w-0 flex-wrap gap-2">
              {heroSocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 rounded-full border border-white/[0.08] px-3 py-2 text-xs text-ink-400 transition hover:border-white/20 hover:text-white sm:px-4 sm:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 grid w-full min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:mt-10">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="interactive-card min-w-0 p-4 sm:p-5"
                >
                  <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium leading-snug text-ink-300 sm:text-sm">
                    {stat.label}
                  </div>
                  {"sub" in stat && stat.sub && (
                    <div className="mt-1 text-[10px] leading-snug text-ink-500 sm:text-xs">
                      {stat.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-hero reveal-delay-1 hero-swiper w-full min-w-0 lg:max-w-none">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={900}
              autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true }}
              loop
              grabCursor
              className="glass-card glow-border w-full overflow-hidden !pb-14"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.headline}>
                  <div className="p-5 sm:p-8 md:p-10">
                    <span
                      className={`inline-block max-w-full rounded-full px-3 py-1 text-xs font-semibold leading-snug ${
                        slide.accent === "mint"
                          ? "bg-mint/15 text-mint"
                          : slide.accent === "violet"
                            ? "bg-violet/15 text-violet-light"
                            : "bg-accent/15 text-accent"
                      }`}
                    >
                      {slide.eyebrow}
                    </span>
                    <h2 className="mt-4 font-serif text-xl leading-snug text-white sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl">
                      {slide.headline}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink-400 sm:mt-4 sm:text-base">
                      {slide.body}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("about")}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-500 transition-colors duration-200 hover:text-ink-300 sm:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <svg className="h-4 w-4 animate-soft-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
