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
    </ThemeProvider>
  );
}
