// > React
import { FC } from "react";
// > Auth
import { auth, signOut } from "@/auth";
// > NextUi
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Tooltip,
} from "@nextui-org/react";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > Components
import { Input } from "@/components/ui/input";
// > Icons
import { IoSearchOutline } from "react-icons/io5";
import { SwitchThemeButton } from "@/components/ui/switch-theme-button";
import { VscGithub } from "react-icons/vsc";
export const Header: FC = ({}) => {
  const DATA_ACCOUNT_lINKS = [
    { value: "API", href: "" },
    { value: "Documentation", href: "" },
    { value: "Support", href: "" },
    { value: "Logout", href: "" },
  ];
  return (
    <header
      id="header"
      className="relative border-b-1 border-slate-300 dark:border-slate-700 bg-gradient-to-br from-[#F6F7F9] to-[#F6F7F9]  dark:from-black/30 dark:to-[#36266C]/30 py-3 px-5 z-[1000] w-full"
    >
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign Out</button>
      </form>
    </header>
  );
};
