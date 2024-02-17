"use client";
// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Styles
import s from "./styles/LearnCards.module.scss";
// > Components
import { MCardWrapper } from "./card-wrapper";
// > Icons
import { RiErrorWarningLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
// > NextUi
import { Button } from "@nextui-org/react";
// > FramerMotion
import { motion } from "framer-motion";
// > Font
import { GeistSans } from "geist/font/sans";

export const LearnCards: FC = ({}) => {
  const DATA_CARDS = [
    {
      icon: <RiErrorWarningLine size={20} />,
      href: "",
      title: "Introduction",
      text: "Learn how to build a full-stack web application with the free, Next.js App Router Course.",
    },
    {
      icon: "1",
      href: "",
      title: "Getting Started",
      text: "Create a new Next.js application using the dashboard starter example and explore the project.",
    },
    {
      icon: "2",
      href: "",
      title: "CSS Styling",
      text: "Style your Next.js application with Tailwind and CSS modules.",
    },
    {
      icon: "3",
      href: "",
      title: "Getting Started",
      text: "Create a new Next.js application using the dashboard starter example and explore the project.",
    },
    {
      icon: "4",
      href: "",
      title: "CSS Styling",
      text: "Style your Next.js application with Tailwind and CSS modules.",
    },
    {
      icon: "5",
      href: "",
      title: "Getting Started",
      text: "Create a new Next.js application using the dashboard starter example and explore the project.",
    },
    {
      icon: "6",
      href: "",
      title: "Getting Started",
      text: "Create a new Next.js application using the dashboard starter example and explore the project.",
    },
    {
      icon: "7",
      href: "",
      title: "CSS Styling",
      text: "Style your Next.js application with Tailwind and CSS modules.",
    },
    {
      icon: "8",
      href: "",
      title: "Getting Started",
      text: "Create a new Next.js application using the dashboard starter example and explore the project.",
    },
  ];
  // Animation
  const animationText = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.4, ease: "easeOut" },
    }),
  };
  const animationCard = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };
  return (
    <section id="learnCards" className={`${s.learnCards} bg-black py-24`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-3 lg:grid-cols-2-auto justify-center items-center text-center"
          >
            <motion.h2
              variants={animationText}
              custom={2}
              style={GeistSans.style}
              className="text-white text-3xl lg:text-4xl font-semibold sm:font-bold"
            >
              What will I learn?
            </motion.h2>
            <motion.p
              variants={animationText}
              custom={3}
              className="text-slate-300 text-lg lg:text-xl  font-normal"
            >
              Here’s everything that’s covered in the course.
            </motion.p>
          </motion.article>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${s.cards} relative`}
          >
            {DATA_CARDS.map((card, i) => (
              <MCardWrapper
                variants={animationCard}
                custom={i}
                href={card.href}
                key={i}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </motion.section>

          <div className={`${s.actions} text-center`}>
            <Button
              as={Link}
              href="/dashboard"
              radius="full"
              className="w-[200px] font-semibold hover:bg-slate-300 bg-white"
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
