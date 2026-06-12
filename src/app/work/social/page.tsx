import type { Metadata } from "next";
import SocialMediaDesignPage from "@/components/work/SocialMediaDesignPage";

export const metadata: Metadata = {
  title: "Social Media Design — Ilan Biniashvili",
  description:
    "Social media design work combining brand identity, typography, and visual rhythm for digital platforms.",
};

export default function SocialPage() {
  return <SocialMediaDesignPage />;
}
