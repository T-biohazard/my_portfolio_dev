import { useEffect, useState } from "react";
import { scrollToTop } from "../lib/smoothScroll";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > 520);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToTop()}
      className={`fixed bottom-6 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-900/90 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-smooth hover:border-accent/40 hover:bg-accent/15 hover:text-accent sm:bottom-8 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
