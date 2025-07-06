"use client";

import LoanPageTemplate from "../loan-page-template";

export default function FixedDepositPage() {
  const loanData = {
    title: "Fixed Deposit",
    subtitle: "Secure Your Future with Guaranteed Returns",
    description:
      "Invest in our Fixed Deposit schemes and enjoy guaranteed returns with complete capital protection. Choose from flexible tenure options and competitive interest rates.",
    features: [
      {
        title: "Guaranteed Returns",
        description: "Fixed interest rates",
        icon: "🔒",
        color: "bg-green-500",
      },
      {
        title: "Capital Protection",
        description: "100% safe investment",
        icon: "🛡️",
        color: "bg-blue-500",
      },
      {
        title: "Flexible Tenure",
        description: "7 days to 10 years",
        icon: "📅",
        color: "bg-purple-500",
      },
      {
        title: "Premature Withdrawal",
        description: "Emergency liquidity",
        icon: "💸",
        color: "bg-orange-500",
      },
    ],
    benefits: [
      "Higher interest rates than savings account",
      "Loan facility against FD available",
      "Auto-renewal option available",
      "Tax-saving FD options",
      "Senior citizen special rates",
    ],
    eligibility: [
      "Age: 18+ years",
      "Valid identity proof",
      "Address verification",
      "Minimum deposit: ₹1,000",
    ],
    interestRate: "5.5% - 7.5%",
    maxAmount: "No upper limit",
    tenure: "7 days - 10 years",
    processingFee: "Nil",
    heroImage: "/fixedDeposite.png",
    applyLink: "https://app.catfin.in/#/apply-loan/mobile",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
