// > React
import { FC } from "react";
// > Components
import { BackButton } from "./back-button";
// > Font
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});
type THeader = {
  label: string;
  title: string;
  backButtonLabel?: string;
  backButtonHref?: string;
};

export const Header: FC<THeader> = ({
  label,
  title,
  backButtonLabel,
  backButtonHref,
}) => {
  return (
    <div className="text-center">
      <h1
        style={inter.style}
        className="text-xl sm:text-2xl font-semibold text-white"
      >
        {title}
      </h1>
      <div
        className="text-gray-600 mt-1 font-normal text-sm grid grid-cols-2-auto justify-center gap-2
      "
      >
        <p className="max-w-[380px]">{label}</p>
        {backButtonLabel && (
          <BackButton label={backButtonLabel} href={backButtonHref} />
        )}
      </div>
    </div>
  );
};
