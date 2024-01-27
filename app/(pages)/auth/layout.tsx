// https://loading.io/asset/718234 || Animation bg
// > Font
import { Ubuntu } from "next/font/google";
const font = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
});
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full h-screen bg-black ">
        <img
          src="/bg.svg"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0 pointer-events-none"
        />
        {children}
      </div>
    </>
  );
};
export default AuthLayout;
