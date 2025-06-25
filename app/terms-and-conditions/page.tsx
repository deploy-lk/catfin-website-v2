"use client";
import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  Shield,
  Users,
  Lock,
  Gavel,
  Phone,
  Mail,
  CreditCard,
  Building,
  Smartphone,
  UserCheck,
  Ban,
  CheckCircle,
  XCircle,
  Scale,
  Copyright,
  Monitor,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsAndConditionsPage = () => {
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

  const definitions = [
    {
      term: "CATFIN",
      definition:
        "CATEYE ADVISORS PRIVATE LIMITED (CATFIN), a financial technology company that works with multiple lenders to get best loan offers for their customers.",
    },
    {
      term: "Application or APP",
      definition:
        "The mobile application created, developed, and designed by 'CATFIN' or its software service provider for providing the Financial Services.",
    },
    {
      term: "Customer(s)/Users",
      definition:
        "Any person who accesses, downloads, uses, views the Platform and the Services.",
    },
    {
      term: "Loan or Facility",
      definition:
        "The loan that you may apply for through the Platform and which may be sanctioned and granted by a lender on our platform, subject to the applicable terms and conditions of the Loan/Facility Agreement.",
    },
    {
      term: "Online Stores",
      definition:
        "Windows Store, Android Google Play, iOS App store or any other online store or portal where the APP will be made available by CATFIN to the Users, from time to time.",
    },
    {
      term: "Platform",
      definition: "The Website and/or APP collectively.",
    },
    {
      term: "Services",
      definition:
        "The services of facilitating the connection between Users and Lenders for potential loans, through the Platform.",
    },
    {
      term: "Third Party Platforms",
      definition:
        "Social networking platforms, such as Facebook, WhatsApp, LinkedIn, and other similar platforms.",
    },
    {
      term: "User Data",
      definition:
        "Any data, information, documents, or materials, including personal information submitted with CATFIN prior to or during the use of the Services.",
    },
    {
      term: "Website",
      definition:
        "The website managed and operated by CATFIN or its partners for the provision of Services.",
    },
  ];

  const termsSection = [
    {
      id: 2,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By visiting the Website, you agree that these Terms and Conditions shall be a legally binding agreement between User and us/CATFIN. These User Terms and Conditions govern your use of the Website and mobile application (collectively referred to as the 'Platform'), which is owned and operated by CATFIN.",
        "As a user ('User' or 'you') of the Platform, you understand that CATFIN is a digital platform that facilitates the sharing of loan leads with multiple lenders. CATFIN's platform provides access between multiple Users and financial institutions, data partners, and other partner lenders, service providers etc., with a view to facilitate lending and borrowing activities.",
        "CATFIN reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms, at any time without any prior written notice to the User. It is the User's responsibility to review these Terms periodically for any updates/ changes. User's continued use of the Website or APP following the modification of these Terms will imply the acceptance by the User of the revisions.",
        "The Website or APP may contain links to other Third-Party Platforms. Such sites will contain their own separate terms and conditions. Your access to and use of such sites will require acceptance of these separate terms and conditions.",
        "You agree to use the Website/APP only for lawful purposes and agree not to take any action that might compromise the security of the Website/APP. You agree not to add to, subtract from, or otherwise modify the content, or to attempt to access any content that is not intended for you.",
        "Any violation of these Terms may result in legal liability upon you. Your use of CATFIN's Website/APP means you are consenting to these Terms and agree to be legally bound by it. You acknowledge and agree that nothing in these Terms shall have the effect of transferring the ownership of any copyrights, trademarks, service marks, trade names, or other proprietary rights in the Website or APP or any other Material or any part thereof to you or any third party.",
      ],
    },
    {
      id: 3,
      icon: <Building className="w-6 h-6" />,
      title: "Services",
      content: [
        "Through the Services, you may apply for a Loan, subject to the fulfillment of the eligibility criteria laid down by the respective lenders. If You wish to use the Platform, You will be required to furnish certain information and details, including Your name, email id, contact number, and any other information deemed necessary by CATFIN and/or the Lenders.",
        "CATFIN assures you that the information made available to us will be kept in strict confidentiality and we will use the information only to help us to service You better, to provide You with products and services that you may have requested, and to inform you about other products and services that may be of interest to You.",
        "You authorize CATFIN to keep you informed through telephone, SMS, e-mail, WhatsApp, or any other means of communication, of all Promotional schemes/offers; however, the same may be subject to CATFIN's discretion.",
        "CATFIN is a facilitator and is not responsible for the approval or denial of a loan, nor the terms and conditions of any loan offered by a lender.",
      ],
    },
    {
      id: 4,
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy",
      content: [
        "CATFIN collects certain information from You in order to provide the Services. CATFIN's use of Your personal information is governed in accordance with the Privacy Policy located on the CATFIN website.",
        "Data Collection: CATFIN collects personal data, sensitive personal data, location information, device information, and other information. This includes but is not limited to name, email, phone number, financial data, KYC documents, and social relationships.",
        "Data Usage: Your data is used to personalize your platform experience, respond to inquiries, deliver marketing communications, offer products/services, evaluate eligibility for loans, and comply with legal requirements. CATFIN may also use your information for data analysis, fraud detection, and to improve its platform.",
        "Data Sharing: CATFIN may share your information with subsidiaries, affiliates, third-party service providers, lenders, and regulatory authorities. This is done to facilitate loan processing and to comply with legal obligations.",
        "Data Retention: CATFIN may retain your personal data as long as necessary to provide services, comply with legal requirements, resolve disputes, and enforce agreements.",
        "Data Security: CATFIN uses reasonable security measures to protect your data from unauthorized access or disclosure. However, CATFIN cannot guarantee absolute security.",
        "User Responsibility: Users are responsible for the security of their account details and preventing unauthorized or illegal use. Any liability resulting from such use is the user's responsibility.",
        "Third Party Links: The platform may contain links to third-party websites with their own terms and conditions and privacy policies, and CATFIN is not responsible for the content or practices of those sites.",
        "Lending Partners: Refers to any Non-Banking Financial Companies (NBFCs), banks, or financial technology firms that collaborate with CATFIN to offer enhanced loan products and services to our customers. These partners are integral to our network, assisting in the provision and management of credit in accordance with applicable regulations and agreed-upon standards to ensure customer satisfaction and compliance.",
      ],
    },
    {
      id: 5,
      icon: <Smartphone className="w-6 h-6" />,
      title: "License and Access",
      content: [
        "In order to use the Services, you are required to download and install the APP or access the Website of CATFIN. For this purpose, you represent and warrant that you are of the age of majority as per the applicable laws to which you are subject to and are competent to understand, enter into, and comply with these Terms.",
        "This license is non-transferable and does not permit any resale or commercial use of this Platform or its contents.",
        "The Platform or any portion of the Platform may not be reproduced, duplicated, copied, sold, resold, visited, distributed, or otherwise exploited for any commercial purpose without the express written consent of CATFIN or its affiliates.",
        "You are solely responsible for the capability of your electronic devices and internet connection. CATFIN is not responsible if updates to the app are not made that cause certain features or functionalities to be unavailable.",
      ],
    },
    {
      id: 6,
      icon: <Ban className="w-6 h-6" />,
      title: "Prohibited Uses",
      content: [
        "In addition to other prohibitions as set forth in these Terms & Conditions, You are prohibited from using the Platform for any unlawful purpose. This includes but is not limited to:",
        "Violating any regulations, rules, laws, or local ordinances.",
        "Infringing upon intellectual property rights.",
        "Harassing, abusing, or discriminating against others.",
        "Submitting false or misleading information.",
        "Transmitting viruses or any other type of malicious code.",
        "Collecting or tracking personal information of others.",
        "Any obscene or immoral purpose.",
        "Interfering with the security features of the Service.",
        "CATFIN reserves the right to terminate Your use of the Service for violating any of the prohibited uses.",
      ],
    },
    {
      id: 7,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Consent",
      content: [
        "You authorize CATFIN to collect and store the User Data through the Platform. During the Application process, you shall be required to share and upload the User Data on the Application Form provided on the Platform.",
        "You agree that the Personal Information shall always be accurate, correct, and complete and in the event of any changes to the information shared by You, You shall be responsible for forthwith notifying the said changes to us.",
        "You authorize CATFIN to track, fetch and use the User Data, including your Personal Information, for the purpose of authentication and any updates with regards to your credentials.",
        "You also authorize CATFIN to get your credit information report from one or more Credit Information Companies.",
        "You consent to CATFIN obtaining your Aadhaar details, PAN details, Udyam number, and other identity and business proofs.",
        "You authorize CATFIN to verify your Aadhaar and other identity documents.",
        "You give consent for CATFIN to contact you via various channels, including email, phone, SMS, and WhatsApp, and to disclose your information to affiliates and service providers for marketing purposes.",
        "You authorize CATFIN to collect, store, share, obtain, and authenticate any aspect of your personal and business information.",
      ],
    },
    {
      id: 8,
      icon: <XCircle className="w-6 h-6" />,
      title: "Termination",
      content: [
        "CATFIN reserves its rights to terminate these Terms in the event:",
        "You breach any provision of these Terms.",
        "CATFIN is required to do so under law.",
        "CATFIN chooses to discontinue the Services.",
        "The license granted to use the Website or APP expires.",
        "Upon termination of these Terms, the rights and licenses granted to you under these Terms shall cease to exist, and you must forthwith stop using the Platform and the Services.",
      ],
    },
    {
      id: 9,
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Disclaimer of Warranties",
      content: [
        "You expressly understand and agree that your use of the Services and the Platform is at your sole risk. The Services and the Platform are provided on an 'as is' and 'as available' basis. CATFIN expressly disclaims all warranties of any kind.",
        "Any material downloaded or otherwise obtained through the access or use of the Platform is at your own discretion and risk.",
        "CATFIN makes no warranty that the Platform or the Services will meet your requirements or be available on an uninterrupted, timely, secure, or error-free basis.",
        "The Services are intended for personal, non-commercial use. You shall be solely responsible for the use, misuse, improper usage of the Services and the Platform.",
      ],
    },
    {
      id: 10,
      icon: <Shield className="w-6 h-6" />,
      title: "Indemnity",
      content: [
        "You agree to indemnify and hold CATFIN, and its subsidiaries, affiliates, officers, agents, Service Providers, or other partners, and employees, harmless from any claim or demand, including attorneys' fees, made by any third party due to or arising out of:",
        "Your violation of these Terms.",
        "Your violation of any rights of other users of the Platform.",
        "Your use or misuse of the Platform or the Services.",
        "Your violation of applicable laws.",
      ],
    },
    {
      id: 11,
      icon: <Scale className="w-6 h-6" />,
      title: "Limitations of Liability",
      content: [
        "You expressly understand and agree that CATFIN, its directors, officers, employees, representatives, or the service provider, shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages.",
      ],
    },
    {
      id: 12,
      icon: <Mail className="w-6 h-6" />,
      title: "Grievance Redressal",
      content: [
        "In the event of any grievance with relation to these Terms and Conditions, You may write to the grievance officer at the email address provided on the CATFIN website.",
      ],
    },
    {
      id: 13,
      icon: <CreditCard className="w-6 h-6" />,
      title: "User Consent for Delivery of Product (Credit Information)",
      content: [
        "By agreeing to these terms, you also acknowledge and agree to the following in connection with obtaining your credit information from TransUnion CIBIL or other Credit Information Companies:",
        "You agree that CATFIN can receive your credit information on your behalf and use it in line with CATFIN's policies.",
        "You understand and authorize CATFIN to obtain your Consumer Credit Information.",
        "You release Credit Information Companies (CIC) from any liability for any issues related to the delivery of this information to CATFIN.",
        "You agree that the Product (your credit information) is provided on an 'AS-IS', 'AS AVAILABLE' basis and CIC expressly disclaims all warranties.",
        "By consenting to the terms set forth herein, you agree to the disclosure of your personal, business, and KYC information to the lending partners of CATFIN. Additionally, you authorize these partners to retrieve your credit bureau information from Credit Information Companies (CIC) and KYC details from their respective service providers.",
      ],
    },
    {
      id: 14,
      icon: <FileText className="w-6 h-6" />,
      title: "Loan Application Terms and Undertaking",
      content: [
        "By applying for a loan through the platform, you also agree to the following:",
        "The loan application does not guarantee approval.",
        "The final terms and conditions will be as detailed in the financing documents provided by the lender.",
        "You confirm that all information provided is true and accurate.",
        "You agree that the loan will only be used for the purpose it is sanctioned.",
        "You authorize CATFIN to obtain your information from various sources.",
        "You agree that CATFIN can share your KYC data with the Centralized KYC Registry (CKYCR).",
      ],
    },
    {
      id: 15,
      icon: <Copyright className="w-6 h-6" />,
      title: "Intellectual Property Rights",
      content: [
        "All content on the Platform is the property of CATFIN or its content suppliers and is protected by intellectual property laws.",
        "You shall not modify any digital copies of the materials you have downloaded, and you must not use any graphics separately from any accompanying text.",
      ],
    },
    {
      id: 16,
      icon: <Monitor className="w-6 h-6" />,
      title: "Advertisements",
      content: [
        "CATFIN may use third-party advertising companies to serve advertisements to you when you visit the Platform.",
      ],
    },
    {
      id: 17,
      icon: <Users className="w-6 h-6" />,
      title: "Users Under 18 Years",
      content: [
        "The Platform is not intended for Users under the age of 18 years.",
      ],
    },
    {
      id: 18,
      icon: <Phone className="w-6 h-6" />,
      title: "Contacting Us",
      content: [
        "Please contact CATFIN through the 'contact us' link on the website for any queries or updation of your information.",
      ],
    },
    {
      id: 19,
      icon: <Calendar className="w-6 h-6" />,
      title: "Updation of Policy",
      content: [
        "CATFIN will publish any updates to the Policy on the website. Your continued use of the Platform will mean that you accept the updated policy.",
      ],
    },
    {
      id: 20,
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Disclaimer",
      content: [
        "CATFIN has made an effort to ensure the accuracy of the content on the Platform, but makes no guarantees regarding its authenticity or accuracy.",
        "CATFIN is not liable for any damages resulting from the use of the platform or any content found on it.",
      ],
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
              className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <Gavel className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms &{" "}
            <span className="text-red-400 relative">
              Conditions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-400 rounded"></div>
            </span>
          </h1>
        </motion.div>

        {/* Important Notice */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-gradient-to-r from-red-400 to-red-500 text-white">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">IMPORTANT NOTICE</h2>
                  <p className="text-red-100 leading-relaxed">
                    PLEASE READ THESE TERMS AND CONDITIONS (&quot;Terms&quot;)
                    CAREFULLY. BY ACCESSING THIS SITE, YOU AGREE TO BE BOUND BY
                    THE TERMS AND CONDITIONS PROVIDED BELOW. BY CLICKING ON THE
                    LINK OF TERMS AND CONDITIONS ON THE APP OR WEBSITE OR BY
                    DOWNLOADING, INSTALLING OR OTHERWISE USING THE SERVICES, YOU
                    ACCEPT AND AGREE TO THE TERMS CONTAINED HEREIN. IF YOU DO
                    NOT AGREE TO THESE TERMS, DO NOT CLICK OR DOWNLOAD, INSTALL
                    OR USE THE SERVICES.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Definitions Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            1. Definitions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {definitions.map((def, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg border-0 bg-white/80 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">
                      &quot;{def.term}&quot;
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {def.definition}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Terms & Conditions
          </h2>
          <div className="space-y-8">
            {termsSection.map((section) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                className="relative"
              >
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-red-400 to-red-500 text-white">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{section.id}</span>
                      </div>
                      {section.icon}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {section.content.map((point, pointIndex) => (
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
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
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
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
