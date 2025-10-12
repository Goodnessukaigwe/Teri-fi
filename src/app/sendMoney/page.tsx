"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

const SendMoney = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [showTokenDropdown, setShowTokenDropdown] = useState(false);
  // Stable coins for dropdown
  const stableCoins = [
    { symbol: "USDC", name: "USD Coin" },
    { symbol: "USDT", name: "Tether" },
    { symbol: "DAI", name: "Dai" },
  ];
  const [amount, setAmount] = useState("");
  const [showRecent, setShowRecent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock data for recent transactions
  const recentTransactions = [
    { id: 1, value: "+2348186983411" },
    { id: 2, value: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F" },
    { id: 3, value: "+2347035442198" },
    { id: 4, value: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowRecent(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectRecipient = (value: string) => {
    setPhone(value);
    setShowRecent(false);
  };

  // Hide recent dropdown if user types a value not in history
  useEffect(() => {
    if (
      phone.length > 0 &&
      !recentTransactions.some((t) => t.value.startsWith(phone))
    ) {
      setShowRecent(false);
    }
    // Auto-select if phone matches a recent transaction exactly
    const match = recentTransactions.find((t) => t.value === phone);
    if (match) {
      setPhone(match.value);
      setShowRecent(false);
    }
  }, [phone]);

  const handleQuickSelect = (value: string) => setAmount(value);
  const handleNext = () => {
    router.push("/sendMoney/confirm");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">Send</h1>
        <X
          className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-200 transition-colors"
          onClick={() => router.back()}
        />
      </div>

      {/* Input fields */}
      <div className="space-y-4">
        <div className="relative">
          <div className="bg-gray-900 rounded-xl px-4 py-3 flex justify-between items-center">
            <input
              type="text"
              placeholder="Enter recipient phone/ wallet"
              className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500 w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setShowRecent(true)}
              ref={inputRef}
            />
            <ChevronDown
              className={`w-4 h-4 text-gray-400 transition-transform ${showRecent ? 'rotate-180' : ''}`}
              onClick={() => setShowRecent(!showRecent)}
            />
          </div>

          {showRecent && recentTransactions.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute left-0 right-0 mt-2 bg-gray-800 rounded-xl shadow-lg z-50 max-h-60 overflow-auto border border-gray-700"
            >
              <div className="p-2 text-xs text-gray-400 border-b border-gray-700">Recent</div>
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelectRecipient(transaction.value)}
                >
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm truncate">{transaction.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="bg-gray-900 rounded-xl px-4 py-3 flex justify-between items-center">
            <input
              type="text"
              placeholder="Token type"
              className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
              value={token}
              readOnly
              onFocus={() => setShowTokenDropdown(true)}
              onClick={() => setShowTokenDropdown(!showTokenDropdown)}
            />
            <ChevronDown
              className={`w-4 h-4 text-gray-400 cursor-pointer transition-transform ${showTokenDropdown ? 'rotate-180' : ''}`}
              onClick={() => setShowTokenDropdown(!showTokenDropdown)}
            />
          </div>
          {showTokenDropdown && (
            <div className="absolute left-0 right-0 mt-2 bg-gray-800 rounded-xl shadow-lg z-50 border border-gray-700">
              {stableCoins.map((coin) => (
                <div
                  key={coin.symbol}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-sm"
                  onClick={() => {
                    setToken(coin.symbol);
                    setShowTokenDropdown(false);
                  }}
                >
                  {coin.symbol} <span className="text-xs text-gray-400">{coin.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-900 rounded-xl px-4 py-3">
          <input
            type="text"
            placeholder="Enter amount"
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      {/* Quick select buttons */}
      <div className="flex gap-3 mt-6">
        {["$50", "$100", "$200"].map((val) => (
          <button
            key={val}
            onClick={() => handleQuickSelect(val)}
            className="bg-gray-900 rounded-xl py-3 px-6 text-sm text-gray-200"
          >
            {val}
          </button>
        ))}
      </div>

      {/* Next button */}
      <div className="mt-10">
        <button
          onClick={() => router.push("/sendMoney/confirm")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl text-sm"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SendMoney
