"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Lock,
  Archive,
  Trash2,
  FileText,
  Server,
  HardDrive,
  Cloud,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataStoragePolicyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const policyItems = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data on Protected Storage",
      points: [
        "Data (Protected Confidential) will be stored only in approved locations and on approved equipment or storage facilities.",
        "On-roll employees should refrain from making duplicate copies or shadow files of authoritative data resources.",
        "Temporary duplicate copies of electronic data created for legitimate reasons must be protected in a like manner to the authoritative data, and removed in a timely manner.",
        "Standards for storing electronic data containing sensitive data should be created and periodically reviewed.",
        "Standards for storing hardcopy containing sensitive data should be created and periodically reviewed.",
        "Periodic reviews should be performed by Security Assurance to ensure compliance with data management policies, standards, and procedures.",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Backups and Off-site Storage",
      points: [
        "All data located on our own IT Resources will be backed-up on a regular basis consistent with data classification standards applicable to the data being backed-up.",
        "Backups of data whose loss would impact the operation or viability of the company confidential matters will be taken off-site or written off-site to a secure location in a timely manner.",
        "Any backup media containing confidential data taken off-site or backup data sent off-site will be encrypted.",
      ],
    },
    {
      icon: <Archive className="w-6 h-6" />,
      title: "Data Storage",
      points: [
        "The need to retain data in locations will be reviewed on an ongoing basis.",
        "Data no longer needed for routine operations, but which must be retained, will be archived in a timely manner.",
        "The management & IT supervisor representative will develop criteria for deciding when data can be archived.",
        "They will also develop procedures for archiving of data.",
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Data Retention",
      points: [
        "Data Stewards and Data Managers will be knowledgeable about standards, and procedures regarding retention of data.",
        "Data Managers & Record Retention Specialists will develop procedures to ensure that required data is always accessible, especially as backup media ages, previously supported media is discontinued, supported data formats and standards change, and security controls change.",
      ],
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Data Disposal",
      points: [
        "The need to retain operational and archived data will be reviewed on an ongoing basis.",
        "Data no longer needed for routine operations and which need not be retained in archive will be destroyed in a timely manner.",
        "Archived data which need no longer be retained will be destroyed in a timely manner in compliance with State record retention policies.",
        "Data managers in collaboration with functional Record Retention Specialists will develop procedures for disposing of data in compliance with monthly & yearly record retention schedules.",
      ],
    },
  ];

  const additionalGuidelines = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Paper Storage",
      description:
        "Data stored on paper should be kept in a secure place where unauthorized people cannot access it. Printouts should be shredded and disposed off securely.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Electronic Protection",
      description:
        "Data must be protected from unauthorized access, accidental deletion and malicious hacking attempts with AD passwords changed periodically.",
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      title: "Removable Media",
      description:
        "Data stored on removable media should be kept locked away securely when not being used and only stored on designated drives and servers.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Server Security",
      description:
        "Servers containing personal data should be sited in a secure location and protected by approved security software and firewalls.",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Backup Procedures",
      description:
        "Data should be backed up frequently with regular testing, either in authorized shared drives accessible via company LAN/VPN or on One Drive.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-red-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-25, 25, -25],
          }}
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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Data Storage{" "}
            <span className="text-red-500 relative">
              Policy
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            All institutional data will be stored, backed-up, archived and
            disposed of in a manner consistent with its sensitivity,
            requirements and best practices. Data classification is a key
            component for making consistent and appropriate decisions related to
            data storage and retention.
          </p>
        </motion.div>

        {/* Purpose Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="text-red-500" />
                Purpose & Scope
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The purpose of this policy is to direct the implementation of
                standards and procedures for storing, archiving, and disposing
                of institutional data. Unneeded non-authoritative data
                (duplicate copies, outdated records, non-business-related files)
                accumulate in operational locations need to be removed when no
                longer needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Purging not only saves IT resources, but also avoids the
                possibility of compromising sensitive data in these sources that
                may not be as well protected as the authoritative masters.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Roles Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Roles & Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Database className="text-red-500" />
                    Records Retention Specialist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The functional Records Retention Specialist keep abreast of
                    record retention requirements, and advise functional and
                    technical areas about those requirements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="text-red-500" />
                    Security Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Security Assurance reviews and evaluates functional areas
                    for compliance with documented policies and procedures.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Policy Provisions */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Specific Provisions
          </h2>
          <div className="space-y-8">
            {policyItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                    <CardTitle className="flex items-center gap-3">
                      {item.icon}
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {item.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: pointIndex * 0.1,
                          }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Guidelines */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-full font-semibold mb-4"
            >
              <AlertTriangle className="w-5 h-5" />
              IMPORTANT ADDITIONAL GUIDELINES
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalGuidelines.map((guideline, index) => (
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
                        {guideline.icon}
                      </div>
                      {guideline.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {guideline.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default DataStoragePolicyPage;
