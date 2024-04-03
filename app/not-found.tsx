"use client";
import { FC } from "react";
import s from "./styles/not-found.module.scss";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFoundPage() {
  const pathName = usePathname().replace("/", " ");
  const { back } = useRouter();

  return (
    <section className="bg-[url('/home/animBg.svg')] bg-no-repeat bg-center bg-cover overflow-hidden w-full h-screen grid grid-cols-1 justify-center items-center">
      <div className="container">
        <section className="text-white text-center leading-none font-bold">
          <h2 className="text-[180px]">404</h2>
          <p>
            Page <span className="text-purple-500">`{pathName}`</span> not found
          </p>
          <div>
            <Button onClick={() => back()}>Go back</Button>
            <Button as={Link} href="/">
              Go home
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
