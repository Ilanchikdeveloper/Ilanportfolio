"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  color: string;
  video?: string;
  href: string;
  index: number;
}

export function ProjectCard({
  tag,
  title,
  description,
  color,
  video,
  href,
}: ProjectCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const media = mediaRef.current;
    if (!link || !media || href === "#") return;

    const onEnter = () => {
      gsap.to(media, { scale: 1.04, duration: 0.9, ease: "power3.out" });
    };

    const onLeave = () => {
      gsap.to(media, { scale: 1, duration: 0.9, ease: "power3.out" });
    };

    link.addEventListener("mouseenter", onEnter);
    link.addEventListener("mouseleave", onLeave);

    return () => {
      link.removeEventListener("mouseenter", onEnter);
      link.removeEventListener("mouseleave", onLeave);
    };
  }, [href]);

  const content = (
    <>
      <div className="lg:col-span-8 w-full overflow-hidden">
        <div ref={mediaRef} className="gpu w-full h-full origin-center">
          {video ? (
            <video
              className="block w-full aspect-[16/10] object-cover bg-[#111] transition-opacity duration-500 group-hover:opacity-90"
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
              className="w-full aspect-[16/10] flex items-center justify-center transition-opacity duration-500 group-hover:opacity-90"
              style={{ backgroundColor: color }}
            >
              <span className="text-5xl md:text-7xl font-black text-white/10 tracking-tighter">
                {title}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col lg:h-full pt-2 lg:pt-0">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/45 mb-3 transition-colors duration-500 group-hover:text-white/70">
            {tag}
          </p>

          <div className="w-7 h-[3px] bg-accent-green mb-5 transition-all duration-500 group-hover:w-10" />

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-5 transition-transform duration-700 group-hover:translate-x-2">
            {title}
          </h3>

          <p className="text-[0.8rem] leading-relaxed text-white/55 mb-8 transition-colors duration-500 group-hover:text-white/75">
            {description}
          </p>

          <div className="h-px bg-white/15 mb-5 transition-colors duration-500 group-hover:bg-white/30" />

          <span className="inline-block text-[0.8rem] text-white transition-colors duration-500 group-hover:text-accent-green hover-line">
            See more
          </span>
        </div>
      </div>
    </>
  );

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start lg:items-stretch w-full">
      {href !== "#" ? (
        <Link
          ref={linkRef}
          href={href}
          className="group contents cursor-pointer"
          data-cursor="pointer"
        >
          {content}
        </Link>
      ) : (
        content
      )}

      <p className="lg:col-span-4 lg:col-start-9 text-[0.65rem] uppercase tracking-[0.25em] text-[#2a2a2a] mt-8 lg:mt-auto">
        made in 2026
      </p>
    </article>
  );
}
