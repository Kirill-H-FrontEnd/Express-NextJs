import DotPattern from "@/components/magicui/bg/dot-pattern";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// > Utils
import { cn } from "@/lib/utils";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden ">
        <div className="w-full h-screen bg-[url('/gradientBg.svg')] bg-no-repeat bg-center bg-cover grid place-items-center">
          {children}
        </div>
        <DotPattern
          width={25}
          height={25}
          className={cn(
            "lg:md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <Link
          className="absolute top-4 left-6 grid grid-cols-2-auto items-center text-gray hover:text-white transition-all sm:hover:pl-1"
          href={"/"}
        >
          <MdKeyboardArrowLeft size={18} />
          <p style={GeistSans.style} className=" text-sm">
            Back to home
          </p>
        </Link>
      </div>
    </>
  );
};
export default AuthLayout;
