"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [onLight, setOnLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.from(header, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    if (pathname.startsWith("/work")) {
      setOnLight(false);
      return;
    }

    const about = document.getElementById("about");
    const branding = document.getElementById("branding");

    const onScroll = () => {
      if (!about) return;

      const aboutTop = about.getBoundingClientRect().top;
      const brandingTop = branding?.getBoundingClientRect().top ?? Infinity;

      setOnLight(aboutTop <= 80 && brandingTop > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const iconColor = menuOpen
    ? "bg-white"
    : onLight
      ? "bg-[#1a1a1a]"
      : "bg-white";

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="grid-layout py-5 sm:py-6 md:py-8 items-center pointer-events-auto">
          <div className="col-span-12 flex items-center justify-between gap-4">
            <a href="/" className="block w-fit shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/my-logo.svg"
                alt="Ilan Biniashvili"
                className="h-9 w-auto md:h-11"
              />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center"
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute h-[1.5px] w-6 ${iconColor} transition-all duration-300 ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-6 ${iconColor} transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-6 ${iconColor} transition-all duration-300 ${
                  menuOpen ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex h-full flex-col items-end justify-center gap-8 px-[clamp(1rem,4vw,3rem)] pb-24">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl sm:text-4xl font-thin tracking-tight text-white transition-colors duration-500 hover:text-accent-green"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
