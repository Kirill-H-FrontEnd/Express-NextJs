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
// > ScrollLink
import { Link as ScrollLink } from "react-scroll";
// > Font
import { GeistSans } from "geist/font/sans";

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
          <article className={`${s.article} text-center select-text`}>
            <motion.h1
              variants={animation}
              custom={1}
              className={`${GeistSans.className} font-bold sm:font-extrabold text-white leading-[1.2] mb-4 text-balance
            `}
            >
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-700  to-purple-950 ">
                Progressive
              </span>{" "}
              JavaScript Framework
            </motion.h1>
            <motion.p
              variants={animation}
              custom={2}
              className="text-slate-300 leading-relaxed sm:leading-normal max-w-[900px] m-auto mb-8 font-normal"
            >
              Used by some of the world's largest companies, Protocol enables
              you to create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white ">
                high-quality web applications
              </span>{" "}
              with the power of Java Script.
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
                className="shadow-lg rounded-full capitalize bg-white text-black hover:bg-slate-300 font-semibold px-0"
                size={"md"}
              >
                <ScrollLink
                  className="px-10"
                  activeStyle={{
                    backgroundColor: "#f1f5f9",
                    color: "#2563EB",
                  }}
                  to={"learnCards"}
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Learn More
                </ScrollLink>
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
    </motion.section>
  );
};
