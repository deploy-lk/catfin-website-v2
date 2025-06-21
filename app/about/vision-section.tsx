"use client";
import { motion } from "framer-motion";

export const VisionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="py-24  bg-gradient-to-br from-red-50 via-white to-red-50 text-black relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Dynamic Background Animations */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(239, 68, 68, 0.3) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating particles */}
        {[
          { left: "10%", top: "20%" },
          { left: "20%", top: "60%" },
          { left: "30%", top: "40%" },
          { left: "40%", top: "80%" },
          { left: "50%", top: "30%" },
          { left: "60%", top: "70%" },
          { left: "70%", top: "50%" },
          { left: "80%", top: "25%" },
          { left: "90%", top: "65%" },
          { left: "15%", top: "85%" },
          { left: "25%", top: "15%" },
          { left: "35%", top: "75%" },
          { left: "45%", top: "35%" },
          { left: "55%", top: "85%" },
          { left: "65%", top: "45%" },
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-red-400/30 rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="max-w-6xl mx-auto" variants={staggerContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Our{" "}
              <span className="text-red-600 relative">
                Vision
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-red-500 rounded opacity-20"></div>
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision Text */}
            <motion.div variants={fadeInUp}>
              <motion.div
                className="bg-gradient-to-br from-red to-white backdrop-blur-lg rounded-3xl p-8 border border-white/40  shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p
                  className="text-lg leading-relaxed mb-8 text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Our value, motto & mission remains to instil the right
                  financial knowledge among our clients and bestow the finest
                  services to individuals seeking credit aid. Leveraging upon
                  new-age technologies, we endeavour to create a financial
                  environment where we can serve a large segment of the
                  population.
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed text-black"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  With the mission to{" "}
                  <motion.span
                    className="font-semibold bg-clip-text text-red-500"
                    whileHover={{ scale: 1.05 }}
                    style={{ display: "inline-block" }}
                  >
                    &apos;help you borrow right&apos;
                  </motion.span>{" "}
                  our core aim remains to impart principled information and
                  bridge the gap between the credit-seeking individuals and
                  authentic lenders.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Statistics with Enhanced Animation */}
            <motion.div className="text-center" variants={fadeInUp}>
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-full w-72 h-72 flex items-center justify-center mx-auto relative overflow-hidden shadow-2xl"
                  whileHover={{
                    boxShadow: "0 0 60px rgba(239, 68, 68, 0.6)",
                  }}
                >
                  {/* Multiple animated background layers */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-400 opacity-50"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-br from-yellow-400 to-red-400 opacity-30 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Pulsing rings */}
                  <motion.div
                    className="absolute inset-8 border-4 border-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                        duration: 1,
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="text-7xl font-bold text-white mb-2"
                        animate={{
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.5)",
                            "0 0 30px rgba(255,255,255,0.8)",
                            "0 0 20px rgba(255,255,255,0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        98%
                      </motion.div>
                      <div className="text-xl font-semibold text-white">
                        Satisfied
                      </div>
                      <div className="text-xl font-semibold text-white">
                        Customers
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.p
                className="mt-8 text-2xl font-bold bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-red-500"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block" }}
              >
                Building trust through excellence
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
