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
import Image from "next/image";

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
        className={`${s.card} relative border-1 border-slate-300/20 rounded-2xl p-5 bg-black bg-[url('/dashboard/animBgDark.svg')] bg-no-repeat bg-center bg-cover hover:border-white  overflow-hidden `}
      >
        <div className="absolute z-[100] bottom-[20px] left-[20px] right-[20px] ">
          <h5 style={GeistSans.style} className=" font-semibold">
            {title}
          </h5>
          <p className="line-clamp-3 text-sm ">{text}</p>
        </div>
        <FiExternalLink
          className={`${s.iconLink} absolute top-2 right-2 text-slate-300/10 z-20`}
        />
        {/* /* BG */}
        {/* <div className="pointer-events-none w-full">
          <div className="absolute inset-0 rounded-2xl transition duration-300 bg-gradient-to-r from-[#151B2D] to-transparent [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50 z-10">
            <svg
              aria-hidden="true"
              className="absolute inset-x-[2px] inset-y-[-80%] h-[160%] w-full skew-y-[-18deg] fill-transparent stroke-[#131828]  text-purple-950/5 dark:fill-white/1 dark:stroke-white/2.5"
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
        </div> */}
      </Link>
    );
  }
);
export const MCardWrapper = motion(CardWrapper);
