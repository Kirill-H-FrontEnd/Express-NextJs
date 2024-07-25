import { logout } from "@/actions/logout";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
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
      className="cursor-pointer grid grid-cols-2-auto justify-center gap-2 py-2 items-center rounded-lg text-black dark:text-white font-medium bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800 transition-background"
    >
      <LogOut size={18} />
      <span>{children}</span>
    </button>
  );
};
