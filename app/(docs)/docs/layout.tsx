// > Globals styles
import "./global.scss";
import { cn } from "@/lib/utils";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { Aside } from "./components/aside/Aside";
import { Footer } from "./components/footer/Footer";
import { DotPattern } from "@/components/magicui/bg/dot-pattern";
import LinearGradient from "@/components/magicui/bg/linear-gradient";
// > Providers
import ThemeProvider from "@/app/providers/ThemeProvider";
// > Next
import type { Metadata } from "next";
import { BreadCrumbs } from "./components/ui/breadcrumbs";
export const metadata: Metadata = {
  title: "Express.ts | Documentation",
  description: "This is the Introduction documentation page.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Header />
      <article
        id="main"
        className=" relative pt-10 mb-[20px] container sm:mx-[40px] sm:max-w-[1240px] m-auto z-[11]"
      >
        <NavBar />
        <div className="md:px-6 relative z-[11]">
          <BreadCrumbs />
          {children}
        </div>
        <Aside />
      </article>
      <Footer />
      <LinearGradient
        className="hidden dark:md:block"
        from="#1D1836"
        to="#0D0F14"
      />
      {/* Background */}
      <DotPattern
        width={25}
        height={25}
        className={cn(
          "lg:[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] fill-slate-300 dark:hidden"
        )}
      />
    </ThemeProvider>
  );
}
