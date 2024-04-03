// > React
import { FC } from "react";
// > Auth
import { auth, signOut } from "@/auth";
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
import { IoSearchOutline } from "react-icons/io5";
import { IoLogoElectron } from "react-icons/io5";

import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { VscGithub } from "react-icons/vsc";

export const Header: FC = async ({}) => {
  const session = await auth();
  const DATA_ACCOUNT_lINKS = [
    { value: "API", href: "" },
    { value: "Documentation", href: "" },
    { value: "Support", href: "" },
    { value: "Logout", href: "" },
  ];
  return (
    <header
      id="header"
      className="relative border-b-1 border-slate-300 dark:border-slate-700 bg-[#F6F7F9] dark:bg-[#121222] py-3 px-5 z-[1000] w-full"
    >
      <section className="grid grid-cols-2-auto gap-5 justify-between items-center relative z-10">
        <Link
          href={"/dashboard"}
          className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity w-max"
        >
          <IoLogoElectron
            size={32}
            className="animate-spin-slow text-black dark:text-white"
          />
          <p
            className={` font-bold text-xl text-inherit text-black dark:text-white  `}
          >
            Protocol
          </p>
        </Link>

        <nav className="grid grid-cols-3-auto gap-5 items-center">
          <div className="relative">
            <Input
              style={{ fontSize: "16px" }}
              size={50}
              className="bg-white dark:bg-transparent rounded-md w-[500px] placeholder:text-gray placeholder:dark:text-white font-medium pl-9 transition-shadow"
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
            <Tooltip
              closeDelay={200}
              offset={10}
              size="sm"
              content="GitHub"
              placement="bottom-start"
              classNames={{ content: "font-semibold text-[12px]" }}
            >
              <Link href={"/"}>
                <VscGithub className="text-black dark:text-white" size={22} />
              </Link>
            </Tooltip>

            <SwitchThemeButton />

            <span className="absolute top-1/2 right-[-9px] translate-x-1/2 -translate-y-1/2 w-[1px] h-[70%] bg-slate-500 rounded-full pointer-events-none "></span>
          </div>
          <Popover size="lg" backdrop="blur" placement="bottom">
            <PopoverTrigger>
              <Avatar
                radius="full"
                showFallback
                classNames={{
                  icon: ["dark:text-white", "text-black", "p-[3px]"],
                  base: ["border-2", "dark:border-white", "border-black"],
                }}
                className=" cursor-pointer bg-transparent h-[30px] w-[30px]"
                src={`${session?.user.image}`}
              />
            </PopoverTrigger>
            <PopoverContent className="bg-[url('/home/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden shadow-sm shadow-slate-300/20 p-4">
              <div className="">
                <div className="grid grid-cols-2-auto justify-start gap-2 items-center mb-3 border-b-1 border-slate-800 pb-3">
                  <Avatar
                    size="md"
                    className="p-[2px] rounded-full cursor-pointer"
                    src={`${session?.user.image}`}
                  />
                  <div>
                    <h5
                      style={GeistSans.style}
                      className="text-lg font-semibold text-white"
                    >{`Hi! ${session?.user.name} `}</h5>
                    <h4 className="text-slate-300 text-sm">
                      {session?.user.email}
                    </h4>
                  </div>
                </div>
                <nav className="grid gap-2 text-slate-300">
                  {DATA_ACCOUNT_lINKS.map((link, i) => (
                    <Link
                      className="hover:text-purple-500 hover:pl-1 transition-all w-max"
                      key={i}
                      href={link.href}
                    >
                      {link.value}
                    </Link>
                  ))}
                </nav>
                <form
                  action={async () => {
                    "use server";

                    await signOut();
                  }}
                >
                  <button>out</button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
      </section>
    </header>
  );
};
