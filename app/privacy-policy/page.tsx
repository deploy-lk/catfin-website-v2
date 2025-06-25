"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  FileText,
  AlertTriangle,
  Users,
  Settings,
  Globe,
  Server,
  Key,
  CreditCard,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
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

  const privacySections = [
    {
      id: 1,
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Express Consent",
      content: [
        "By visiting and/or using our Website, you agree to this Policy. This policy applies to all current and former visitors to the Website.",
        "It is strongly recommended for you to return to this page periodically to review the most current version of the Policy.",
        "Cateye reserves the right at any time, at its sole discretion, to change/amend or otherwise modify the Policy without prior notice, and your continued access or use of this Website signifies your acceptance of the updated or modified Policy.",
        "However, if we make any material change to the Policy, we will notify you by e-mail (sent to the e-mail address specified in your account) or by means of a notice on this Website prior to the change becoming effective.",
        "You expressly consent to Cateye (including its marketing channels and business partners) to contact you through SMS, call and/or e-mail and to follow up calls in relation to the services provided through the Website.",
        "You hereby authorize and expressly consent us to share your PI with third parties including but not limited to Credit Information Companies (CIC) to do an aggregate check of your credit profile.",
        "You expressly waive the Do Not Call (DNC) / Do Not Disturb (DND) registrations on your phone/mobile numbers for contacting you for such purpose and usage.",
        "Cateye reserves the right (and you expressly authorize Cateye) to share or disclose your PI when Cateye determines, in its sole discretion, that the disclosure of such information is necessary or appropriate under the law for the time being in force.",
      ],
    },
    {
      id: 2,
      icon: <Database className="w-6 h-6" />,
      title: "Personal Information",
      content: [
        "Personal Information (PI) means any information/documents/details that relates to a natural person, which either directly or indirectly in combination with other information available with Cateye, can identify such person.",
        "This Policy applies to PI such as details pertaining to your name, parentage, marital status, nationality, state/city of residence, residential address, e-mail address, date of birth, gender, contact number/mobile number.",
        "Also includes user ids, passwords, recent photograph, signature image, income proof, PAN, credit score, credit information report, e-KYC through UIDAI, Aadhaar based e-Sign.",
        "Know Your Customer (KYC) documents like address proof, identity proof, officially valid documents/details (OVDs) accepted for concluding a financial transaction.",
        "Any PI which may be shared/uploaded by you, as and when you avail any products and/or service through usage of the Website and to which Cateye may become privy to.",
        "The usage of the Website may require you to provide consent for keying in/uploading your PI (including but not limited to user ids and passwords), as may be necessary to process your application through the Website.",
        "Any PI which requires to be keyed in/uploaded is required for enabling hassle free, faster and paperless (to the extent possible) processing of applications for financial products so opted/availed by you.",
      ],
    },
    {
      id: 3,
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credit Information Report",
      content: [
        "Your Credit Information (credit score and credit information report) is procured through a 'soft search' of your credit records with Credit Information Companies (CICs).",
        "Cateye has no control over the content or accuracy of information provided in your credit information by CICs.",
        "Cateye gets this information from CIC for and on your behalf only when you agree to appoint Cateye as your lawfully appointed authorized agent/representative for collecting your credit information from CICs.",
        "By consenting to use and avail your credit information report through Cateye, you agree that Cateye and CICs shall be entitled to rely on your authorization and consent granted by you to Cateye.",
        "Availing your credit information through Cateye is subject to your passing of appropriate identity authentication for security and privacy purposes.",
        "Cateye shall not notify you the reasons if you are unable to pass such identity authentications and not able to view and/or use your credit information.",
        "Cateye may analyze and profile your credit information in order to assist you in being better informed about, understand and manage your credit score/rating.",
        "We identify and inform you of credit products that are likely to be suited to your circumstances, to identify whether you may benefit from additional guidance concerning your credit score and steps you can take to improve your score and credit history etc.",
      ],
    },
    {
      id: 4,
      icon: <XCircle className="w-6 h-6" />,
      title: "Opt-Out Procedures",
      content: [
        "If you are no longer interested in sharing your PI, please e-mail your request at: support@catfin.in .",
        "Please note that it may take about 72 business hours to process your request.",
        "In case you do not want to be disturbed over telephonic calls, kindly fill up the details requested including the details of the telephone number(s) on which you do not wish to be contacted and submit the same at support@catfin.in from your email address registered at Catfin.",
        "You may opt out of location-based services at any time by editing the setting of your browser.",
        "Cateye's Website subscribers may opt-out of receiving our promotional emails and terminate their newsletter subscriptions by following the instructions in the emails.",
        "Opting out in this manner will not end transmission of service-related e-mails/SMS, such as e-mail/SMS alerts.",
      ],
    },
    {
      id: 5,
      icon: <Settings className="w-6 h-6" />,
      title: "Purpose and Usage",
      content: [
        "Cateye will not sell or rent your PI to anyone, for any reason, at any time.",
        "However, we will be sharing your PI with our affiliates and business partners including CICs, where we feel that you will be assisted better for the purpose of underwriting and approval of your credit card, loan or any other financial product transaction/related transaction.",
        "We share PI for doing a check of your credit profile on your behalf and sending you targeted communications and offers.",
        "Cateye will always seek your consent to process certain types of information where it is legally required to do so.",
        "Cateye uses the PI collected to manage its business and offer you an enhanced, personalized online experience on its Website.",
        "By registering on the Website, you authorize Cateye to send SMS and e-mail alerts to you for its service requirements, including sending promotional e-mails and SMSs.",
        "Send you any administrative notices, offer alerts and other communications relevant to your use of the Service.",
        "Display tailored product offers to you and enable you to apply for certain products and services for which you have chosen to apply.",
        "Carry market research, project planning, troubleshooting issues, detecting and protecting against error, fraud or other criminal activity.",
        "Improve our Services and manage our customer relationships better.",
        "Comply with all applicable laws and regulations.",
        "In the event that you access the Service as brought to you by one of our partners either through the Website or on being redirected from a co-branded URL or any other website, your name, e-mail address, mobile number, date of birth, employment type, residency status, income details/proofs, Form 26 AS, PAN, details of loan/credit card/mutual fund applied for and loan, credit card and mutual fund status or any other financial product status may be provided to that partner when your application is submitted and whenever the status of application is updated.",
        "For availing the Service such as applying for credit information report, loan, credit card, mutual fund or any other financial product we will require you to provide/upload on the Website details such as your name, parentage, marital status, email address, nationality, location, mobile number, PAN, employment & income details/proofs, Form 26 AS, recent photograph, signature image, other Know Your Customer (KYC) documents like address proof, identity proof and personally identifying information about a potential co-loan applicant (should you select this option).",
        "In order to provide your bank statement or pay slip electronically along with your loan application, you also must provide your third-party account credentials (Account Credentials) to allow Cateye to retrieve your account data at those other financial institutions (Account Information) for your use.",
        "Your Account Credentials are only used once to retrieve your bank statements/pay slips, Form 26 AS and are not stored in our system.",
        "Cateye shall not be liable to you against any liability or claims which may arise out of such transactions being carried on your own accord.",
        "We may also use third party service providers to provide the Service to you, such as sending e-mail messages on our behalf or hosting and operating a feature or functionality of the Service.",
        "Our contracts with these third parties outline the appropriate use and handling of your information and prohibit them from using any of your PI for purposes unrelated to the product or service they're providing.",
      ],
    },
    {
      id: 6,
      icon: <Users className="w-6 h-6" />,
      title: "Disclosure and Sharing",
      content: [
        "Cateye does not disclose PI of a customer except as directed by law or as per mandate received from the customer/applicant.",
        "Upon your written request Cateye will provide you with information on whether we hold any of your PI.",
        "No specific information about customer accounts or other personally identifiable data is shared with third parties unless any one of the following conditions is met:",
        "To help complete a transaction initiated by you.",
        "To perform support services through a third-party service provider, provided it conforms to the Privacy Policy of the Cateye and your prior consent to do so is obtained.",
        "You have specifically authorized it.",
        "Where the disclosure is necessary for compliance of a legal obligation or as required by law, such as to comply with a subpoena, or similar legal process.",
        "When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.",
        "There are number of products/services such as loans, credit cards, mutual funds, offered by third Parties on the Website, such as lenders, banks, credit card issuers.",
        "If you choose to apply for these separate products or services, disclose information to these providers, then their use of your information is governed by their privacy policies.",
        "Cateye is not responsible for their privacy policies.",
        "Cateye may share your data with other third parties, such as service providers, advertisers, Credit Information Companies, fraud prevention agencies, marketing channels, affiliates, without the need for additional consent from you.",
        "Cateye shall not be held liable for disclosure of the PI when used in accordance with this Privacy Policy or in terms of the 'General Terms of Use' of Website or an agreement, if any, with the users of Website.",
      ],
    },
    {
      id: 7,
      icon: <FileText className="w-6 h-6" />,
      title: "Information Updates and Changes",
      content: [
        "If your PI provided to us when you had applied for a product on our Website changes, you may update it whenever you apply for a new product via our Website.",
        "To review and update your PI and to ensure that the same is accurate while your application is in process, you may contact us at support@catfin.in",
        "You will not be able to update the information you have provided in an application after a decision has already been made on it; however, you may create and submit a new application with your updated information.",
        "We will retain your information for as long as your account is active or as needed to provide you services.",
        "If you wish to cancel your account or request that we no longer use your information to provide you services, contact us at support@catfin.in.",
        "We will respond to your request within a reasonable timeframe.",
        "However, we will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and to enforce our agreements.",
      ],
    },
    {
      id: 8,
      icon: <Clock className="w-6 h-6" />,
      title: "Data Retention",
      content: [
        "Cateye will retain your information for as long as it is necessary for providing you the Services available on the Website or your request for termination of your account with Cateye, whichever is later.",
        "Post termination of your account, Cateye may continue to use your anonymized data aggregated or in combination with anonymized data of other users.",
        "We use this aggregated anonymized data for data analysis, profiling and research purposes, for example to gain insights about our users and their profiles.",
        "We may keep your contact information along with your application details (if any) for fraud prevention purposes and for the exercise/defense of a legal claim or for providing evidence in legal proceeding(s).",
      ],
    },
    {
      id: 9,
      icon: <Mail className="w-6 h-6" />,
      title: "Email & SMS Communications",
      content: [
        "We provide our registered customers with periodic emailers and email/SMS alerts.",
        "We also allow users to subscribe to email newsletters and from time to time may transmit emails promoting Cateye or third-party products.",
        "Subject to the express consent clause above, Cateye's Website subscribers may opt-out of receiving our promotional emails and terminate their newsletter subscriptions by following the instructions in the emails.",
        "Opting out in this manner will not end transmission of service-related e-mails/SMS, such as e-mail/SMS alerts.",
        "The above services are also provided by our partners.",
      ],
    },
    {
      id: 10,
      icon: <FileText className="w-6 h-6" />,
      title: "Log Files",
      content: [
        "This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP) referring/exit pages, operating system, date/time stamp, and/or clickstream data.",
        "We may use the collected log information about you to improve services offered to you, to improve marketing, analytics, or Website functionality.",
      ],
    },
    {
      id: 11,
      icon: <Globe className="w-6 h-6" />,
      title: "Tracking Technologies",
      content: [
        "Cateye and its partners use cookies or similar technologies to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base.",
        "You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our website or service.",
      ],
    },
    {
      id: 12,
      icon: <Eye className="w-6 h-6" />,
      title: "Behavioral Targeting / Re-Targeting",
      content: [
        "We partner with a third-party service provider to either display advertising on our Website or to manage our advertising on other websites.",
        "Our third-party partner may use technologies such as cookies to gather information about your activities on this Website and other websites in order to provide you advertising based upon your browsing activities and interests.",
        "If you wish to not have this information used for the purpose of serving you interest-based ads, you may opt-out by clicking here.",
        "Please note this does not opt you out of being served ads. You will continue to receive generic ads.",
      ],
    },
    {
      id: 13,
      icon: <Shield className="w-6 h-6" />,
      title: "Third Party Information Sharing",
      content: [
        "There are several products and services, such as credit information report, loans, credit cards, mutual fund and their financial products being offered by third parties on our Website, such as lenders, banks, credit card issuers and mutual funds (collectively 'Offers').",
        "If you choose to apply for these separate products or services, disclose information to the providers, or grant them permission to collect information about you, then their use of your information is governed by their privacy policies.",
        "You should evaluate the practices of these external services providers before deciding to use their services.",
        "Cateye is not responsible for their privacy practices.",
      ],
    },
    {
      id: 14,
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security Measures",
      content: [
        "We follow generally accepted standards to protect the PI submitted to us, both during transmission and once we receive it.",
        "Since no method of transmission over the Internet, or method of electronic storage, is 100% secure, therefore, we cannot guarantee its absolute security.",
        "We use a combination of firewalls, encryption techniques and authentication procedures, among others, to maintain the security of your online session and to protect Cateye online accounts and systems from unauthorized access.",
        "When you register for the Service, Cateye requires a password from you for your privacy and security.",
        "Cateye transmits information such as your login credentials for Website or Account Credentials securely.",
        "Our servers are in secure facilities where access requires multiple levels of authentication, including an identity card and biometrics recognition procedures.",
        "Security personnel monitor the facilities 7 days a week, 24 hours a day.",
        "Our databases are protected from general employee access both physically and logically.",
        "We encrypt your Service password so that your password cannot be recovered, even by us. All backup drives and tapes also are encrypted.",
        "We enforce physical access controls to our buildings.",
        "No employee can put PI on any insecure machine (i.e. nothing can be taken from the database and put on an insecure laptop).",
        "We permit only authorized employees who are trained in the proper handling of customer information, to have access to aforesaid PI.",
        "Cateye has been verified for its use of SSL encryption technologies.",
        "In addition, Cateye tests the Website using Acunetix scan for any failure points that would allow hacking.",
        "However, it is important to understand that these precautions apply only to our Website and systems.",
      ],
    },
    {
      id: 15,
      icon: <Key className="w-6 h-6" />,
      title: "Encryption and Secure Communication",
      content: [
        "All communications between your computer/mobile and our Website that contain any PI are encrypted.",
        "This enables client and server applications to communicate in a way that is designed to prevent eavesdropping, tampering and message forgery.",
      ],
    },
    {
      id: 16,
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "User Responsibility for Login Credentials",
      content: [
        "You are responsible for maintaining the security of your login ID and Password and must not provide these credentials to any third party.",
        "If you believe that they have been stolen or been made known to others, you must contact us immediately at support@catfin.in.",
        "We are not responsible if someone else accesses your account through the login credential they have obtained from you or through a violation by you of this Privacy and Security Policy or the Cateye Terms of Use.",
        "If you have any security related concern, please contact us at support@catfin.in. We will work closely with you to ensure a rapid and personal response to your concerns.",
      ],
    },
  ];
  const securityFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "SSL Encryption",
      description:
        "All communications are encrypted using industry-standard SSL technology.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Secure Servers",
      description:
        "Our servers are housed in secure facilities with 24/7 monitoring and biometric access.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Protection",
      description:
        "Multiple layers of security protect your personal and financial information.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Access Control",
      description:
        "Only authorized, trained employees have access to personal information.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Encrypted Storage",
      description:
        "All databases and backup drives are encrypted for maximum security.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Fraud Detection",
      description:
        "Advanced systems monitor for suspicious activities and potential fraud.",
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
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy{" "}
            <span className="text-red-400 relative">
              Policy
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-400 rounded"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This Privacy Policy explains how we protect your personal
            information provided to us on our website and how we use that
            information in connection with the services offered. We are strongly
            committed to protecting the privacy of our customers and have taken
            all necessary measures to protect the confidentiality of your
            personal information.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="text-red-400" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Cateye Consultancy Services Pvt. Ltd. (Cateye) acknowledges the
                expectations of its customers regarding privacy, confidentiality
                and security of personal information. Keeping personal
                information secure and preventing any misuse thereof is a top
                priority.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy is published in accordance with the
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data of Information) Rules,
                2011 under the Information Technology Act, 2000 and other
                applicable laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This policy covers Cateye&apos;s treatment of personal
                information collected when you are on our site and when you use
                our services. It also covers treatment of any personal
                information that our business partners share with us.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Sections */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy Details
          </h2>
          <div className="space-y-8">
            {privacySections.map((section) => (
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

        {/* International Security Standards */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
            <CardHeader className="bg-gradient-to-r from-red-400 to-red-500 text-white">
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6" />
                International Security Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Implementation of international standard for management of
                information security is an ongoing process that we continuously
                evaluate and improve to ensure the highest levels of data
                protection and privacy for our customers.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Features */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Security Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
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
                        {feature.icon}
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
            <CardHeader className="bg-gradient-to-r from-red-400 to-red-500 text-white">
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                Contact Us & Grievance Redressal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Grievance Redressal
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have grievance or complaint, questions, comments,
                    concerns or feedback in relation to the processing of
                    information or regarding this Privacy and Security Policy or
                    any other privacy or security concern, send an e-mail to{" "}
                    <a
                      href="mailto:support@catfin.in"
                      className="text-red-500 font-semibold hover:text-red-600 underline"
                    >
                      support@catfin.in
                    </a>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The name and contact details of the Grievance Officer will
                    be provided upon request.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Feedback
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have an unresolved privacy or data use concern that
                    has not been addressed satisfactorily, you are advised to
                    contact at{" "}
                    <a
                      href="mailto:support@catfin.in"
                      className="text-red-500 font-semibold hover:text-red-600 underline"
                    >
                      support@catfin.in
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Primary Contact
                    </h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:support@catfin.in"
                        className="text-red-500 font-semibold hover:text-red-600 underline"
                      >
                        support@catfin.in
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      We will work closely with you to ensure a rapid and
                      personal response to your concerns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/grievance-redressal">
                    <Button variant="defaultBox" size="lg" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      File a Complaint
                    </Button>
                  </Link>
                  <Button variant="outlineBox" size="lg" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Support
                  </Button>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Effective Date */}
        <motion.div {...fadeInUp} className="mb-16">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Effective Date
                </h3>
              </div>
              <p className="text-gray-700">
                The effective date of this Privacy Policy is{" "}
                <span className="font-semibold">July 28, 2023</span>. This
                indicates the last time this Policy was revised or materially
                changed.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
