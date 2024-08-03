"use client";
import { FC } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
import { Link as ScrollLink } from "react-scroll";
type TLink = {
  href: string;
  label: string;
};

type TAside = {
  links: TLink[];
};

export const Aside: FC<TAside> = ({ links }) => {
  return (
    <aside
      className="bg-transparent sticky right-0 top-[105px] h-[calc(100vh-110px)] z-[40] order-last hidden shrink-0 lg:block"
      id="aside"
    >
      <h5
        style={GeistSans.style}
        className="text-black dark:text-white font-medium text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        On this page
      </h5>
      <nav className="grid gap-3 text-slate-300  border-b-1 border-gray-200 dark:border-gray-900 pb-4">
        {links.map((link, i) => (
          <ScrollLink
            activeClass="text-purple-500 pl-1"
            className={`text-sm cursor-pointer md:hover:text-purple-500 text-gray-600 hover:pl-1 transition-[padding]`}
            key={i}
            to={link.href}
            smooth={true}
            duration={0}
            spy={true}
            offset={-150}
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>
    </aside>
  );
};
