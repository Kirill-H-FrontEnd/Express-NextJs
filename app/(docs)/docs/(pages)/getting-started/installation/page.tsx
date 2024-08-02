import { TitleBanner } from "../../../components/ui/titleBanner/title-banner";

export default function InstallPage() {
  return (
    <>
      <TitleBanner
        title="Introduction"
        className=" text-2xl sm:text-4xl"
        content={<p className="">Welcome to the Express.ts documentation!</p>}
      />
    </>
  );
}
