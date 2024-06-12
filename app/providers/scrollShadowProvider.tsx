"use client";

import { ScrollShadow } from "@nextui-org/react";
interface IScroll {
  children: React.ReactNode;
}
const ScrollShadowProvider = ({ children }: IScroll) => {
  return (
    <ScrollShadow
      hideScrollBar
      size={30}
      className="w-full h-full relative text-slate-300  pb-[100px]"
    >
      {children}
    </ScrollShadow>
  );
};

export default ScrollShadowProvider;
