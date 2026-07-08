"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVEAL_INTRO =
  "I turn founders' visions into remarkable brands by combining strategy, design, and performance marketing, all under one roof.";
const REVEAL_CTA = ["Explore", "My", "services"];

function getTrackHeight(wordCount: number) {
  const vh = Math.min(Math.max(wordCount * 7.5, 150), 220);
  return `${vh}vh`;
}

const LUXE_NOIR_LIFT = "#0e1413";
const SOFT_OAT = "#F0EDE5";

function RevealWord({ word }: { word: string }) {
  return (
    <span data-reveal-word className="inline">
      {word}
    </span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const textEl = textRef.current;
    const ctaLink = ctaRef.current;
    if (!section || !track || !textEl) return;

    const words = Array.from(
      textEl.querySelectorAll<HTMLElement>("[data-reveal-word]")
    );
    if (!words.length) return;

    const ctaStartIndex = words.length - REVEAL_CTA.length;

    gsap.set(words, { color: LUXE_NOIR_LIFT });
    if (ctaLink) {
      gsap.set(ctaLink, { borderBottomColor: LUXE_NOIR_LIFT });
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.8,
          invalidateOnRefresh: true,
        },
      });

      words.forEach((word, index) => {
        tl.to(
          word,
          {
            color: SOFT_OAT,
            duration: 1,
            ease: "none",
          },
          ">"
        );

        if (index === ctaStartIndex && ctaLink) {
          tl.to(
            ctaLink,
            {
              borderBottomColor: SOFT_OAT,
              duration: REVEAL_CTA.length,
              ease: "none",
            },
            "<"
          );
        }
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, section);

    return () => ctx.revert();
  }, []);

  const introWords = REVEAL_INTRO.split(" ");
  const wordCount = introWords.length + REVEAL_CTA.length;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-luxe-noir text-soft-oat pt-[9.75rem] md:pt-[13.65rem] lg:pt-[17.55rem]"
    >
      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: getTrackHeight(wordCount) }}
      >
        <div className="sticky top-0 z-20 flex min-h-screen w-full items-center bg-luxe-noir">
          <div className="grid-layout w-full pb-[0.9rem]">
            <div className="col-span-12 w-full min-w-0">
              <p className="mb-10 md:mb-14 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-soft-oat/70">
                What I Do ↓
              </p>

              <p
                ref={textRef}
                className="font-playfair w-full min-w-0 max-w-[1120px] text-[clamp(1.75rem,4.5vw,3.5rem)] font-normal leading-[1.22] tracking-[-0.015em] text-soft-oat"
              >
                {introWords.map((word, index) => (
                  <span key={`${word}-${index}`}>
                    <RevealWord word={word} />
                    {index < introWords.length - 1 ? " " : ""}
                  </span>
                ))}{" "}
                <Link
                  ref={ctaRef}
                  href="/#branding"
                  className="relative z-10 inline border-b-[0.5px] pb-[0.08em] text-soft-oat transition-colors duration-300 hover:text-soft-oat hover:opacity-100 opacity-90"
                  data-cursor="pointer"
                >
                  {REVEAL_CTA.map((word, index) => (
                    <span key={`${word}-${index}`}>
                      <RevealWord word={word} />
                      {index < REVEAL_CTA.length - 1 ? " " : ""}
                    </span>
                  ))}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
