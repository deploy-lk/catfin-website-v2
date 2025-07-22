"use client";

import { motion } from "framer-motion";
import {
  // Shield,
  Building2,
  Phone,
  Mail,
  MapPin,
  User,
  // FileText,
  ExternalLink,
  // Globe,
  // MessageSquare,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import { lenders, Lender } from "./lendersData";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const LenderSection = ({ lender }: { lender: Lender }) => {
  const contactDetails = [
    {
      icon: <User className="w-6 h-6" />,
      label: "Grievance Redressal Officer",
      value: lender.grievanceOfficer.name,
      subValue: lender.grievanceOfficer.title,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email Address",
      value: lender.grievanceOfficer.email1,
      subValue: lender.grievanceOfficer.email2,
      isEmail: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Contact Number",
      value: lender.grievanceOfficer.contactNumber,
      isPhone: true,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Office Address",
      value: lender.grievanceOfficer.address.split("\n")[0],
      subValue: lender.grievanceOfficer.address.split("\n").slice(1).join("\n"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-20"
    >
      {/* Company Information */}
      <motion.div {...fadeInUp} className="mb-12">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
          <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardTitle className="flex items-center gap-3">
              <Building2 className="w-6 h-6" />
              Company Information ({lender.brandName})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Brand Name
                  </h3>
                  <p className="text-gray-700">{lender.brandName}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Legal Name
                  </h3>
                  <p className="text-gray-700">{lender.legalName}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                  <p className="text-gray-700">
                    <a
                      href={lender.companyInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 underline flex items-center gap-1"
                    >
                      {lender.companyInfo.website}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Registered Office
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {lender.companyInfo.registeredOffice}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">
                    <a
                      href={`tel:${lender.companyInfo.phone.replace(
                        /\s/g,
                        ""
                      )}`}
                      className="text-red-500 hover:text-red-600 underline"
                    >
                      {lender.companyInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Grievance Officer Details */}
      <motion.div {...fadeInUp} className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Nodal Grievance Redressal Officer ({lender.brandName})
        </h3>
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md max-w-4xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardTitle className="flex items-center gap-3">
              <User className="w-6 h-6" />
              Grievance Redressal Officer Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {detail.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {detail.label}
                    </h3>
                    {detail.isEmail ? (
                      <div className="space-y-1">
                        <p className="text-gray-700">
                          <a
                            href={`mailto:${detail.value}`}
                            className="text-red-500 hover:text-red-600 underline"
                          >
                            {detail.value}
                          </a>
                        </p>
                        {detail.subValue && (
                          <p className="text-gray-700">
                            <a
                              href={`mailto:${detail.subValue}`}
                              className="text-red-500 hover:text-red-600 underline"
                            >
                              {detail.subValue}
                            </a>
                          </p>
                        )}
                      </div>
                    ) : detail.isPhone ? (
                      <p className="text-gray-700">
                        <a
                          href={`tel:${detail.value.replace(/\s/g, "")}`}
                          className="text-red-500 hover:text-red-600 underline"
                        >
                          {detail.value}
                        </a>
                      </p>
                    ) : (
                      <div>
                        <p className="text-gray-700 whitespace-pre-line">
                          {detail.value}
                        </p>
                        {detail.subValue && (
                          <p className="text-gray-600 text-sm whitespace-pre-line">
                            {detail.subValue}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="defaultBox"
                  size="lg"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      `mailto:${lender.grievanceOfficer.email1}`,
                      "_blank"
                    )
                  }
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                <Button
                  variant="outlineBox"
                  size="lg"
                  className="flex items-center gap-2"
                  onClick={() =>
                    window.open(
                      `tel:${lender.grievanceOfficer.contactNumber.replace(
                        /\s/g,
                        ""
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Links */}
      <motion.div {...fadeInUp} className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Quick Links & Resources ({lender.brandName})
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lender.quickLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-md group-hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                      {link.icon}
                    </div>
                    {link.title}
                    {link.external && (
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {link.description}
                  </p>
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-medium text-sm"
                  >
                    Visit Link
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-b border-gray-300 my-16"></div>
    </motion.div>
  );
};

const LenderGrievancesDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-red-200 rounded-full opacity-10"
          animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50], y: [-25, 25, -25] }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-row flex-wrap justify-center gap-6 relative"
            >
              {lenders.map((lender) => (
                <div
                  key={lender.id}
                  className="w-32 h-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center p-4"
                >
                  <Image
                    src={lender.logo}
                    alt={`${lender.brandName} Logo`}
                    width={120}
                    height={120}
                    className="object-contain"
                    priority
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lender Grievances{" "}
            <span className="text-red-500 relative">
              Details
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Complete grievance redressal information for our partner lenders.
            Our dedicated teams are committed to resolving your concerns
            promptly and fairly.
          </p>
        </motion.div>

        {/* Dynamic Lender Sections */}
        {lenders.map((lender) => (
          <LenderSection key={lender.id} lender={lender} />
        ))}

        {/* Grievance Process (This section seems global, so we'll keep it as-is or make it dynamic) */}
        <motion.div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Grievance Resolution Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lenders[0].grievanceProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-md group-hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      <span className="text-xl font-bold">{process.step}</span>
                    </div>
                    <CardTitle className="flex items-center justify-center gap-2 text-lg">
                      {process.icon}
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed text-center">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Important Notice</h3>
                  <p className="text-amber-100 leading-relaxed">
                    This grievance redressal mechanism is specifically designed
                    for FinTech and Digital Lending related complaints. For the
                    best resolution experience, please provide complete details
                    about your concern including loan reference numbers,
                    transaction IDs, and relevant documentation when filing your
                    complaint.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default LenderGrievancesDetailsPage;
