import { FC } from "react";
import s from "./styles/header-page.module.scss";
// > Font
import { GeistSans } from "geist/font/sans";
type THeaderPage = {
  title: string;
  text: string;
};

export const HeaderPage: FC<THeaderPage> = ({ title, text }) => {
  return (
    <article className="max-w-[600px]">
      <h2
        style={GeistSans.style}
        className="text-4xl text-white font-semibold mb-3"
      >
        {title}
      </h2>
      <p className="text-slate-300 font-light">{text}</p>
    </article>
  );
};
