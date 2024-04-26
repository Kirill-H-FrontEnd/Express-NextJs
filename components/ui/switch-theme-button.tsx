"use client";
// > React
import { FC, useContext } from "react";
// > Icons
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
// > Providers
import { useThemeProvider } from "@/app/providers/ThemeProvider";
import { Tooltip } from "@nextui-org/react";

export const SwitchThemeButton: FC = ({}) => {
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
