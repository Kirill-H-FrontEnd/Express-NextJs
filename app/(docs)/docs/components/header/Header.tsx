"use client";
// > React
import { FC } from "react";
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
import { SquareArrowOutUpRight, Squirrel } from "lucide-react";
// > Hooks
import { UserButton } from "@/components/auth/user-button";
import { useSession, signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/actions/logout";
import { LogoutButton } from "@/components/auth/logout-button";

export const Header: FC = ({}) => {
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
  const onClick = () => {
    logout();
  };
  return (
    <header
      id="headerNav"
      className="sticky top-0 left-0 border-b-1 border-gray-200 dark:border-gray-900 bg-white/50 dark:bg-black/50 py-[14px] px-5 z-[50] w-full backdrop-blur-md shadow-sm shadow-gray-100 dark:shadow-md rounded-b-2xl"
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
          <nav className="grid grid-cols-3-auto gap-5 items-center">
            <ul className="grid grid-cols-4-auto gap-7 text-sm mr-4">
              {DATA_lINKS.map((link, i) => (
                <Link
                  style={inter.style}
                  className="text-gray-700 dark:text-gray-400 hover:dark:text-purple-700 hover:text-purple-700 transition-colors relative text-sm font-medium dark:font-normal"
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
            <UserButton />
          </nav>
        </section>
      </div>
    </header>
  );
};