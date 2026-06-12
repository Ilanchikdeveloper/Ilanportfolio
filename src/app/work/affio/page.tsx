import type { Metadata } from "next";
import { affioProject } from "@/lib/projects/affio";
import AffioProject from "./AffioProject";

export const metadata: Metadata = {
  title: `${affioProject.title} — Ilan Biniashvili`,
  description: affioProject.description,
};

export default function AffioPage() {
  return <AffioProject />;
}
