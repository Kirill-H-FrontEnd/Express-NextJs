"use client";
// > React
import { FC } from "react";
// > FramerMotion
import { motion } from "framer-motion";
// > Next
import Image from "next/image";
import Link from "next/link";
// > Styles
import s from "./styles/Hero.module.scss";
// > NextUI
import { Button } from "@nextui-org/react";
// > Font
import { Open_Sans } from "next/font/google";
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
export const Hero: FC = ({}) => {
  // Animation
  const animation = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${s.home} relative w-full h-screen bg-[url('/home/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden select-none`}
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
        <section
          className={`${s.wrapper} relative z-10 grid place-items-center h-screen `}
        >
          <article className={`${s.article} sm:text-center select-text`}>
            <motion.h1
              style={font.style}
              variants={animation}
              custom={1}
              className="text-transparent bg-clip-text bg-gradient-to-br sm:bg-gradient-to-t from-white to-violet  font-bold leading-tight sm:leading-normal mb-3
            "
            >
              The API Documentation
            </motion.h1>
            <motion.p
              variants={animation}
              custom={2}
              className="text-slate-300 leading-relaxed sm:leading-normal max-w-[1000px] m-auto mb-6"
            >
              It doesn't matter if you have an API if nobody knows how to use
              it. Teach people the ins and outs of OAuth 2.0 and JWTs in style
              with Protocol, a beautiful API documentation template.
            </motion.p>
            <motion.div
              variants={animation}
              custom={3}
              className="grid sm:grid-cols-2-auto sm:justify-center sm:m-auto gap-3"
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
                className="shadow-lg px-10 rounded-full capitalize bg-white text-black hover:bg-slate-300 font-semibold"
                size={"md"}
              >
                learn more
              </Button>
            </motion.div>
          </article>
        </section>
      </div>
      <div className="pointer-events-none ">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[#392870] stroke-[#392870] dark:fill-white/1 dark:stroke-white/2.5"
          >
            <defs>
              <pattern
                id=":R56hdsqla:"
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
              fill="url(#:R56hdsqla:)"
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
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#392870] to-[#392870] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
          style={{
            maskImage:
              "radial-gradient(180px at 0px 0px, white, transparent);-webkit-mask-image:radial-gradient(180px at 0px 0px, white, transparent)",
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
          style={{
            maskImage:
              "radial-gradient(180px at 0px 0px, white, transparent);-webkit-mask-image:radial-gradient(180px at 0px 0px, white, transparent)",
          }}
        >
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-[#392870] stroke-[#392870] dark:fill-white/2.5 dark:stroke-white/10"
          >
            <defs>
              <pattern
                id=":R1d6hdsqla:"
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
              fill="url(#:R1d6hdsqla:)"
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
    </motion.section>
  );
};
