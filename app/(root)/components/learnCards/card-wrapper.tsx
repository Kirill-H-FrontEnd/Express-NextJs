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
// > Components
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/magicui/glowing-stars";
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
        className={`${s.card}   rounded-[12px]  h-full relative  hover:border-gray-700 overflow-hidden bg-gradient-to-b from-gray-400/5 to-gray-800/5 backdrop-blur-sm  `}
      >
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle> {title}</GlowingStarsTitle>
          <div className="">
            <GlowingStarsDescription>{text}</GlowingStarsDescription>
          </div>
        </GlowingStarsBackgroundCard>
        <FiExternalLink
          className={`${s.iconLink} absolute top-2 right-2 text-slate-300/10 z-20`}
        />
      </Link>
    );
  }
);
export const MCardWrapper = motion(CardWrapper);
