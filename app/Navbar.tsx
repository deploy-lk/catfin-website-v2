"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsProductsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home">
              <Image
                src="https://www.catfin.in/logos/catfin.png"
                alt="Catfin Logo"
                // className="h-10 w-auto"
                height={40}
                width={160}
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  {[
                    ["Personal Loan", "/products/personal-loan"],
                    ["Business Loan", "/products/business-loan"],
                    ["Home Loan", "/products/mortgage-loan"],
                    ["Used Car Loan", "/products/auto-loan"],
                    ["Mutual Funds", "/products/mutual-funds"],
                    ["Loan against shares", "/products/loan-against-shares"],
                    ["Fixed deposit", "/products/fixed-deposit"],
                    ["Insurance & SIP'S", "/products/insurance-sip"],
                    ["Invoice Discounting", "/products/invoice-discounting"],
                    ["Working Capital", "/home"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/lender-search"
              className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Lender Pincode search
            </Link>
            <Link
              href="https://calculator.catfin.in/"
              target="_blank"
              className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              EMI Calculator
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              onClick={() => {
                window.open(
                  "https://app.catfin.in/#/apply-loan/mobile",
                  "_blank"
                );
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="default"
              onClick={() => {
                window.open("https://app.catfin.in/#/login", "_blank");
              }}
            >
              Partner Login
            </Button>
            <Button
              variant="default"
              onClick={() => {
                window.open("https://app.catfin.in/#/login", "_blank");
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
