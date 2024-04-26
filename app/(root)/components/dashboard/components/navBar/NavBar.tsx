"use client";
import { FC, useEffect, useRef } from "react";
import s from "./styles/NavBar.module.scss";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > NextUi
import { Accordion, AccordionItem } from "@nextui-org/react";

import { IoLogoElectron } from "react-icons/io5";

export const NavBar: FC = ({}) => {
  const DATA_LINKS_NAVBAR = [
    {
      title: " Getting Started",

      links: [
        {
          value: "Installation",
        },
        {
          value: "  Project Structure",
        },
      ],
    },
    {
      title: " Building Your Application",

      links: [
        {
          value: "Routing",
        },
        {
          value: "Data Fetching",
        },
        {
          value: "Rendering",
        },
        {
          value: "Caching",
        },
        {
          value: "Styling",
        },
        {
          value: "Optimizing",
        },
        {
          value: "Configuring",
        },
        {
          value: "Testing",
        },
        {
          value: "Authentication",
        },
        {
          value: "Deploying",
        },
        {
          value: "Upgrading",
        },
      ],
    },
    {
      title: "API Reference",

      links: [
        {
          value: "Components",
        },
        {
          value: "File Conventions",
        },
        {
          value: "Functions",
        },
        {
          value: "protocol.config.js Options",
        },
        {
          value: "create-protocol-app",
        },
        {
          value: "Edge Runtime",
        },
        {
          value: "Protocol.js CLI",
        },
      ],
    },
    {
      title: "Architecture",

      links: [
        {
          value: "Accessibility",
        },
        {
          value: "Fast Refresh",
        },
        {
          value: "Protocol.js Compiler",
        },
        {
          value: "Supported Browsers",
        },
        {
          value: "Turbopack",
        },
      ],
    },
    {
      title: "Community",

      links: [
        {
          value: "Contribution Guide",
        },
      ],
    },
  ];

  return (
    <>
      <nav
        id="navbarDash"
        className={`${s.navbar} bg-gradient-to-bl  from-black/30 to-[#36266C]/30  border-x-1 border-y-1 border-slate-700 z-[100] w-[280px] transition-[width] overflow-hidden`}
      >
        <section className="relative z-10 h-full pt-5 pb-6 px-[13px] md:overflow-y-scroll">
          <Link
            href={""}
            className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity w-max mb-10 pointer-events-none"
          >
            <IoLogoElectron
              size={28}
              className="animate-spin-slow text-white"
            />
            <p className={` font-bold text-lg text-inherit text-white  `}>
              Protocol
            </p>
          </Link>
          <ul className={``}>
            <Accordion
              defaultExpandedKeys={["0", "1"]}
              className="grid gap-2 px-0"
            >
              {DATA_LINKS_NAVBAR.map((item, i) => (
                <AccordionItem
                  classNames={{
                    base: " px-1",
                    trigger: [" py-3 "],
                    title: [
                      "text-white",
                      "font-normal",
                      "text-xs",
                      `${GeistSans.className}`,
                    ],
                    content: [
                      "font-normal",
                      "text-slate-300",
                      "grid gap-2",
                      "border-l-1 border-slate-800",
                      "ml-3 mb-3",
                      "py-0",
                    ],
                  }}
                  isCompact
                  key={i}
                  title={item.title}
                >
                  {item.links.map((item, i) => (
                    <span
                      className={` pl-2 relative text-sm  transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background hover:pl-3 w-max cursor-pointer before:bg-transparent text-slate-400  hover:dark:text-slate-300 hover:text-slate-500 hover:before:bg-purple-500 `}
                      key={i}
                    >
                      {item.value}
                    </span>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </ul>
        </section>
      </nav>
    </>
  );
};
