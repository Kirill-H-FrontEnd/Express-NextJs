import { FC } from "react";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});
type TTitleBanner = {
  title: string;
  content: React.ReactNode;
  className?: string;
};

export const TitleBanner: FC<TTitleBanner> = ({
  title,
  content,
  className,
  ...props
}) => {
  return (
    <article
      {...props}
      className={`${className} border-b-1 border-gray-200 dark:border-gray-800 pb-7`}
    >
      <h2
        style={inter.style}
        className="mb-5 font-semibold text-black dark:text-white"
      >
        {title}
      </h2>
      <div className="text-base text-slate-700 dark:text-slate-500 leading-7">
        {content}
      </div>
    </article>
  );
};
