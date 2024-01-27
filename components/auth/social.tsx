// > React
import { FC } from "react";
// > Icons
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// > Components
import { Button } from "../ui/button";

export const Social: FC = ({}) => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2-auto gap-3">
        <Button
          size="lg"
          className="hover:bg-red-50 active:bg-red-100"
          variant={"outline"}
          onClick={() => {}}
        >
          <FcGoogle size={22} />
        </Button>
        <Button
          className="hover:bg-[#24292F]/10 active:bg-[#24292F]/20"
          size="lg"
          variant={"outline"}
          onClick={() => {}}
        >
          <FaGithub color="#24292F" size={22} />
        </Button>
      </div>
    </div>
  );
};
