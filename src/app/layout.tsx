import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { PageLoader } from "@/components/ui/PageLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ilan Biniashvili — Graphic Designer",
  description:
    "Portfolio of Ilan Biniashvili — visual communication, brand identity, and design from Georgia.",
  openGraph: {
    title: "Ilan Biniashvili — Graphic Designer",
    description: "Visual communication is structure, hierarchy, rhythm, and meaning.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <CustomCursor />
        <PageLoader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
