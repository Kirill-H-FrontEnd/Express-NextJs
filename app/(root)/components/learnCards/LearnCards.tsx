"use client";
// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Styles
import s from "./styles/LearnCards.module.scss";
// > Components
import { CardWrapper } from "./card-wrapper";
// > Icons
import { FaArrowRight } from "react-icons/fa6";
// > NextUi
import { Button } from "@nextui-org/react";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});
// > Framer Motion
import { motion, Variants } from "framer-motion";
// > Data
import { DATA_LEARN_CARDS } from "@/data/dataItems";
export const LearnCards: FC = ({}) => {
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
        delay: custom * 0.1,
        duration: 0.4,
      },
    }),
  };
  return (
    <section className={`${s.learnCards} bg-black py-24 relative`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="grid gap-3 lg:grid-cols-2-auto justify-center items-center text-center z-[20]"
          >
            <motion.h2
              custom={1}
              variants={Variants}
              style={inter.style}
              className="text-3xl lg:text-[32px] tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#241A3E] to-white"
            >
              What's in Express.ts?
            </motion.h2>
            <motion.p
              custom={2}
              variants={Variants}
              className="text-slate-300 text-lg lg:text-xl  font-normal"
            >
              Here’s everything that’s covered in the course.
            </motion.p>
          </motion.article>
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={Variants}
            className={`${s.cards} relative`}
          >
            {DATA_LEARN_CARDS.map((card, i) => (
              <CardWrapper
                key={i}
                href={card.href}
                text={card.text}
                title={card.title}
              />
            ))}
          </motion.section>
          <div className={`${s.actions} text-center`}>
            <Button
              as={Link}
              href="/dashboard"
              radius="full"
              className="w-[200px] font-semibold hover:bg-slate-300 bg-white text-black"
            >
              <p>Start Learning</p>
              <FaArrowRight size={13} />
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};
