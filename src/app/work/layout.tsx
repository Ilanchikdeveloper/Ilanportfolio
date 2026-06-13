import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectCloseButton } from "@/components/work/ProjectCloseButton";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <ProjectCloseButton />
      <main>{children}</main>
      <Footer />
    </>
  );
}
