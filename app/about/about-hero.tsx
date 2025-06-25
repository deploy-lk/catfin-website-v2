"use client";

import { motion } from "framer-motion";
// import { Building2, Users, Globe, Award } from "lucide-react"

export const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 border border-red-200 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-red-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-100 to-red-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
            Get to know about{" "}
            <span className="text-red-600 relative">
              our company
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-red-500 rounded opacity-20"></div>
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-400/10 to-red-600/10 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="text-red-600 font-bold text-xl">Catfin</span>{" "}
                as a brand owns multiple companies for the Management Systems
                Covering Quality Management System and Environmental Management
                System for which patents have been granted and applied for.
              </p>

              <p>
                We have our branches and associates based in{" "}
                <span className="font-semibold text-red-600">
                  Madhya Pradesh, Maharashtra, Haryana, Uttarakhand, Uttar
                  Pradesh, Bihar, Jharkhand, Karnataka, West Bengal, Kerala,
                  Rajasthan, Chandigarh, Punjab,
                </span>{" "}
                and we put in all the efforts to economize registration costs
                without compromising the quality.
              </p>

              <p>
                Catfin is backed by professional management and possesses a
                technological capability through well-qualified and highly
                experienced personnel. Thus our team provides value-added
                service to their valued clients.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
