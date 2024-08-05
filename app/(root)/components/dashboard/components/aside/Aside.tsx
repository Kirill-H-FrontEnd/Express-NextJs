"use client";
import { FC } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const Aside: FC = ({}) => {
  const ASIDE_LINKS = [
    { id: "", label: "Automatic Installation" },
    { id: "", label: "Manual Installation" },
    { id: "", label: "Creating directories" },
    { id: "", label: "The app directory" },
    { id: "", label: "Run the Development Server" },
    { id: "", label: "Next Steps" },
  ];
  return (
    <aside className="bg-transparent sticky top-[110px] h-[calc(100vh-121px)] z-[40] order-last hidden  shrink-0 lg:block">
      <h5
        style={GeistSans.style}
        className="text-white font-medium text-sm mb-2 grid grid-cols-2-auto justify-start gap-2 items-center"
      >
        On this page
      </h5>
      <nav className="grid gap-3 text-slate-300 border-b-1 border-borderDark pb-4">
        {ASIDE_LINKS.map((item, i) => (
          <span
            className="text-[13px] text-gray-600 first-of-type:text-bluePrimary first-of-type:pl-1"
            key={i}
          >
            {item.label}
          </span>
        ))}
      </nav>
      <div className="text-[13px] text-gray-600 mt-4 grid gap-3 ">
        <span className="relative ">
          Edit this page on GitHub{" "}
          <ArrowTopRightIcon
            width={13}
            height={13}
            className="absolute top-1/2 -translate-y-1/2 right-[10px]"
          />
        </span>
        <span className="relative ">
          Managed Express.ts(Vercel){" "}
          <ArrowTopRightIcon
            width={13}
            height={13}
            className="absolute top-1/2 -translate-y-1/2 right-[10px]"
          />
        </span>
      </div>
    </aside>
  );
};
