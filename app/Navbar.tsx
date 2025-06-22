"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
                className="h-10 w-auto"
                height={40}
                width={160}
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
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                  >
                    Personal Loan
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                  >
                    Business Loan
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                  >
                    Home Loan
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                  >
                    Used Car Loan
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                  >
                    Mutual Funds
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                  >
                    Loan against shares
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              Lender Pincode search
            </a>
            <a
              href="https://calculator.catfin.in/"
              className="text-gray-700 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              EMI Calculator
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Apply Now
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Partner Login
            </button> */}
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
