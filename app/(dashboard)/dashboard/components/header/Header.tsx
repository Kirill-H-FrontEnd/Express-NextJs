import { FC } from "react";
import s from "./styles/Header.module.scss";

type THeader = {};

export const Header: FC = ({}) => {
  return (
    <header id="header" className="border-b-1 border-slate-700 bg-black p-3">
      Header
    </header>
  );
};
