import Link from "next/link";

export const StaticHeroContent = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          A platform which provides financial{" "}
          <span className="text-red-500 relative">
            POWER
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded"></div>
          </span>{" "}
          to businesses.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
          Obtain an unsecured business loan from India&apos;s top lenders based
          on your business banking and financing history.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href="/apply"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg text-center"
        >
          Apply Now
        </Link>
        <Link
          href="/learn-more"
          className="border-2 border-red-500 text-red-500 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition-all text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
