"use client";
// > React
import { FC } from "react";
// > Next
import { useRouter } from "next/navigation";

type TLoginButton = {
  children: React.ReactNode;
  asChild?: boolean;
};

export const LoginButton: FC<TLoginButton> = ({ children, asChild }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
