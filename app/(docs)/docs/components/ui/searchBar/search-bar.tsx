"use client";
// > React
import { FC, useEffect, useState } from "react";
// > Styles
import "./style/SearchBar.scss";
// > Components
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@nextui-org/react";
import { CardSearch } from "./card-search";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});
// > Icons
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchBar: FC = ({}) => {
  const [open, setOpen] = useState(false);
  // Open dialog with use keyboard
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "x") {
      setOpen(true);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="pr-2 grid grid-cols-2-auto  justify-between items-center bg-gray-200/30 dark:bg-gray-900/20 border-1 border-gray-200 dark:border-gray-900 min-h-[40px] rounded-md mb-5 shadow-sm shadow-gray-100 dark:shadow-md transition-none ">
          <MagnifyingGlassIcon
            width={20}
            height={20}
            className="absolute top-1/2 left-[5px] -translate-y-1/2 text-gray-400"
          />
          <p className="pl-4 text-[13px] text-gray-400 font-normal ">
            Quick search...
          </p>
          <span
            style={inter.style}
            className="text-[12px] shadow-sm bg-gray-200/30 dark:bg-gray-900/20 border-1 border-gray-200 dark:border-gray-900 px-2 py-[2px] rounded-sm text-gray-500 dark:text-gray-500 font-semibold"
          >
            CtrlX
          </span>
        </Button>
      </DialogTrigger>
      <CardSearch />
    </Dialog>
  );
};
