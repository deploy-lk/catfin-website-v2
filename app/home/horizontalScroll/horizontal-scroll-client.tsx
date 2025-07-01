"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { scrollItems } from "./scroll-item-data";
import Link from "next/link";

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Desktop
  const x = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["40%", "-65%", "-65%"]
  );

  const headerY = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0, -120]);

  // useEffect(() => {
  //   if (!isMobile) {
  //     const unsubscribe = scrollYProgress.onChange((progress) => {
  //       const section = Math.floor(progress * 8);
  //       setCurrentSection(Math.min(section, 6));
  //     });
  //     return unsubscribe;
  //   }
  // }, [scrollYProgress, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const updateSection = (progress: number) => {
        const section = Math.floor(progress * 8);
        setCurrentSection(Math.min(section, 6));
      };

      const unsubscribe = scrollYProgress.on("change", updateSection);

      return () => unsubscribe();
    }
  }, [scrollYProgress, isMobile]);

  if (isMobile) {
    return (
      <motion.div className="bg-gradient-to-b from-red-50">
        <div className="text-center py-8 px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">We Offer</h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="px-4 pb-8 space-y-6">
          {scrollItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`w-full min-h-[400px] border-2 rounded-2xl p-6 bg-gradient-to-br ${item.bgGradient} shadow-lg relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute top-6 right-6 opacity-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-xl" />
              </div>

              <motion.div
                className="text-5xl font-bold text-red-500 mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {item.number}
              </motion.div>

              <div className="space-y-4 mb-16">
                <motion.h2
                  className="text-2xl font-bold text-gray-800 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  className="text-gray-600 text-base leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {item.description}
                </motion.p>
              </div>

              <div className="absolute bottom-6 left-6 flex space-x-3">
                <motion.button
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold transition-colors duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  onClick={() => {
                    window.open(
                      "https://app.catfin.in/#/apply-loan/mobile",
                      "_blank"
                    );
                  }}
                >
                  Apply Now
                </motion.button>

                <Link href={item.link}>
                  <motion.button
                    className="bg-transparent hover:bg-red-50 text-red-500 px-5 py-2.5 rounded-full font-semibold transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    Check eligibility
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white relative">
      <motion.div
        ref={headerRef}
        className="sticky top-0 z-20 py-6 bg-gradient-to-br from-gray-50 to-white"
        style={{ y: headerY }}
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We Offer
          </motion.h1>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>
      </motion.div>

      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-20 h-[80vh] flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 px-6">
            {scrollItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`min-w-[75vw] md:min-w-[35vw] h-[55vh] border-2 rounded-2xl p-6 bg-gradient-to-br ${item.bgGradient} shadow-lg relative overflow-hidden`}
                initial={{ opacity: 0.7, scale: 0.95 }}
                animate={{
                  opacity: currentSection === index ? 1 : 0.7,
                  scale: currentSection === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-6 right-6 opacity-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-xl" />
                </div>

                <motion.div
                  className="text-5xl md:text-6xl font-bold text-red-500 mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.number}
                </motion.div>

                <div className="space-y-4">
                  <motion.h2
                    className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.title}
                  </motion.h2>

                  <motion.p
                    className="text-gray-600 text-base leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* For the desktop version, replace the buttons with this */}
                <div className="absolute bottom-6 left-6 flex">
                  <motion.button
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-l-full font-semibold transition-colors duration-300 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    onClick={() => {
                      window.open(
                        "https://app.catfin.in/#/apply-loan/mobile",
                        "_blank"
                      );
                    }}
                  >
                    Apply Now
                  </motion.button>

                  <Link href={item.link}>
                    <motion.button
                      className="bg-white/80 hover:bg-red-50 text-red-500 px-5 py-2.5 rounded-r-full font-semibold transition-colors duration-300 border-l-0 border-red-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      Check eligibility
                    </motion.button>
                  </Link>
                </div>
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  {scrollItems.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        dotIndex === index ? "bg-red-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
