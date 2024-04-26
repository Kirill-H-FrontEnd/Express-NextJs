"use client";
// > React
import { FC, useEffect, useState, forwardRef } from "react";

// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Styles
import s from "./styles/NavBar.module.scss";
// > NextUI
import { Tooltip } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";

export const NavBar: FC = forwardRef(({}, ref: any) => {
  const [isScroll, setScroll] = useState(false);
  const pathName = usePathname();
  let hideNavigation = pathName === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // SetScroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [isScroll]);
  const DATA_TOGGLE_MENU_LINKS = [
    {
      title: "What will I Learn",
      links: [
        {
          value: "Docs",
          href: "/",
        },
        {
          value: "Learn",
          href: "",
        },
        {
          value: "Showcase",
          href: "",
        },
        {
          value: "Blog",
          href: "",
        },
        {
          value: "Analytics",
          href: "",
        },
        {
          value: "Previews",
          href: "",
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          value: "Login",
          href: "/auth/login",
        },
        {
          value: "Register",
          href: "/auth/register",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          value: "Docs",
          href: "/",
        },
        {
          value: "Learn",
          href: "",
        },
        {
          value: "Showcase",
          href: "",
        },
        {
          value: "Blog",
          href: "",
        },
        {
          value: "Analytics",
          href: "",
        },
        {
          value: "Previews",
          href: "",
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          value: "Commerce",
          href: "",
        },
        {
          value: "Contact Sales",
          href: "",
        },
        {
          value: "GitHub",
          href: "",
        },
        {
          value: "Releases",
          href: "",
        },
        {
          value: "Telemetry",
          href: "",
        },
      ],
    },
    {
      title: "About ",
      links: [
        {
          value: "DevWorkshop + studio",
          href: "",
        },
        {
          value: "Open Source Software",
          href: "",
        },
        {
          value: "GitHub",
          href: "",
        },
        {
          value: "Twitter",
          href: "",
        },
      ],
    },
    {
      title: "Legal ",
      links: [
        {
          value: "Privacy Policy",
          href: "",
        },
        {
          value: "Cookie Preferences",
          href: "",
        },
      ],
    },
  ];
  return (
    <>
      {hideNavigation && (
        <Navbar
          ref={ref}
          maxWidth="full"
          className={`${
            s.navBar
          } z-[2000] fixed shadow-lg  bg-transparent py-1 ${
            isMenuOpen ? "shadow-black/40" : ""
          } ${isScroll ? "backdrop-blur-md" : "backdrop-blur-sm"}`}
          onMenuOpenChange={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        >
          <div className="container">
            <section
              className={`${s.wrapper} grid grid-cols-2-auto justify-between`}
            >
              <Link
                href={"/home"}
                className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity select-none"
              >
                <IoLogoElectron
                  color="#fff"
                  size={38}
                  className="animate-spin-slow "
                />
                <p
                  className={` font-bold text-xl sm:text-2xl text-inherit text-white `}
                >
                  Protocol
                </p>
              </Link>
              <nav className={`${s.nav}`}>
                <div className="grid grid-cols-3-auto gap-4 items-center">
                  <Link
                    className="hidden md:block hover:text-slate-300 text-white"
                    href="/auth/login"
                  >
                    Login
                  </Link>
                  <Button
                    as={Link}
                    radius="full"
                    className="text-black bg-white font-semibold px-6 hover:bg-slate-300"
                    href="/auth/register"
                  >
                    Sign Up
                  </Button>
                  <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden text-white"
                  />
                  <div className="relative hidden md:grid grid-cols-2-auto items-center gap-2 ">
                    <span className="absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 w-[1px] h-[80%] bg-slate-500 rounded-full pointer-events-none"></span>
                    <Tooltip
                      closeDelay={200}
                      offset={10}
                      size="sm"
                      content="Dev.GitHub"
                      placement="bottom"
                      classNames={{ content: "font-semibold" }}
                    >
                      <Link
                        href={"https://github.com/Kirill-H-FrontEnd"}
                        target="_blank"
                        className="ml-[16px]"
                      >
                        <VscGithub
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          size={22}
                        />
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </nav>
            </section>
          </div>
          {/* ToggleMenu */}
          <NavbarMenu className="bg-transparent pt-6 z-[1000]">
            <Accordion showDivider={false} className="px-0 border-none">
              {DATA_TOGGLE_MENU_LINKS.map((item, index) => (
                <AccordionItem
                  isCompact
                  classNames={{
                    trigger: ["py-2"],
                    title: ["text-white", "font-normal", "text-md"],
                    content: ["font-extralight"],
                  }}
                  title={item.title}
                  key={`${item}-${index}`}
                >
                  <NavbarMenuItem
                    className="grid gap-3"
                    key={`${item}-${index}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.links.map((link, i) => (
                      <Link
                        className={`relative text-sm  ml-2 pl-3 before:block before:absolute before:w-1 before:h-1 before:top-2 before:left-0 before:rounded-full ${
                          pathName === link.href
                            ? `text-white  before:bg-violet`
                            : "before:bg-slate-300/50 text-white "
                        }`}
                        key={i}
                        href={link.href}
                      >
                        {link.value}
                      </Link>
                    ))}
                  </NavbarMenuItem>
                </AccordionItem>
              ))}
            </Accordion>
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
});
