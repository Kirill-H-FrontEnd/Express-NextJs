// > React
import { FC } from "react";
// > Styles
import s from "./styles/card-wrapper.module.scss";
// > Next
import Image from "next/image";
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
          className={`${s.card} relative w-full h-full bg-black/30 backdrop-blur-lg select-none p-5 `}
          key={i}
        >
          <section className="relative z-20">
            <p className="text-white select-text">{card.value}</p>
            <div className="mt-5 ">
              <Image src={card.logo} width={150} height={150} alt="" />
              <p className="text-slate-300 mt-2 select-text">{card.info}</p>
            </div>
          </section>
          {/* BG */}
        </article>
      ))}
    </>
  );
};
