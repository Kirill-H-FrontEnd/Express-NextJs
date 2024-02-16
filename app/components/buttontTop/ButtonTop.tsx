"use client";
import { FC, useEffect, useState } from "react";
import s from "./styles/ButtonTop.module.scss";
import { Button } from "@nextui-org/react";
import { PiArrowFatLinesUp } from "react-icons/pi";
import { FaChevronUp } from "react-icons/fa6";
type TButtonTop = {};

export const ButtonTop: FC = ({}) => {
  const [isScroll, setScroll] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        setScroll(true);
        setActive(true);
      } else {
        setActive(false);
        setScroll(false);
      }
    });
  }, [isScroll]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      size="md"
      isIconOnly
      onClick={() => scrollToTop()}
      className={`${
        isActive ? "opacity-1" : "opacity-0 pointer-events-none"
      } bg-white fixed bottom-5 right-5 rounded-full px-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black z-50`}
    >
      <FaChevronUp size={18} color="#fff" />
    </Button>
  );
};
