import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
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
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-gradient-to-r from-accent via-mint to-accent transition-[width] duration-150 ease-out will-change-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
