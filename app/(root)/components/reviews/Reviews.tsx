"use client";
import { FC } from "react";
// > Styles
import s from "./styles/Reviews.module.scss";
// > NextUi
import { Button } from "@nextui-org/react";
// > Next
import Link from "next/link";
// > FramerMotion
import { motion, Variants } from "framer-motion";
// > Components
import { CardWrapper } from "./card-wrapper";
import RadialGradient from "@/components/magicui/bg/radial-gradient";

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
        delay: custom * 0.2,
        duration: 0.4,
      },
    }),
  };
  return (
    <section className={`${s.reviews} relative bg-black py-24 w-full h-full  `}>
      <RadialGradient origin="center" size={300} />
      <div className="container">
        <section className={`${s.wrapper} grid gap-14 `}>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
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
                Express.ts is trusted by some of the biggest names on the web.
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
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            variants={Variants}
            className={`${s.cards}  `}
          >
            <CardWrapper />
          </motion.section>
        </section>
      </div>
    </section>
  );
};
