"use client";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Copy } from "lucide-react";

export default function TransactionDetailsPage() {
  const router = useRouter();
  const { id } = useParams();

  // Temporary mock data
  const transaction = [
    {
      id,
      type: "Received",
      date: "Sun Oct 5, 2025",
      from: "0x742d35Cc6634C0532925a3b844Bc9e9F50bEb4",
      to: "0x742d35Cc6634C0532925a3b844Bc9e9F50bEb4",
      status: "Delivered",
      asset: "100 USDC",
      rate: "NGN 200,000",
      network: "Base",
    },
  ];

  // Find the specific transaction by ID
  const currentTransaction =
    transaction.find((t) => t.id === id) || transaction[0];

  if (!currentTransaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-6 justify-between mr-15 mb-10">
        <button
          onClick={() => router.back()}
          className="text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">Transaction details</h1>
      </div>

      {/* Card */}
      <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 space-y-4 text-sm">
        <div>
          <p className="text-gray-400">Received</p>
          <p className="text-white">{currentTransaction.date}</p>
        </div>

        <hr className="border-gray-800" />

        <div>
          <p className="text-gray-400">From</p>
          <div className="flex items-center justify-between">
            <p className="truncate">{currentTransaction.from}</p>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div>
          <p className="text-gray-400">To</p>
          <div className="flex items-center justify-between">
            <p className="truncate">{currentTransaction.to}</p>
            <Copy className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <hr className="border-gray-800" />

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400">Status</p>
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-green-600/20 text-green-500 text-xs font-medium">
              ● {currentTransaction.status}
            </span>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Transaction ID</p>
            <Copy className="w-4 h-4 text-gray-400 inline" />
          </div>
        </div>

        <hr className="border-gray-800" />

        <div className="flex justify-between">
          <div>
            <p className="text-gray-400">Asset</p>
            <p className="text-white">{currentTransaction.asset}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">USDC</p>
            <p className="text-white">{currentTransaction.rate}</p>
          </div>
        </div>

        <hr className="border-gray-800" />

        <div>
          <p className="text-gray-400">Network</p>
          <p className="text-white">{currentTransaction.network}</p>
        </div>
      </div>
    </div>
  );
}
