"use client";

import { motion } from "framer-motion";

export const CompanyInfoClient = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Who are we?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-500 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <article className="bg-white rounded-2xl p-12 shadow-lg border border-gray-200 relative overflow-hidden">
          <div className="relative z-10 space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              <span className="text-red-600 font-bold">Catfin</span> is a tech
              platform that provides complete end to end digital solution of
              Lending to SMEs & Businesses. As this is the major hurdle
              preventing SME&apos;s from taking the entrepreneurial plunge is
              capital denial.
            </p>

            <p>
              Catfin is proud of filling this gap and assisting entrepreneurs on
              their growth Journey. Catfin envisions to become the first choice
              amongst SMEs for quick and convenient Business Loans and
              Financials Support which enable them to take bigger loans from the
              banks.
            </p>

            <p>
              Catfin is focused on{" "}
              <span className="font-semibold text-red-600">
                Unsecured Business Loan
              </span>
              ,{" "}
              <span className="font-semibold text-red-600">
                Supply Chain Finance
              </span>
              ,{" "}
              <span className="font-semibold text-red-600">
                Working Capital
              </span>
              , <span className="font-semibold text-red-600">Home Loan</span>{" "}
              and more in Supporting SMEs with Secured Lines as well to meet
              their financial requirements.
            </p>

            <p>
              Catfin is a key player in enabling businesses for smooth business
              operations by providing financial solutions through digital
              platforms.
            </p>
          </div>
        </article>
      </motion.div>
    </>
  );
};
