"use client";

import { email, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-16 md:mt-32">
      <div className="grid-layout py-16 md:py-32">
        <div className="col-span-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <a href="/" className="inline-block w-fit">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/my-logo.svg"
              alt="Ilan Biniashvili"
              className="h-12 w-auto md:h-16"
            />
          </a>

          <div className="flex flex-col items-start md:items-end gap-6">
            <a
              href={`mailto:${email}?subject=Hello%20Ilan`}
              className="text-base md:text-lg text-text hover:text-accent-green transition-colors duration-500 hover-line break-all"
            >
              {email}
            </a>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem]">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/75 hover:text-accent-green transition-colors duration-500 hover-line"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
