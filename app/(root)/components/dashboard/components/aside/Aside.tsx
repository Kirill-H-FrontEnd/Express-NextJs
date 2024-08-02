"use client";
import { FC } from "react";
// > Font
import { GeistSans } from "geist/font/sans";

export const Aside: FC = ({}) => {
  return (
    <aside
      className="bg-transparent sticky top-[110px] h-[calc(100vh-121px)] z-[40] order-last hidden  shrink-0 lg:block"
      id="aside"
    >
      <h5
        style={GeistSans.style}
        className="text-white font-medium text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        On this page
      </h5>
      <nav className="grid gap-3 text-slate-300  ml-2 "></nav>
    </aside>
  );
};
