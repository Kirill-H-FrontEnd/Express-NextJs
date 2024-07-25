// > React
import { FC, forwardRef, Ref } from "react";
// > Styles
import s from "./styles/LearnCards.module.scss";
// > Next
import Link from "next/link";
// > Icons
import { FiExternalLink } from "react-icons/fi";
// > FramerMotion
import { motion } from "framer-motion";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});
// > Utils
import { cn } from "@/lib/utils";
// > Components
import GridPattern from "@/components/magicui/bg/grid-pattern";
import DotPattern from "@/components/magicui/bg/dot-pattern";
import Particles from "@/components/magicui/bg/particles";

type TCardWrapper = {
  title: string;
  text: string;
  href: string;
};
export const CardWrapper: FC<TCardWrapper> = forwardRef(
  ({ title, text, href }, ref: Ref<HTMLAnchorElement>) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={`${s.card} border-1 border-gray-900 p-5 bg-gradient-to-b from-black to-[#3B2977]/15 rounded-[12px]  h-full relative  hover:border-gray-700  overflow-hidden backdrop-blur-sm`}
      >
        <div className="absolute z-[45] bottom-[20px] left-[20px] right-[20px] ">
          <h5 style={inter.style} className=" font-medium text-white">
            {title}
          </h5>
          <p className="line-clamp-3 text-sm text-slate-300">{text}</p>
        </div>
        <FiExternalLink
          className={`${s.iconLink} absolute top-2 right-2 text-slate-300/10 z-20`}
        />
        {/* /* BG */}
        <DotPattern
          cr={0.6}
          cx={0.6}
          cy={0.6}
          width={32}
          height={32}
          className={cn(
            "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] rounded-[10px]"
          )}
        />
        <Particles
          className="absolute inset-0 hidden md:block"
          quantity={50}
          size={0.2}
          ease={80}
          color={"#974BD9"}
        />
      </Link>
    );
  }
);
export const MCardWrapper = motion(CardWrapper);
