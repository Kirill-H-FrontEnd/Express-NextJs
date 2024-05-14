"use client";
// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Styles
import s from "./styles/Hero.module.scss";
// > NextUI
import { Button, Snippet } from "@nextui-org/react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Framer Motion
import { Variants, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/bg/dot-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
export const Hero: FC = ({}) => {
  // Animations
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
    <section
      className={`${s.home} relative w-full h-screen bg-[url('/StarsAnimationBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden select-none text-purple-800`}
    >
      <div className="w-full h-screen bg-[url('/gradientBg.svg')] bg-no-repeat bg-center bg-cover">
        <div className="container ">
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className={`${s.wrapper} relative z-10 grid place-items-center h-screen `}
          >
            <article className={`${s.article} text-center select-text`}>
              <motion.h1
                variants={Variants}
                custom={1}
                className={`${GeistSans.className} font-bold sm:font-extrabold text-white leading-[1.2] mb-4 text-balance
            `}
              >
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-200 via-purple-700 to-[#221B42] ">
                  Progressive
                </span>{" "}
                JavaScript Framework
              </motion.h1>

              <motion.p
                custom={2}
                variants={Variants}
                className="text-slate-300 leading-relaxed sm:leading-normal max-w-[900px] m-auto mb-8 font-normal"
              >
                Used by some of the world's largest companies, Protocol enables
                you to create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white ">
                  high-quality web applications
                </span>{" "}
                with the power of JavaScript.
              </motion.p>
              <motion.div
                custom={3}
                variants={Variants}
                className="grid sm:grid-cols-2-auto sm:justify-center sm:m-auto gap-3 pb-3"
              >
                <Link href={"/dashboard"} className="h-[43px]">
                  <ShimmerButton
                    background="#241A3E"
                    className="w-full shadow-2xl text-sm font-semibold h-[43px]"
                  >
                    Get Started
                  </ShimmerButton>
                </Link>

                <ShimmerButton
                  background="#fff"
                  className="sm:w-[142px] h-[42px] text-sm text-black rounded-full capitalize font-semibold"
                >
                  Learn more
                </ShimmerButton>
              </motion.div>
              <Snippet
                disableTooltip
                symbol={`# ~`}
                classNames={{
                  base: "bg-transparent text-gray",
                  pre: "font-medium text-sm",
                }}
                size="sm"
              >
                npx create-protocol-app@lates
              </Snippet>
            </article>
          </motion.section>
        </div>
      </div>
      <DotPattern
        width={25}
        height={25}
        className={cn(
          "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
};
