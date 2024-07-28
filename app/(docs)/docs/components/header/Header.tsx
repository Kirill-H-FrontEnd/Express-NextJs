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
import { NavbarMenuItem, ScrollShadow } from "@nextui-org/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
// > Icons
import { IoLogoGithub } from "react-icons/io";
import { SquareArrowOutUpRight, Squirrel } from "lucide-react";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  TextAlignLeftIcon,
} from "@radix-ui/react-icons";
// > Hooks
import { UserButton } from "@/components/auth/user-button";
import { Navbar, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import s from "./styles/Header.module.scss";

import { CardSearch } from "../ui/searchBar/card-search";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import ShineBorder from "@/components/magicui/shine-border";

export const Header: FC = ({}) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
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
  const DATA_TOGGLE_MENU_LINKS = [
    {
      title: "What will I Learn",
      href: "",
    },
    {
      title: "Deploy",
      href: "",
    },
    {
      title: "Showcase",
      href: "",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Blog",
      href: "",
    },
    {
      title: "Express.ts Commerce",
      href: "",
    },
    {
      title: "Templates",
      href: "",
    },
    {
      title: "Enterprise",
      href: "",
    },
    {
      title: "GitHub",
      href: "",
    },
  ];
  const DATA_MENU_LINKS = [
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
  return (
    <>
      <Navbar
        disableAnimation
        maxWidth="full"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className={`${s.Navbar} sticky top-0 left-0 z-[50] bg-white/40 dark:bg-black/40 border-b-1 backdrop-blur-md border-gray-200 dark:border-gray-900  `}
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
                  <span className=" font-medium text-2xl text-black dark:text-white">
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
            <nav className="hidden md:grid grid-cols-3-auto gap-5 items-center">
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
            <div className="grid grid-cols-2-auto justify-end gap-5 md:hidden">
              <Dialog open={openSearch} onOpenChange={setOpenSearch}>
                <DialogTrigger asChild>
                  <MagnifyingGlassIcon
                    width={20}
                    height={20}
                    className=" text-black dark:text-white active:scale-[.8] transition-transform"
                  />
                </DialogTrigger>
                <CardSearch />
              </Dialog>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={` ${s.navBarMenuToggle}  text-black dark:text-white [&[data-pressed]]:-scale-[.9] `}
              />
            </div>
          </section>
        </div>
        {/* ToggleMenu */}
        <NavbarMenu
          className={` bg-white dark:bg-black/60 backdrop:blur-md pt-6 z-[35] border-t-1 border-gray-200 dark:border-gray-900`}
        >
          <div className="grid gap-5 pb-2">
            {DATA_TOGGLE_MENU_LINKS.map((item, index) => (
              <NavbarMenuItem
                className=""
                key={`${item}-${index}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  className={`relative  text-lg ${
                    pathName === item.href
                      ? `text-purple-800 `
                      : " text-gray-700 dark:text-gray-700"
                  }`}
                  key={index}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </Navbar>
      <Sheet>
        <div className="w-full border-gray-200 dark:border-gray-900 border-b-1 sticky top-[65px] left-0 z-[35] bg-white/40 dark:bg-black/40 backdrop-blur-md md:hidden">
          <SheetTrigger className=" py-2 text-left pl-5  grid grid-cols-2-auto justify-start items-center gap-1">
            <TextAlignLeftIcon width={20} hanging={20} />
            Menu
          </SheetTrigger>
        </div>

        <SheetContent
          className="w-[300px] bg-white dark:bg-black border-gray-200 dark:border-gray-900"
          side="left"
        >
          <div className="grid gap-2 text-gray text-sm mb-3">
            <Link
              href={"/docs"}
              style={inter.style}
              className={`tracking-wide font-medium dark:font-normal ${
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
                    : "before:bg-transparent text-gray-600  hover:text-gray-300  hover:before:bg-purple-500"
                }`}
                key={i}
                href={link.href}
              >
                {link.value}
              </Link>
            ))}
          </div>
          {DATA_MENU_LINKS.map((data, i) => (
            <Accordion className="mb-2" key={i} type="single" collapsible>
              <Link
                style={inter.style}
                className={`tracking-wide text-sm font-medium dark:font-normal`}
                href={data.href}
              >
                {data.title}
              </Link>
              {data.accordionItem.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <Link href={item.href} className={`text-left`}>
                    <AccordionTrigger
                      className={`text-sm text-slate-600 relative data-[state=open]:text-purple-500 data-[state=open]:pl-1 ${
                        pathName === item.href
                          ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 hover:pl-0 font-medium`
                          : "before:bg-transparent text-gray-600  hover:text-gray-300  hover:before:bg-purple-500 hover:pl-1"
                      }`}
                    >
                      {item.title}
                      {item.links && (
                        <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted-foreground text-gray-300 dark:text-gray-800 transition-transform duration-200 absolute top-[10px] right-0 " />
                      )}
                    </AccordionTrigger>
                  </Link>
                  <AccordionContent className="grid gap-3 border-l border-slate-200 dark:border-slate-800 ml-2  mr-2">
                    {item.links?.map((link, i) => (
                      <Link
                        className={`pl-4  relative text-sm  transition-all before:block before:absolute before:w-[1px] before:h-full before:top-1/2 before:left-[-1px] before:-translate-y-1/2 before:transition-background   cursor-pointer first-of-type:mt-2 last-of-type:mb-2 ${
                          pathName === link.href
                            ? `text-purple-500 before:bg-purple-500 hover:text-purple-500 hover:pl-3 font-medium`
                            : "before:bg-transparent text-gray-600  hover:text-gray-300  hover:before:bg-purple-500 hover:pl-5"
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
          <ShineBorder
            className="relative flex overflow-hidden bg-background md:shadow-xl p-0 "
            color={"#3B0764"}
            borderRadius={8}
            borderWidth={2}
          >
            <Button className="text-[10px] tracking-tighter bg-transparent text-black dark:text-white font-semibold  border-1">
              Get Security Updates for Express.ts 10.1.0
            </Button>
          </ShineBorder>
        </SheetContent>
      </Sheet>
    </>
  );
};
