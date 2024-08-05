"use client";
import { FC } from "react";
// > Styles
import s from "./styles/NavBar.module.scss";
// > Next
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
// > Components
import { Button } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// > Icons
import { ChevronRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const NavBar: FC = ({}) => {
  const DATA_INTRODUCTION_LINKS = [
    {
      value: "Installation",
      href: "/docs/getting-started/installation",
    },
    {
      value: "Project Structure",
      href: "",
    },
  ];
  const DATA_LINKS = [
    {
      title: "Building Your Application",
      href: "",
      accordionItem: [
        {
          title: "Routing",
          href: "",
          links: [
            { value: "Defining Routes", href: "" },
            { value: "Pages and Layouts", href: "" },
            { value: "Linking and Navigating", href: "" },
            { value: "Loading UI and Streaming", href: "" },
            { value: "Error Handling", href: "" },
            { value: "Redirecting", href: "" },
            { value: "Route Groups", href: "" },
            { value: "Project Organization", href: "" },
            { value: "Dynamic Routes", href: "" },
            { value: "Parallel Routes", href: "" },
            { value: "Intercepting Routes", href: "" },
            { value: "Route Handlers", href: "" },
            { value: "Middleware", href: "" },
            { value: "Internationalization", href: "" },
          ],
        },
        {
          title: "Data Fetching",
          href: "",
          links: [
            { value: "Fetching, Caching, and Revalidating", href: "" },
            { value: "Server Actions and Mutations", href: "" },
            { value: "Data Fetching Patterns and Best Practices", href: "" },
          ],
        },
        {
          title: "Rendering",
          href: "",
          links: [
            { value: "Server Components", href: "" },
            { value: "Client Components", href: "" },
            { value: "Composition Patterns", href: "" },
            { value: "Edge and Node.js Runtimes", href: "" },
          ],
        },
        {
          title: "Caching",
          href: "",
        },
        {
          title: "Styling",
          href: "",
          links: [
            { value: "CSS Module", href: "" },
            { value: "Tailwind CSS", href: "" },
            { value: "CSS -in-JS", href: "" },
            { value: "Sass", href: "" },
          ],
        },
        {
          title: "Optimizing",
          href: "",
          links: [
            { value: "Images", href: "" },
            { value: "Videos", href: "" },
            { value: "Fonts", href: "" },
            { value: "Metadata", href: "" },
            { value: "Scripts", href: "" },
            { value: "Bundle Analyzer", href: "" },
            { value: "Lazy Loading", href: "" },
            { value: "Analytics", href: "" },
            { value: "Instrumentation", href: "" },
            { value: "OpenTelemetry", href: "" },
            { value: "Static Assets", href: "" },
            { value: "Third Party Libraries", href: "" },
            { value: "Memory Usage", href: "" },
          ],
        },
        {
          title: "Configuring",
          href: "",
          links: [
            { value: "TypeScript", href: "" },
            { value: "ESLint", href: "" },
            { value: "Environment Variables", href: "" },
            { value: "Absolute Imports and Module Path Aliases", href: "" },
            { value: "MDX", href: "" },
            { value: "src Directory", href: "" },
            { value: "Draft Mode", href: "" },
            { value: "Content Security Policy", href: "" },
          ],
        },
        {
          title: "Testing",
          href: "",
          links: [
            { value: "Vitest", href: "" },
            { value: "Jest", href: "" },
            { value: "Playwright", href: "" },
            { value: "Cypress", href: "" },
          ],
        },
        {
          title: "Authentication",
          href: "",
        },
        {
          title: "Deploying",
          href: "",
          links: [
            { value: "Production Checklist", href: "" },
            { value: "Static Exports", href: "" },
          ],
        },
        {
          title: "Upgrading",
          href: "",
          links: [
            { value: "Codemods", href: "" },
            { value: "App Router Migration", href: "" },
            { value: "Version 14", href: "" },
            { value: "Migration from Vite", href: "" },
            { value: "Migration from Create React App", href: "" },
          ],
        },
      ],
    },
    {
      title: "API Reference",
      href: "",
      accordionItem: [
        {
          title: "Components",
          href: "",
          links: [
            { value: "Font", href: "" },
            { value: "<Image>", href: "" },
            { value: "<Link>", href: "" },
            { value: "<Script>", href: "" },
          ],
        },
        {
          title: "File Conventions",
          href: "",
          links: [
            { value: "default.ts", href: "" },
            { value: "error.ts", href: "" },
            { value: "instrumentation.ts", href: "" },
            { value: "layout.ts", href: "" },
            { value: "loading.ts", href: "" },
            { value: "middleware.ts", href: "" },
            { value: "not-found.ts", href: "" },
            { value: "page.ts", href: "" },
            { value: "route.ts", href: "" },
            { value: "Rout Segment Config", href: "" },
          ],
        },
        {
          title: "Functions",
          href: "",
        },
        {
          title: "protocol.config.ts Options",
          href: "",
        },
        {
          title: "create-protocol-app",
          href: "",
        },
        {
          title: "Edge Runtime",
          href: "",
        },
        {
          title: "Protocol.js CLI",
          href: "",
          links: [
            { value: "Defining Routes", href: "" },
            { value: "Pages and Layouts", href: "" },
            { value: "Linking and Navigating", href: "" },
            { value: "Loading UI and Streaming", href: "" },
            { value: "Error Handling", href: "" },
            { value: "Redirecting", href: "" },
            { value: "Route Groups", href: "" },
            { value: "Project Organization", href: "" },
            { value: "Dynamic Routes", href: "" },
            { value: "Parallel Routes", href: "" },
            { value: "Intercepting Routes", href: "" },
            { value: "Route Handlers", href: "" },
            { value: "Middleware", href: "" },
            { value: "Internationalization", href: "" },
          ],
        },
      ],
    },
    {
      title: "Architecture",
      href: "",
      accordionItem: [
        {
          title: "Accessibility",
          href: "",
        },
        {
          title: "Fast Refresh",
          href: "",
        },
        {
          title: "Protocol.js Compiler",
          href: "",
        },
        {
          title: "Supported Browsers",
          href: "",
        },
        {
          title: "Turbopack",
          href: "",
        },
      ],
    },
    {
      title: "Community",
      href: "",
      accordionItem: [
        {
          title: "Contribution Guide",
          href: "",
        },
      ],
    },
  ];

  return (
    <nav
      className={`${s.navbar} sticky top-[110px] hidden h-[calc(100vh-121px)]  md:flex md:shrink-0 md:flex-col overflow-y-scroll z-[45] `}
    >
      <button className="pr-2 grid grid-cols-2-auto  justify-between items-center bg-gray-900/20 border-1 border-gray-900 min-h-[40px] rounded-md mb-5 shadow-md relative">
        <MagnifyingGlassIcon
          width={20}
          height={20}
          className="absolute top-1/2 left-[5px] -translate-y-1/2 text-gray-400"
        />
        <p className="pl-8 text-gray-400 font-medium text-[14px]">
          Quick search...
        </p>
        <span
          style={inter.style}
          className="text-[12px] bg-gray-900/20 px-2 py-[2px] rounded-sm text-gray-500 border-gray-900 border-1 font-semibold"
        >
          Ctrl X
        </span>
      </button>
      <ScrollShadow
        hideScrollBar
        style={{ scrollbarWidth: "initial" }}
        size={40}
      >
        <section className="relative z-10 h-full ">
          <ul className={`grid gap-5`}>
            <div className="grid gap-2 text-gray text-sm">
              <span
                style={inter.style}
                className={`tracking-wide font-normal text-white`}
              >
                Getting Started
              </span>
              {DATA_INTRODUCTION_LINKS.map((link, i) => (
                <div
                  className={`relative text-sm w-max text-slate-600 first-of-type:text-bluePrimary first-of-type:pl-1 first:hidden`}
                  key={i}
                >
                  {link.value}
                </div>
              ))}
            </div>
            {DATA_LINKS.map((data, i) => (
              <Accordion key={i} type="single" collapsible>
                <span
                  style={inter.style}
                  className={`tracking-wide text-sm font-normal text-white`}
                >
                  {data.title}
                </span>
                {data.accordionItem.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <span className={`text-left`}>
                      <AccordionTrigger
                        className={`text-sm text-slate-600 relative `}
                      >
                        {item.title}
                        {item.links && (
                          <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted-foreground text-gray-800  duration-200 absolute top-[10px] right-0 " />
                        )}
                      </AccordionTrigger>
                    </span>
                  </AccordionItem>
                ))}
              </Accordion>
            ))}
          </ul>
        </section>
      </ScrollShadow>
    </nav>
  );
};
