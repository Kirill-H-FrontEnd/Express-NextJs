"use client";
// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Styles
import s from "./styles/Hero.module.scss";
// > NextUI
import { Button, Snippet } from "@nextui-org/react";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["800"],
});
// > Utils
import { cn } from "@/lib/utils";
// > Components
import ShimmerButton from "@/components/magicui/shimmer-button";
import Particles from "@/components/magicui/bg/particles";
import GridPattern from "@/components/magicui/bg/grid-pattern";
import RadialGradient from "@/components/magicui/bg/radial-gradient";
// > Hooks
import useMediaQuery from "@/hooks/useMediaQuery";

export const Hero: FC = ({}) => {
  const words = ["better", "cute", "beautiful", "modern"];
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // Scroll to
  const handleClick = () => {
    const targetSection = document.getElementById("technologies");
    if (targetSection) {
      window.scrollTo({
        behavior: "smooth",
        top: targetSection.offsetTop,
      });
    }
  };
  return (
    <section
      className={`${s.home} relative w-full py-[150px] sm:py-[200px]  overflow-hidden select-none text-purple-800 bg-black`}
    >
      <div className="w-full ">
        <div className="container ">
          <section
            className={`${s.wrapper} relative z-10 grid place-items-center  `}
          >
            <article
              className={`${s.article} relative text-center select-text`}
            >
              <h1
                className={`${inter.className} font-extrabold sm:font-extrabold text-white leading-[1.2] mb-4 text-balance
            `}
              >
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white from via-bluePrimary via-10%  to-green-600 ">
                  Progressive
                </span>{" "}
                TypeScript Framework
              </h1>

              <p className="text-slate-300 leading-relaxed sm:leading-normal max-w-[900px] m-auto mb-8 font-normal">
                Used by some of the world's largest companies, Express enables
                you to create{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-bluePrimary to-white ">
                  high-quality web applications
                </span>{" "}
                with the power of TypeScript.
              </p>
              <div className="grid sm:grid-cols-2-auto sm:justify-center sm:m-auto gap-3 pb-3">
                <Link href={"/docs"} className="">
                  <ShimmerButton
                    shimmerSize="0.06em"
                    className={`shadow-2xl text-sm font-medium h-[42px] w-full sm:w-[150px] `}
                  >
                    Get Started
                  </ShimmerButton>
                </Link>
                <Button
                  onClick={handleClick}
                  className=" h-[42px] w-full sm:w-[150px] bg-white text-sm text-black rounded-full capitalize font-semibold"
                >
                  Learn more
                </Button>
              </div>
              <Snippet
                disableTooltip
                symbol={`# ~`}
                classNames={{
                  base: "bg-transparent text-gray-600",
                  pre: "font-medium text-sm",
                }}
                size="sm"
              >
                npx create-express-app@lates
              </Snippet>
            </article>
          </section>
        </div>
      </div>
      {/* Bg */}
      <RadialGradient origin="top" size={isDesktop ? 700 : 600} />
      <GridPattern
        width={50}
        height={50}
        strokeDasharray={0}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)] stroke-borderDark/40"
        )}
      />
      {isDesktop && (
        <Particles
          className="absolute inset-0"
          quantity={300}
          size={0.4}
          ease={80}
          color={"#2D8EB4"}
          refresh
        />
      )}
    </section>
  );
};
