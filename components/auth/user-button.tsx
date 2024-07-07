// > NextUi
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";
// > Hooks
import { useCurrentUser } from "@/hooks/use-current-user";
// > Font
import { Inter } from "next/font/google";
import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { useSession } from "next-auth/react";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const UserButton = () => {
  const user = useCurrentUser();
  const DATA_lINKS_USER = [
    { value: "Showcase", href: "" },
    { value: "Blog", href: "" },
    {
      value: "Templates",
      href: "",
    },
    {
      value: "Enterprise",
      href: "",
    },
  ];
  return (
    <Popover size="lg" backdrop="blur" placement="bottom">
      <PopoverTrigger>
        <Avatar
          radius="full"
          showFallback
          classNames={{
            icon: [
              "dark:text-white",
              "text-black",
              "p-[3px]",
              "dark:bg-white/10 bg-black/10",
            ],
          }}
          className=" cursor-pointer bg-transparent h-[30px] w-[30px] "
          src={user.image}
        />
      </PopoverTrigger>
      <PopoverContent className=" bg-white dark:bg-slate-700 dark:bg-[url('/dashboard/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden shadow-sm shadow-slate-300/20 p-4">
        <div className="">
          <div className="grid grid-cols-2-auto justify-start gap-2 items-center mb-3 border-b-1 border-slate-800 pb-3">
            <div>
              <h5
                style={inter.style}
                className="text-md font-semibold text-black dark:text-white"
              >{`${user.name} `}</h5>
              <h4 className="text-black dark:text-slate-300 text-sm">{""}</h4>
            </div>
          </div>
          <nav className="grid gap-2 text-slate-300">
            {DATA_lINKS_USER.map((link, i) => (
              <Link
                className="hover:text-purple-500 hover:pl-1 transition-all w-max"
                key={i}
                href={link.href}
              >
                {link.value}
              </Link>
            ))}
            <LogoutButton children="Logout" />
          </nav>
        </div>
      </PopoverContent>
    </Popover>
  );
};
