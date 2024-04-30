"use client";
// > React
import { FC } from "react";
// > Next
import Image from "next/image";
import Link from "next/link";
// > Styles
import s from "./styles/Hero.module.scss";
// > NextUI
import { Button, Snippet } from "@nextui-org/react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Framer Motion
import { Variants, motion } from "framer-motion";
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
      },
    }),
  };
  return (
    <section
      className={`${s.home} relative w-full h-screen bg-[url('/home/hero/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden select-none text-purple-800`}
    >
      {/* Background */}
      <Image
        src={"/home/gradientBg.svg"}
        alt="gradientBg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0 pointer-events-none select-none"
        width={1000}
        height={1000}
      />
      <div className="container">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-200 via-purple-600 to-[#2D1445] ">
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
              <Button
                as={Link}
                href="/dashboard"
                className="shadow-lg px-10 text-white rounded-full capitalize bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black font-medium"
                size={"md"}
              >
                get started
              </Button>
              <Button
                className="shadow-lg px-10 text-black rounded-full capitalize bg-white font-semibold"
                size={"md"}
              >
                Learn more
              </Button>
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
      <div className="pointer-events-none ">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[#392870] stroke-[#392870] dark:fill-white/1 dark:stroke-white/2.5"
          >
            <defs>
              <pattern
                id=":bg1"
                width="72"
                height="56"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="16"
              >
                <path d="M.5 56V.5H72" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:bg1)"
            ></rect>
            <svg x="50%" y="16" className="overflow-visible">
              <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
              <rect
                strokeWidth="0"
                width="73"
                height="57"
                x="72"
                y="168"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>
    </section>
  );
};
