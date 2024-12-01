"use client";
// > React
import { FC, useState } from "react";
// > Styles
import s from "./styles/Footer.module.scss";
// > Next
import { usePathname } from "next/navigation";
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
// > Data
import { DATA_FOOTER_LINKS } from "@/data/dataItems";
// > Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { SubscribeForm } from "./subscribe-form";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { ButtonTop } from "@/components/ui/button-top";
// > Icons
import { Squirrel } from "lucide-react";
import { Cross2Icon } from "@radix-ui/react-icons";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const pathName = usePathname();
  // Subscribe form
  const [open, setOpen] = useState(false);
  return (
    <>
      <footer
        id="footer"
        className={`${s.footer} relative bg-white dark:bg-black border-t-1 border-borderLight dark:border-borderDark z-[30]`}
      >
        <div className="container">
          <section
            className={`${s.wrapper} py-14 border-b-1 border-borderLight dark:border-borderDark`}
          >
            <div>
              <Link
                href={"/"}
                className={`${s.logo} grid grid-cols-2-auto justify-start hover:opacity-80 transition-opacity select-none relative sm:-top-[8px] `}
              >
                <Squirrel
                  className={`${s.logoIcon} hidden absolute top-0 left-0 `}
                  color="#4B5563"
                  size={40}
                  strokeWidth={1}
                />
                <p
                  style={inter.style}
                  className="relative text-2xl text-inherit  "
                >
                  <span className=" font-medium text-black dark:text-white">
                    Express
                  </span>
                  <span className="absolute top-[5px] -right-[14px] font-medium text-[12px] text-black dark:text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                    .ts
                  </span>
                </p>
              </Link>
            </div>
            <nav className={`${s.nav} `}>
              {DATA_FOOTER_LINKS.map((item, i) => (
                <li key={i}>
                  <h5
                    style={inter.style}
                    className="text-black text-sm dark:text-white mb-4 "
                  >
                    {item.title}
                  </h5>
                  <div className="">
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        className={`text-gray-600 text-sm md:hover:text-bluePrimary ${
                          pathName === link.href
                            ? `${s.active} text-bluePrimary`
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
              <h5
                style={inter.style}
                className="text-black dark:text-white mb-4 font-medium"
              >
                Subscribe to our newsletter
              </h5>
              <p className="text-gray-600 mb-4 text-sm">
                Stay updated on new releases and features, guides, and case
                studies.
              </p>
              <div className={`${s.actions} relative`}>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <ShimmerButton
                      shimmerSize="0.06em"
                      className={`w-full shadow-2xl text-sm font-medium py-[11px]`}
                    >
                      Subscription
                    </ShimmerButton>
                  </DialogTrigger>
                  <DialogContent
                    onOpenAutoFocus={(event) => event.preventDefault()}
                    aria-describedby="Email modal."
                    className=" bg-white dark:bg-black  sm:rounded-md overflow-hidden select-none sm:border-1 sm: border-borderLight sm:dark:border-borderDark grid place-items-center "
                  >
                    <div>
                      <DialogHeader>
                        <DialogTitle
                          style={inter.style}
                          className="text-transparent bg-clip-text bg-gradient-to-b from-[#241A3E] to-[#241A3E] dark:to-white text-center text-2xl select-text font-bold mb-2"
                        >
                          Subscribe to our newsletter
                        </DialogTitle>
                        <p className="text-gray-600 text-center select-text">
                          Stay updated on new releases and features, guides, and
                          case studies.
                        </p>
                      </DialogHeader>
                      <SubscribeForm />
                      <DialogClose className="absolute top-4 right-4 text-black dark:text-white z-[10]">
                        <Cross2Icon width={20} height={20} />
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>
          <section className={`${s.copyright} relative`}>
            <div className="text-gray-700 text-sm py-4 text-center">
              Copyright © {getFullYear} Express.This is just a documentation
              template for the framework.
            </div>
            <ButtonTop />
          </section>
        </div>
      </footer>
    </>
  );
};
