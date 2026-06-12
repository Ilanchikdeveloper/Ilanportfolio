import type { Metadata } from "next";
import PosterDesignPage from "@/components/work/PosterDesignPage";

export const metadata: Metadata = {
  title: "Poster Design — Ilan Biniashvili",
  description:
    "Poster design work exploring bold composition, visual tension, and narrative through print-ready design.",
};

export default function PosterPage() {
  return <PosterDesignPage />;
}
