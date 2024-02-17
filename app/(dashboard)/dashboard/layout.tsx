// > Globals styles
import "./global.scss";
// > Components
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { NavBar } from "./components/navBar/NavBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main id="main" className="bg-black">
        {children}
      </main>
      <NavBar />
      <Aside />
    </>
  );
};
export default DashboardLayout;
