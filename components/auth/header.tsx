// > React
import { FC } from "react";
// > Font
import { GeistSans } from "geist/font/sans";
type THeader = {
  label: string;
  title: string;
};

export const Header: FC<THeader> = ({ label, title }) => {
  return (
    <div className="">
      <h1 style={GeistSans.style} className="text-3xl font-bold text-slate-900">
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
