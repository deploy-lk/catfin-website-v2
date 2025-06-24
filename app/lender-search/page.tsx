"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Loader2, Building, Users } from "lucide-react";
import Button from "@/components/atoms/Button/Button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";

interface LenderData {
  pincode: string;
  city_name: string;
  state_name: string;
  lender_name: string;
  lender_id: string;
  id: number;
}

interface ApiResponse {
  success: boolean;
  status_code: number;
  message: string;
  data: LenderData[];
}

export default function LenderSearchPage() {
  const [pincode, setPincode] = useState("");
  const [lenders, setLenders] = useState<LenderData[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pincode.trim()) {
      setError("Please enter a pincode");
      return;
    }

    if (pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }

    setLoading(true);
    setError("");
    setSearched(false);

    try {
      const response = await fetch(
        `https://api.catfin.in/api/v1/lender-pincode/get-lender?pincode=${pincode}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data: ApiResponse = await response.json();

      if (data.success) {
        setLenders(data.data);
        setSearched(true);
      } else {
        setError("No lenders found for this pincode");
        setLenders([]);
      }
    } catch {
      setError("Failed to fetch lenders. Please try again.");
      setLenders([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-red-200 rounded-full opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Search Lender by{" "}
            <span className="text-red-500 relative">
              Pincode
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded"></div>
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find available lenders in your area by entering your pincode
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-md">
            <CardContent className="p-8">
              <form onSubmit={handleSearch} className="space-y-6">
                <div>
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Enter Pincode
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" />
                    <Input
                      id="pincode"
                      type="text"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(
                          e.target.value.replace(/\D/g, "").slice(0, 6)
                        );
                        setError("");
                      }}
                      placeholder="Enter 6-digit pincode"
                      className="pl-10 h-12 text-lg bg-white border-gray-300 focus:border-red-500 focus:ring-red-500 focus:!outline-none"
                      maxLength={6}
                    />
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-lg bg-red-500 hover:bg-red-600 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Search Lenders
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <AnimatePresence>
          {searched && lenders.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Building className="text-red-500" />
                    Available Lenders
                    {lenders.length > 0 && (
                      <span className="ml-2 bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                        {lenders.length} Found
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="animate-spin h-8 w-8 text-red-500" />
                      <span className="ml-3 text-gray-600">
                        Searching lenders...
                      </span>
                    </div>
                  ) : lenders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-red-50">
                            <TableHead className="font-semibold text-gray-700">
                              Pincode
                            </TableHead>
                            <TableHead className="font-semibold text-gray-700">
                              State Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-700">
                              City Name
                            </TableHead>
                            <TableHead className="font-semibold text-gray-700">
                              Lender Name
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {lenders.map((lender, index) => (
                            <motion.tr
                              key={lender.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="hover:bg-red-50/50 transition-colors"
                            >
                              <TableCell className="font-medium">
                                {lender.pincode}
                              </TableCell>
                              <TableCell>{lender.state_name}</TableCell>
                              <TableCell>{lender.city_name}</TableCell>
                              <TableCell className="font-semibold text-red-600">
                                {lender.lender_name}
                              </TableCell>
                            </motion.tr>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Users className="mx-auto h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 text-lg">
                        No lenders found for this pincode
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Try searching with a different pincode
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {searched && lenders.length === 0 && !loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Lenders Found
              </h3>
              <p className="text-gray-600">
                No lenders are available for pincode {pincode}. Please try a
                different pincode.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
