import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function scrollToSection(selector: string) {
  const target = document.querySelector(selector) as HTMLElement | null;
  if (!target) return false;

  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.8 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }

  return true;
}
