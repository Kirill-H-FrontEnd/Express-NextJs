"use client";
import { FC, useContext, useEffect, useRef } from "react";
import s from "./styles/Dashboard.module.scss";
import "./styles/globalDash.scss";
// > Font
import { GeistSans } from "geist/font/sans";
import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { IoLogoElectron, IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useThemeProvider } from "@/app/providers/ThemeProvider";
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import Image from "next/image";
export const Dashboard: FC = ({}) => {
  const { isSwitch } = useContext(useThemeProvider);

  return (
    <section className={`${s.dashboard} bg-black py-24`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <article className="grid gap-3 justify-center items-center text-center">
            <h2
              style={GeistSans.style}
              className="text-3xl lg:text-[32px] tracking-tight font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-t from-white via-purple-200 to-[#2D1445]"
            >
              Convenient documentation!
            </h2>
            <p className="text-slate-300 text-lg lg:text-xl  font-normal">
              A modern documentation page will allow you to learn comfortably.
            </p>
          </article>
          <section
            id="dashboardWrapperDash"
            className={`${s.dashboardPanel} overflow-hidden bg-white dark:bg-[url('/dashboard/animBgDark.svg')] bg-no-repeat bg-center bg-cover relative rounded-[10px]`}
          >
            <Header />
            <NavBar />
            <main
              id="mainDash"
              className="border-r-1 border-b-1 border-slate-700"
            >
              <div id="PageWrapperDash"></div>
            </main>
            {/* Background */}
            <Image
              src={"/home/gradientBg.svg"}
              alt="gradientBg"
              className="absolute top-0 right-0 w-full h-full object-cover z-0 pointer-events-none select-none hidden dark:block"
              width={1000}
              height={1000}
            />
          </section>
        </section>
      </div>
    </section>
  );
};
