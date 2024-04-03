// > Components
import Introduction from "../(pages)/introduction/page";
import { Aside } from "../components/aside/Aside";

const DashboardHomePage = ({}) => {
  const DATA_ASIDE_LINKS = [
    { value: "Automatic Installation", href: "test1" },
    { value: "Manual Installation", href: "test2" },
    { value: "Creating directories", href: "text2" },
    { value: "The app directory", href: "/" },
    { value: "The pages directory (optional)", href: "/" },
    { value: "The public folder (optional)", href: "/" },
    { value: "Run the Development Server", href: "/" },
    { value: "Next Steps", href: "/" },
  ];
  return (
    <>
      <Introduction />
    </>
  );
};
export default DashboardHomePage;
