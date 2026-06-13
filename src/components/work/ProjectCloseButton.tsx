"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const brandingProjectPaths = ["/work/affio", "/work/koru", "/work/suberlev"];

function getBackHref(pathname: string) {
  return brandingProjectPaths.some((path) => pathname.startsWith(path))
    ? "/#branding"
    : "/#other-work";
}

export function ProjectCloseButton() {
  const pathname = usePathname();
  const router = useRouter();
  const backHref = getBackHref(pathname);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.push(backHref);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [backHref, router]);

  return (
    <Link
      href={backHref}
      aria-label="Close project"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-[45] flex items-center gap-2 rounded-full border border-white/15 bg-black/80 px-4 py-2.5 text-[0.72rem] uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-accent-green hover:text-accent-green"
    >
      <span aria-hidden="true">←</span>
      <span>Close</span>
    </Link>
  );
}
