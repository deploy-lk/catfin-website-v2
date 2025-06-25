"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LendersConsentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Lenders Details
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-red-500 mx-auto rounded"
          />
        </motion.div>

        {/* DMI Finance Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-6 mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-4 rounded-lg shadow-sm"
          >
            <Image
              src="/dmiNew.png"
              alt="DMI Finance Logo"
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-3xl font-semibold text-gray-900"
          >
            DMI Finance Private Limited
          </motion.h2>
        </motion.div>

        {/* Important Declaration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Important Declaration
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            I declare that my gross household income is greater than Rs. 25,000
            per month.
          </motion.p>
        </motion.div>

        {/* MSME Loan Agreement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            I agree that the loan applied from DMI Finance Private Limited will
            be governed by the{" "}
            <motion.a
              href="https://www.dmifinance.in/msme-undertaking-tnc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              MSME loan application undertaking
            </motion.a>
            .
          </motion.p>
        </motion.div>

        {/* Express Consent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-gray-700 text-lg leading-relaxed mb-6"
          >
            To process my application, I give my express consent to DMI Finance
            for the below:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="space-y-4 text-gray-700 text-lg"
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="flex items-start"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 2.6 }}
                className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"
              />
              <span>To obtain my credit report(s) from credit bureaus</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
              className="flex items-start"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 3 }}
                className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"
              />
              <span>
                To fetch required information for KYC from approved agencies
                including UIDAI
              </span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="flex items-start"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 3.4 }}
                className="w-2 h-2 bg-gray-600 rounded-full mt-3 mr-4 flex-shrink-0"
              />
              <span>
                To reach out to me with personalized offers on products &
                services through SMS, WhatsApp, RCS, Email and telephonic
                calls/bots. This consent will override any registration for DND
                and/ or NDNC
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </main>
    </div>
  );
};

export default LendersConsentPage;
