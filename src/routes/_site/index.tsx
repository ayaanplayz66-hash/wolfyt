import { createFileRoute } from "@tanstack/react-router";
import FinalCta from "./-home/final-cta.tsx";
import GrowthShowcase from "./-home/growth-showcase.tsx";
import Hero from "./-home/hero.tsx";
import PortfolioShowcase from "./-home/portfolio-showcase.tsx";
import Testimonials from "./-home/testimonials.tsx";
import WhyChooseUs from "./-home/why-choose-us.tsx";
import WorkingProcess from "./-home/working-process.tsx";

export const Route = createFileRoute("/_site/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioShowcase />
      <WorkingProcess />
      <WhyChooseUs />
      <GrowthShowcase />
      <Testimonials />
      <FinalCta />
    </>
  );
}
