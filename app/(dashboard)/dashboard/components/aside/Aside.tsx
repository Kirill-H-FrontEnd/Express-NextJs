"use client";
import { FC, useRef } from "react";
import { TAsideArray } from "@/types";
// > Next
import { usePathname } from "next/navigation";
import { PiDiamondsFourFill } from "react-icons/pi";
// > Font
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { useSection } from "@/app/providers/SectionProvider";

type TAside = {
  data: TAsideArray[];
};

export const Aside: FC = ({}) => {
  const pathName = usePathname();
  const { scrollToSection } = useSection();
  return (
    <aside className="bg-transparent relative z-[100]" id="aside">
      <h5
        style={GeistSans.style}
        className="text-white font-normal text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        <PiDiamondsFourFill size={20} className="text-black dark:text-white" />
        <p className="text-black dark:text-white">On this page</p>
      </h5>
      <nav className="grid gap-3 text-slate-300  ml-2 border-l-1 border-slate-300 dark:border-slate-800">
        {/* {data?.map((link, i) => (
          <Link
            onClick={() => scrollToSection(link.href)}
            key={i}
            className={`relative text-xs pl-3 hover:pl-4 hover:text-slate-400 transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background w-max ${
              pathName === link.href
                ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 pl-3`
                : "before:bg-transparent text-slate-500 dark:text-slate-300 hover:text-slate-600 hover:dark:text-slate-400 hover:before:bg-purple-500"
            }`}
            href={link.href}
          >
            {link.value}
          </Link>
        ))} */}
        <Link
          onClick={(e) => {
            e.preventDefault(), scrollToSection("#test2");
          }}
          className="text-white text-xl"
          href="#test2"
        >
          test
        </Link>
      </nav>
    </aside>
  );
};
