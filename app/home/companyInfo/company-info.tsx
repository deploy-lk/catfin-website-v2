import { Suspense } from "react";
import { CompanyInfoClient } from "./company-info-client";
import { StaticCompanyInfo } from "./static-company-info";

const CompanyInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-red-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-red-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-red-400 to-red-400 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Client-side animated component with static fallback */}
        <Suspense fallback={<StaticCompanyInfo />}>
          <CompanyInfoClient />
        </Suspense>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Catfin",
              description:
                "Catfin is a tech platform that provides complete end to end digital solution of Lending to SMEs & Businesses.",
              url: "https://catfin.in",
              logo: "https://www.catfin.in/logos/catfin.png",
              foundingDate: "2020",
              areaServed: "India",
              serviceType: [
                "Unsecured Business Loan",
                "Supply Chain Finance",
                "Working Capital",
                "Home Loan",
                "Financial Technology Services",
              ],
              knowsAbout: [
                "Small and Medium Enterprises",
                "Business Lending",
                "Financial Technology",
                "Digital Lending Solutions",
              ],
              slogan: "Financial POWER for Businesses",
            }),
          }}
        />
      </div>
    </section>
  );
};

export default CompanyInfo;
