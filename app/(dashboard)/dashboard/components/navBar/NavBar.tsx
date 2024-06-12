"use client";
import { FC } from "react";
import s from "./styles/NavBar.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > NextUi
import { Accordion, AccordionItem } from "@nextui-org/react";

export const NavBar: FC = ({}) => {
  const pathName = usePathname();
  const DATA_LINKS_NAVBAR = [
    {
      title: " Getting Started",
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
      className={`${s.navbar} bg-gradient-to-bl from-[#F6F7F9] dark:from-black/30 dark:to-[#36266C]/30 to-[#F6F7F9] border-r-1 border-slate-300 dark:border-slate-700 z-[1000] w-[260px] transition-[width] overflow-hidden mt-[55px]`}
    >
      <section className="relative z-10 h-full overflow-y-scroll pt-5 pb-10 px-[13px]">
        <ul className={``}>
          <Accordion
            className="grid gap-2 px-0"
            selectionMode="multiple"
            defaultExpandedKeys={["0", "1"]}
          >
            {DATA_LINKS_NAVBAR.map((item, i) => (
              <AccordionItem
                classNames={{
                  base: " px-1",
                  trigger: ["py-3"],
                  title: [
                    "dark:text-white",
                    "text-black",
                    "font-semibold",
                    "text-sm",
                    `${GeistSans.className}`,
                  ],
                  content: [
                    "font-normal",
                    "text-black dark:text-slate-300",
                    "grid gap-2",
                    "border-l-1 dark:border-slate-800 border-slate-300",
                    "ml-2 ",
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
