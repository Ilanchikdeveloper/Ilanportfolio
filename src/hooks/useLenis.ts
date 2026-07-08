"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToSection } from "@/lib/scrollToSection";

gsap.registerPlugin(ScrollTrigger);

const PENDING_HASH_KEY = "pending-scroll-hash";

export function useLenis() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const onRefresh = () => {
      lenis.resize();
    };

    ScrollTrigger.addEventListener("refresh", onRefresh);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);

    const onHashLinkClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.includes("#")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      const hash = url.hash;
      if (!hash) return;

      if (url.pathname !== window.location.pathname) {
        sessionStorage.setItem(PENDING_HASH_KEY, hash);
        return;
      }

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      scrollToSection(hash);
      window.history.pushState(null, "", `${url.pathname}${url.search}${hash}`);
    };

    document.addEventListener("click", onHashLinkClick);

    lenis.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onHashLinkClick);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(tickerCallback);
      lenisRef.current = null;
      delete window.__lenis;
      lenis.destroy();
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      const lenis = lenisRef.current;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      ScrollTrigger.refresh();
    };

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return false;
      return scrollToSection(hash);
    };

    const scrollToHashWithRetry = (onFail?: () => void) => {
      let attempts = 0;

      const tryScroll = () => {
        if (scrollToHash()) {
          ScrollTrigger.refresh();
          return;
        }

        attempts += 1;
        if (attempts < 20) {
          requestAnimationFrame(tryScroll);
          return;
        }

        onFail?.();
      };

      tryScroll();
    };

    const navEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload = navEntry?.type === "reload";

    if (isReload) {
      scrollToTop();

      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
    } else {
      const pendingHash = sessionStorage.getItem(PENDING_HASH_KEY);

      if (pathname !== "/") {
        if (pendingHash) {
          sessionStorage.removeItem(PENDING_HASH_KEY);
        }
        scrollToTop();
      } else if (pendingHash) {
        sessionStorage.removeItem(PENDING_HASH_KEY);

        if (window.location.hash !== pendingHash) {
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}${pendingHash}`
          );
        }

        scrollToHashWithRetry(scrollToTop);
      } else if (window.location.hash) {
        scrollToHashWithRetry(scrollToTop);
      } else {
        scrollToTop();
      }
    }

    const refreshTimer = window.setTimeout(() => {
      lenisRef.current?.resize();
      ScrollTrigger.refresh();
    }, 100);

    return () => window.clearTimeout(refreshTimer);
  }, [pathname]);
}
