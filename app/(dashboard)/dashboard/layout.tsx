// > Globals styles
import "./global.scss";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
// > Next
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protocol | Introduction",
  description: "Protocol is a web Framework",
};
import Image from "next/image";
import ThemeProvider from "@/app/providers/ThemeProvider";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <div
          id="dashboardWrapper"
          className="overflow-hidden bg-white dark:bg-[url('/dashboard/animBg.svg')] bg-no-repeat bg-center bg-cover relative"
        >
          <Header />
          <NavBar />
          <main id="main" className="">
            <div id="PageWrapper"> {children}</div>
          </main>
          {/* Background */}
          <Image
            src={"/home/gradientBg.svg"}
            alt="gradientBg"
            className="absolute top-0 right-0 w-full h-full object-cover z-0 pointer-events-none select-none hidden dark:block"
            width={1000}
            height={1000}
          />
        </div>
      </ThemeProvider>
    </>
  );
};
export default DashboardLayout;
