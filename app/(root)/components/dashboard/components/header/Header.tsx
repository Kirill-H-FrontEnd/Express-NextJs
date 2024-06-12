// > React
import { FC } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Components
import { Input } from "@/components/ui/input";
// > Icons
import { IoLogoElectron, IoSearchOutline } from "react-icons/io5";
import { Moon } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

export const Header: FC = ({}) => {
  return (
    <header
      id="headerDash"
      className="relative border-1  border-slate-700 bg-gradient-to-br from-black/30 to-[#36266C]/30 py-3 px-5 z-[10] w-full"
    >
      <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
        <Link
          href={"/"}
          className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity select-none"
        >
          <IoLogoElectron size={32} className="animate-spin-slow text-white " />
          <span className="text-xl text-white">Protocol</span>
        </Link>
        <nav className="grid grid-cols-2-auto gap-5 items-center">
          <div className="grid grid-cols-2-auto gap-3 place-items-center relative">
            <VscGithub className="text-white" size={22} />
            <Moon strokeWidth={1.5} className="text-white" size={24} />
            <span className="absolute top-1/2 right-[-9px] translate-x-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-slate-500 rounded-full pointer-events-none "></span>
          </div>
          <CircleUserRound color="#fff" size={26} strokeWidth={1.5} />
        </nav>
      </section>
    </header>
  );
};
