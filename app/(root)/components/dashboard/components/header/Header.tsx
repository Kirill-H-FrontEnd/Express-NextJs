"use client";
// > React
import { FC, useState } from "react";
// > Next
import Link from "next/link";
// > Font
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
import { IoLogoGithub } from "react-icons/io";
import {
  SquareArrowOutUpRight,
  Squirrel,
  UserCircle,
  UserCircle2Icon,
  UserIcon,
} from "lucide-react";
// > Hooks
import { UserButton } from "@/components/auth/user-button";

import { Navbar, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import s from "./styles/Header.module.scss";
import { MagnifyingGlassIcon, MoonIcon } from "@radix-ui/react-icons";

export const Header: FC = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const session = useSession();
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
    <>
      <Navbar
        maxWidth="full"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className={`${s.Navbar} sticky top-0 left-0 z-[50] bg-black/40 border-b-1 backdrop-blur-sm border-gray-900  `}
      >
        <div className="container">
          <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
            <div className="grid grid-cols-2-auto ">
              <Link
                style={inter.style}
                href={"/"}
                className="grid grid-cols-2-auto  gap-1 justify-start "
              >
                <Squirrel
                  className="absolute top-0 left-0 text-white"
                  size={26}
                  strokeWidth={1.7}
                />
                <p
                  style={inter.style}
                  className="relative text-2xl text-inherit ml-[30px]"
                >
                  <span className=" font-medium  text-white">Express</span>
                  <span className="absolute top-[5px] -right-[14px] font-medium text-[12px] text-transparent bg-clip-text bg-gradient-to-b   from-white to-slate-400">
                    .ts
                  </span>
                </p>
              </Link>
              <Select defaultValue="v1">
                <SelectTrigger
                  className="font-semibold dark:font-medium text-gray-400  hover:text-purple-800 hover:dark:text-purple-600 transition-colors"
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
            <nav className="hidden lg:grid grid-cols-3-auto gap-5 items-center">
              <ul className="grid grid-cols-4-auto gap-7 text-sm mr-4">
                {DATA_lINKS.map((link, i) => (
                  <Link
                    style={inter.style}
                    className="text-gray-400 relative text-sm font-normal"
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
                  <IoLogoGithub className="text-white" size={22} />
                </Link>
                <MoonIcon
                  width={20}
                  height={20}
                  strokeWidth={1.5}
                  className="text-white "
                />
                <span className="absolute top-1/2 right-[-9px] translate-x-1/2 -translate-y-1/2 w-[1px] h-[60%] bg-slate-300 dark:bg-slate-700 rounded-full pointer-events-none "></span>
              </div>
              <UserCircle2Icon strokeWidth={1.5} className="text-white" />
            </nav>
            <div className="grid grid-cols-2-auto justify-end gap-5 lg:hidden">
              <MagnifyingGlassIcon
                width={20}
                height={20}
                className=" text-white "
              />
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={` ${s.navBarMenuToggle} text-white  `}
              />
            </div>
          </section>
        </div>
      </Navbar>
    </>
  );
};
