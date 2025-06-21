import { Suspense } from "react";
import { AboutHero } from "./about-hero";
import { TeamSection } from "./team-section";
import { VisionSection } from "./vision-section";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Suspense
        fallback={<div className="py-20 text-center">Loading team...</div>}
      >
        <TeamSection />
      </Suspense>
      <VisionSection />
    </div>
  );
};

export default About;
