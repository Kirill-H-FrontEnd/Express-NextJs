// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > Components
import { Input } from "@/components/ui/input";
// > Icons
import { IoSearchOutline } from "react-icons/io5";
import { IoLogoElectron } from "react-icons/io5";

import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { VscGithub } from "react-icons/vsc";

export const Header: FC = ({}) => {
  return (
    <header
      id="headerDash"
      className="relative border-1 border-slate-300 dark:border-slate-700 bg-[#F6F7F9] dark:bg-[#121222] py-3 px-5 z-[200] w-full"
    >
      <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
        <Link
          href={"/dashboard"}
          className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity w-max"
        >
          <IoLogoElectron
            size={28}
            className="animate-spin-slow text-black dark:text-white"
          />
          <p
            className={` font-bold text-lg text-inherit text-black dark:text-white  `}
          >
            Protocol
          </p>
        </Link>

        <nav className="grid grid-cols-2-auto gap-5 items-center">
          <div className="relative">
            <Input
              style={{ fontSize: "16px" }}
              size={50}
              className="bg-white dark:bg-transparent rounded-md w-[400px] placeholder:text-gray placeholder:dark:text-white font-medium pl-9 transition-shadow"
              placeholder="Find something..."
            />
            <IoSearchOutline
              className="absolute text-[#4B5563] dark:text-white top-1/2 left-[10px] -translate-y-1/2"
              size={16}
            />
            <div
              style={GeistSans.style}
              className="absolute top-1/2 right-[7px] -translate-y-1/2 bg-white dark:bg-transparent px-2 py-1 rounded-sm text-[11px] font-semibold text-black dark:text-white border-1 dark:border-slate-800 border-slate-300  pointer-events-none"
            >
              CtrlK
            </div>
          </div>
          <div className="grid grid-cols-2-auto gap-3 place-items-center relative">
            <Link href={"/"}>
              <VscGithub className="text-black dark:text-white" size={22} />
            </Link>
            <SwitchThemeButton />
          </div>
        </nav>
      </section>
    </header>
  );
};
