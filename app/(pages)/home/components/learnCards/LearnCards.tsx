import { FC } from "react";
import s from "./styles/LearnCards.module.scss";
import { CardWrapper } from "./card-wrapper";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const font = Inter({
  subsets: ["latin"],
  weight: ["300", "500"],
});
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
  return (
    <section className={`${s.learnCards} bg-black py-24`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <article className="grid md:grid-cols-2-auto md:justify-center gap-2 items-end ">
            <h2
              style={font.style}
              className="text-white text-2xl lg:text-4xl font-medium"
            >
              What will I learn?
            </h2>
            <p
              style={font.style}
              className="text-slate-300 text-xl lg:text-2xl font-extralight"
            >
              Here’s everything that’s covered in the course.
            </p>
          </article>
          <section className={`${s.cards} relative`}>
            {DATA_CARDS.map((card, i) => (
              <CardWrapper
                href={card.href}
                key={i}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </section>

          <div className={`${s.actions} text-center`}>
            <Button
              as={Link}
              href="/dashboard"
              radius="full"
              className="w-[200px] font-semibold hover:bg-slate-300"
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
