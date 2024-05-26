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
      <div className="w-full ">
        <Link
          className="text-white hover:text-white/60  transition-colors text-sm"
          href={href}
        >
          {label}
        </Link>
      </div>
    </>
  );
};
