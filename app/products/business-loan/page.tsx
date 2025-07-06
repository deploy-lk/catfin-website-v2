"use client";

import LoanPageTemplate from "../loan-page-template";

export default function BusinessLoanPage() {
  const loanData = {
    title: "Business Loan",
    subtitle: "Fuel Your Business Growth",
    description:
      "Expand your business with our flexible business loans. Whether you need working capital, equipment financing, or expansion funds, we've got you covered.",
    features: [
      {
        title: "High Loan Amount",
        description: "Up to ₹5 Crores",
        icon: "💼",
        color: "bg-emerald-500",
      },
      {
        title: "Flexible Terms",
        description: "Customized repayment",
        icon: "📊",
        color: "bg-blue-500",
      },
      {
        title: "Quick Processing",
        description: "Approval in 3-5 days",
        icon: "⚡",
        color: "bg-yellow-500",
      },
      {
        title: "Minimal Collateral",
        description: "Based on business profile",
        icon: "🏢",
        color: "bg-red-500",
      },
    ],
    benefits: [
      "Collateral-free loans up to ₹50 lakhs",
      "Competitive interest rates for businesses",
      "Flexible repayment options",
      "Dedicated relationship manager",
      "Tax benefits on interest payments",
    ],
    eligibility: [
      "Business vintage: 3+ years",
      "Annual turnover: ₹40 lakhs+",
      "Good business credit history",
      "Profitable for last 2 years",
    ],
    interestRate: "12% - 20%",
    maxAmount: "₹5 Crores",
    tenure: "12 - 84 months",
    processingFee: "1.5% of loan amount",
    heroImage: "/businessLoan.png",
    applyLink: "https://app.catfin.in/#/apply-loan/mobile",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
