"use client";
// > React
import { FC } from "react";
import { useSession, signOut } from "next-auth/react";
// > NextUi
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Tooltip,
} from "@nextui-org/react";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > Components
import { Input } from "@/components/ui/input";
// > Icons
import { IoLogoElectron, IoSearchOutline } from "react-icons/io5";
import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { IoLogoGithub } from "react-icons/io";

export const Header: FC = ({}) => {
  const session = useSession();

  const onClick = () => {
    signOut();
  };
  const DATA_lINKS = [
    { value: "API", href: "" },
    { value: "Blog", href: "" },
    { value: "Support", href: "" },
  ];
  return (
    <header
      id="headerNav"
      className="absolute h-[55px] top-0 left-0  border-b-1 border-slate-300 dark:border-slate-700 bg-gradient-to-br from-[#F6F7F9] to-[#F6F7F9]  dark:from-black/30 dark:to-[#36266C]/30 py-3 px-5 z-[1000] w-full "
    >
      <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
        <Link
          href={"/"}
          className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity select-none"
        >
          <IoLogoElectron
            size={32}
            className="animate-spin-slow text-black dark:text-white"
          />
          <span className="text-xl">Protocol</span>
        </Link>
        <nav className="grid grid-cols-3-auto gap-5 items-center">
          <ul className="grid grid-cols-3-auto gap-5 text-sm ">
            {DATA_lINKS.map((link, i) => (
              <Link
                className="text-black dark:text-white hover:dark:text-purple-500 hover:text-purple-500 transition-colors"
                key={i}
                href={link.href}
              >
                {link.value}
              </Link>
            ))}
          </ul>
          <div className="grid grid-cols-2-auto gap-3 place-items-center relative">
            <Link href={"/"}>
              <IoLogoGithub className="text-black dark:text-white" size={22} />
            </Link>
            <SwitchThemeButton />
            <span className="absolute top-1/2 right-[-9px] translate-x-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-slate-300 dark:bg-slate-700 rounded-full pointer-events-none "></span>
          </div>
          <Popover size="lg" backdrop="blur" placement="bottom">
            <PopoverTrigger>
              <Avatar
                radius="full"
                showFallback
                classNames={{
                  icon: [
                    "dark:text-white",
                    "text-black",
                    "p-[3px]",
                    "dark:bg-white/10 bg-black/10",
                  ],
                }}
                className=" cursor-pointer bg-transparent h-[30px] w-[30px] "
                src={`${""}`}
              />
            </PopoverTrigger>
            <PopoverContent className=" bg-white dark:bg-[url('/dashboard/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden shadow-sm shadow-slate-300/20 p-4">
              <div className="">
                <div className="grid grid-cols-2-auto justify-start gap-2 items-center mb-3 border-b-1 border-slate-800 pb-3">
                  <Avatar
                    radius="full"
                    size="sm"
                    className="cursor-pointer"
                    src={`${""}`}
                  />
                  <div>
                    <h5
                      style={GeistSans.style}
                      className="text-lg font-semibold text-black dark:text-white"
                    >{`Hi! ${""} `}</h5>
                    <h4 className="text-black dark:text-slate-300 text-sm">
                      {""}
                    </h4>
                  </div>
                </div>
                <nav className="grid gap-2 text-slate-300">
                  {DATA_lINKS.map((link, i) => (
                    <Link
                      className="hover:text-purple-500 hover:pl-1 transition-all w-max"
                      key={i}
                      href={link.href}
                    >
                      {link.value}
                    </Link>
                  ))}
                </nav>
                <button onClick={onClick}>out</button>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
      </section>
    </header>
  );
};
