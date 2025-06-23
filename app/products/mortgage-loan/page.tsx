"use client";

import LoanPageTemplate from "../loan-page-template";

export default function MortgageLoanPage() {
  const loanData = {
    title: "Mortgage Loan",
    subtitle: "Your Dream Home Awaits",
    description:
      "Make your dream of owning a home a reality with our competitive home loan rates. We offer flexible terms and quick processing for your home purchase or construction needs.",
    features: [
      {
        title: "Low Interest Rates",
        description: "Starting from 8.5%",
        icon: "🏠",
        color: "bg-indigo-500",
      },
      {
        title: "High Loan Amount",
        description: "Up to ₹10 Crores",
        icon: "💰",
        color: "bg-green-500",
      },
      {
        title: "Long Tenure",
        description: "Up to 30 years",
        icon: "📅",
        color: "bg-purple-500",
      },
      {
        title: "Tax Benefits",
        description: "Save up to ₹3.5L annually",
        icon: "💸",
        color: "bg-orange-500",
      },
    ],
    benefits: [
      "Loan up to 90% of property value",
      "Attractive interest rates for women borrowers",
      "Step-up and step-down EMI options",
      "Part prepayment facility available",
      "Doorstep service available",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Stable income source",
      "Good credit score (750+)",
      "Property documents verified",
    ],
    interestRate: "8.5% - 12%",
    maxAmount: "₹10 Crores",
    tenure: "5 - 30 years",
    processingFee: "0.5% of loan amount",
    heroImage: "/mortageLoan.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
