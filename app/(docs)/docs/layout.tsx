import Image from "next/image";
// > Globals styles
import "./global.scss";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { SessionProvider } from "next-auth/react";
import { Aside } from "./components/aside/Aside";
// > Auth
import { auth } from "@/auth";
// > Providers
import ThemeProvider from "@/app/providers/ThemeProvider";
// > Next
import type { Metadata } from "next";
import Particles from "@/components/magicui/bg/particles";
import GridPattern from "@/components/magicui/bg/grid-pattern";
import { cn } from "@/lib/utils";
import { Footer } from "./components/footer/Footer";
import RadialGradient from "@/components/magicui/bg/radial-gradient";
import { DotPattern } from "@/components/magicui/bg/dot-pattern";
import LinearGradient from "@/components/magicui/bg/linear-gradient";
export const metadata: Metadata = {
  title: "Docs | Protocol.js",
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
      <article id="main" className=" relative pt-10 mb-[20px] container z-[11]">
        <NavBar />
        <div className="md:px-4 relative z-[11]">{children}</div>
        <Aside />
      </article>
      <Footer />
      {/* <RadialGradient
        size={700}
        from="rgba(60, 41, 119, .5)"
        to="#0D0F14"
        origin="top"
        className="hidden dark:block"
      /> */}
      <LinearGradient
        className="hidden dark:block"
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
