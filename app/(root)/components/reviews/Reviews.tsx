"use client";
import { FC } from "react";
import { cn } from "@/lib/utils";
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
import GridPattern from "@/components/magicui/bg/grid-pattern";

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
        duration: 0.4,
      },
    }),
  };
  return (
    <section className={`${s.reviews} relative bg-black py-24 w-full h-full`}>
      <div className="container">
        <section className={`${s.wrapper} grid gap-14 relative z-[5]`}>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-violet to-white">
                  performance
                </span>
                ,
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-violet to-white">
                  efficiency
                </span>{" "}
                and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-violet to-white">
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
          <section className={`${s.cards}  relative rounded-md`}>
            <CardWrapper />
          </section>
        </section>
      </div>
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(350px_circle_at_center,white,transparent)] stroke-gray-900"
        )}
      />
    </section>
  );
};
