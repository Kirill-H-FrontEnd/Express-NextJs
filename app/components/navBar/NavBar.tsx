"use client";
// > React
import { FC, useEffect, useState, forwardRef } from "react";
// > Styles
import s from "./styles/NavBar.module.scss";
// > NextUI
import { Tooltip } from "@nextui-org/react";
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
  const toggleMenuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
                    <Tooltip size="sm" content="GitHub" placement="right-start">
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
            {toggleMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-white text-medium"
                  href="/auth/login"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
});
