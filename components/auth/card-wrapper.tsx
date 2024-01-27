// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Icons
import { LiaAtomSolid } from "react-icons/lia";
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
  // Animation
  const animation = {
    hidden: {
      opacity: 0,
    },
    visible: () => ({
      opacity: 1,
      transition: { delay: 0.1, duration: 0.2, ease: "easeOut" },
    }),
  };
  return (
    <section className="sm:w-[500px] relative z-10 bg-white h-screen grid place-items-center">
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
