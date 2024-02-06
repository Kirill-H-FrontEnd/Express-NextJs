// > React
import { FC } from "react";
// > Font
import { Roboto } from "next/font/google";
// > Font
import { Open_Sans } from "next/font/google";
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
type THeader = {
  label: string;
  title: string;
};

export const Header: FC<THeader> = ({ label, title }) => {
  return (
    <div className="">
      <h1 style={font.style} className="text-3xl font-bold text-slate-900">
        {title}
      </h1>
      <p
        className="text-slate-500 mt-1 font-normal text-sm
      "
      >
        {label}
      </p>
    </div>
  );
};
