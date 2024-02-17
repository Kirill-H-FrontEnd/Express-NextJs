import { FC } from "react";
import s from "./styles/Aside.module.scss";

type TAside = {};

export const Aside: FC = ({}) => {
  return (
    <aside className="bg-black" id="aside">
      Aside
    </aside>
  );
};
