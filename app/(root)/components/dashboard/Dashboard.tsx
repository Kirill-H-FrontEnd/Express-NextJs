"use client";
import { FC } from "react";
// > Globals styles
import "./global.scss";
import "atropos/css";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { Aside } from "./components/aside/Aside";
import RadialGradient from "@/components/magicui/bg/radial-gradient";
import { BorderBeam } from "@/components/magicui/border-beam";
import Atropos from "atropos/react";
// > Framer motion
import { motion, Variants } from "framer-motion";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const Dashboard: FC = ({}) => {
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
        delay: custom * 0.2,
        duration: 0.4,
      },
    }),
  };
  return (
    <>
      <section className="py-24 bg-black">
        <div className="container">
          <section className="grid gap-14">
            <motion.article
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="grid gap-3  justify-center items-center text-center"
            >
              <motion.h2
                custom={1}
                variants={Variants}
                style={inter.style}
                className="text-3xl lg:text-[32px] tracking-tight font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-white"
              >
                Convenient documentation!
              </motion.h2>
              <motion.p
                custom={2}
                variants={Variants}
                className="text-slate-300 text-lg lg:text-xl  font-normal"
              >
                A modern documentation page will allow you to learn comfortably.
              </motion.p>
            </motion.article>
            <Atropos
              rotateTouch={false}
              highlight={false}
              shadow={false}
              className="bg-transparent"
              rotateXMax={5}
              rotateYMax={5}
              activeOffset={15}
            >
              <div className="relative border-1 border-gray-900 rounded-2xl overflow-hidden">
                <Header />
                <article
                  id="main"
                  className=" relative pt-10 mb-[20px] container z-[11]"
                >
                  <NavBar />
                  <div className="px-4 relative z-[11]"></div>
                  <Aside />
                </article>
                <RadialGradient
                  size={700}
                  from="rgba(60, 41, 119, .5)"
                  to="#0D0F14"
                  origin="top"
                  className="hidden dark:sm:block "
                />
                <BorderBeam size={200} />
              </div>
            </Atropos>
          </section>
        </div>
      </section>
    </>
  );
};
