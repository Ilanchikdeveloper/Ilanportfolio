import type { Metadata } from "next";
import { koruProject } from "@/lib/projects/koru";
import KoruProject from "./KoruProject";

export const metadata: Metadata = {
  title: `${koruProject.title} — Ilan Biniashvili`,
  description: koruProject.description,
};

export default function KoruPage() {
  return <KoruProject />;
}
