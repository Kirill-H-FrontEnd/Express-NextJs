"use client";
// > React
import { FC, useContext } from "react";
// > Icons
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// > Providers
import { useThemeProvider } from "@/app/providers/ThemeProvider";

export const SwitchThemeButton: FC = ({}) => {
  const { isSwitch, handleSwitchClick } = useContext(useThemeProvider);
  return (
    <button
      onClick={handleSwitchClick}
      className={`active:scale-[.8] transition-transform`}
    >
      {isSwitch ? (
        <MoonIcon
          width={20}
          height={20}
          strokeWidth={1.5}
          className="text-black dark:text-white "
        />
      ) : (
        <SunIcon
          width={20}
          height={20}
          strokeWidth={1.5}
          className="text-black dark:text-white"
        />
      )}
    </button>
  );
};
