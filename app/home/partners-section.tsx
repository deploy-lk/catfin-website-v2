"use client";
import PARTNER_MARQUEE from "@/utils/partnersMarquee";
import Image from "next/image";
import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-100 to-red-50relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-red-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-red-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </motion.div>

        {/* Grid layout for partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {PARTNER_MARQUEE.map((partner, index) => (
            <motion.div
              key={`${partner}-${index}`}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 h-32 flex flex-col justify-center items-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={partner.image}
                alt={partner.name}
                className="object-contain mb-1"
                height={48}
                width={undefined}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
