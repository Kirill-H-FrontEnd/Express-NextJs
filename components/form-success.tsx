// > React
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { FC } from "react";

type TFormSuccess = {
  message: string | undefined;
};

export const FormSuccess: FC<TFormSuccess> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/25 p-3 rounded-md flex  items-center gap-x-2 text-sm text-green-500 mb-4">
      <CheckCircledIcon />
      <p>{message}</p>
    </div>
  );
};
