import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { navItems } from "./data/portfolio";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { Skills } from "./components/Skills";
import { profile } from "./data/portfolio";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
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
          © {new Date().getFullYear()} {profile.name} · AI Engineer & Researcher
        </p>
        <p className="mt-2 text-xs text-ink-600">
          Dhaka, Bangladesh · Building AI for wellness, health, and communities that need it most.
        </p>
      </footer>
    </>
  );
}
