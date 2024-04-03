"use client";
import { FC } from "react";
import s from "./styles/Footer.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
// > Font
import { GeistSans } from "geist/font/sans";
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/react";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const pathName = usePathname();
  let hideFooter = pathName === "/";
  const DATA_LINKS = [
    {
      title: "Resources",
      links: [
        {
          value: "Docs",
          href: "",
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
      {hideFooter && (
        <footer className={`${s.footer} bg-black border-t-1 border-gray/20`}>
          <div className="container">
            <section className={`${s.wrapper} py-14 border-b-1 border-gray/20`}>
              <Link
                href={"/"}
                className={`${s.logo} grid grid-cols-2-auto items-center gap-1 justify-start hover:opacity-80 transition-opacity h-0`}
              >
                <IoLogoElectron
                  color="#fff"
                  size={35}
                  className="animate-spin-slow "
                />
                <p className=" font-semibold text-xl sm:text-xl text-inherit text-white">
                  Protocol
                </p>
              </Link>
              <nav className={`${s.nav} `}>
                {DATA_LINKS.map((item, i) => (
                  <li key={i}>
                    <h5 style={GeistSans.style} className="text-white mb-4">
                      {item.title}
                    </h5>
                    <div className="">
                      {item.links.map((link, i) => (
                        <Link
                          key={i}
                          className={`text-gray text-sm hover:text-purple-500 ${
                            pathName === link.href
                              ? `${s.active} text-purple-500`
                              : ""
                          }`}
                          href={link.href}
                        >
                          {link.value}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </nav>
              <div className="">
                <h5 style={GeistSans.style} className="text-white mb-4">
                  Subscribe to our newsletter
                </h5>
                <p className="text-gray mb-4 text-sm">
                  Stay updated on new releases and features, guides, and case
                  studies.
                </p>
                <div className={`${s.actions} relative`}>
                  <Input
                    placeholder="example@gmail.com "
                    className="bg-white border-none text-base"
                  />
                  <Button
                    size="sm"
                    className={`absolute text-white top-0 h-full right-[-1px] text-xs bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black font-medium`}
                  >
                    Subscribe!
                  </Button>
                </div>
              </div>
            </section>
          </div>
          <section className="">
            <div className="text-gray text-sm py-3 text-center">
              Copyright © {getFullYear} Protocol.This is just a documentation
              template for the framework.
            </div>
          </section>
        </footer>
      )}
    </>
  );
};
