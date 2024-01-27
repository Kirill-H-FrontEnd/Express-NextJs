"use client";
// > React
import { FC } from "react";
// > Next
import { useRouter } from "next/navigation";

type TLoginButton = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export const LoginButton: FC<TLoginButton> = ({
  children,
  asChild,
  mode = "redirect",
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return (
      <>
        <span>Modal</span>
      </>
    );
  }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
