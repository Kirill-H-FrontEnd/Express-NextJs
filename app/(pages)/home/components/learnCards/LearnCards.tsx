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
export const LearnCards: FC = ({}) => {
  const DATA_CARDS = {
    section1: [
      {
        icon: <RiErrorWarningLine size={20} />,
        href: "/dashboard",
        title: "Introduction",
        text: "Learn how to build a full-stack web application with the free, Protocol.js App Router Course.",
      },
    ],
    section2: [
      {
        icon: "1",
        href: "/dashboard/project-structure",
        title: "Project Structure",
        text: "This page provides an overview of the project structure of a Protocol.js application. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.",
      },
      {
        icon: "2",
        href: "",
        title: "Routing",
        text: "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle ",
      },
      {
        icon: "1",
        href: "/dashboard/data-fetching",
        title: "Data Fetching",
        text: "Make your React component async and await your data. Protocol.js supports both server and client data fetching.",
      },
      {
        icon: "2",
        href: "/dashboard/css-support",
        title: "CSS Support",
        text: "Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.",
      },
    ],
  };
  // Animation
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
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    }),
  };
  return (
    <section id="learnCards" className={`${s.learnCards} bg-black py-24`}>
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
              className="text-3xl lg:text-[32px] tracking-tight font-semibold sm:font-bold text-transparent bg-clip-text bg-gradient-to-t from-white via-purple-200 to-[#2D1445]"
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
          <section className={`${s.cards} relative`}>
            <div className="grid">
              {DATA_CARDS.section1.map((card, i) => (
                <CardWrapper
                  key={i}
                  href={card.href}
                  icon={card.icon}
                  text={card.text}
                  title={card.title}
                />
              ))}
            </div>
            <div className="grid grid-cols-2-auto gap-[15px]">
              {DATA_CARDS.section2.map((card, i) => (
                <CardWrapper
                  key={i}
                  href={card.href}
                  icon={card.icon}
                  text={card.text}
                  title={card.title}
                />
              ))}
            </div>
          </section>

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
