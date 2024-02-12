import { Banner } from "@/components/ui/banner";
import { Hero } from "./components/hero/Hero";
import { LearnCards } from "./components/learnCards/LearnCards";

const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <LearnCards />
      <Banner
        title="Do you want to be aware of all the updates?"
        supTitle="Our News"
        text="Subscribe to our newsletters and always be aware of all updates!"
        btnValue="Subscribe"
        isActions
      />
    </>
  );
};
export default HomePage;
