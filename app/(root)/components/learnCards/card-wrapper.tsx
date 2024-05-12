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
import { GeistSans } from "geist/font/sans";
// > Libs
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/bg/dot-pattern";
import GridPattern from "@/components/magicui/bg/grid-pattern";
type TCardWrapper = {
  icon: string | any;
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
        className={`${s.card} relative border-1 border-slate-700 bg-[url('/StarsAnimationBg.svg')] bg-no-repeat bg-center bg-cover rounded-2xl p-5 bg-black  hover:border-white  overflow-hidden `}
      >
        <div className="absolute z-[100] bottom-[20px] left-[20px] right-[20px] ">
          <h5 style={GeistSans.style} className=" font-semibold text-white">
            {title}
          </h5>
          <p className="line-clamp-3 text-sm text-slate-300">{text}</p>
        </div>
        <FiExternalLink
          className={`${s.iconLink} absolute top-2 right-2 text-slate-300/10 z-20`}
        />
        {/* /* BG */}
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray={"8 4"}
          className={cn(
            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]"
          )}
        />
      </Link>
    );
  }
);
export const MCardWrapper = motion(CardWrapper);
