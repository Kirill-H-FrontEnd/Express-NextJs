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
      href: "/dashboard",
      title: "Introduction",
      text: "Learn how to build a full-stack web application with the free, Protocol.js App Router Course.",
    },
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
      text: "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Protocol.js.",
    },
    {
      icon: "3",
      href: "",
      title: "Data Fetching",
      text: "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in Protocol.js.",
    },
    {
      icon: "4",
      href: "",
      title: "Rendering",
      text: "Rendering converts the code you write into user interfaces. React and Protocol.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. This section will help you understand the differences between these rendering environments, strategies, and runtimes.",
    },
    {
      icon: "5",
      href: "",
      title: "Caching",
      text: "Protocol.js improves your application's performance and reduces costs by caching rendering work and data requests. This page provides an in-depth look at Protocol.js caching mechanisms, the APIs you can use to configure them, and how they interact with each oth",
    },
    {
      icon: "6",
      href: "",
      title: "Styling",
      text: "Protocol.js supports different ways of styling your application, including:",
    },
    {
      icon: "7",
      href: "",
      title: "Optimizations",
      text: "Protocol.js comes with a variety of built-in optimizations designed to improve your application's speed and Core Web Vitals. This guide will cover the optimizations you can leverage to enhance your user experience.",
    },
    {
      icon: "8",
      href: "",
      title: "Configuring",
      text: "Protocol.js allows you to customize your project to meet specific requirements. This includes integrations with TypeScript, ESlint, and more, as well as internal configuration options such as Absolute Imports and Environment Variables.",
    },
    {
      icon: "9",
      href: "",
      title: "Testing",
      text: "In JavaScript and Protocol.js, there are a few different types of tests you can write, each with its own purpose and use cases. This page provides an overview of types and commonly used tools you can use to test your application",
    },
    {
      icon: "9",
      href: "",
      title: "Authentication",
      text: "To implement authentication in Protocol.js, familiarize yourself with three foundational concepts:",
    },
    {
      icon: "10",
      href: "",
      title: "Deploying",
      text: "You can deploy managed Protocol.js with Vercel, or self-host on a Node.js server, Docker image, or even static HTML files. When deploying using next start, all Next.js features are supported.",
    },
  ];
  // Animation
  const animationCard = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
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
            <h2
              style={GeistSans.style}
              className=" text-white text-3xl lg:text-4xl font-semibold sm:font-bold"
            >
              What will I learn?
            </h2>
            <p className="text-slate-300 text-lg lg:text-xl  font-normal">
              Here’s everything that’s covered in the course.
            </p>
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
