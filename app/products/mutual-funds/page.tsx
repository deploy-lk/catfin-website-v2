"use client";

import LoanPageTemplate from "../loan-page-template";

export default function MutualFundsPage() {
  const loanData = {
    title: "Mutual Funds",
    subtitle: "Grow Your Wealth Systematically",
    description:
      "Invest in professionally managed mutual funds and build wealth over time. Choose from equity, debt, and hybrid funds based on your risk appetite and financial goals.",
    features: [
      {
        title: "SIP Starting ₹500",
        description: "Start small, grow big",
        icon: "📈",
        color: "bg-green-500",
      },
      {
        title: "Expert Management",
        description: "Professional fund managers",
        icon: "👨‍💼",
        color: "bg-blue-500",
      },
      {
        title: "Tax Benefits",
        description: "ELSS funds save tax",
        icon: "💰",
        color: "bg-purple-500",
      },
      {
        title: "High Liquidity",
        description: "Easy redemption",
        icon: "💧",
        color: "bg-cyan-500",
      },
    ],
    benefits: [
      "Professional fund management",
      "Diversified investment portfolio",
      "Tax-saving options available",
      "Flexible investment amounts",
      "Online tracking and management",
    ],
    eligibility: [
      "Age: 18+ years",
      "Valid PAN card",
      "Bank account for transactions",
      "KYC compliance required",
    ],
    interestRate: "8% - 15% returns*",
    maxAmount: "No upper limit",
    tenure: "Open-ended",
    processingFee: "0.5% - 2.5% expense ratio",
    heroImage: "/mutualLoan.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6f0] via-[#f5f1e8] to-[#ebe5dc]">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
