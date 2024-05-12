// > React
import { FC } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Components
import { Input } from "@/components/ui/input";
// > Icons
import { IoSearchOutline } from "react-icons/io5";
import { Moon } from "lucide-react";
import { VscGithub } from "react-icons/vsc";
import { CircleUserRound } from "lucide-react";

export const Header: FC = ({}) => {
  return (
    <header
      id="headerDash"
      className="relative border-y-1 border-r-1 border-slate-700 bg-gradient-to-br from-black/30 to-[#36266C]/30 py-3 px-5 z-[10] w-full"
    >
      <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
        <div className="relative">
          <Input
            style={{ fontSize: "16px" }}
            size={50}
            className="bg-white dark:bg-transparent rounded-full w-[400px] placeholder:text-gray placeholder:dark:text-white font-medium pl-9 transition-shadow text-black dark:text-white"
            placeholder="Find something..."
          />
          <IoSearchOutline
            className="absolute text-[#4B5563] dark:text-white top-1/2 left-[10px] -translate-y-1/2"
            size={16}
          />
          <div
            style={GeistSans.style}
            className="absolute top-1/2 right-[7px] -translate-y-1/2 bg-white dark:bg-transparent px-2 py-1 rounded-full text-[11px] font-semibold text-black dark:text-white border-1 dark:border-slate-800 border-slate-300  pointer-events-none"
          >
            CtrlK
          </div>
        </div>
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
