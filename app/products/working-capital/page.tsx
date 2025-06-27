"use client";

import LoanPageTemplate from "../loan-page-template";

export default function WorkingCapitalPage() {
  const loanData = {
    title: "Working Capital",
    subtitle: "Fuel Your Business Operations",
    description:
      "Maintain smooth business operations with our working capital solutions. Cover day-to-day expenses, inventory purchases, and operational costs with flexible credit lines.",
    features: [
      {
        title: "Credit Line",
        description: "Revolving credit facility",
        icon: "🔄",
        color: "bg-indigo-500",
      },
      {
        title: "Flexible Usage",
        description: "Use as per need",
        icon: "⚙️",
        color: "bg-green-500",
      },
      {
        title: "Quick Access",
        description: "Instant fund access",
        icon: "⚡",
        color: "bg-yellow-500",
      },
      {
        title: "Competitive Rates",
        description: "Low interest costs",
        icon: "💰",
        color: "bg-blue-500",
      },
    ],
    benefits: [
      "Revolving credit facility",
      "Pay interest only on utilized amount",
      "Flexible repayment options",
      "Online account management",
      "Dedicated relationship manager",
    ],
    eligibility: [
      "Business vintage: 3+ years",
      "Annual turnover: ₹1 Crore+",
      "Profitable operations",
      "Good banking relationship",
    ],
    interestRate: "11% - 16%",
    maxAmount: "₹25 Crores",
    tenure: "12 months renewable",
    processingFee: "1% of sanctioned limit",
    heroImage: "/workingCapital.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
