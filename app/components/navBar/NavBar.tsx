"use client";
import { FC, useState } from "react";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
import s from "./styles/NavBar.module.scss";
// > NextUi
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
type TNavBar = {};

export const NavBar: FC = ({}) => {
  const pathName = usePathname().replace("/", "");
  let hideNavigation =
    pathName === "auth/login" ||
    pathName === "auth/register" ||
    pathName === "dashboard";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
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

  return (
    <>
      {!hideNavigation && (
        <Navbar
          maxWidth="full"
          className="fixed shadow-lg backdrop-blur-sm bg-transparent sm:py-1"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarBrand className="">
              <Link
                href={"/"}
                className="grid grid-cols-2-auto items-center gap-1"
              >
                <IoLogoElectron
                  color="#fff"
                  size={40}
                  className="animate-spin-slow "
                />
                <p className=" font-medium text-2xl sm:text-2xl text-inherit text-white">
                  Protocol
                </p>
              </Link>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent
            className="hidden sm:flex gap-4 text-white"
            justify="center"
          >
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end" className="text-white">
            <NavbarItem className="hidden lg:flex">
              <Link className="hover:text-slate-300" href="/auth/login">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                radius="full"
                className="text-black bg-white font-medium"
                href="/auth/register"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          </NavbarContent>
          <NavbarMenu className="bg-black/20">
            {menuItems.map((item, index) => (
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
};
