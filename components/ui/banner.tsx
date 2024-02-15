"use client";
// > NextuI
import { Button } from "@nextui-org/react";
// > React
import { FC, useContext } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
// > FramerMotion
import { motion } from "framer-motion";
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
  const animation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-20 text-center grid gap-2 max-w-[450px] m-auto"
          >
            <motion.h3
              custom={1}
              variants={animation}
              className="text-violet font-medium sm:font-semibold"
            >
              {supTitle}
            </motion.h3>
            <motion.h2
              custom={2}
              variants={animation}
              style={GeistSans.style}
              className="text-white text-2xl sm:text-4xl font-medium"
            >
              {title}
            </motion.h2>
            <motion.p
              custom={3}
              variants={animation}
              className="text-slate-300 text-md sm:text-lg"
            >
              {text}
            </motion.p>
            {isActions && (
              <motion.div custom={4} variants={animation} className="mt-4">
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
