// > React
import { FC } from "react";
// > Next
import Link from "next/link";
// > Icons
import { IoLogoElectron } from "react-icons/io5";
// > Utils
import { cn } from "@/lib/utils";
// > Components
import GridPattern from "@/components/magicui/bg/grid-pattern";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";
// > Font
import { GeistSans } from "geist/font/sans";
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
    <section className="sm:w-[500px] relative z-10 bg-black  h-full grid place-items-center overflow-hidden ">
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
      <Card className="w-full bg-transparent z-[20]">
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
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"8 4"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
};
