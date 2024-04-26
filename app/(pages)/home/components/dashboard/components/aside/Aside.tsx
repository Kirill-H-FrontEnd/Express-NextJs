"use client";
import { FC } from "react";
import { TAsideArray } from "@/types";
// > Next
import { usePathname } from "next/navigation";
import { PiDiamondsFourFill } from "react-icons/pi";
// > Font
import { GeistSans } from "geist/font/sans";
import Link from "next/link";

type TAside = {
  data: TAsideArray[];
};

export const Aside: FC<TAside> = ({ data }) => {
  const pathName = usePathname();
  return (
    <aside className="bg-transparent pr-2 py-[25px]" id="aside">
      <h5
        style={GeistSans.style}
        className="text-white font-normal text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        <PiDiamondsFourFill size={20} className="text-white" />
        <p className="text-white">On this page</p>
      </h5>
      <nav className="grid gap-3 text-slate-300  ml-2 border-l-1 border-slate-300 dark:border-slate-800">
        {data?.map((link, i) => (
          <span
            key={i}
            className={`relative text-xs pl-3 hover:pl-4 hover:text-slate-400 transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background w-max cursor-pointer ${
              pathName === link.href
                ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 pl-3`
                : "before:bg-transparent text-slate-500 dark:text-slate-300 hover:text-slate-600 hover:dark:text-slate-400 hover:before:bg-purple-500"
            }`}
          >
            {link.value}
          </span>
        ))}
      </nav>
    </aside>
  );
};
