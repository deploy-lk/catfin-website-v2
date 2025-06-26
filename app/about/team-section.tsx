"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { Linkedin, Mail, Phone } from "lucide-react"
import { teamData } from "./team-data";

export const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-10 left-1/4 w-64 h-64 border border-red-200 rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 border border-red-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Meet our{" "}
            <span className="text-red-600 relative">
              expert team
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-red-500 rounded opacity-20"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our leadership team brings decades of combined experience in
            financial services, chartered accountancy, and business development.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {teamData.map((member, index) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  {/* Header with Photo and Basic Info */}
                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg ring-4 ring-red-100 group-hover:ring-red-200 transition-all duration-300">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.position}`}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                          priority={index < 4}
                        />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {member.position}
                      </div>

                      {/* Contact Icons */}
                      {/* <div className="flex space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors duration-300"
                          aria-label={`${member.name} LinkedIn profile`}
                        >
                          <Linkedin className="w-4 h-4 text-gray-600 hover:text-red-600" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors duration-300"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4 text-gray-600 hover:text-red-600" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors duration-300"
                          aria-label={`Call ${member.name}`}
                        >
                          <Phone className="w-4 h-4 text-gray-600 hover:text-red-600" />
                        </motion.button>
                      </div> */}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                    <div className="pl-6">
                      <p className="text-gray-600 leading-relaxed text-base">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  {/* Experience Highlight */}
                  {member.experience && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border border-red-200">
                      <div className="text-sm font-semibold text-red-800 mb-1">
                        Key Experience
                      </div>
                      <div className="text-red-700 text-sm">
                        {member.experience}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
