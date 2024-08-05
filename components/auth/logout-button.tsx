// > Actions
import { logout } from "@/actions/logout";
// > Icons
import { LogOut } from "lucide-react";

type LogoutButtonType = {
  children: React.ReactNode;
};

export const LogoutButton = ({ children }: LogoutButtonType) => {
  const onClick = () => {
    logout();
  };
  return (
    <button
      onClick={onClick}
      className="cursor-pointer grid grid-cols-2-auto justify-center gap-2 py-2 items-center rounded-lg text-black dark:text-white font-medium bg-white dark:bg-black md:hover:bg-gray-200 md:hover:dark:bg-gray-800  border-1 border-borderLight dark:border-borderDark md:hover:text-bluePrimary md:hover:dark:text-bluePrimary transition-all"
    >
      <LogOut size={18} />
      <span>{children}</span>
    </button>
  );
};
