// > Globals styles
import "./global.scss";
// > Components
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";
// > Next
import Image from "next/image";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        id="dashboardWrapper"
        className="overflow-hidden bg-white dark:bg-[url('/dashboard/animBgDark.svg')] bg-no-repeat bg-center bg-cover relative"
      >
        <Header />
        <NavBar />
        <main id="main" className="">
          <div id="PageWrapper"> {children}</div>
        </main>
        {/* Background */}
        <Image
          src={"/home/gradientBg.svg"}
          alt="gradientBg"
          className="absolute top-0 right-0 w-full h-full object-cover z-0 pointer-events-none select-none hidden dark:block"
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
};
export default DashboardLayout;
