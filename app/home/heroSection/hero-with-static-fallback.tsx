import { Suspense } from "react";
import { HeroContent } from "./hero-content";
import { StaticHeroContent } from "./static-hero-content";
import { ShuffleGrid } from "./shuffle-grid";

const HeroWithStaticFallback = ({
  useStatic = false,
}: {
  useStatic?: boolean;
}) => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
      {useStatic ? (
        <StaticHeroContent />
      ) : (
        <Suspense fallback={<StaticHeroContent />}>
          <HeroContent />
        </Suspense>
      )}

      <div className="relative">
        <Suspense
          fallback={
            <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-full rounded-lg bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          }
        >
          <ShuffleGrid />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default HeroWithStaticFallback;
