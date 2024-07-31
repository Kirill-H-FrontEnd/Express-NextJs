import { FC } from "react";
import s from "./styles/card.module.scss";
import DotPattern from "@/components/magicui/bg/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
// > Font
import { Inter } from "next/font/google";
import { FiExternalLink } from "react-icons/fi";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});
type TCard = {
  title: string;
  content: string;
};

export const Card: FC<TCard> = ({ title, content }) => {
  return (
    <Link
      href={""}
      className="border-1 border-gray-200 dark:border-gray-900 rounded-md p-4 bg-gradient-to-b from-gray-400/5 to-gray-800/5 relative hover:to-gray-950/10 hover:dark:to-gray-950/5 "
    >
      <FiExternalLink
        className={` absolute top-2 right-2 text-gray-300 dark:text-gray-700 z-20`}
      />
      <div className=" h-full">
        <h3
          style={inter.style}
          className="text-lg font-medium mb-2 text-purple-800"
        >
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-6">{content}</p>
      </div>
      <DotPattern
        cr={0.7}
        cx={0.7}
        cy={0.7}
        width={22}
        height={22}
        className={cn(
          "lg:md:[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] rounded-[10px] fill-gray-400 dark:fill-white/25"
        )}
      />
    </Link>
  );
};
