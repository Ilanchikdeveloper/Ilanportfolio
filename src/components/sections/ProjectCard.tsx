"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectCardProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  color: string;
  video?: string;
  href: string;
  index: number;
  year: string;
  services: string[];
}

const MAX_MEDIA_SHIFT = 5;
const MAX_TILT = 1.25;

export function ProjectCard({
  tag,
  title,
  description,
  color,
  video,
  href,
  index,
  year,
}: ProjectCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const indexLabel = String(index + 1).padStart(2, "0");
  const isReversed = index % 2 === 1;

  useEffect(() => {
    const link = linkRef.current;
    const media = mediaRef.current;
    const tilt = tiltRef.current;
    if (!link || !media || !tilt || href === "#") return;

    gsap.set(tilt, { transformPerspective: 900, transformOrigin: "center center" });

    const mediaXTo = gsap.quickTo(media, "x", {
      duration: 0.85,
      ease: "power3.out",
    });
    const mediaYTo = gsap.quickTo(media, "y", {
      duration: 0.85,
      ease: "power3.out",
    });
    const mediaScaleTo = gsap.quickTo(media, "scale", {
      duration: 0.9,
      ease: "power3.out",
    });
    const rotateXTo = gsap.quickTo(tilt, "rotationX", {
      duration: 0.8,
      ease: "power3.out",
    });
    const rotateYTo = gsap.quickTo(tilt, "rotationY", {
      duration: 0.8,
      ease: "power3.out",
    });

    const onMove = (event: MouseEvent) => {
      const rect = tilt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      mediaXTo(x * -MAX_MEDIA_SHIFT);
      mediaYTo(y * -MAX_MEDIA_SHIFT);
      mediaScaleTo(1.02);
      rotateYTo(x * MAX_TILT * 2);
      rotateXTo(-y * MAX_TILT * 2);
    };

    const onLeave = () => {
      mediaXTo(0);
      mediaYTo(0);
      mediaScaleTo(1);
      rotateXTo(0);
      rotateYTo(0);
    };

    const onClick = () => {
      onLeave();
      gsap.set(media, { clearProps: "transform" });
      gsap.set(tilt, { clearProps: "transform" });
    };

    link.addEventListener("mousemove", onMove);
    link.addEventListener("mouseleave", onLeave);
    link.addEventListener("click", onClick);

    return () => {
      link.removeEventListener("mousemove", onMove);
      link.removeEventListener("mouseleave", onLeave);
      link.removeEventListener("click", onClick);
    };
  }, [href]);

  const content = (
    <div className="flex min-h-full flex-col justify-between lg:py-2">
      <div>
        <div className="mb-6 flex items-center justify-between gap-4 font-inter text-[0.65rem] font-light uppercase tracking-[0.28em] text-soft-oat/35 md:mb-8">
          <span>{indexLabel}</span>
          <span>
            {tag} · {year}
          </span>
        </div>

        <h3 className="font-playfair text-[22px] font-normal leading-[1.1] tracking-[-0.03em] text-soft-oat transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
          {title}
        </h3>

        <p className="mt-5 max-w-[22rem] font-inter text-[0.875rem] font-light leading-[1.7] text-soft-oat/50 transition-opacity duration-500 group-hover:text-soft-oat/85 md:mt-6">
          {description}
        </p>
      </div>

      <span className="mt-8 inline-flex items-center gap-3 font-inter text-[0.68rem] font-light uppercase tracking-[0.2em] text-soft-oat/45 transition-opacity duration-500 group-hover:text-soft-oat md:mt-10">
        View Project
        <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
        <span
          className="text-sm leading-none transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          ↗
        </span>
      </span>
    </div>
  );

  const media = (
    <div className="relative w-full [perspective:900px]">
      <div
        ref={tiltRef}
        className="gpu relative aspect-[5/3] overflow-hidden rounded-sm bg-[#060D0C] [transform-style:preserve-3d] will-change-transform sm:aspect-[2/1] lg:aspect-[16/9] lg:min-h-[17.6rem] xl:min-h-[20.8rem]"
      >
        <div
          ref={mediaRef}
          className="gpu absolute inset-[-3%] h-[106%] w-[106%] origin-center will-change-transform"
        >
          {video ? (
            <video
              className="block h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <span className="font-playfair text-[clamp(2.5rem,8vw,5rem)] font-normal tracking-[-0.03em] text-soft-oat/10">
                {title}
              </span>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 border border-soft-oat/10 transition-opacity duration-500 group-hover:border-soft-oat/40" />
      </div>
    </div>
  );

  const card = (
    <article
      className={`flex flex-col gap-8 lg:gap-10 xl:gap-14 ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-stretch`}
    >
      <div className="lg:w-[38%] lg:shrink-0 xl:w-[34%]">{content}</div>
      <div className="lg:min-w-0 lg:flex-1">{media}</div>
    </article>
  );

  if (href === "#") return card;

  return (
    <Link
      ref={linkRef}
      href={href}
      className="group block border-t border-soft-oat/10 py-12 first:border-t-0 md:py-16 lg:py-20"
      data-cursor="pointer"
    >
      {card}
    </Link>
  );
}
