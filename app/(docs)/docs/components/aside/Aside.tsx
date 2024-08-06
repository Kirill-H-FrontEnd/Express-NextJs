"use client";
import { FC } from "react";

// > Font
import { GeistSans } from "geist/font/sans";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
type TLink = {
  id: string;
  label: string;
};

type TAside = {
  links: TLink[];
};

export const Aside: FC<TAside> = ({ links }) => {
  const handleSetActive = (to: string) => {
    window.history.pushState(null, "", `#${to}`);
  };
  return (
    <aside
      className="bg-transparent sticky right-0 top-[121px] h-[calc(100vh-110px)] z-[40] order-last hidden shrink-0 lg:block"
      id="aside"
    >
      <h5
        style={GeistSans.style}
        className="text-black dark:text-white font-medium text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        On this page
      </h5>
      <nav className="grid gap-3 text-gray-600  border-b-1 border-borderLight dark:border-borderDark pb-4">
        {links.map((link, i) => (
          <ScrollLink
            activeClass="text-[#0070F0] pl-1"
            className={`text-[13px] cursor-pointer md:hover:text-bluePrimary  md:hover:pl-1 transition-[padding]`}
            key={i}
            to={link.id}
            smooth={true}
            duration={0}
            spy={true}
            offset={-150}
            onSetActive={handleSetActive}
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>
      <div className="text-[13px] text-gray-600 mt-4 grid gap-3 ">
        <Link className="relative md:hover:text-bluePrimary" href={""}>
          Edit this page on GitHub{" "}
          <ArrowTopRightIcon
            width={13}
            height={13}
            className="absolute top-1/2 -translate-y-1/2 right-[30px]"
          />
        </Link>
        <Link className="relative md:hover:text-bluePrimary" href={""}>
          Managed Express.ts(Vercel){" "}
          <ArrowTopRightIcon
            width={13}
            height={13}
            className="absolute top-1/2 -translate-y-1/2 right-[30px]"
          />
        </Link>
      </div>
    </aside>
  );
};
