import { Banner } from "@/components/ui/banner";
import { Hero } from "./components/hero/Hero";
import { LearnCards } from "./components/learnCards/LearnCards";
import { Reviews } from "./components/reviews/Reviews";
import { Dashboard } from "./components/dashboard/Dashboard";

const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <Dashboard />
      <LearnCards />
      <Banner
        title="Do you want to be aware of all the updates?"
        supTitle="Our News"
        text="Subscribe to our newsletters and always be aware of all updates!"
        btnValue="Subscribe"
        isActions
      />
      <Reviews />
    </>
  );
};
export default HomePage;
