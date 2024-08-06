"use client";
import { FC } from "react";
import { cn } from "@/lib/utils";
// > Globals styles
import "./global.scss";
import "atropos/css";
// > Components
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
import { Aside } from "./components/aside/Aside";
import { BorderBeam } from "@/components/magicui/border-beam";
import Atropos from "atropos/react";
import LinearGradient from "@/components/magicui/bg/linear-gradient";
import GridPattern from "@/components/magicui/bg/grid-pattern";
// > Framer motion
import { motion, Variants } from "framer-motion";
// > Font
import { Inter } from "next/font/google";
import { TitleBanner } from "@/app/(docs)/docs/components/ui/titleBanner/title-banner";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const Dashboard: FC = ({}) => {
  // Variants animations
  const Variants: Variants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <>
      <section className="py-24 bg-black relative">
        <div className="container">
          <section className="grid gap-14 relative z-[10]">
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
                className="text-3xl lg:text-[32px] tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#241A3E] to-white"
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
              <div className="relative border-1 border-borderDark rounded-2xl overflow-hidden h-[530px] md:h-[685px] bg-black">
                <Header />
                <article
                  id="dashboardMain"
                  className=" relative pt-10 mb-[20px] mt-10 md:mt-0 md:mx-[40px] z-[11]"
                >
                  <NavBar />
                  <div className="px-4 relative z-[11]">
                    <article className="border-b-1 border-borderDark pb-7">
                      <h5
                        style={inter.style}
                        className="text-white text-[28px] mb-5 font-medium"
                      >
                        Installation
                      </h5>
                      <div className="grid gap-6 text-slate-500 text-[14px] leading-7">
                        <p className="">System Requirements:</p>
                        <div>
                          <p>
                            -{" "}
                            <span className="text-bluePrimary">
                              Node.js 18.17
                            </span>{" "}
                            or later.
                          </p>
                          <p>
                            - macOS, Windows (including WSL), and Linux are
                            supported.
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                  <Aside />
                </article>
                <BorderBeam colorFrom="#131322" colorTo="#F1F4F8" size={200} />
              </div>
            </Atropos>
          </section>
        </div>
        <GridPattern
          width={50}
          height={50}
          strokeDasharray={0}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)] stroke-borderDark/25"
          )}
        />
      </section>
    </>
  );
};
