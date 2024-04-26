"use client";
import { FC, useEffect, useState } from "react";
import s from "./InfoModal.module.scss";
// > NextUI
import { Button } from "@nextui-org/react";
// > Next
import { usePathname } from "next/navigation";
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
          className={`${
            s.InfoModal
          } w-full left-0 bottom-0 bg-white backdrop:blur-md fixed p-3 rounded-t-md shadow-md ${
            pathName !== "/" ? "hidden" : ""
          }`}
        >
          <section className="">
            <h5
              className={`text-sm md:text-base font-normal text-black   leading-6`}
            >
              <span className="text-violet font-bold">Attention!</span> This
              website is a template for a web framework and is not used for
              commercial purposes.
            </h5>
            <div className="">
              <Button
                onClick={() => handleClose(true)}
                radius="full"
                className="text-xs md:text-sm bg-black text-white font-medium mr-3 dark:bg-black_secondary "
              >
                Close
              </Button>
            </div>
          </section>
        </section>
      )}
    </>
  );
};
