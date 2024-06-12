import Image from "next/image";
// > Globals styles
import "./global.scss";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Particles from "@/components/magicui/bg/particles";

// > Next
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Introduction",
  description: "This is the Introduction page.",
};
import ThemeProvider from "@/app/providers/ThemeProvider";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="">
      <SessionProvider session={session}>
        <ThemeProvider>
          <section
            id="dashboardWrapper"
            className=" bg-white dark:bg-black relative"
          >
            <Header />
            <NavBar />
            <main
              id="main"
              className="dark:bg-[url('/gradientBg.svg')] bg-no-repeat bg-center bg-cover pt-[80px] px-5 relative z-[200] "
            >
              {children}
            </main>
            {/* Background */}
            <Particles
              className="absolute inset-0  hidden dark:hidden dark:sm:block"
              quantity={300}
              size={0.4}
              ease={80}
              color={"#974BD9"}
              refresh
            />
          </section>
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
}
