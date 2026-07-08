"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

let loaderHasStarted = false;
let loaderHasFinished = false;
const loaderFinishListeners = new Set<() => void>();

function finishLoader(setDone: (value: boolean) => void, finishedRef: { current: boolean }) {
  if (finishedRef.current) return;
  finishedRef.current = true;
  loaderHasFinished = true;
  setDone(true);
  loaderFinishListeners.forEach((listener) => listener());
  loaderFinishListeners.clear();
}

export function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const nameInnerRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressGlowRef = useRef<HTMLDivElement>(null);
  const ruleLeftRef = useRef<HTMLDivElement>(null);
  const ruleRightRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(loaderHasFinished);
  const finishedRef = useRef(loaderHasFinished);

  useEffect(() => {
    if (loaderHasFinished || finishedRef.current) {
      setDone(true);
      return;
    }

    if (loaderHasStarted) {
      const onFinished = () => setDone(true);
      loaderFinishListeners.add(onFinished);

      const poll = window.setInterval(() => {
        if (loaderHasFinished) {
          setDone(true);
          window.clearInterval(poll);
        }
      }, 100);

      return () => {
        loaderFinishListeners.delete(onFinished);
        window.clearInterval(poll);
      };
    }

    const loader = loaderRef.current;
    const grain = grainRef.current;
    const glow = glowRef.current;
    const frame = frameRef.current;
    const counter = counterRef.current;
    const nameInner = nameInnerRef.current;
    const title = titleRef.current;
    const progress = progressRef.current;
    const progressGlow = progressGlowRef.current;
    const ruleLeft = ruleLeftRef.current;
    const ruleRight = ruleRightRef.current;

    if (
      !loader ||
      !grain ||
      !glow ||
      !frame ||
      !counter ||
      !nameInner ||
      !title ||
      !progress ||
      !progressGlow ||
      !ruleLeft ||
      !ruleRight
    ) {
      finishLoader(setDone, finishedRef);
      return;
    }

    loaderHasStarted = true;

    const finish = () => finishLoader(setDone, finishedRef);
    const fallbackTimer = window.setTimeout(finish, 5200);

    const counterState = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.set(grain, { opacity: 0 });
      gsap.set(glow, { opacity: 0, scale: 0.92 });
      gsap.set(frame, { opacity: 0, scale: 0.985 });
      gsap.set(counter, { opacity: 0, y: 6 });
      gsap.set(nameInner, { yPercent: 115 });
      gsap.set(title, { opacity: 0, y: 10, filter: "blur(6px)" });
      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(progressGlow, { xPercent: -100, opacity: 0 });
      gsap.set([ruleLeft, ruleRight], { scaleX: 0, opacity: 0, transformOrigin: "center center" });

      const tl = gsap.timeline({
        onComplete: () => {
          window.clearTimeout(fallbackTimer);
          finish();
        },
      });

      tl.to(grain, { opacity: 0.035, duration: 1.4, ease: "power2.out" }, 0)
        .to(glow, { opacity: 1, scale: 1, duration: 1.6, ease: "power3.out" }, 0.1)
        .to(frame, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }, 0.2)
        .to(counter, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.35)
        .to(
          ruleLeft,
          { scaleX: 1, opacity: 1, duration: 1.1, ease: "power3.inOut" },
          0.55
        )
        .to(
          ruleRight,
          { scaleX: 1, opacity: 1, duration: 1.1, ease: "power3.inOut" },
          0.65
        )
        .to(
          nameInner,
          { yPercent: 0, duration: 1.35, ease: "power4.out" },
          0.75
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
          },
          1.15
        )
        .to(
          progress,
          { scaleX: 1, duration: 2.35, ease: "power2.inOut" },
          0.9
        )
        .to(
          progressGlow,
          { xPercent: 380, opacity: 0.55, duration: 2.1, ease: "power2.inOut" },
          1.05
        )
        .to(
          counterState,
          {
            value: 100,
            duration: 2.35,
            ease: "power2.inOut",
            onUpdate: () => {
              counter.textContent = String(Math.round(counterState.value)).padStart(3, "0");
            },
          },
          0.9
        )
        .to(
          loader,
          {
            opacity: 0,
            duration: 0.85,
            ease: "power2.inOut",
            onStart: () => {
              loader.style.pointerEvents = "none";
            },
          },
          3.35
        );
    }, loader);

    return () => {
      if (loaderHasFinished) {
        window.clearTimeout(fallbackTimer);
        ctx.revert();
      }
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] overflow-hidden bg-luxe-noir"
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={grainRef}
          className="page-loader-grain pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,237,229,0.07)_0%,transparent_62%)]"
          aria-hidden="true"
        />

        <div
          ref={frameRef}
          className="pointer-events-none absolute inset-[clamp(1.25rem,4vw,2.75rem)] border border-soft-oat/[0.08]"
          aria-hidden="true"
        >
          <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-soft-oat/25" />
          <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-soft-oat/25" />
          <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-soft-oat/25" />
          <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-soft-oat/25" />
        </div>

        <span
          ref={counterRef}
          className="gpu absolute left-[clamp(1.25rem,4vw,2.75rem)] top-[clamp(1.25rem,4vw,2.75rem)] font-inter text-[0.62rem] font-light tabular-nums tracking-[0.32em] text-soft-oat/45"
        >
          000
        </span>

        <div className="relative flex flex-col items-center px-6 text-center">
          <div className="mb-5 flex w-full max-w-[18rem] items-center gap-4 md:max-w-[22rem]">
            <div
              ref={ruleLeftRef}
              className="gpu h-px flex-1 bg-gradient-to-r from-transparent to-soft-oat/25"
            />
            <p className="font-inter text-[0.58rem] font-light uppercase tracking-[0.38em] text-soft-oat/35">
              Portfolio
            </p>
            <div
              ref={ruleRightRef}
              className="gpu h-px flex-1 bg-gradient-to-l from-transparent to-soft-oat/25"
            />
          </div>

          <div className="page-loader-name-mask">
            <span
              ref={nameInnerRef}
              className="page-loader-name-inner font-playfair text-[clamp(2rem,6vw,3.25rem)] font-normal leading-none tracking-[-0.02em] text-soft-oat"
            >
              Ilan Biniashvili
            </span>
          </div>

          <p
            ref={titleRef}
            className="mt-4 font-inter text-[0.68rem] font-light uppercase tracking-[0.22em] text-soft-oat/55"
          >
            Graphic<span className="text-soft-oat/25">|</span>Designer
          </p>
        </div>

        <div className="absolute inset-x-[clamp(1.25rem,4vw,2.75rem)] bottom-[clamp(1.25rem,4vw,2.75rem)]">
          <div className="relative h-px overflow-hidden bg-soft-oat/[0.06]">
            <div
              ref={progressRef}
              className="gpu absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-soft-oat/10 via-soft-oat/55 to-soft-oat/80"
            />
            <div
              ref={progressGlowRef}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-soft-oat/70 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
