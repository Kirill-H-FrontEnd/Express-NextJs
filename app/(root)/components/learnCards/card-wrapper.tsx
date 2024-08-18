// > React
import { FC, forwardRef, Ref } from "react";
// > Styles
import s from "./styles/LearnCards.module.scss";
// > Next
import Link from "next/link";
// > FramerMotion
import { motion } from "framer-motion";
// > Components
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/magicui/glowing-stars";
// > Icons
import { FiExternalLink } from "react-icons/fi";
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
        className={`${s.card} group rounded-[12px]  h-full relative  hover:border-gray-700 overflow-hidden bg-gradient-to-b from-gray-400/5 to-gray-800/5 backdrop-blur-sm`}
      >
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle> {title}</GlowingStarsTitle>
          <div className="">
            <GlowingStarsDescription className="text-slate-500 leading-6">
              {text}
            </GlowingStarsDescription>
          </div>
        </GlowingStarsBackgroundCard>
        <FiExternalLink
          className={`${s.iconLink} group-hover:text-white transition-colors absolute top-2 right-2 text-slate-300/10 z-20 `}
        />
      </Link>
    );
  }
);
export const MCardWrapper = motion(CardWrapper);
