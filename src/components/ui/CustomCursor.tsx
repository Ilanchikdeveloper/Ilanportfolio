"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']";

export function CustomCursor() {
  const coreRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const hoveringRef = useRef(false);
  const clickingRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const core = coreRef.current;
    const frame = frameRef.current;
    const label = labelRef.current;
    if (!core || !frame || !label) return;

    document.body.classList.add("custom-cursor-active");

    gsap.set(core, { xPercent: -50, yPercent: -50, opacity: 0, scale: 1 });
    gsap.set(frame, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 1,
      rotation: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(label, { xPercent: -50, yPercent: 0, opacity: 0 });

    const coreX = gsap.quickTo(core, "x", { duration: 0.12, ease: "power3.out" });
    const coreY = gsap.quickTo(core, "y", { duration: 0.12, ease: "power3.out" });
    const frameX = gsap.quickTo(frame, "x", { duration: 0.5, ease: "power3.out" });
    const frameY = gsap.quickTo(frame, "y", { duration: 0.5, ease: "power3.out" });
    const labelX = gsap.quickTo(label, "x", { duration: 0.15, ease: "power3.out" });
    const labelY = gsap.quickTo(label, "y", { duration: 0.15, ease: "power3.out" });

    const frameScale = gsap.quickTo(frame, "scale", {
      duration: 0.4,
      ease: "power3.out",
    });
    const coreScale = gsap.quickTo(core, "scale", {
      duration: 0.35,
      ease: "power3.out",
    });
    const labelOpacity = gsap.quickTo(label, "opacity", {
      duration: 0.35,
      ease: "power3.out",
    });

    const setHover = (active: boolean) => {
      if (hoveringRef.current === active) return;
      hoveringRef.current = active;

      frame.classList.toggle("is-hover", active);
      core.classList.toggle("is-hover", active);

      if (!clickingRef.current) {
        frameScale(active ? 1.5 : 1);
        coreScale(active ? 1.25 : 1);
        labelOpacity(active ? 1 : 0);
        gsap.to(frame, {
          rotation: active ? 90 : 0,
          duration: 0.55,
          ease: "power3.out",
        });
      }
    };

    const setClick = (active: boolean) => {
      clickingRef.current = active;
      core.classList.toggle("is-click", active);
      frameScale(active ? 1.05 : hoveringRef.current ? 1.5 : 1);
      coreScale(active ? 0.8 : hoveringRef.current ? 1.25 : 1);
    };

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      coreX(clientX);
      coreY(clientY);
      frameX(clientX);
      frameY(clientY);
      labelX(clientX);
      labelY(clientY + (hoveringRef.current ? 24 : 18));

      gsap.to([core, frame], { opacity: 1, duration: 0.25, ease: "power2.out" });

      const target = document.elementFromPoint(clientX, clientY);
      setHover(!!target?.closest(INTERACTIVE));
    };

    const onLeave = () => {
      gsap.to([core, frame, label], { opacity: 0, duration: 0.25, ease: "power2.out" });
    };

    const onEnter = () => {
      gsap.to([core, frame], { opacity: 1, duration: 0.25, ease: "power2.out" });
    };

    const onDown = () => setClick(true);
    const onUp = () => setClick(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      <div ref={frameRef} className="custom-cursor-frame" aria-hidden="true">
        <span className="custom-cursor-corner custom-cursor-corner--tl" />
        <span className="custom-cursor-corner custom-cursor-corner--tr" />
        <span className="custom-cursor-corner custom-cursor-corner--bl" />
        <span className="custom-cursor-corner custom-cursor-corner--br" />
      </div>
      <div ref={coreRef} className="custom-cursor-core-wrap" aria-hidden="true">
        <div className="custom-cursor-core" />
      </div>
      <span ref={labelRef} className="custom-cursor-label">
        View
      </span>
    </>
  );
}
