import React, { ReactNode } from "react";
import {
  Shield,
  // Building2,
  Phone,
  // Mail,
  // MapPin,
  // User,
  FileText,
  ExternalLink,
  Download,
  Globe,
  MessageSquare,
  AlertTriangle,
  Clock,
  CheckCircle,
} from "lucide-react";

interface QuickLink {
  icon: ReactNode;
  title: string;
  description: string;
  url: string;
  external: boolean;
}

interface GrievanceProcessStep {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Lender {
  id: string;
  brandName: string;
  legalName: string;
  logo: string;
  companyInfo: {
    website: string;
    registeredOffice: string;
    phone: string;
  };
  grievanceOfficer: {
    name: string;
    title?: string;
    email1: string;
    email2?: string;
    contactNumber: string;
    address: string;
  };
  quickLinks: QuickLink[];
  grievanceProcess: GrievanceProcessStep[];
  importantNotice: string;
}

export const lenders: Lender[] = [
  {
    id: "dmi-finance",
    brandName: "DMI Finance",
    legalName: "DMI FINANCE PRIVATE LIMITED",
    logo: "/dmi.jpg",
    companyInfo: {
      website: "https://www.dmifinance.in/",
      registeredOffice:
        "DMI Finance Pvt Ltd., Express Building, Third Floor,\n9-10, Bahadur Shah Zafar Marg,\nNew Delhi - 110002, India",
      phone: "011-41204444",
    },
    grievanceOfficer: {
      name: "Mr. Ashish Sarin",
      title: "Senior Vice President - Customer Success",
      email1: "head.services@dmifinance.in",
      email2: "grievance@dmifinance.in",
      contactNumber: "011-41204444",
      address:
        "Express Building, 3rd Floor\n9-10, Bahadur Shah Zafar Marg, New Delhi-110002",
    },
    quickLinks: [
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Official Website",
        description: "Visit DMI Finance official website",
        url: "https://www.dmifinance.in/",
        external: true,
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Privacy Policy",
        description: "Read our privacy policy and data protection measures",
        url: "https://www.dmifinance.in/privacy-policy.php",
        external: true,
      },
      {
        icon: <Phone className="w-5 h-5" />,
        title: "Customer Care",
        description: "Get in touch with our customer support team",
        url: "https://www.dmifinance.in/contact-us.php",
        external: true,
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Grievance Redressal",
        description: "Complete grievance redressal process and guidelines",
        url: "https://www.dmifinance.in/grievance-redressal.php",
        external: true,
      },
      {
        icon: <Download className="w-5 h-5" />,
        title: "Loan Undertaking",
        description: "Download loan application undertaking document",
        url: "https://www.dmifinance.in/pdf/Loan-Application-Undertaking.pdf",
        external: true,
      },
    ],
    grievanceProcess: [
      {
        step: 1,
        title: "Submit Your Complaint",
        description:
          "Contact our grievance officer through email, phone, or written application with detailed information about your concern.",
        icon: <FileText className="w-6 h-6" />,
      },
      {
        step: 2,
        title: "Acknowledgment",
        description:
          "You will receive an acknowledgment of your complaint within 48 hours with a unique reference number for tracking.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
      {
        step: 3,
        title: "Investigation",
        description:
          "Our team will thoroughly investigate your complaint and may contact you for additional information if required.",
        icon: <AlertTriangle className="w-6 h-6" />,
      },
      {
        step: 4,
        title: "Resolution",
        description:
          "We aim to resolve your complaint within the stipulated timeframe and will communicate the resolution to you.",
        icon: <Clock className="w-6 h-6" />,
      },
    ],
    importantNotice:
      "This grievance redressal mechanism is specifically designed for FinTech and Digital Lending related complaints. For the best resolution experience, please provide complete details about your concern including loan reference numbers, transaction IDs, and relevant documentation when filing your complaint.",
  },
  {
    id: "godrej-finance",
    brandName: "Godrej Finance",
    legalName: "Godrej Finance Limited",
    logo: "/godrej.webp",
    companyInfo: {
      website: "https://finance.godrejcapital.com/gf/",
      registeredOffice:
        "Godrej Finance Limited, 9th Floor, Godrej One,\nPirojshanagar, Vikhroli East, Mumbai, 400079, Maharashtra, India",
      phone: "+91 8657764527",
    },
    grievanceOfficer: {
      name: "Mr. Ankit Gupta",
      email1: "nodalofficer@godrejfinance.com",
      contactNumber: "+91 8657764527",
      address:
        "Godrej Finance Limited, 9th Floor\nGodrej One, Pirojshanagar, Vikhroli East, Mumbai, 400079, Maharashtra",
    },
    quickLinks: [
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Official Website",
        description: "Visit Godrej Finance official website",
        url: "https://finance.godrejcapital.com/gf/",
        external: true,
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Grievance Redressal Mechanism",
        description: "Link to the full grievance redressal policy",
        url: "https://finance.godrejcapital.com/gf/information-and-policies",
        external: true,
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Privacy Policy",
        description: "Read our privacy policy and data protection measures",
        url: "https://finance.godrejcapital.com/gf/information-and-policies",
        external: true,
      },
      {
        icon: <ExternalLink className="w-5 h-5" />,
        title: "RBI Sachet Portal",
        description: "Direct link to the RBI Sachet Portal",
        url: "https://sachet.rbi.org.in",
        external: true,
      },
    ],
    grievanceProcess: [
      {
        step: 1,
        title: "Submit Your Complaint",
        description:
          "Contact our grievance officer with details of your concern.",
        icon: <FileText className="w-6 h-6" />,
      },
      {
        step: 2,
        title: "Acknowledgment",
        description:
          "Your complaint will be acknowledged and a reference number will be provided.",
        icon: <CheckCircle className="w-6 h-6" />,
      },
      {
        step: 3,
        title: "Resolution",
        description:
          "We will investigate and communicate a resolution to you in a timely manner.",
        icon: <Clock className="w-6 h-6" />,
      },
    ],
    importantNotice:
      "For efficient resolution, please ensure all relevant details, including loan account numbers and specific issues, are provided when submitting your grievance.",
  },
];
