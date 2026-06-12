"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "lines" | "words" | "chars";
  trigger?: boolean;
}

export function TextReveal({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  splitBy = "lines",
  trigger = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = children;
    el.innerHTML = "";

    const units =
      splitBy === "chars"
        ? text.split("")
        : splitBy === "words"
          ? text.split(" ")
          : text.split("\n").length > 1
            ? text.split("\n")
            : [text];

    const wrappers: HTMLSpanElement[] = [];

    units.forEach((unit, i) => {
      const mask = document.createElement("span");
      mask.className = "line-mask";
      mask.style.display = splitBy === "lines" ? "block" : "inline-block";
      if (splitBy === "words" && i < units.length - 1) {
        mask.style.marginRight = "0.25em";
      }

      const inner = document.createElement("span");
      inner.className = "line-inner gpu";
      inner.textContent = unit;

      mask.appendChild(inner);
      el.appendChild(mask);
      wrappers.push(inner);
    });

    const ctx = gsap.context(() => {
      const anim = gsap.from(wrappers, {
        y: "110%",
        duration: 1.1,
        stagger: splitBy === "chars" ? 0.02 : splitBy === "words" ? 0.04 : 0.12,
        delay,
        ease: "power4.out",
      });

      if (trigger) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          animation: anim,
        });
      } else {
        anim.play();
      }
    }, el);

    return () => ctx.revert();
  }, [children, delay, splitBy, trigger]);

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={className}
      aria-label={children}
    />
  );
}
