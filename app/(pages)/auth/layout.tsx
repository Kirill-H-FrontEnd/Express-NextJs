import DotPattern from "@/components/magicui/bg/dot-pattern";
// > Next
import Link from "next/link";
// > Font
import { GeistSans } from "geist/font/sans";
// > Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// > Utils
import { cn } from "@/lib/utils";
// > Components
import LinearGradient from "@/components/magicui/bg/linear-gradient";
import RadialGradient from "@/components/magicui/bg/radial-gradient";
import GridPattern from "@/components/magicui/bg/grid-pattern";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <RadialGradient origin="top" size={600} />
        <div className="w-full h-screen  grid place-items-center grid-rows-[100vh]">
          {children}
        </div>
        <GridPattern
          width={50}
          height={50}
          strokeDasharray={0}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(550px_circle_at_center,white,transparent)] stroke-borderDark/40"
          )}
        />
        <Link
          className="absolute top-4 left-6 grid grid-cols-2-auto items-center text-gray hover:text-white transition-all sm:hover:pl-1"
          href={"/"}
        >
          <MdKeyboardArrowLeft size={18} color="#fff" />
          <p style={GeistSans.style} className="text-white text-sm">
            Back to home
          </p>
        </Link>
      </div>
    </>
  );
};
export default AuthLayout;
