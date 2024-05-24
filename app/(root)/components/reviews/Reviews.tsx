"use client";
import { FC } from "react";
// > Styles
import s from "./styles/Reviews.module.scss";
// > Utils
import { cn } from "@/lib/utils";
// > NextUi
import { Button } from "@nextui-org/react";
// > Next
import Link from "next/link";
// > FramerMotion
import { motion, Variants } from "framer-motion";
// > Components
import { CardWrapper } from "./card-wrapper";
import Marquee from "@/components/magicui/marquee";
// > Data
import { DATA_REVIEWS_CARDS } from "@/data/dataItems";
const firstRow = DATA_REVIEWS_CARDS.slice(0, DATA_REVIEWS_CARDS.length / 2);
const secondRow = DATA_REVIEWS_CARDS.slice(DATA_REVIEWS_CARDS.length / 2);

export const Reviews: FC = ({}) => {
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
        delay: custom * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section
      className={`${s.reviews} relative bg-black py-24 w-full h-full bg-[url('/gradientBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden `}
    >
      <div className="container">
        <section className={`${s.wrapper} grid gap-14 `}>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            variants={Variants}
            className="text-center"
          >
            <h2 className="text-slate-300 text-lg ">
              <p>
                For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white">
                  performance
                </span>
                ,
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white">
                  efficiency
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white">
                  developer experience
                </span>
                .
              </p>
              <p>
                Protocol.js is trusted by some of the biggest names on the web.
              </p>
            </h2>
            <Button
              as={Link}
              href=""
              radius="full"
              className="font-semibold hover:bg-slate-300 bg-white text-black mt-8"
            >
              View the Protocol.js Showcase
            </Button>
          </motion.article>
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            variants={Variants}
            className={`${s.cards}  `}
          >
            <CardWrapper />
          </motion.section>
        </section>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20 bg-transparent">
        <Marquee pauseOnHover={false} className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover={false} reverse className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden rounded-xl p-4 bg-black/10  pointer-events-none select-none"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-slate-300">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-300">{body}</blockquote>
    </figure>
  );
};
