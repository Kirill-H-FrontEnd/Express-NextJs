import { FC } from "react";
import { cn } from "@/lib/utils";
// > Styles
import s from "./styles/card.module.scss";
// > Components
import DotPattern from "@/components/magicui/bg/dot-pattern";
// > Next
import Link from "next/link";
// > Icons
import { FiExternalLink } from "react-icons/fi";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const Cards: FC = ({}) => {
  const DATA_CARDS = [
    {
      title: "Getting Started",
      content:
        "Learn how to create full-stack web applications with Express.ts.",
    },
    {
      title: "App Router",
      content:
        "Use the new App Router with Express.ts' and React's latest features, including Layouts, Server Components, Suspense, and more.",
    },
    {
      title: "Pages Router",
      content:
        "Before Express.ts 13, the Pages Router was the main way to create routes in Express.ts with an intuitive file-system router.",
    },
    {
      title: "Architecture",
      content: "How Express.ts Works",
    },
    {
      title: "Community",
      content: "Get involved in the Express.ts community.",
    },
  ];
  return (
    <section className={s.cards}>
      {DATA_CARDS.map((card, i) => (
        <Link
          key={i}
          href={""}
          className={`${s.card} border-1 border-gray-200 dark:border-borderDark rounded-md p-4 bg-gradient-to-b from-gray-400/5 to-gray-800/5 relative hover:to-gray-950/10 hover:dark:to-gray-950/5 h-[140px]`}
        >
          <FiExternalLink
            className={` absolute top-2 right-2 text-gray-300 dark:text-gray-700 z-20`}
          />
          <div className=" h-full">
            <h3
              style={inter.style}
              className="text-lg font-medium mb-2 text-black dark:text-white"
            >
              {card.title}
            </h3>
            <p className="line-clamp-3 text-slate-700 dark:text-slate-500 text-sm leading-6">
              {card.content}
            </p>
          </div>
          <DotPattern
            cr={0.7}
            cx={0.7}
            cy={0.7}
            width={22}
            height={22}
            className={cn(
              "lg:md:[mask-image:radial-gradient(150px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)] rounded-[10px] fill-gray-400 dark:fill-white/25"
            )}
          />
        </Link>
      ))}
    </section>
  );
};
