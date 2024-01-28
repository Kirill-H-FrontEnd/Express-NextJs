import { Banner } from "@/components/ui/banner";
import { Hero } from "./components/hero/Hero";

const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <Banner
        title="Do you want to be aware of all the updates?"
        supTitle="Our News"
        text="Subscribe to our newsletters and always be aware of all updates!"
        href="/"
        btnValue="Subscribe"
        isActions
      />
    </>
  );
};
export default HomePage;
