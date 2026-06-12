import type { Metadata } from "next";
import { suberlevProject } from "@/lib/projects/suberlev";
import SuberlevProject from "./SuberlevProject";

export const metadata: Metadata = {
  title: `${suberlevProject.title} — Ilan Biniashvili`,
  description: suberlevProject.description,
};

export default function SuberlevPage() {
  return <SuberlevProject />;
}
