import DotPattern from "@/components/magicui/bg/dot-pattern";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// > Utils
import { cn } from "@/lib/utils";
import RadialGradient from "@/components/magicui/bg/radial-gradient";
import LinearGradient from "@/components/magicui/bg/linear-gradient";
import Particles from "@/components/magicui/bg/particles";
import { Toaster } from "react-hot-toast";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden ">
        <Toaster position="bottom-right" />
        <LinearGradient from="#1D1836" to="#0D0F14" />
        {/* <Particles
          className="absolute inset-0 hidden md:block"
          quantity={300}
          size={0.4}
          ease={80}
          color={"#974BD9"}
          refresh
        /> */}
        <div className="w-full h-screen  grid place-items-center grid-rows-[100vh]">
          {children}
        </div>
        <DotPattern
          width={30}
          height={30}
          className={cn(
            "lg:md:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
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
