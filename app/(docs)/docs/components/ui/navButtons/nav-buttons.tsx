"use client";
import { pagesData } from "@/data/dataItems";
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
      className={`navigation-buttons grid max-w-[632px] border-t-1 border-gray-200 dark:border-gray-900 mt-10 pt-7 ${
        pathName === "/docs"
          ? "justify-end"
          : "grid-cols-2-auto justify-between "
      } w-full`}
    >
      {prevPage && (
        <div>
          <Link className="" href={prevPage.path}>
            <span className="prev-button">
              <p className="text-[13px] text-gray-700 font-medium">Previous</p>
              <p className="font-semibold text-black dark:text-white text-[15px]">
                {prevPage.title}
              </p>
            </span>
          </Link>
        </div>
      )}
      {nextPage && (
        <div>
          <Link href={nextPage.path}>
            <span className="next-button">
              <p className="text-[13px] text-gray-700 font-medium">Next</p>
              <p className="font-semibold text-black dark:text-white text-[15px]">
                {nextPage.title}
              </p>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavigationButtons;
