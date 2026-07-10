import { useEffect, useState } from "react";
import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";
import { navItems, profile } from "./data/portfolio";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal:not(.reveal-hero)");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    let sectionFrame = 0;
    let pendingSection = "about";

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) pendingSection = visible.target.id;

        cancelAnimationFrame(sectionFrame);
        sectionFrame = requestAnimationFrame(() => {
          setActiveSection((prev) =>
            prev === pendingSection ? prev : pendingSection,
          );
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.15, 0.35] },
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      cancelAnimationFrame(sectionFrame);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/[0.04] px-4 py-10 text-center">
        <p className="text-sm text-ink-500">
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <p className="mt-2 text-xs text-ink-600">
          Dhaka, Bangladesh · Building AI for wellness, health, and communities that need it most.
        </p>
      </footer>
      <BackToTop />
    </>
  );
}
