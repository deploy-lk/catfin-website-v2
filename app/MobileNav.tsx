"use client";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100 md:hidden">
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

          {/* Right side - Apply Now Button and Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                window.open(
                  "https://app.catfin.in/#/apply-loan/mobile",
                  "_blank"
                );
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm"
            >
              Apply Now
            </button>

            {/* Sheet for mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="bg-white flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <img
                      src="https://www.catfin.in/logos/catfin.png"
                      alt="Catfin Logo"
                      className="h-8 w-auto"
                    />
                    {/* <button 
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-md text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button> */}
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 py-6">
                    <div className="space-y-1 px-6">
                      <Link
                        href="/home"
                        className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </Link>

                      {/* Products Dropdown */}
                      <div className="space-y-1">
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                        >
                          Products
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              isProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isProductsOpen && (
                          <div className="ml-4 space-y-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Personal Loan
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Business Loan
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Home Loan
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Used Car Loan
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Mutual Funds
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              Loan against shares
                            </a>
                          </div>
                        )}
                      </div>

                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Lender Pincode search
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-3 text-gray-700 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        EMI Calculator
                      </a>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="border-t border-gray-200 p-6 space-y-3">
                    <button
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        window.open(
                          "https://app.catfin.in/#/apply-loan/mobile",
                          "_blank"
                        );
                      }}
                    >
                      Apply Now
                    </button>
                    <button
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        window.open("https://app.catfin.in/#/login", "_blank");
                      }}
                    >
                      Partner Login
                    </button>
                    <button
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        window.open("https://app.catfin.in/#/login", "_blank");
                      }}
                    >
                      Join Us
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
