import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Journey from "./sections/Journey";
import FeatureTour from "./sections/FeatureTour";
import DesignSystem from "./sections/DesignSystem";
import UnderTheHood from "./sections/UnderTheHood";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Problem />
      <Journey />
      <FeatureTour />
      <DesignSystem />
      <UnderTheHood />
      <Footer />
    </main>
  );
}
