"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

export const BreadCrumbs: FC = ({}) => {
  const paths = usePathname();

  const pathnames = paths.split("/").filter((path) => path);
  return (
    <Breadcrumb className={` ${paths === "/docs" ? "mb-0" : "mb-7"}`}>
      <BreadcrumbList>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          if (paths === "/docs") {
            return null;
          }
          return isLast ? (
            <>
              <BreadcrumbItem
                className="text-black dark:text-white capitalize font-semibold"
                key={index}
              >
                {name}
              </BreadcrumbItem>
            </>
          ) : (
            <>
              <BreadcrumbItem className=" text-gray-400" key={index}>
                <div>{name}</div>
              </BreadcrumbItem>
              <BreadcrumbSeparator key={name}>
                <ChevronRight className="text-gray-400" />
              </BreadcrumbSeparator>
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
