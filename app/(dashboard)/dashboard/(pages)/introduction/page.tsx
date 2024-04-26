// > Components
import { HeaderPage } from "../../components/ui/header-page";
import ScrollShadowProvider from "@/app/providers/scrollShadowProvider";
import { Aside } from "../../components/aside/Aside";
const Introduction = () => {
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
      <ScrollShadowProvider>
        <HeaderPage
          title="Introduction"
          text="Welcome to the Protocol.js documentation!"
        />
      </ScrollShadowProvider>

      <Aside data={DATA_ASIDE_LINKS} />
    </>
  );
};

export default Introduction;
