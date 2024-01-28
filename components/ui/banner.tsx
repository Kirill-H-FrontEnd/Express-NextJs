import { Button } from "@nextui-org/react";
import { FC } from "react";
import Link from "next/link";
type TBanner = {
  title: string;
  supTitle: string;
  text: string;
  href: string;
  btnValue?: string;
  isActions?: boolean;
};

export const Banner: FC<TBanner> = ({
  title,
  supTitle,
  text,
  href,
  btnValue,
  isActions,
}) => {
  return (
    <section className="bg-black py-24">
      <div className="container">
        <section>
          <article className="text-center grid gap-2 max-w-[450px] m-auto">
            <h3 className="text-violet font-medium sm:font-semibold">
              {supTitle}
            </h3>
            <h2 className="text-white text-2xl sm:text-4xl font-semibold">
              {title}
            </h2>
            <p className="text-slate-300 text-md sm:text-lg">{text}</p>
            {isActions && (
              <div className="mt-4">
                <Button
                  radius="full"
                  as={Link}
                  href={href}
                  className=" sm:w-auto shadow-lg px-10 text-white rounded-full capitalize bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet to-black font-normal"
                >
                  {btnValue}
                </Button>
              </div>
            )}
          </article>
        </section>
      </div>
    </section>
  );
};
