"use client";
// > React
import { FC, useEffect, useState } from "react";
// > Styles
import "./styles/Loader.css";
// > Next
import { usePathname } from "next/navigation";

export const Loader: FC = ({}) => {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = () => {
    setIsLoading(true);
  };
  return (
    <>
      {isLoading ? (
        <section
          className={`loader  ${
            pathName === "/" ? "bg-black" : "bg-white"
          }  dark:bg-black`}
        >
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
