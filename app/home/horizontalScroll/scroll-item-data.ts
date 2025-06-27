interface ScrollItem {
  id: string;
  number: string;
  title: string;
  description: string;
  bgGradient: string;
  link: string;
}
export const scrollItems: ScrollItem[] = [
  {
    id: "01",
    number: "01",
    title: "Personal Loan",
    description:
      "A short to medium-term unsecured loan offered to individuals, typically based on creditworthiness, used for personal expenses such as medical bills, travel, or debt consolidation.",
    link: "/products/personal-loan",
    bgGradient: "from-red-50 to-red-100 border-red-200",
  },
  {
    id: "02",
    number: "02",
    title: "Business Loan",
    description:
      "A financial product designed to provide businesses with capital to support growth, cover operational costs, purchase equipment, or manage cash flow, typically repaid with interest over a fixed term.",
    link: "/products/business-loan",
    bgGradient: "from-blue-50 to-blue-100 border-blue-200",
  },
  {
    id: "03",
    number: "03",
    title: "Mortgage Loan",
    description:
      "A long-term loan secured against real estate property, where the borrower uses their property as collateral to obtain funds, commonly used for buying homes or refinancing.",
    link: "/products/mortgage-loan",
    bgGradient: "from-green-50 to-green-100 border-green-200",
  },
  {
    id: "04",
    number: "04",
    title: "Home Loan",
    description:
      "A specific type of mortgage designed to help individuals purchase residential property, repayable over a set period with interest, often offering tax benefits and lower interest rates.",
    link: "/products/mortgage-loan",
    bgGradient: "from-purple-50 to-purple-100 border-purple-200",
  },
  {
    id: "05",
    number: "05",
    title: "Supply Chain Finance",
    description:
      "Supply Chain Finance refers to a set of financial solutions that optimize cash flow in the supply chain by providing early payment options to suppliers and extending payment terms for buyers.",
    link: "/products/mutual-funds",
    bgGradient: "from-orange-50 to-orange-100 border-orange-200",
  },
  {
    id: "06",
    number: "06",
    title: "Working Capital",
    description:
      "Working capital refers to the difference between a company's current assets and current liabilities. It measures the short-term financial health and liquidity of a business.",
    link: "/products/working-capital",
    bgGradient: "from-teal-50 to-teal-100 border-teal-200",
  },
  {
    id: "07",
    number: "07",
    title: "Auto Loan",
    description:
      "A secured loan provided to finance the purchase of a vehicle, where the car serves as collateral, repaid over a fixed term with interest.",
    link: "/products/auto-loan",
    bgGradient: "from-indigo-50 to-indigo-100 border-indigo-200",
  },
];
