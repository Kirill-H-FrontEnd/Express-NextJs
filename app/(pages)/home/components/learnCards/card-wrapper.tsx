import { FC } from "react";
import s from "./styles/LearnCards.module.scss";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
type TCardWrapper = {
  icon: string | any;
  title: string;
  text: string;
  href: string;
};
export const CardWrapper: FC<TCardWrapper> = ({ icon, title, text, href }) => {
  return (
    <Link
      href={href}
      className={`${s.card} relative border-1 border-slate-300/20 rounded-2xl p-5 bg-slate-300/5 hover:bg-slate-300/15 `}
    >
      <div className="grid grid-cols-2-auto justify-start gap-3 items-center mb-3">
        <p className="w-[32px] h-[32px] relative text-white bg-violet/30 rounded-full">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-violet font-extrabold text-lg">
            {icon}
          </span>
        </p>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-white ">{text}</p>
      <FiExternalLink
        className={`${s.iconLink} absolute top-2 right-2 text-slate-300/10 `}
      />
    </Link>
  );
};
