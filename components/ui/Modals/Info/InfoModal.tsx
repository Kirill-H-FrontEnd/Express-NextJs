"use client";
import { FC, useEffect, useState } from "react";
import s from "./InfoModal.module.scss";
// > NextUI
import { Button } from "@nextui-org/react";
// > Font
import { GeistSans } from "geist/font/sans";
// > Next
import { usePathname } from "next/navigation";
import { BorderBeam } from "@/components/magicui/border-beam";
import { X } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import GridPattern from "@/components/magicui/bg/grid-pattern";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/bg/dot-pattern";
export const InfoModal: FC = ({}) => {
  const pathName = usePathname();
  const [isClose, setClose] = useState(true);
  useEffect(() => {
    const storedValue = window.localStorage.getItem("bannerInfo");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);
  const handleClose = (accept: boolean) => {
    setClose(false);
    window.localStorage.setItem("bannerInfo", JSON.stringify(!accept));
  };
  return (
    <>
      {isClose && (
        <section
          className={`${
            s.InfoModal
          } w-full sm:w-[480px] left-0 bottom-0 sm:left-2 sm:bottom-2 bg-black/40 backdrop-blur-md fixed p-4 sm:rounded-md shadow-md border-t-1 sm:border-1 border-borderDark  ${
            pathName === "/" ? "" : "hidden"
          }`}
        >
          <X
            onClick={() => handleClose(true)}
            size={15}
            className="absolute top-[10px] right-[10px] text-white cursor-pointer z-[20]"
          />
          <section className="relative z-[15]">
            <h4
              style={GeistSans.style}
              className="text-[18px] font-semibold text-white"
            >
              Hi there👋!
            </h4>
            <p className={`text-[14px]  font-normal text-slate-500 leading-6 `}>
              This website is a template for a web framework and is not used for
              commercial purposes. Enjoy watching!
            </p>
            <h5 style={GeistSans.style} className="text-white text-[14px]">
              ⚡Social and Source:
            </h5>
            <div className="text-white even:text-bluePrimary even:text-[14px] grid sm:grid-cols-2-auto gap-3">
              <p>
                <Button
                  size="md"
                  fullWidth
                  radius="full"
                  className="bg-white"
                  href={"https://github.com/Kirill-H-FrontEnd"}
                >
                  <FaGithubAlt size={22} className="text-[#22262A]" />
                </Button>
              </p>
              <p>
                <Button
                  size="md"
                  fullWidth
                  radius="full"
                  className="bg-white"
                  href={"https://www.linkedin.com/in/kirill-h"}
                >
                  <IoLogoLinkedin size={22} className="text-[#007BB5]" />
                </Button>
              </p>
            </div>
          </section>
          <BorderBeam
            colorFrom="#0072F5"
            colorTo="#fff"
            size={90}
            duration={12}
            className="hidden sm:block"
          />
          <DotPattern
            cr={0.4}
            cx={0.4}
            cy={0.4}
            width={28}
            height={28}
            className={cn(
              "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)] "
            )}
          />
        </section>
      )}
    </>
  );
};
