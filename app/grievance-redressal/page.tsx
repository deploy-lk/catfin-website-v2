"use client";

import { motion } from "framer-motion";
import {
  Shield,
  MessageSquare,
  Clock,
  Phone,
  Mail,
  MapPin,
  User,
  FileText,
  AlertCircle,
  Users,
  Scale,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Button from "@/components/atoms/Button/Button";

const GrievanceRedressalPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const grievanceTypes = [
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Service Related",
      description:
        "Issues related to loan processing, customer service, product features, or service delivery delays.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Documentation",
      description:
        "Concerns about document processing, verification issues, or paperwork-related problems.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Communication",
      description:
        "Problems with communication channels, response times, or information transparency.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy & Security",
      description:
        "Data privacy concerns, security breaches, or unauthorized access to personal information.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Staff Conduct",
      description:
        "Issues related to employee behavior, professionalism, or inappropriate conduct.",
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Policy Disputes",
      description:
        "Disagreements with company policies, terms and conditions, or procedural matters.",
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
              <MessageSquare className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Grievance{" "}
            <span className="text-red-500 relative">
              Redressal
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Grievance Redressal is a formal process through which complaints or
            concerns raised by individuals, employees, or customers are
            addressed and resolved. It ensures that any dissatisfaction or
            issues related to services, products, or policies are investigated
            fairly, with appropriate actions taken to resolve them. This system
            promotes transparency and accountability, helping maintain trust
            between the organization and its stakeholders.
          </p>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Grievance Officer Contact
          </h2>
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Name of the Officer
                      </h3>
                      <p className="text-gray-600">Mr. Himanchal Tiwari</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Contact Number
                      </h3>
                      <p className="text-gray-600">+91 8130553055</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Email Address
                      </h3>
                      <p className="text-gray-600">
                        himanchal.tiwari@cateye.in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Gali Number 3, Veer Savarkar Block,
                        <br />
                        Block L, Laxmi Nagar,
                        <br />
                        Delhi, 110092
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="defaultBox"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() => window.open("tel:+918130553055", "_blank")}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outlineBox"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() =>
                      window.open("mailto:himanchal.tiwari@cateye.in", "_blank")
                    }
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Types of Grievances */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types of Grievances We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grievanceTypes.map((type, index) => (
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
                        {type.icon}
                      </div>
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {type.description}
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

export default GrievanceRedressalPage;
