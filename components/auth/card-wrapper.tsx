// > React
import { FC } from "react";
// > Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import Link from "next/link";
type TCardWrapper = {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
  showPrivacy?: boolean;
};

export const CardWrapper: FC<TCardWrapper> = ({
  backButtonHref,
  headerTitle,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
  showPrivacy,
}) => {
  return (
    <section className="z-[10] w-[340px] sm:w-[450px]">
      <Card className=" bg-transparent z-[20]">
        <div className="">
          <CardHeader>
            <Header
              title={headerTitle}
              label={headerLabel}
              backButtonLabel={backButtonLabel}
              backButtonHref={backButtonHref}
            />
          </CardHeader>
          <CardContent>{children}</CardContent>
          {showSocial && (
            <CardFooter>
              <Social />
            </CardFooter>
          )}
          {showPrivacy && (
            <>
              <CardFooter>
                <p className="text-xs text-gray text-center leading-5">
                  By signing in, you agree to our{" "}
                  <Link className="text-purple-600" href={""}>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link className="text-purple-600" href={""}>
                    Privacy.
                  </Link>
                </p>
              </CardFooter>
            </>
          )}
        </div>
      </Card>
    </section>
  );
};
