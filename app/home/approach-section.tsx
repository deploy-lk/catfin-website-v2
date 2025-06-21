"use client";
import { motion } from "framer-motion";
import { Building, TrendingUp, Shield } from "lucide-react";

const approaches = [
  {
    number: "1",
    icon: Building,
    text: "Catfin has perfect bonding with various bank's offering multiple financing products based on the data at the lowest interest rate. Our product not only helps you to take a new credit line & loan but also transfers your existing loan to the lowest rate of interest.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "2",
    icon: TrendingUp,
    text: "We work with transparency with the help of technology and provide end to end customised solutions which help businesses to improve their finance and growth.",
    color: "from-green-500 to-green-600",
  },
  {
    number: "3",
    icon: Shield,
    text: "Catfin stands as the epitome of dedication, expertise and the drive to provide our customers with the service for which they chose us over the rest.",
    color: "from-purple-500 to-purple-600",
  },
];

const ApproachSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Design */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-red-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border-2 border-red-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-400/10 to-red-400/10 rounded-full blur-3xl"></div>
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
            Our Approach & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Money is the key to fulfilling all needs in Business&apos;s &
            Personal Space both, Hence our life revolves around money and Catfin
            is playing the role of the best arbitrator between loan aspirants &
            financial support. We are the trusting partner of All key
            Bank&apos;s & Business&apos;s & our banks offering great products in
            major locations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Number and Icon */}
              <div className="flex-shrink-0">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-r ${approach.color} flex items-center justify-center shadow-lg mb-4 mx-auto lg:mx-0`}
                >
                  <approach.icon className="w-12 h-12 text-white" />
                </div>
                <div
                  className={`text-6xl font-bold bg-gradient-to-r ${approach.color} bg-clip-text text-transparent text-center lg:text-left`}
                >
                  {approach.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${approach.color
                    .replace("from-", "from-")
                    .replace("to-", "to-")} opacity-10 rounded-full blur-2xl`}
                ></div>

                <div className="relative z-10">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {approach.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
