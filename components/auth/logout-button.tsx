import { logout } from "@/actions/logout";

type LogoutButtonType = {
  children: React.ReactNode;
};

export const LogoutButton = ({ children }: LogoutButtonType) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
