import ShuffleHero from "./heroSection/shuffle-hero";
import CompanyInfo from "./companyInfo/company-info";
import HorizontalScrollSection from "./horizontalScroll/horizontal-scroll-client";
import CompanyMetric from "./company-metric";
import ApproachSection from "./approach-section";
import PartnersSection from "./partners-section";

export default function Home() {
  return (
    <div>
      <ShuffleHero />
      <CompanyInfo />
      <HorizontalScrollSection />
      <CompanyMetric />
      <ApproachSection />
      <PartnersSection />
    </div>
  );
}
