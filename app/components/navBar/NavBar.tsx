"use client";
// > React
import { FC, useEffect, useState, forwardRef } from "react";
// > Styles
import s from "./styles/NavBar.module.scss";
// > NextUI
import { Tooltip } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
import { VscGithub } from "react-icons/vsc";
// > Font
import { Ubuntu } from "next/font/google";
const font = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
});
// > NextUi
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavBar: FC = forwardRef(({}, ref: any) => {
  const [isScroll, setScroll] = useState(false);
  const pathName = usePathname();
  let hideNavigation =
    pathName === "/auth/login" ||
    pathName === "/auth/register" ||
    pathName === "/dashboard" ||
    pathName === "/auth/error";
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

  const menuItems = [
    { value: "Features", href: "#" },
    { value: "Customers", href: "#" },
    { value: "Integrations", href: "#" },
  ];
  // Animation
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: () => ({
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <>
      {!hideNavigation && (
        <Navbar
          ref={ref}
          maxWidth="full"
          className={`${s.navBar} fixed shadow-lg  bg-transparent py-1 ${
            isMenuOpen ? "shadow-black/40" : ""
          } ${isScroll ? "backdrop-blur-md" : "backdrop-blur-sm"}`}
          onMenuOpenChange={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        >
          <div className="container">
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={animation}
              viewport={{ once: true }}
              className={`${s.wrapper} grid grid-cols-2 justify-between`}
            >
              <Link
                href={"/"}
                className="grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity"
              >
                <IoLogoElectron
                  color="#fff"
                  size={40}
                  className="animate-spin-slow "
                />
                <p
                  style={font.style}
                  className=" font-normal text-xl sm:text-2xl text-inherit text-white"
                >
                  Protocol
                </p>
              </Link>
              <nav
                className={`${s.nav} grid md:grid-cols-2-auto items-center gap-14 justify-end`}
              >
                <ul className="hidden md:grid grid-cols-3-auto items-center gap-6">
                  {menuItems.map((item, i) => (
                    <Link
                      className={`text-white hover:text-purple-600 transition-colors ${
                        pathName === item.href
                          ? `${s.active} text-purple-600`
                          : ""
                      }`}
                      key={i}
                      color="foreground"
                      href={item.href}
                    >
                      {item.value}
                    </Link>
                  ))}
                </ul>
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
                      content="GitHub"
                      placement="right-start"
                      classNames={{ content: "font-semibold" }}
                    >
                      <Link href={"/"} className="ml-[16px]">
                        <VscGithub
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          size={22}
                        />
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </nav>
            </motion.section>
          </div>
          {/* ToggleMenu */}
          <NavbarMenu className="bg-transparent pt-6">
            <Accordion showDivider={false} className="px-0 border-none">
              {DATA_TOGGLE_MENU_LINKS.map((item, index) => (
                <AccordionItem
                  isCompact
                  classNames={{
                    trigger: ["py-2"],
                    title: ["text-white", "font-extralight"],
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
