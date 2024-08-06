import { FC } from "react";
import { Tooltip } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
});

export const ButtonTop: FC = ({}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Tooltip
      style={inter.style}
      closeDelay={200}
      offset={10}
      size="sm"
      content="Up!"
      placement="right"
      classNames={{ content: "font-semibold dark:bg-white dark:text-black" }}
    >
      <button
        type="submit"
        onClick={scrollToTop}
        className="absolute top-1/2 right-0 -translate-y-1/2  border-2 border-borderLight hover:border-slate-600 dark:border-borderDark hover:dark:border-slate-300 p-1 rounded-full hidden lg:block active:scale-[.9] transition-all *:dark:fill-gray-600 *:fill-gray-200 *:hover:fill-slate-600 *:hover:dark:fill-slate-300"
      >
        <MdKeyboardDoubleArrowUp size={20} className="transition-all" />
      </button>
    </Tooltip>
  );
};
