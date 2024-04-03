"use client";
// > React
import { FC, useContext } from "react";
// > Styles
import s from "./styles/switch-theme-button.module.scss";
// > Icons
import { RiMoonFill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
// > Providers
import { useThemeProvider } from "@/app/providers/ThemeProvider";
import { Tooltip } from "@nextui-org/react";
type TSwitchThemeButton = {};

export const SwitchThemeButton: FC = ({}) => {
  // Switch Theme
  const { isSwitch, handleSwitchClick } = useContext(useThemeProvider);
  return (
    <Tooltip
      closeDelay={200}
      offset={10}
      size="sm"
      content={`Switch to ${isSwitch ? "light" : "Dark"}`}
      placement="bottom-start"
      classNames={{ content: "font-semibold text-[12px]" }}
    >
      <button onClick={handleSwitchClick} className={` `}>
        {isSwitch ? (
          <Moon
            strokeWidth={1.5}
            className="text-black dark:text-white"
            size={24}
          />
        ) : (
          <Sun
            strokeWidth={1.5}
            className="text-black dark:text-white"
            size={24}
          />
        )}
      </button>
    </Tooltip>
  );
};
