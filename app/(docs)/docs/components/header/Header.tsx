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
} from "@nextui-org/react";

// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});
// > Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
// > Icons
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { IoLogoGithub } from "react-icons/io";
import { ArrowUpRight, SquareArrowOutUpRight, Squirrel } from "lucide-react";

export const Header: FC = ({}) => {
  const session = useSession();

  const onClick = () => {
    signOut();
  };
  const DATA_lINKS_USER = [
    { value: "Showcase", href: "" },
    { value: "Blog", href: "" },
    {
      value: "Templates",
      href: "",
    },
    {
      value: "Enterprise",
      href: "",
    },
    {
      value: "Logout",
      href: "",
    },
  ];
  const DATA_lINKS = [
    { value: "Showcase", href: "", icon: "" },
    { value: "Blog", href: "", icon: "" },
    {
      value: "Templates",
      href: "",
      icon: <SquareArrowOutUpRight size={8} />,
    },
    {
      value: "Enterprise",
      href: "",
      icon: <SquareArrowOutUpRight size={8} />,
    },
  ];
  return (
    <header
      id="headerNav"
      className="sticky top-0 left-0 border-b-1 border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-black/50 py-[14px] px-5 z-[50] w-full backdrop-blur-sm"
    >
      <div className="container">
        <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
          <div className="grid grid-cols-2-auto ">
            <Link
              style={inter.style}
              href={"/"}
              className="grid grid-cols-2-auto  gap-1 justify-start hover:opacity-80 transition-opacity select-none font-semibold "
            >
              <Squirrel
                className="absolute top-0 left-0 text-black dark:text-white"
                size={26}
                strokeWidth={2}
              />
              <p
                style={inter.style}
                className="relative text-xl sm:text-2xl text-inherit ml-[30px]"
              >
                <span className=" font-semibold dark:font-medium text-black dark:text-white">
                  Express
                </span>
                <span className="absolute top-[5px] -right-[14px] font-medium text-[12px] dark:text-transparent bg-clip-text bg-gradient-to-b   from-white to-slate-400">
                  .ts
                </span>
              </p>
            </Link>
            <Select defaultValue="v1">
              <SelectTrigger
                className="font-semibold dark:font-medium text-slate-500 dark:text-slate-400 hover:text-purple-800 hover:dark:text-purple-600 transition-colors"
                defaultValue={"1"}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="v1">v12.3.0</SelectItem>
                <SelectItem value="v2">v16.6.3</SelectItem>
                <SelectItem value="v3">v18.0.0</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <nav className="grid grid-cols-3-auto gap-5 items-center">
            <ul className="grid grid-cols-4-auto gap-7 text-sm mr-4">
              {DATA_lINKS.map((link, i) => (
                <Link
                  style={inter.style}
                  className="text-black dark:text-white hover:dark:text-purple-500 hover:text-purple-500 transition-colors relative text-sm font-medium"
                  key={i}
                  href={link.href}
                >
                  {link.value}
                  <i className="absolute top-[1px] -right-[10px]">
                    {link.icon}
                  </i>
                </Link>
              ))}
            </ul>
            <div className="grid grid-cols-2-auto gap-3 place-items-center relative">
              <Link href={"/"}>
                <IoLogoGithub
                  className="text-black dark:text-white"
                  size={22}
                />
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
                  src={session.data.user.image}
                />
              </PopoverTrigger>
              <PopoverContent className=" bg-white dark:bg-slate-700 dark:bg-[url('/dashboard/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden shadow-sm shadow-slate-300/20 p-4">
                <div className="">
                  <div className="grid grid-cols-2-auto justify-start gap-2 items-center mb-3 border-b-1 border-slate-800 pb-3">
                    <div>
                      <h5
                        style={inter.style}
                        className="text-md font-semibold text-black dark:text-white"
                      >{`${session.data.user.name} `}</h5>
                      <h4 className="text-black dark:text-slate-300 text-sm">
                        {""}
                      </h4>
                    </div>
                  </div>
                  <nav className="grid gap-2 text-slate-300">
                    {DATA_lINKS_USER.map((link, i) => (
                      <Link
                        onClick={() => {
                          if (i === 4) {
                            onClick();
                          }
                        }}
                        className="hover:text-purple-500 hover:pl-1 transition-all w-max"
                        key={i}
                        href={link.href}
                      >
                        {link.value}
                      </Link>
                    ))}
                  </nav>
                </div>
              </PopoverContent>
            </Popover>
          </nav>
        </section>
      </div>
    </header>
  );
};
