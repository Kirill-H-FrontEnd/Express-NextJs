// > Components
import { Hero } from "./components/hero/Hero";
import { LearnCards } from "./components/learnCards/LearnCards";
import { Reviews } from "./components/reviews/Reviews";
import { Dashboard } from "./components/dashboard/Dashboard";
export default function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
      <LearnCards />
      <Reviews />
    </>
  );
}
