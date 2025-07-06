"use client";
import LoanPageTemplate from "../loan-page-template";

export default function LoanAgainstSharesPage() {
  const loanData = {
    title: "Loan against Shares",
    subtitle: "Unlock Your Portfolio's Value",
    description:
      "Get instant liquidity against your share portfolio without selling your investments. Leverage your equity holdings to meet immediate financial needs while retaining ownership.",
    features: [
      {
        title: "Instant Liquidity",
        description: "Get funds in 24 hours",
        icon: "💧",
        color: "bg-cyan-500",
      },
      {
        title: "Retain Ownership",
        description: "Keep your shares",
        icon: "📈",
        color: "bg-green-500",
      },
      {
        title: "Low Interest",
        description: "Competitive rates",
        icon: "💰",
        color: "bg-blue-500",
      },
      {
        title: "Flexible Repayment",
        description: "Pay as per convenience",
        icon: "🔄",
        color: "bg-purple-500",
      },
    ],
    benefits: [
      "No need to sell your valuable shares",
      "Continue earning dividends and bonuses",
      "Overdraft facility available",
      "Minimal documentation required",
      "Online portfolio tracking",
    ],
    eligibility: [
      "Demat account holder",
      "Shares in approved list",
      "Minimum portfolio value: ₹1 lakh",
      "Good credit history",
    ],
    interestRate: "9% - 15%",
    maxAmount: "₹50 Lakhs",
    tenure: "12 - 36 months",
    processingFee: "1% of loan amount",
    heroImage: "/loanAgainstShare.png",
    applyLink: "https://catfin.larkfinserv.com/login",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
