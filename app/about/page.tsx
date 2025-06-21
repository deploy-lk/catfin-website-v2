import type { Metadata } from "next";
import { Suspense } from "react";
import { AboutHero } from "./about-hero";
import { TeamSection } from "./team-section";
import { VisionSection } from "./vision-section";

export const metadata: Metadata = {
  title: "About| Catfin",
  description:
    "Catfin as a brand owns multiple companies for the Management Systems Covering Quality Management System and Environmental Management System for which patents have been granted and applied for.",
};
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
