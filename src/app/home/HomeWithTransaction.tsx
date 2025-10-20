"use client";

import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Copy,
  Bell,
  ChevronDown,
  ArrowUp,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/MainLayout";

const HomeWithTransactions = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const router = useRouter();

  const transactions = [
    {
      id: 1,
      type: "Sent",
      status: "Delivered",
      statusColor: "text-green-500",
      to: "+2349074190892",
      amount: "-$50",
      nairaAmount: "₦85,000",
      date: "Oct 5, 2025",
    },
    {
      id: 2,
      type: "Sent",
      status: "Pending",
      statusColor: "text-yellow-500",
      to: "+2349074190892",
      amount: "-$50",
      nairaAmount: "₦85,000",
      date: "Oct 5, 2025",
    },
    {
      id: 3,
      type: "Sent",
      status: "Failed",
      statusColor: "text-red-500",
      to: "+2349074190892",
      amount: "-$50",
      nairaAmount: "₦85,000",
      date: "Oct 5, 2025",
    },
  ];

  return (
    <MainLayout>
      <div>
        {/* Header */}
        <header className="flex justify-between items-center px-6 pt-8 pb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-gray-300">Your Wallet</h1>
            <ChevronDown className="w-5 h-5 text-gray-300" />
          </div>
          <div className="flex items-center gap-4">
            <Copy className="w-5 h-5 text-gray-300" />
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2"
              />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
            </svg>
            <button onClick={() => router.push("/notifications")}>
              <Bell className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </header>

        {/* Balance Card */}
        <div className="mx-6 mb-6">
          <div className="bg-gray-900 border border-cyan-500/30 rounded-3xl p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-gray-400 line-through text-xl">₦</span>
                  <span className="text-5xl font-light tracking-tight">
                    {balanceVisible ? "20,00.00" : "••••••"}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1">0.200ETH</div>
              </div>
              <button
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="mt-2"
              >
                {balanceVisible ? (
                  <Eye className="w-6 h-6 text-gray-400" />
                ) : (
                  <EyeOff className="w-6 h-6 text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 mb-12 flex gap-3">
          <button
            onClick={() => router.push("/sendMoney")}
            className="bg-transparent border border-cyan-500 text-cyan-500 font-medium py-3 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-colors text-sm"
          >
            <ArrowUp className="w-4 h-4" />
            Send Money
          </button>
          <button
            onClick={() => router.push("/receiveMoney")}
            className="bg-transparent border border-cyan-500 text-cyan-500 font-medium py-3 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            Receive Money
          </button>
        </div>

        {/* Recent Transactions */}
        <div className="px-6 mb-4">
          <div className="bg-gray-900 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-base text-white">Recent transactions</h2>
              <button className="text-cyan-500 text-sm">View All</button>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white text-sm font-medium">
                          {transaction.type}
                        </span>
                        <span
                          className={`text-xs ${transaction.statusColor} flex items-center gap-1`}
                        >
                          {transaction.status === "Delivered" && (
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="6"
                                r="6"
                                fill="currentColor"
                                opacity="0.2"
                              />
                              <path
                                d="M3.5 6L5.5 8L8.5 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {transaction.status === "Pending" && (
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="6"
                                r="5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M6 3V6L8 8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                          {transaction.status === "Failed" && (
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <circle
                                cx="6"
                                cy="6"
                                r="6"
                                fill="currentColor"
                                opacity="0.2"
                              />
                              <path
                                d="M4 4L8 8M8 4L4 8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          )}
                          {transaction.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        to: {transaction.to}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium text-sm mb-1">
                      {transaction.amount}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {transaction.nairaAmount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeWithTransactions;
