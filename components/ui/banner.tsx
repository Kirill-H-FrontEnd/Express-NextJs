"use client";
import { Button } from "@nextui-org/react";
import { FC, useContext } from "react";
// > Font
import { Inter } from "next/font/google";
const font = Inter({
  subsets: ["latin"],
  weight: ["500"],
});
import Image from "next/image";
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
  return (
    <section className="relative bg-black py-24">
      <Image
        src={"/bg.svg"}
        width={1000}
        height={1000}
        alt=""
        className="absolute top-0 right-0 w-full h-full object-cover z-10"
      />
      <div className="absolute z-20 bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-black/30 "></div>
      <div className="container">
        <section>
          <article className="relative z-20 text-center grid gap-2 max-w-[450px] m-auto">
            <h3 className="text-violet font-medium sm:font-semibold">
              {supTitle}
            </h3>
            <h2
              style={font.style}
              className="text-white text-2xl sm:text-4xl font-medium"
            >
              {title}
            </h2>
            <p className="text-slate-300 text-md sm:text-lg">{text}</p>
            {isActions && (
              <div className="mt-4">
                <Button
                  onClick={onOpen}
                  radius="full"
                  className=" sm:w-auto shadow-lg px-10 text-white rounded-full capitalize bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black font-normal"
                >
                  {btnValue}
                </Button>
              </div>
            )}
          </article>
        </section>
      </div>
    </section>
  );
};
