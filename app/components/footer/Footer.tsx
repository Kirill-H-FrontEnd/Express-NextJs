"use client";
// > React
import { FC } from "react";
// > Styles
import s from "./styles/Footer.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
// > Font
import { GeistSans } from "geist/font/sans";
// > Data
import { DATA_FOOTER_LINKS } from "@/data/dataItems";
// > Components
import ShimmerButton from "@/components/magicui/shimmer-button";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const pathName = usePathname();
  let hideFooter = pathName === "/";
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
                {DATA_FOOTER_LINKS.map((item, i) => (
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
                  <ShimmerButton
                    background="#241A3E"
                    className="w-full shadow-2xl text-sm font-medium h-[44px]"
                  >
                    Subscription
                  </ShimmerButton>
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
