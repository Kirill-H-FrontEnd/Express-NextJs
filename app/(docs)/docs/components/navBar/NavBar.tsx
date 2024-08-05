"use client";
import { FC } from "react";
import s from "./styles/NavBar.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
// > Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
// > Icons
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { SearchBar } from "../ui/searchBar/search-bar";

export const NavBar: FC = ({}) => {
  const pathName = usePathname();

  const DATA_INTRODUCTION_LINKS = [
    {
      value: "Installation",
      href: "/docs/getting-started/installation",
    },
    {
      value: "Project Structure",
      href: "/docs/getting-started/project-structure",
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
      id="navbar"
      className={`${s.navbar} sticky top-[121px] hidden h-[calc(100vh-110px)]  md:flex md:shrink-0 md:flex-col overflow-y-scroll z-[45] `}
    >
      <SearchBar />
      <ScrollShadow
        hideScrollBar
        style={{ scrollbarWidth: "initial" }}
        size={20}
      >
        <section className="relative z-10 h-full ">
          <ul className={`grid gap-5`}>
            <div className="grid gap-2 text-gray text-sm">
              <Link
                href={"/docs"}
                style={inter.style}
                className={`tracking-wide font-medium dark:font-normal ${
                  pathName !== "/docs"
                    ? "text-black dark:text-white"
                    : "text-bluePrimary"
                }`}
              >
                Getting Started
              </Link>
              {DATA_INTRODUCTION_LINKS.map((link, i) => (
                <Link
                  className={` relative text-sm  transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background hover:pl-1 w-max ${
                    pathName === link.href
                      ? `text-bluePrimary before:bg-bluePr  hover:text-bluePrimary hover:pl-0 font-medium`
                      : "before:bg-transparent text-gray-600  hover:text-bluePrimary  hover:before:bg-bluePrimary "
                  }`}
                  key={i}
                  href={link.href}
                >
                  {link.value}
                </Link>
              ))}
            </div>
            {DATA_LINKS.map((data, i) => (
              <Accordion key={i} type="single" collapsible>
                <Link
                  style={inter.style}
                  className={`tracking-wide text-sm font-medium dark:font-normal text-black dark:text-white`}
                  href={data.href}
                >
                  {data.title}
                </Link>
                {data.accordionItem.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <Link href={item.href} className={`text-left`}>
                      <AccordionTrigger
                        className={`text-sm text-slate-600 relative data-[state=open]:text-bluePrimary data-[state=open]:pl-1 ${
                          pathName === item.href
                            ? `text-bluePrimary before:bg-bluePrimary md:hover:text-bluePrimary md:hover:pl-0 font-medium`
                            : "before:bg-transparent text-gray-600  md:hover:text-bluePrimary  md:hover:before:bg-bluePr  md:hover:pl-1"
                        }`}
                      >
                        {item.title}
                        {item.links && (
                          <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted-foreground text-gray-300 dark:text-gray-800 transition-transform duration-200 absolute top-[10px] right-0 " />
                        )}
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="grid gap-3 border-l border-borderLight dark:border-borderDark ml-2  mr-2">
                      {item.links?.map((link, i) => (
                        <Link
                          className={`pl-4 relative text-sm transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background cursor-pointer first-of-type:mt-2 last-of-type:mb-2 ${
                            pathName === link.href
                              ? `text-bluePrimary before:bg-bluePrimary  md:hover:text-bluePrimary md:hover:pl-3 font-medium`
                              : "before:bg-transparent text-gray-600  md:hover:text-bluePrimary  md:hover:before:bg-bluePrimary  hover:pl-5"
                          }`}
                          key={i}
                          href={link.href}
                        >
                          {link.value}
                        </Link>
                      ))}
                    </AccordionContent>
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
