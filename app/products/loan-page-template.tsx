"use client";

import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button/Button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle, Calculator, FileText, Clock } from "lucide-react";

// Add this after the imports

// const optimizedStyles = {
//   transform3d: { transform: "translate3d(0,0,0)" },
//   willChange: { willChange: "transform" },
// }

interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface LoanPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  benefits: string[];
  eligibility: string[];
  interestRate: string;
  maxAmount: string;
  tenure: string;
  processingFee: string;
  heroImage: string;
}

export default function LoanPageTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  eligibility,
  interestRate,
  maxAmount,
  tenure,
  processingFee,
  heroImage,
}: LoanPageProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-gray-600 font-medium"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://app.catfin.in/#/apply-loan/mobile",
                      "_blank"
                    );
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl"
                >
                  Apply Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.open("https://calculator.catfin.in/", "_blank");
                  }}
                  className="border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate EMI
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
            style={{ willChange: "transform" }}
          >
            <motion.div
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative w-full h-[400px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              style={{ willChange: "transform" }}
            >
              <Image
                src={heroImage || "/placeholder.svg"}
                alt={`${title} illustration`}
                width={600}
                height={400}
                className="object-cover w-full h-full rounded-2xl"
                priority
              />

              {/* Floating Info Cards with optimized animations */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
                style={{ willChange: "transform" }}
              >
                <div className="text-xs text-gray-600">Interest Rate</div>
                <div className="text-sm font-bold text-green-600">
                  {interestRate}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
                style={{ willChange: "transform" }}
              >
                <div className="text-xs text-gray-600">Max Amount</div>
                <div className="text-sm font-bold text-blue-600">
                  {maxAmount}
                </div>
              </motion.div>
            </motion.div>

            {/* Optimized background decorations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="absolute -top-4 -right-4 w-32 h-32 bg-red-500 rounded-full -z-10"
              style={{ willChange: "transform" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.04, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500 rounded-full -z-10"
              style={{ willChange: "transform" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
              Why choose our {title.toLowerCase()}?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group"
                style={{ willChange: "transform" }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group-hover:border-red-200">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{
                        rotate: 180,
                        scale: 1.05,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      style={{ willChange: "transform" }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ willChange: "transform" }}
            >
              <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-100 border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Benefits
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="flex items-start"
                        style={{ willChange: "transform" }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Eligibility
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {eligibility.map((criteria, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-start"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{criteria}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Loan Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Loan Details
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold text-purple-600">
                        {interestRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-gray-600">Max Amount</span>
                      <span className="font-semibold text-purple-600">
                        {maxAmount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-gray-600">Tenure</span>
                      <span className="font-semibold text-purple-600">
                        {tenure}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-semibold text-purple-600">
                        {processingFee}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Your {title}?
            </h2>
            <p className="text-xl text-red-100">
              Apply now and get instant approval with competitive rates
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
                  onClick={() => {
                    window.open(
                      "https://app.catfin.in/#/apply-loan/mobile",
                      "_blank"
                    );
                  }}
                >
                  Apply Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
                  onClick={() => router.push("/about")}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
