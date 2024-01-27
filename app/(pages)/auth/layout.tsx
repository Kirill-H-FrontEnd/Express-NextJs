import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full bg-black overflow-hidden">
        <Image
          src={"/gradientBg.svg"}
          alt="gradientBg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0 pointer-events-none"
          width={1000}
          height={1000}
        />
        <Image
          src={"/animBg.svg"}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover z-0 pointer-events-none"
          alt="animationBg"
          width={1000}
          height={1000}
        />
        {children}
      </div>
    </>
  );
};
export default AuthLayout;
