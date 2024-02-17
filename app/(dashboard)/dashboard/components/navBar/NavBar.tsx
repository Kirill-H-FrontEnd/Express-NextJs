"use client";
import { FC, useState } from "react";
import s from "./styles/NavBar.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
// > Font
import { GeistSans } from "geist/font/sans";
// > NextUi
import { Accordion, AccordionItem } from "@nextui-org/react";
type TNavBar = {};

export const NavBar: FC = ({}) => {
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["0"]));
  const pathName = usePathname();
  const DATA_LINKS_NAVBAR = [
    {
      title: " Getting Started",
      links: [
        {
          value: "Installation",
          href: "/",
        },
        {
          value: "  Project Structure",
          href: "/",
        },
      ],
    },
    {
      title: " Building Your Application",
      links: [
        {
          value: "Routing",
          href: "/",
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
      links: [
        {
          value: "Contribution Guide",
          href: "/",
        },
      ],
    },
  ];
  return (
    <nav
      id="navbar"
      className={`${s.navbar} border-r-1 border-slate-700 bg-black py-3 pl-5 overflow-y-scroll`}
    >
      <Link
        href={"/"}
        className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity mb-10"
      >
        <IoLogoElectron color="#fff" size={28} className="animate-spin-slow " />
        <p className={` font-semibold text-lg text-inherit text-white`}>
          Protocol
        </p>
      </Link>
      <ul className={`${s.navigation}`}>
        <Accordion selectionMode="multiple" defaultExpandedKeys={"all"}>
          {DATA_LINKS_NAVBAR.map((item, i) => (
            <AccordionItem
              classNames={{
                trigger: ["py-2"],
                title: [
                  "text-white",
                  "font-normal",
                  "text-sm",
                  `${GeistSans.className}`,
                ],
                content: [
                  "font-normal",
                  "text-slate-300",
                  "grid",
                  "gap-2",
                  "border-l-1",
                  "border-slate-800",
                  "ml-2",
                  "py-0",
                ],
              }}
              isCompact
              key={i}
              title={item.title}
            >
              {item.links.map((item, i) => (
                <Link
                  className={`pl-2 relative text-sm  transition-colors before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:rounded-full before:-translate-y-1/2 before:transition-background ${
                    pathName === item.href
                      ? `text-purple-500  before:bg-purple-500 hover:text-purple-500`
                      : "before:bg-slate-800 text-slate-300 hover:text-slate-400 hover:before:bg-purple-500"
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
    </nav>
  );
};
