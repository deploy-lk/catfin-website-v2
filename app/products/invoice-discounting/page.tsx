"use client";
import LoanPageTemplate from "../loan-page-template";

export default function InvoiceDiscountingPage() {
  const loanData = {
    title: "Invoice Discounting",
    subtitle: "Convert Invoices to Instant Cash",
    description:
      "Get immediate cash flow by discounting your unpaid invoices. Perfect for businesses waiting for customer payments while needing working capital.",
    features: [
      {
        title: "Instant Cash Flow",
        description: "Get paid immediately",
        icon: "💸",
        color: "bg-emerald-500",
      },
      {
        title: "No Collateral",
        description: "Invoice-based funding",
        icon: "📄",
        color: "bg-blue-500",
      },
      {
        title: "Quick Processing",
        description: "Approval in hours",
        icon: "⚡",
        color: "bg-yellow-500",
      },
      {
        title: "Flexible Terms",
        description: "Based on invoice terms",
        icon: "🔄",
        color: "bg-purple-500",
      },
    ],
    benefits: [
      "Improve cash flow immediately",
      "No impact on customer relationships",
      "Competitive discount rates",
      "Online invoice management",
      "Credit protection available",
    ],
    eligibility: [
      "Business vintage: 2+ years",
      "Valid trade invoices",
      "Good customer payment history",
      "GST registration required",
    ],
    interestRate: "12% - 18%",
    maxAmount: "₹10 Crores",
    tenure: "30 - 90 days",
    processingFee: "1% of invoice value",
    heroImage: "/invoice.png",
    applyLink: "https://app.catfin.in/#/apply-loan/mobile",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <LoanPageTemplate {...loanData} />
    </div>
  );
}
