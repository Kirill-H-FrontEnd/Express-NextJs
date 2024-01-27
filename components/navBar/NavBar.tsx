"use client";
import { FC } from "react";
import { LoginButton } from "../auth/login-button";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

type TNavBar = {};

export const NavBar: FC = ({}) => {
  const pathName = usePathname().replace("", "");
  let hideNavigation =
    pathName === "/auth/login" || pathName === "/auth/register";
  return (
    <>
      {!hideNavigation && (
        <header>
          <LoginButton>
            <Button>Login1</Button>
          </LoginButton>
        </header>
      )}
    </>
  );
};
