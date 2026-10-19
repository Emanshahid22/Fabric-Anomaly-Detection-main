// Offset-aware smooth scroll so the sticky nav never covers the target heading.
export function scrollToSection(id, offset = 84) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
