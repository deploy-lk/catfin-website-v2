"use client";

import LoanPageTemplate from "../loan-page-template";

export default function AutoLoanPage() {
  const loanData = {
    title: "Auto Loan",
    subtitle: "Drive Your Dream Car Today",
    description:
      "Get behind the wheel of your dream car with our competitive auto loan rates. We finance both new and used vehicles with flexible repayment options.",
    features: [
      {
        title: "100% Financing",
        description: "No down payment required",
        icon: "🚗",
        color: "bg-red-500",
      },
      {
        title: "Quick Approval",
        description: "Same day approval",
        icon: "⚡",
        color: "bg-yellow-500",
      },
      {
        title: "Flexible EMI",
        description: "Choose your EMI date",
        icon: "📅",
        color: "bg-blue-500",
      },
      {
        title: "Insurance Included",
        description: "Comprehensive coverage",
        icon: "🛡️",
        color: "bg-green-500",
      },
    ],
    benefits: [
      "Finance up to 100% of vehicle cost",
      "Competitive interest rates",
      "Flexible repayment tenure",
      "Quick loan processing",
      "Doorstep documentation",
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum income: ₹20,000/month",
      "Valid driving license",
      "Good credit history",
    ],
    interestRate: "7.5% - 15%",
    maxAmount: "₹1 Crore",
    tenure: "12 - 84 months",
    processingFee: "1% of loan amount",
    heroImage: "/autoLoan.png",
    applyLink: "https://app.catfin.in/#/apply-loan/mobile",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
