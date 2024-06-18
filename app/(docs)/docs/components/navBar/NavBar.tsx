"use client";
import { FC, useEffect, useState } from "react";
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
// > NextUI
import { Button } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
// > Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
// > Icons
import { ChevronRightIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { GridPattern } from "@/components/magicui/bg/grid-pattern";
import { cn } from "@/lib/utils";

export const NavBar: FC = ({}) => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
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
  // Open dialog with keyboard
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "x") {
      setOpen(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <nav
      id="navbar"
      className={`${s.navbar} sticky top-[110px] hidden h-[calc(100vh-121px)] w-[270px] md:flex md:shrink-0 md:flex-col md:justify-between overflow-y-scroll z-[45] `}
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="pr-2 grid grid-cols-2-auto  justify-between items-center bg-white dark:bg-slate-500/10 border-1 border-slate-300 dark:border-slate-800 min-h-[38px]  rounded-md mb-4 ">
            <Search
              width={18}
              height={18}
              className="absolute top-1/2 left-[5px] -translate-y-1/2 text-slate-400"
            />
            <p className="pl-4 text-slate-400 font-medium">Quick search...</p>
            <span
              style={inter.style}
              className="text-[12px] bg-slate-200 dark:bg-slate-700 px-2 py-[2px] rounded-sm text-slate-400 font-medium"
            >
              Ctrl X
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className=" bg-white sm:dark:bg-[url('/StarsAnimationBg.svg')] bg-no-repeat bg-center bg-cover sm:rounded-md overflow-hidden select-none sm:border-1 border-slate-300 sm:dark:border-slate-900 grid place-items-center p-0 ">
          <DialogHeader className="relative w-full border-b-1 bg-white/10 dark:bg-black z-[10]">
            <Search
              width={22}
              height={22}
              className="absolute top-1/2 left-[10px] -translate-y-1/2 text-slate-400"
            />
            <input
              placeholder="Search documentation..."
              type="text"
              className="bg-transparent pl-10 pr-14 py-3 mt-0"
            />
            <DialogClose
              style={inter.style}
              className="absolute top-1/2 right-[10px] -translate-y-1/2  text-[12px] border-1 border-slate-300 dark:border-slate-800 p-[5px] rounded-md font-medium hover:bg-slate-100 text-slate-500 dark:text-slate-500 hover:dark:bg-slate-800/20 m-0"
            >
              Esc
            </DialogClose>
          </DialogHeader>
          <div className="h-[250px] relative w-full grid justify-center items-center">
            <span className="text-slate-700">No recent searches</span>
          </div>
          {/* Bg */}
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray={"8 4"}
            className={cn(
              "[mask-image:radial-gradient(220px_circle_at_center,white,transparent)] hidden dark:block"
            )}
          />
        </DialogContent>
      </Dialog>
      <ScrollShadow
        hideScrollBar
        style={{ scrollbarWidth: "initial" }}
        size={40}
      >
        <section className="relative z-10 h-full ">
          <ul className={`grid gap-3`}>
            <div className="grid gap-2 text-gray text-sm">
              <Link
                href={"/docs"}
                style={inter.style}
                className={`tracking-wide font-medium ${
                  pathName !== "/docs"
                    ? "text-black dark:text-white"
                    : "text-purple-500"
                }`}
              >
                Getting Started
              </Link>
              {DATA_INTRODUCTION_LINKS.map((link, i) => (
                <Link
                  className={` relative text-sm  transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background hover:pl-1 w-max ${
                    pathName === link.href
                      ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 hover:pl-0 font-medium`
                      : "before:bg-transparent text-slate-500  hover:dark:text-slate-300 hover:text-slate-400 hover:before:bg-purple-500"
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
                  className={`tracking-wide text-sm font-medium`}
                  href={data.href}
                >
                  {data.title}
                </Link>
                {data.accordionItem.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <Link href={item.href} className={`text-left`}>
                      <AccordionTrigger
                        className={`text-sm text-slate-600 relative ${
                          pathName === item.href
                            ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 hover:pl-0 font-medium`
                            : "before:bg-transparent text-slate-500  hover:dark:text-slate-300 hover:text-slate-800 hover:before:bg-purple-500 hover:pl-1"
                        }`}
                      >
                        {item.title}
                        {item.links && (
                          <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted-foreground text-slate-400 transition-transform duration-200 absolute top-[10px] right-0 " />
                        )}
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="grid gap-3 border-l border-slate-200 dark:border-slate-800 ml-2  mr-2">
                      {item.links?.map((link, i) => (
                        <Link
                          className={`pl-4  relative text-sm  transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background   cursor-pointer first-of-type:mt-2 last-of-type:mb-2 ${
                            pathName === link.href
                              ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 hover:pl-3 font-medium`
                              : "before:bg-transparent text-slate-500  hover:dark:text-slate-300 hover:text-slate-800 hover:before:bg-purple-500 hover:pl-5"
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
