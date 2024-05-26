"use client";
// > React
import { FC, useState } from "react";
// > Styles

import s from "./styles/Footer.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoClose } from "react-icons/io5";
// > Font
import { GeistSans } from "geist/font/sans";
// > Data
import { DATA_FOOTER_LINKS } from "@/data/dataItems";
// > Components
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
// > Hooks
import useMediaQuery from "@/hooks/useMediaQuery";
import { SubscribeForm } from "./subscribe-form";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const pathName = usePathname();
  let hideFooter = pathName === "/";
  // Subscribe form
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {hideFooter && (
        <footer
          className={`${s.footer} relative bg-black border-t-1 border-gray/20`}
        >
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
                  {isDesktop ? (
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogTrigger asChild>
                        <ShimmerButton
                          shimmerSize="0.08em"
                          background="#241A3E"
                          className="w-full shadow-2xl text-sm font-medium h-[42px]"
                        >
                          Subscription
                        </ShimmerButton>
                      </DialogTrigger>
                      <DialogContent className="w-[450px] bg-black bg-[url('/StarsAnimationBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden select-none border-1 border-slate-800">
                        <DialogHeader>
                          <DialogTitle className="text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-white text-center text-2xl select-text">
                            Subscribe to our newsletter
                          </DialogTitle>
                          <p className="text-gray text-center">
                            Stay updated on new releases and features, guides,
                            and case studies.
                          </p>
                        </DialogHeader>
                        <SubscribeForm />
                        <DialogClose className="absolute top-4 right-4 text-white z-[10]">
                          <IoClose size={16} />
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Drawer open={open} onOpenChange={setOpen}>
                      <DrawerTrigger asChild>
                        <ShimmerButton
                          background="#241A3E"
                          className="w-full shadow-2xl text-sm font-medium h-[44px] text-white"
                        >
                          Subscription
                        </ShimmerButton>
                      </DrawerTrigger>
                      <DrawerContent className="bg-black px-6 pb-6 border-none shadow shadow-slate-300">
                        <DrawerHeader className="text-left">
                          <DrawerTitle className="text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-white text-center text-xl sm:text-2xl select-text">
                            Subscribe to our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-white">
                              newsletter
                            </span>
                          </DrawerTitle>
                          <p className="text-gray text-center text-sm sm:text-base">
                            Stay updated on new releases and features, guides,
                            and case studies.
                          </p>
                        </DrawerHeader>
                        <SubscribeForm className="px-4" />
                      </DrawerContent>
                    </Drawer>
                  )}
                </div>
              </div>
            </section>
            <section className={`${s.copyright} relative`}>
              <div className="text-gray text-sm py-4 text-center">
                Copyright © {getFullYear} Protocol.This is just a documentation
                template for the framework.
              </div>
              <button
                onClick={scrollToTop}
                className="absolute top-1/2 right-0 -translate-y-1/2  border-2 border-gray p-1 rounded-full hidden lg:block"
              >
                <MdKeyboardDoubleArrowUp size={20} color="#4B5563" />
              </button>
            </section>
          </div>
        </footer>
      )}
    </>
  );
};
