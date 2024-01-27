"use client";
// > React
import { FC } from "react";
// > Next
import Link from "next/link";
type TBackButton = {
  label: string;
  href: string;
};

export const BackButton: FC<TBackButton> = ({ href, label }) => {
  return (
    <>
      <div className="w-full text-center ">
        <Link
          className="text-slate-500 hover:text-slate-700 hover:underline transition-colors text-sm"
          href={href}
        >
          {label}
        </Link>
      </div>
    </>
  );
};
