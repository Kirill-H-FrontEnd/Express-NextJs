"use client";
// > React
import { FC } from "react";
import { signIn } from "next-auth/react";
// > Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// > Components
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social: FC = ({}) => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2-auto gap-3">
        <Button
          size="lg"
          className="hover:bg-white/80 active:bg-white/60 bg-white rounded-full"
          variant={"default"}
          onClick={() => onClick("google")}
        >
          <FcGoogle size={22} />
        </Button>
        <Button
          className="hover:bg-white/80 active:bg-white/60 bg-white rounded-full"
          size="lg"
          variant={"default"}
          onClick={() => onClick("github")}
        >
          <FaGithub color="#24292F" size={22} />
        </Button>
      </div>
    </div>
  );
};
