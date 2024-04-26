"use client";
import { FC, useRef, useEffect, useContext, useState } from "react";
import s from "./styles/NavBar.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > NextUi
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Player } from "@lordicon/react";
// > Data icons
import { ICON1, ICON2, ICON3, ICON4, ICON5 } from "./dataIcons";
import { IoLogoElectron } from "react-icons/io5";
// > Providers
import { useThemeProvider } from "@/app/providers/ThemeProvider";

export const NavBar: FC = ({}) => {
  const pathName = usePathname();
  const iconRefs = Array.from({ length: 5 }, () => useRef<Player>(null));
  const { isSwitch } = useContext(useThemeProvider);
  const DATA_LINKS_NAVBAR = [
    {
      title: " Getting Started",
      icon: (
        <Player
          ref={iconRefs[0]}
          icon={ICON1}
          colorize={`${isSwitch ? "#fff" : "#0D0F14"}`}
          size={22}
        />
      ),
      links: [
        {
          value: "Installation",
          href: "/dashboard",
        },
        {
          value: "  Project Structure",
          href: "/dashboard/project-structure",
        },
      ],
    },
    {
      title: " Building Your Application",
      icon: (
        <Player
          ref={iconRefs[1]}
          icon={ICON2}
          colorize={`${isSwitch ? "#fff" : "#0D0F14"}`}
          size={22}
        />
      ),
      links: [
        {
          value: "Routing",
          href: "/dashboard/routing",
        },
        {
          value: "Data Fetching",
          href: "/",
        },
        {
          value: "Rendering",
          href: "/",
        },
        {
          value: "Caching",
          href: "/",
        },
        {
          value: "Styling",
          href: "/",
        },
        {
          value: "Optimizing",
          href: "/",
        },
        {
          value: "Configuring",
          href: "/",
        },
        {
          value: "Testing",
          href: "/",
        },
        {
          value: "Authentication",
          href: "/",
        },
        {
          value: "Deploying",
          href: "/",
        },
        {
          value: "Upgrading",
          href: "/",
        },
      ],
    },
    {
      title: "API Reference",
      icon: (
        <Player
          ref={iconRefs[2]}
          icon={ICON3}
          colorize={`${isSwitch ? "#fff" : "#0D0F14"}`}
          size={22}
        />
      ),
      links: [
        {
          value: "Components",
          href: "/",
        },
        {
          value: "File Conventions",
          href: "/",
        },
        {
          value: "Functions",
          href: "/",
        },
        {
          value: "protocol.config.js Options",
          href: "/",
        },
        {
          value: "create-protocol-app",
          href: "/",
        },
        {
          value: "Edge Runtime",
          href: "/",
        },
        {
          value: "Protocol.js CLI",
          href: "/",
        },
      ],
    },
    {
      title: "Architecture",
      icon: (
        <Player
          ref={iconRefs[3]}
          icon={ICON4}
          colorize={`${isSwitch ? "#fff" : "#0D0F14"}`}
          size={22}
        />
      ),
      links: [
        {
          value: "Accessibility",
          href: "/",
        },
        {
          value: "Fast Refresh",
          href: "/",
        },
        {
          value: "Protocol.js Compiler",
          href: "/",
        },
        {
          value: "Supported Browsers",
          href: "/",
        },
        {
          value: "Turbopack",
          href: "/",
        },
      ],
    },
    {
      title: "Community",
      icon: (
        <Player
          ref={iconRefs[4]}
          icon={ICON5}
          colorize={`${isSwitch ? "#fff" : "#0D0F14"}`}
          size={22}
        />
      ),
      links: [
        {
          value: "Contribution Guide",
          href: "/",
        },
      ],
    },
  ];
  useEffect(() => {
    iconRefs[0].current?.playFromBeginning();
    iconRefs[1].current?.playFromBeginning();
    iconRefs[2].current?.playFromBeginning();
    iconRefs[3].current?.playFromBeginning();
    iconRefs[4].current?.playFromBeginning();
  }, []);
  return (
    <nav
      id="navbar"
      className={`${s.navbar} bg-gradient-to-bl from-[#F6F7F9] dark:from-black/30 dark:to-[#36266C]/30 to-[#F6F7F9] border-r-1 border-slate-300 dark:border-slate-700 z-[1000] w-[280px] transition-[width] overflow-hidden`}
    >
      <section className="relative z-10 h-full overflow-y-scroll pt-5 pb-10 px-[13px]">
        <Link
          href={"/dashboard"}
          className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity w-max mb-10"
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
        <ul className={``}>
          <Accordion
            className="grid gap-2 px-0"
            selectionMode="multiple"
            defaultExpandedKeys={["0", "1"]}
          >
            {DATA_LINKS_NAVBAR.map((item, i) => (
              <AccordionItem
                onClick={() => {
                  iconRefs[i].current?.playFromBeginning();
                }}
                startContent={item.icon}
                classNames={{
                  base: " px-1",
                  trigger: ["px-2 py-3 "],
                  title: [
                    "dark:text-white",
                    "text-black",
                    "font-normal",
                    "text-sm",
                    `${GeistSans.className}`,
                  ],
                  content: [
                    "font-normal",
                    "text-black dark:text-slate-300",
                    "grid gap-2",
                    "border-l-1 dark:border-slate-800 border-slate-300",
                    "ml-4 mb-3",
                    "py-0",
                  ],
                }}
                isCompact
                key={i}
                title={item.title}
              >
                {item.links.map((item, i) => (
                  <Link
                    className={` pl-2 relative text-sm  transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background hover:pl-3 w-max ${
                      pathName === item.href
                        ? `text-purple-500  before:bg-purple-500 hover:text-purple-500 pl-3`
                        : "before:bg-transparent text-slate-400  hover:dark:text-slate-300 hover:text-slate-500 hover:before:bg-purple-500"
                    }`}
                    key={i}
                    href={item.href}
                  >
                    {item.value}
                  </Link>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </ul>
      </section>
    </nav>
  );
};
