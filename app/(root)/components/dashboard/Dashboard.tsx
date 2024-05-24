"use client";
// > React
import { FC } from "react";
// > Styles
import s from "./styles/Dashboard.module.scss";
import "./styles/globalDash.scss";
// > Font
import { GeistSans } from "geist/font/sans";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Aside } from "./components/aside/Aside";
// > Next
import Image from "next/image";
// > Framer Motion
import { motion, Variants } from "framer-motion";
import Atropos from "atropos/react";
export const Dashboard: FC = ({}) => {
  const DATA_ASIDE_LINKS = [
    { value: "Automatic Installation", href: "" },
    { value: "Manual Installation", href: "" },
    { value: "Creating directories", href: "" },
    { value: "The app directory", href: "" },
    { value: "The pages directory (optional)", href: "" },
    { value: "The public folder (optional)", href: "" },
    { value: "Run the Development Server", href: "" },
    { value: "Next Steps", href: "" },
  ];
  // Variants animations
  const Variants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section id="dashboard" className={`${s.dashboard}  py-24`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            className="grid gap-3 justify-center items-center text-center"
          >
            <motion.h2
              variants={Variants}
              custom={1}
              style={GeistSans.style}
              className="text-3xl lg:text-[32px] tracking-tight font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-t from-white via-purple-200 to-[#2D1445]"
            >
              Convenient documentation!
            </motion.h2>
            <motion.p
              variants={Variants}
              custom={2}
              className="text-slate-300 text-lg lg:text-xl  font-normal"
            >
              A modern documentation page will allow you to learn comfortably.
            </motion.p>
          </motion.article>
          <Atropos
            rotateTouch={false}
            highlight={false}
            shadow={true}
            activeOffset={0}
            rotateXMax={5}
            rotateYMax={5}
            className="bg-transparent"
          >
            <motion.section
              initial="offscreen"
              whileInView="onscreen"
              variants={Variants}
              id="dashboardWrapperDash"
              className={`${s.dashboardPanel} overflow-hidden bg-[url('/StarsAnimationBg.svg')] bg-no-repeat bg-center bg-cover relative rounded-[10px]`}
            >
              <Header />
              <NavBar />
              <main
                id="mainDash"
                className="border-r-1 border-b-1 border-slate-700 pl-5"
              >
                <div id="PageWrapperDash">
                  <section></section>
                  <Aside data={DATA_ASIDE_LINKS} />
                </div>
              </main>
              {/* Background */}
              <Image
                src={"/gradientBg.svg"}
                alt="gradientBg"
                className="absolute top-0 right-0 w-full h-full object-cover z-0 pointer-events-none select-none block"
                width={1000}
                height={1000}
              />
              <BorderBeam size={200} duration={12} />
            </motion.section>
          </Atropos>
        </section>
      </div>
    </section>
  );
};
