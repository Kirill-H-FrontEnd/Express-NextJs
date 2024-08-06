"use client";
import { FC } from "react";
import { cn } from "@/lib/utils";
// > Next
import Image from "next/image";
// > Styles
import s from "./styles/card-wrapper.module.scss";
// > Components
import DotPattern from "@/components/magicui/bg/dot-pattern";
import RadialGradient from "@/components/magicui/bg/radial-gradient";
export const CardWrapper: FC = ({}) => {
  // Dada cards
  const DATA_CARDS = [
    {
      value:
        "“With Express.ts at the helm of our headless tech stack, our developers can create features with velocity and speed, ultimately enabling users to create whatever, whenever they want to.”",
      logo: "/home/reviews/google.svg",
      info: "Michel Mac, Senior Software Engineer",
    },
    {
      value:
        "“My favorite UX feedback from customers is: `How is the app so fast?` Because we’ve built on Express.ts and Vercel since day one, our pages load in an instant, which is important when it comes to mission-critical software.”",
      logo: "/home/reviews/google.svg",
      info: "Edward Matin, CEO",
    },
    {
      value:
        "“Express.ts has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.”",
      logo: "/home/reviews/google.svg",
      info: "Joe Doe, Frontend Developer",
    },
  ];
  return (
    <>
      {DATA_CARDS.map((card, i) => (
        <article
          className={`${s.card} relative w-full h-full select-none p-5 overflow-hidden bg-black`}
          key={i}
        >
          <section className="relative z-20">
            <p className="text-white select-text leading-6">{card.value}</p>
            <div className="mt-5 ">
              <Image src={card.logo} width={150} height={150} alt="" />
              <p className="text-slate-300 mt-2 select-text">{card.info}</p>
            </div>
            <DotPattern
              cr={0.6}
              cx={0.6}
              cy={0.6}
              width={35}
              height={35}
              className={cn(
                "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] rounded-[10px] "
              )}
            />
          </section>
          <RadialGradient className="" origin="bottom" size={200} />
        </article>
      ))}
    </>
  );
};
