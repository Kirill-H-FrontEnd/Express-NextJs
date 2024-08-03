import Link from "next/link";
import { Aside } from "../../../components/aside/Aside";
import { TitleBanner } from "../../../components/ui/titleBanner/title-banner";

export default function InstallPage() {
  const ASIDE_LINKS = [
    { href: "whatIsExpress", label: "Automatic Installation" },
    { href: "howToUseTheseDocs", label: "Manual Installation" },
    { href: "appRouterVsPagesRouter", label: "Creating directories" },
    { href: "preRequisiteKnowledge", label: "The app directory" },
    { href: "accessibility", label: "Run the Development Server" },
    { href: "joinOurCommunity", label: "Next Steps" },
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
                  <Link className="text-purple-500" href={""}>
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
