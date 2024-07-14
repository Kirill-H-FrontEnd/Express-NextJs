// > React
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { FC } from "react";

type TFormError = {
  message: string | undefined;
};

export const FormError: FC<TFormError> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/25 p-3 rounded-md flex  items-center gap-x-2 text-sm text-red-500 mb-4">
      <ExclamationTriangleIcon />
      <p>{message}</p>
    </div>
  );
};
