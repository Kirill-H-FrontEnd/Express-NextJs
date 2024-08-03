// > Globals styles
import "./global.scss";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { Aside } from "./components/aside/Aside";
import { Footer } from "./components/footer/Footer";
// > Providers
import ThemeProvider from "@/app/providers/ThemeProvider";
// > Next
import type { Metadata } from "next";
import { BreadCrumbs } from "./components/ui/breadcrumbs";
import NavigationButtons from "./components/ui/navButtons/nav-buttons";
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
        <div className="md:px-6 relative z-[11] ">
          <BreadCrumbs />
          <div id="pageWrapper" className="grid grid-cols-2-auto">
            {children}
          </div>
          <NavigationButtons />
        </div>
      </article>
      <Footer />
    </ThemeProvider>
  );
}
