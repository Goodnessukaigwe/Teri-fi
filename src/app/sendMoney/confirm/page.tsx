"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const ConfirmSend = () => {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = () => {
    // simulate sending
    setShowSuccess(true);
    setTimeout(() => {
      router.push("/home"); // redirect to home page after 2 seconds
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => router.back()} className="p-1 -ml-1">
          <ArrowLeft className="w-5 h-5 text-gray-400 hover:text-gray-200 transition-colors" />
        </button>
        <h1 className="text-xl font-semibold">Send</h1>
        <X 
          className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-200 transition-colors" 
          onClick={() => router.back()}
        />
      </div>

      {/* Inputs (static for demo purpose) */}
      <div className="space-y-4">
        <div className="bg-gray-900 rounded-xl px-4 py-3">
          <input
            readOnly
            value="+2340000000000"
            className="bg-transparent outline-none text-sm w-full text-gray-300"
          />
        </div>
        <div className="bg-gray-900 rounded-xl px-4 py-3">
          <input
            readOnly
            value="USDC"
            className="bg-transparent outline-none text-sm w-full text-gray-300"
          />
        </div>
        <div className="bg-gray-900 rounded-xl px-4 py-3">
          <input
            readOnly
            value="$100"
            className="bg-transparent outline-none text-sm w-full text-gray-300"
          />
        </div>
      </div>

      {/* Transaction Details */}
      <div className="bg-gray-900 rounded-2xl p-4 mt-8 text-sm text-gray-300">
        <p className="flex justify-between mb-2">
          <span>Amount:</span> <span>$100</span>
        </p>
        <p className="flex justify-between mb-2">
          <span>Recipient gets:</span> <span className="text-white">NGN 200,000</span>
        </p>
        <p className="flex justify-between">
          <span>To:</span> <span>+2340000000000</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => router.push("/send")}
          className="flex-1 border border-cyan-500 text-cyan-500 py-3 rounded-xl text-sm font-medium"
        >
          Cancel
        </button>
        <button
          onClick={handleConfirm}
          className="flex-1 bg-cyan-500 text-black py-3 rounded-xl text-sm font-semibold"
        >
          Confirm and Send
        </button>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-gray-900 rounded-2xl p-8 text-center w-72 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold mb-1">Congratulations!</h2>
            <p className="text-gray-400 text-sm">Your transaction was successful.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmSend

