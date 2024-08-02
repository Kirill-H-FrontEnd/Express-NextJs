"use client";
// > React
import { FC } from "react";
// > Styles
import s from "./styles/Technologies.module.scss";
// > Framer Motion
import { motion, Variants } from "framer-motion";
// > Components
import { Card } from "./card";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

export const Technologies: FC = ({}) => {
  // Variants animation
  const Variants: Variants = {
    offscreen: {
      y: 20,
      opacity: 0,
    },
    onscreen: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section
      id="technologies"
      className={`${s.Technologies} bg-black py-24 relative`}
    >
      <div className="container">
        <section className={`${s.Wrapper} grid gap-14`}>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className=" justify-center items-center text-center"
          >
            <motion.h2
              variants={Variants}
              style={inter.style}
              className="text-3xl lg:text-[32px] tracking-tight font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#241A3E] to-white"
            >
              Built on a foundation of fast, production-grade tooling
            </motion.h2>
          </motion.article>
          <motion.section className={`${s.Cards} `}>
            <Card />
          </motion.section>
        </section>
      </div>
    </section>
  );
};
