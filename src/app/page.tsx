import { AmbitionBand } from "@/components/AmbitionBand";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { LogicIntro } from "@/components/LogicIntro";
import { LogoMarquee } from "@/components/LogoMarquee";
import { StatsBand } from "@/components/StatsBand";
import { Testimonials } from "@/components/Testimonials";
import { getHomeGridProjects } from "@/data/work";

export default function HomePage() {
  const featured = getHomeGridProjects();

  return (
    <>
      <Hero />
      <StatsBand />
      <FeaturedWork projects={featured} />
      <LogicIntro />
      <LogoMarquee />
      <Testimonials />
      <AmbitionBand />
    </>
  );
}
