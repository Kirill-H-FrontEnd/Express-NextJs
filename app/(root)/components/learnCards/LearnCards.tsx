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
import { RiErrorWarningLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
// > NextUi
import { Button } from "@nextui-org/react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Framer Motion
import { motion, Variants } from "framer-motion";
// > Data
import { DATA_LEARN_CARDS } from "@/data/dataItems";
export const LearnCards: FC = ({}) => {
  // Variants animation
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
    <section className={`${s.learnCards} bg-black py-24`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="grid gap-3 lg:grid-cols-2-auto justify-center items-center text-center"
          >
            <motion.h2
              custom={1}
              variants={Variants}
              style={GeistSans.style}
              className="text-3xl lg:text-[32px] tracking-tight font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-white"
            >
              What's in Protocol.js?
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
            variants={Variants}
            className={`${s.cards} relative`}
          >
            <div className="grid">
              {DATA_LEARN_CARDS.section1.map((card, i) => (
                <CardWrapper
                  key={i}
                  href={card.href}
                  text={card.text}
                  title={card.title}
                />
              ))}
            </div>
            <div className="grid grid-cols-2-auto gap-[15px]">
              {DATA_LEARN_CARDS.section2.map((card, i) => (
                <CardWrapper
                  key={i}
                  href={card.href}
                  text={card.text}
                  title={card.title}
                />
              ))}
            </div>
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
