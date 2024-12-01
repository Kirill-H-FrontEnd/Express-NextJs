// > Next
import Link from "next/link";
// > Components
import { Aside } from "@/app/(docs)/docs/components/aside/Aside";
import { TitleBanner } from "@/app/(docs)/docs/components/ui/titleBanner/title-banner";
import NavigationButtons from "@/app/(docs)/docs/components/ui/navButtons/nav-buttons";

export default function InstallPage() {
  const ASIDE_LINKS = [
    { id: "", label: "Automatic Installation" },
    { id: "", label: "Manual Installation" },
    { id: "", label: "Creating directories" },
    { id: "", label: "The app directory" },
    { id: "", label: "Run the Development Server" },
    { id: "", label: "Next Steps" },
  ];
  return (
    <>
      <Aside links={ASIDE_LINKS} />
      <div>
        <TitleBanner
          title="Installation"
          className=" text-2xl sm:text-4xl"
          content={
            <>
              <p className="">System Requirements:</p>
              <div>
                <p>
                  -{" "}
                  <Link className="text-bluePrimary" href={""}>
                    Node.js 18.17
                  </Link>{" "}
                  or later.
                </p>
                <p>
                  - macOS, Windows (including WSL), and Linux are supported.
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
