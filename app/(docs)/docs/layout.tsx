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
import { DotPattern } from "@/components/magicui/bg/dot-pattern";
import { Footer } from "./components/footer/Footer";
export const metadata: Metadata = {
  title: "Docs | Protocol.js",
  description: "This is the Introduction documentation page.",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <section id="docsWrapper" className="bg-white dark:bg-black relative">
          <Header />
          <article className=" relative py-10 md:flex md:flex-row container ">
            <NavBar />
            <div className="px-4">{children}</div>
            <Aside />
          </article>
          <Footer />
          {/* Background */}
          <Particles
            className="absolute inset-0  hidden dark:hidden dark:sm:block"
            quantity={300}
            size={0.4}
            ease={80}
            color={"#974BD9"}
            refresh
          />
          <DotPattern
            width={25}
            height={25}
            className={cn(
              "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </section>
      </ThemeProvider>
    </SessionProvider>
  );
}
