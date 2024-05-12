import { FC } from "react";
import s from "./styles/card-wrapper.module.scss";
import Image from "next/image";
// > FramerMotion
import { motion } from "framer-motion";
export const CardWrapper: FC = ({}) => {
  const DATA_CARDS = [
    {
      value:
        "“With Protocol.js at the helm of our headless tech stack, our developers can create features with velocity and speed, ultimately enabling users to create whatever, whenever they want to.”",
      logo: "/home/reviews/google.svg",
      info: "Michel Mac, Senior Software Engineer",
    },
    {
      value:
        "“My favorite UX feedback from customers is: `How is the app so fast?` Because we’ve built on Protocol.js and Vercel since day one, our pages load in an instant, which is important when it comes to mission-critical software.”",
      logo: "/home/reviews/google.svg",
      info: "Edward Matin, CEO",
    },
    {
      value:
        "“Protocol.js has been a game-changer for our agency work and team collaboration. Its powerful features have allowed us to build high-performance websites quickly and efficiently like never before.”",
      logo: "/home/reviews/google.svg",
      info: "Joe Doe, Frontend Developer",
    },
  ];
  // Animation
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <>
      {DATA_CARDS.map((card, i) => (
        <motion.article
          initial="hidden"
          whileInView="visible"
          variants={animation}
          viewport={{ once: true }}
          className={`${s.card} relative w-full h-full bg-[url('/home/reviews/AnimationCardBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden select-none p-5 `}
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
        </motion.article>
      ))}
    </>
  );
};
