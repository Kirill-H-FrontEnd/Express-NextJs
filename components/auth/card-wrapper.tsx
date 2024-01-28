// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
// > Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

type TCardWrapper = {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper: FC<TCardWrapper> = ({
  backButtonHref,
  headerTitle,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
}) => {
  return (
    <section className="sm:w-[500px] relative z-10 bg-white h-full grid place-items-center overflow-hidden">
      <Link
        className="absolute top-4 left-6 grid grid-cols-2-auto items-center"
        href={"/"}
      >
        <IoLogoElectron
          color="#392975"
          size={40}
          className="animate-spin-slow"
        />
      </Link>
      <Card className="w-full">
        <div className="">
          <CardHeader>
            <Header title={headerTitle} label={headerLabel} />
          </CardHeader>
          <CardContent>{children}</CardContent>
          {showSocial && (
            <CardFooter>
              <Social />
            </CardFooter>
          )}
          <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref} />
          </CardFooter>
        </div>
      </Card>
    </section>
  );
};
