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
type TCardWrapper = {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
  contentPrivacy?: React.ReactNode;
};

export const CardWrapper: FC<TCardWrapper> = ({
  backButtonHref,
  headerTitle,
  backButtonLabel,
  children,
  headerLabel,
  showSocial,
  contentPrivacy,
}) => {
  return (
    <section className="z-[10] w-[350px] sm:w-[450px]">
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
          <CardFooter className="grid justify-center">
            {contentPrivacy}
          </CardFooter>
        </div>
      </Card>
    </section>
  );
};
