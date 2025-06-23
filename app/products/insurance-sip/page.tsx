"use client";

import LoanPageTemplate from "../loan-page-template";

export default function InsuranceSIPPage() {
  const loanData = {
    title: "Insurance & SIP'S",
    subtitle: "Protect & Grow Your Wealth",
    description:
      "Comprehensive insurance solutions and systematic investment plans to secure your family's future while building wealth through disciplined investing.",
    features: [
      {
        title: "Life Protection",
        description: "Comprehensive coverage",
        icon: "🛡️",
        color: "bg-red-500",
      },
      {
        title: "Wealth Creation",
        description: "SIP investments",
        icon: "📈",
        color: "bg-green-500",
      },
      {
        title: "Tax Benefits",
        description: "Save up to ₹1.5L",
        icon: "💰",
        color: "bg-blue-500",
      },
      {
        title: "Flexible Plans",
        description: "Customized solutions",
        icon: "⚙️",
        color: "bg-purple-500",
      },
    ],
    benefits: [
      "Life and health insurance coverage",
      "Systematic investment planning",
      "Tax benefits under 80C & 80D",
      "Professional fund management",
      "Online policy management",
    ],
    eligibility: [
      "Age: 18-65 years",
      "Medical checkup if required",
      "Income proof for high coverage",
      "Valid identity documents",
    ],
    interestRate: "10% - 15% returns*",
    maxAmount: "₹1 Crore coverage",
    tenure: "5 - 30 years",
    processingFee: "As per plan",
    heroImage: "/insurance.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
