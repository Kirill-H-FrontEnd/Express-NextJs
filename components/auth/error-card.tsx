import { FC } from "react";
import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
type TerrorCard = {};

export const ErrorCard: FC = ({}) => {
  return (
    <Card className="w-[400px] shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center rounded-md">
      <CardHeader>
        <Header
          label="Email already in use with different provider!"
          title="Oops!"
        ></Header>
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};
