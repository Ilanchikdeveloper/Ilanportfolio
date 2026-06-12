import type { Metadata } from "next";
import LogofolioPage from "@/components/work/LogofolioPage";

export const metadata: Metadata = {
  title: "Logofolio 2026 — Ilan Biniashvili",
  description:
    "A collection of logo marks and wordmarks built for clarity, character, and lasting recognition.",
};

export default function LogofolioRoute() {
  return <LogofolioPage />;
}
