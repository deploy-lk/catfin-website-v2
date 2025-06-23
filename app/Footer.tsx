"use client";
import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Products with their respective links
  const productsList = [
    { name: "Personal Loan", link: "/products/personal-loan" },
    { name: "Business Loan", link: "/products/business-loan" },
    { name: "Home Loan", link: "/products/mortgage-loan" },
    { name: "Used Car Loan", link: "/products/auto-loan" },
    { name: "Mutual Funds", link: "/products/mutual-funds" },
    { name: "Loan against shares", link: "/products/loan-against-shares" },
    { name: "Fixed Deposit", link: "/products/fixed-deposit" },
    { name: "Insurance & SIP'S", link: "/products/insurance-sip" },
    { name: "Invoice Discounting", link: "/products/invoice-discounting" },
    { name: "Working Capital", link: "/home" },
  ];

  // Quick links with their respective URLs
  const quickLinksList = [
    { name: "Data Storage Policy", link: "/data-storage-policy" },
    { name: "Grievance Redressal", link: "/grievance-redressal" },
    { name: "Terms & Conditions", link: "/terms-conditions" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "RBI Sachet", link: "https://sachet.rbi.org.in/" },
    { name: "Lender Grievances Details", link: "/lender-grievances" },
    { name: "Lenders Consent", link: "/lenders-consent" },
  ];

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("main-footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer
      id="main-footer"
      className="bg-gradient-to-br from-red-100 to-red-50 py-16 px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-rose-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-red-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-20 right-10 w-20 h-20 bg-rose-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-red-400 rounded-full animate-ping delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 transition-all duration-1000 ${
            isVisible
              ? "animate-fade-in opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center mb-6">
              <Image
                src="https://www.catfin.in/logos/catfin.png"
                alt="Catfin - Financial Services Platform"
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                loading="lazy"
                height={64}
                width={200}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-300">
                Cateye Advisors Pvt.Ltd
              </h3>
              <h4 className="text-lg font-semibold text-gray-700 hover:text-red-500 transition-colors duration-300">
                Cateye Techman Pvt.Ltd
              </h4>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Catfin is a platform which provides access to get financial
              services through digital platforms which helps businesses to grow
              together with a wide range of financial products and services to
              customers across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start space-x-3 group hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  C-131, Sector 2, Noida, UP 201301
                </span>
              </div>
              <div className="flex items-center space-x-3 group hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                <Phone className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="tel:+911147029616"
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300"
                >
                  011-47029616
                </a>
              </div>
              <div className="flex items-center space-x-3 group hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:sales@catfin.in"
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300"
                >
                  sales@catfin.in
                </a>
                <Mail className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:support@catfin.in"
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300"
                >
                  support@catfin.in
                </a>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800 relative">
              Our Products
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {productsList.slice(0, 7).map((product, index) => (
                <li key={index}>
                  <a
                    href={product.link}
                    className="text-sm text-gray-600 hover:text-red-600 transition-all duration-300 block py-1 px-2 rounded hover:bg-white/50 hover:translate-x-1 transform"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800 relative">
              More Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {productsList.slice(7).map((product, index) => (
                <li key={index}>
                  <a
                    href={product.link}
                    className="text-sm text-gray-600 hover:text-red-600 transition-all duration-300 block py-1 px-2 rounded hover:bg-white/50 hover:translate-x-1 transform"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
              {/* Fill with some quick links */}
              {quickLinksList.slice(0, 4).map((link, index) => (
                <li key={`quick-${index}`}>
                  <a
                    href={link.link}
                    className="text-sm text-gray-600 hover:text-red-600 transition-all duration-300 block py-1 px-2 rounded hover:bg-white/50 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible
                ? "animate-fade-in opacity-100"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-800 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinksList.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-sm text-gray-600 hover:text-red-600 transition-all duration-300 block py-1 px-2 rounded hover:bg-white/50 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/+911147029616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`border-t border-red-200 pt-8 transition-all duration-1000 delay-500 ${
            isVisible
              ? "animate-fade-in opacity-100"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-600 text-sm">
              © 2024 Catfin. All rights reserved. | Financial Services Platform
            </p>
            <p className="text-gray-500 text-xs">
              Monday - Friday: 9:00 AM - 6:00 PM | Available 24/7 for
              emergencies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
