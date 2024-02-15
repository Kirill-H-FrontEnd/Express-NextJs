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

type TCardWrapper = {
  icon: string | any;
  title: string;
  text: string;
  href: string;
};
export const CardWrapper: FC<TCardWrapper> = forwardRef(
  ({ icon, title, text, href }, ref: Ref<HTMLAnchorElement>) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={`${s.card} relative border-1 border-slate-300/20 rounded-2xl p-5 bg-purple-900/5 hover:border-white overflow-hidden`}
      >
        <div className="relative z-20 grid grid-cols-2-auto justify-start gap-3 items-center mb-3">
          <p className="w-[32px] h-[32px] relative text-white bg-violet/30 rounded-full">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-violet font-extrabold text-lg">
              {icon}
            </span>
          </p>
          <h3
            style={GeistSans.style}
            className="text-white text-xl font-medium sm:font-semibold"
          >
            {title}
          </h3>
        </div>
        <p className="relative z-20 text-white line-clamp-2">{text}</p>
        <FiExternalLink
          className={`${s.iconLink} absolute top-2 right-2 text-slate-300/10 z-20`}
        />
        {/* BG */}

        <div className="pointer-events-none ">
          <div className="absolute inset-0 rounded-2xl transition duration-300 bg-gradient-to-r from-[#151B2D] to-transparent [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
            <svg
              aria-hidden="true"
              className="absolute inset-x-[2%] inset-y-[-80%] h-[160%] w-full skew-y-[-18deg] fill-transparent stroke-[#1A1C33]  text-purple-950/5 dark:fill-white/1 dark:stroke-white/2.5"
            >
              <defs>
                <pattern
                  id=":bg2"
                  width="52"
                  height="52"
                  patternUnits="userSpaceOnUse"
                  x="50%"
                  y="16"
                >
                  <path d="M.5 56V.5H72" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#:bg2)"
              ></rect>
            </svg>
          </div>
        </div>
      </Link>
    );
  }
);
export const MCardWrapper = motion(CardWrapper);
