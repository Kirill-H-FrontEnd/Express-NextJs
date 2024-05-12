import { Hero } from "./components/hero/Hero";
import { LearnCards } from "./components/learnCards/LearnCards";
import { Reviews } from "./components/reviews/Reviews";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Banner } from "@/components/ui/banner";
export default function Home() {
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
}
