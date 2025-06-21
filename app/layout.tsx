import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Catfin",
  description:
    "Catfin is a tech platform that provides complete end to end digital solution of Lending to SMEs & Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Navbar - hidden on desktop */}
        <div className="block md:hidden">
          <MobileNav />
        </div>
        {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        <main className="flex-1 flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
