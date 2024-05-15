"use client";
import { FC, useEffect, useState } from "react";
import s from "./InfoModal.module.scss";
// > NextUI
import { Button } from "@nextui-org/react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Next
import { usePathname } from "next/navigation";
import { BorderBeam } from "@/components/magicui/border-beam";
export const InfoModal: FC = ({}) => {
  const pathName = usePathname();
  const [isClose, setClose] = useState(true);
  useEffect(() => {
    const storedValue = window.localStorage.getItem("bannerInfo");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);
  const handleClose = (accept: boolean) => {
    setClose(false);
    window.localStorage.setItem("bannerInfo", JSON.stringify(!accept));
  };
  return (
    <>
      {isClose && (
        <section
          className={`${s.InfoModal} w-full sm:w-[450px] left-0 bottom-0 sm:left-2 sm:bottom-2 bg-black/10 backdrop-blur-md fixed p-4 sm:rounded-md shadow-md border-1 border-slate-700`}
        >
          <section className="relative z-[200]">
            <h5
              className={`text-[15px]  font-normal text-white leading-6 sm:text-balance`}
            >
              <span
                style={GeistSans.style}
                className="text-transparent bg-clip-text bg-gradient-to-t from-violet to-white text-lg font-medium"
              >
                Welcome!
              </span>{" "}
              This website is a template for a web framework and is not used for
              commercial purposes.Thank you and enjoy watching!
            </h5>
            <div className="">
              <Button
                onClick={() => handleClose(true)}
                radius="full"
                className="text-xs md:text-sm bg-white text-black font-bold mr-3 dark:bg-black_secondary cursor-pointer w-full"
              >
                Close
              </Button>
            </div>
          </section>
          <BorderBeam size={70} duration={12} className="hidden sm:block" />
        </section>
      )}
    </>
  );
};
