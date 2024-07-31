"use client";
import { FC, useRef } from "react";
import { TAsideArray } from "@/types";
// > Next
import { useParams, usePathname } from "next/navigation";
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
  const test = useParams();

  return (
    <aside
      className="bg-transparent sticky top-[110px] h-[calc(100vh-121px)] z-[40] order-last hidden shrink-0 lg:block"
      id="aside"
    >
      <h5
        style={GeistSans.style}
        className="text-black dark:text-white font-medium text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        On this page
      </h5>
      <nav className="grid gap-3 text-slate-300  ml-2 ">
        {/* {data?.map((link, i) => (
          <Link
            // onClick={() => scrollToSection(link.href)}
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

        <Link href={"#test1"}>Link</Link>
      </nav>
    </aside>
  );
};
