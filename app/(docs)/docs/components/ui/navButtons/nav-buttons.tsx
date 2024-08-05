"use client";
import { pagesData } from "@/data/dataItems";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
const NavigationButtons = () => {
  const pathName = usePathname();
  const currentPageIndex = pagesData.findIndex(
    (page) => page.path === pathName
  );

  const prevPage =
    currentPageIndex > 0 ? pagesData[currentPageIndex - 1] : null;
  const nextPage =
    currentPageIndex < pagesData.length - 1
      ? pagesData[currentPageIndex + 1]
      : null;

  return (
    <div
      className={`navigation-buttons grid w-full border-t-1 border-borderLight dark:border-borderDark mt-10 pt-7 ${
        pathName === "/docs"
          ? "justify-end"
          : "grid-cols-2-auto justify-between "
      } w-full`}
    >
      {prevPage && (
        <div className="ml-6">
          <Link className="group " href={prevPage.path}>
            <p className="group-hover:text-bluePrimary text-[13px] text-gray-700 font-medium transition-colors">
              previous
            </p>
            <p className="relative font-semibold text-black dark:text-white text-[15px] ">
              {prevPage.title}
              <ChevronLeftIcon className="group-hover:-left-[24px] absolute top-1/2 -left-[20px] -translate-y-1/2 transition-all text-gray-600" />
            </p>
          </Link>
        </div>
      )}
      {nextPage && (
        <div className="">
          <Link className="group" href={nextPage.path}>
            <p className="group-hover:text-bluePrimary text-[13px] text-gray-700 font-medium transition-colors">
              next
            </p>
            <p className="relative font-semibold text-black dark:text-white text-[15px] pr-6">
              {nextPage.title}
              <ChevronRightIcon className="group-hover:right-[2px] absolute top-1/2 right-[7px] -translate-y-1/2 transition-all text-gray-600" />
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;
