import Image from "next/image";
// > Globals styles
import "./global.scss";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { SessionProvider } from "next-auth/react";
// > Next
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Introduction",
  description: "This is the Introduction page.",
};
import ThemeProvider from "@/app/providers/ThemeProvider";
import { auth } from "@/auth";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <section>
        <ThemeProvider>
          <div
            id="dashboardWrapper"
            className="overflow-hidden bg-white dark:bg-[url('/StarsAnimationBg.svg')] bg-no-repeat bg-center bg-cover relative"
          >
            <Header />
            <NavBar />
            <main id="main" className="">
              <div id="PageWrapper"> {children}</div>
            </main>
            {/* Background */}
            <Image
              src={"/gradientBg.svg"}
              alt="gradientBg"
              className="absolute top-0 right-0 w-full h-full object-cover z-0 pointer-events-none select-none hidden dark:block"
              width={1000}
              height={1000}
            />
          </div>
        </ThemeProvider>
      </section>
    </SessionProvider>
  );
}
