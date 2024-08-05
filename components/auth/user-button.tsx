import Link from "next/link";
// > Components
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";
import { LogoutButton } from "./logout-button";
// > Hooks
import { useCurrentUser } from "@/hooks/use-current-user";
// > Font
import { Inter } from "next/font/google";
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
          src={user?.image || ""}
        />
      </PopoverTrigger>
      <PopoverContent className=" bg-white dark:bg-black dark:bg-[url('/dashboard/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden shadow-sm shadow-slate-300/20 p-4">
        <div className="">
          <div className="grid grid-cols-2-auto justify-start gap-2 items-center mb-3 border-b-1 text-white dark:text-black border-gray-200 dark:border-gray-900 pb-3">
            <div>
              <h5
                style={inter.style}
                className="text-md font-semibold text-black dark:text-white capitalize"
              >{`${user?.name} `}</h5>
              <h4 className="text-gray-600  text-sm">{user?.email}</h4>
            </div>
          </div>
          <nav className="grid gap-2 ">
            {DATA_lINKS_USER.map((link, i) => (
              <Link
                className="hover:text-bluePrimary hover:dark:text-bluePrimary hover:pl-1 transition-all w-max text-gray-600 "
                key={i}
                href={link.href}
              >
                {link.value}
              </Link>
            ))}
            <LogoutButton children="SignOut" />
          </nav>
        </div>
      </PopoverContent>
    </Popover>
  );
};
