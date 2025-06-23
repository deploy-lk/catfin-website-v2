"use client";
import LoanPageTemplate from "../loan-page-template";

export default function PersonalLoanPage() {
  const loanData = {
    title: "Personal Loan",
    subtitle: "Quick & Easy Personal Loans",
    description:
      "Get instant personal loans for any purpose - home renovation, weddings, medical emergencies, travel, debt consolidation, and more. No collateral required.",
    features: [
      {
        title: "Instant Approval",
        description: "Get approved in minutes",
        icon: "⚡",
        color: "bg-blue-500",
      },
      {
        title: "No Collateral",
        description: "Unsecured loans available",
        icon: "🔓",
        color: "bg-green-500",
      },
      {
        title: "Flexible Amount",
        description: "₹50K to ₹40L available",
        icon: "💰",
        color: "bg-purple-500",
      },
      {
        title: "Quick Disbursal",
        description: "Money in 24 hours",
        icon: "🚀",
        color: "bg-orange-500",
      },
    ],
    benefits: [
      "Minimal documentation required",
      "Competitive interest rates starting from 10.5%",
      "Flexible repayment tenure up to 5 years",
      "No prepayment charges",
      "100% digital process",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum salary: ₹25,000/month",
      "Work experience: 2+ years",
      "Good credit score (650+)",
    ],
    interestRate: "10.5% - 24%",
    maxAmount: "₹40 Lakhs",
    tenure: "12 - 60 months",
    processingFee: "2% of loan amount",
    heroImage: "/personalLoan.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
