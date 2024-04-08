"use client";
// > NextuI
import { Button } from "@nextui-org/react";
// > React
import { FC, useContext } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
// > FramerMotion
import { Variants, motion } from "framer-motion";
// > Next
import Image from "next/image";
// > Providers
import { useModalContext } from "@/app/providers/modalProvider";
type TBanner = {
  title: string;
  supTitle: string;
  text: string;
  btnValue?: string;
  isActions?: boolean;
};

export const Banner: FC<TBanner> = ({
  title,
  supTitle,
  text,
  btnValue,
  isActions,
}) => {
  const { onOpen } = useContext(useModalContext);
  // Animation
  const Variants: Variants = {
    offscreen: {
      y: 50,
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
    <section className="relative bg-black py-24">
      <Image
        src={"/bg.svg"}
        width={1000}
        height={1000}
        alt=""
        className="pointer-events-none absolute top-0 right-0 w-full h-full object-cover z-10"
      />
      <div className="absolute z-20 bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-black/30 "></div>
      <div className="container">
        <section>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="relative z-20 text-center grid gap-2 max-w-[450px] m-auto"
          >
            <motion.h3
              custom={1}
              variants={Variants}
              className="text-violet font-medium sm:font-semibold"
            >
              {supTitle}
            </motion.h3>
            <motion.h2
              custom={2}
              variants={Variants}
              style={GeistSans.style}
              className="text-white text-2xl sm:text-4xl font-medium"
            >
              {title}
            </motion.h2>
            <motion.p
              custom={3}
              variants={Variants}
              className="text-slate-300 text-md sm:text-lg"
            >
              {text}
            </motion.p>
            {isActions && (
              <motion.div
                custom={4}
                variants={Variants}
                className="mt-4 animate-bounce"
              >
                <Button
                  onClick={onOpen}
                  radius="full"
                  className=" sm:w-auto shadow-lg px-10 text-white rounded-full capitalize bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black font-normal"
                >
                  {btnValue}
                </Button>
              </motion.div>
            )}
          </motion.article>
        </section>
      </div>
    </section>
  );
};
