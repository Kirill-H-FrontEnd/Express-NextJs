"use client";
import { FC } from "react";
// > Styles
import s from "./styles/Reviews.module.scss";
// > NextUi
import { Button } from "@nextui-org/react";
// > Next
import Link from "next/link";
import Image from "next/image";
// > FramerMotion
import { motion } from "framer-motion";
// > Components
import { CardWrapper } from "./card-wrapper";
type TReviews = {};

export const Reviews: FC = ({}) => {
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
    <section className={`${s.reviews} relative bg-black py-24`}>
      <Image
        src={"/home/gradientBg.svg"}
        alt="gradientBg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0 pointer-events-none select-none "
        width={1000}
        height={1000}
      />
      <div className="container">
        <section className={`${s.wrapper} grid gap-14`}>
          <motion.article
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
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
          <section className={`${s.cards}`}>
            <CardWrapper />
          </section>
        </section>
      </div>
    </section>
  );
};
