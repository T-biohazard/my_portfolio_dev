const HEADER_OFFSET = 88;

export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, behavior });
}
