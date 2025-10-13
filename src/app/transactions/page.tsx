"use client"

import React, {  useState } from 'react';
import Image from 'next/image';
import { Home, Send, Clock, Settings, ArrowUpRight, ArrowDownLeft, ChevronLeft } from 'lucide-react';
import historyImage from '@/public/history.png';
import {useRouter} from 'next/navigation';

const TransactionHistory = () => {
  const [hasTransactions, setHasTransactions] = useState(true);
  const router = useRouter();

  const transactions = [
    {
      id: 1,
      type: 'sent',
      title: 'Sent',
      status: 'Delivered',
      statusColor: 'text-green-500',
      to: 'to: +2349074190892',
      amount: '-$50',
      nairaAmount: '₦85,000',
      date: 'Oct 5, 2025'
    },
    {
      id: 2,
      type: 'sent',
      title: 'Sent',
      status: 'Pending',
      statusColor: 'text-yellow-500',
      to: 'to: +2349074190892',
      amount: '-$50',
      nairaAmount: '₦85,000',
      date: 'Oct 5, 2025'
    },
    {
      id: 3,
      type: 'received',
      title: 'Received',
      status: 'Success',
      statusColor: 'text-green-500',
      to: 'to: +2349074190892',
      amount: '-$50',
      nairaAmount: '₦85,000',
      date: 'Oct 5, 2025'
    },
    {
      id: 4,
      type: 'sent',
      title: 'Sent',
      status: 'Pending',
      statusColor: 'text-yellow-500',
      to: 'to: +2349074190892',
      amount: '-$50',
      nairaAmount: '₦85,000',
      date: 'Oct 5, 2025'
    },
    {
      id: 5,
      type: 'sent',
      title: 'Sent',
      status: 'Failed',
      statusColor: 'text-red-500',
      to: 'to: +2349074190892',
      amount: '-$50',
      nairaAmount: '₦85,000',
      date: 'Oct 5, 2025'
    }
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'Delivered' || status === 'Success') {
      return (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="6" fill="currentColor" opacity="0.2"/>
          <path d="M3.5 6L5.5 8L8.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (status === 'Pending') {
      return (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 3V6L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    }
    if (status === 'Failed') {
      return (
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="6" fill="currentColor" opacity="0.2"/>
          <path d="M4 4L8 8M8 4L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-6 justify-between mr-10 ">
      <button 
         onClick={() => router.push("/home")}
        className="text-gray-300 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-normal">Transaction history</h1>
      </header>

      {/* Content */}
      {!hasTransactions ? (
        // Empty State
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-6">
            <Image
              src="/history.png"
              alt="You have no recent transactions yet"
              width={160}
              height={160}
              className="mx-auto opacity-80"
              priority
            />
             
          </div>
        </div>
      ) : (
        // Transactions List
        <div className="px-6 py-6 space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => router.push(`/transactions/${transaction.id}`)}
              className="bg-gray-900 rounded-2xl p-4 flex items-center justify-between border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {/* Left Side - Icon and Info */}
              <div className="flex items-center gap-3 flex-1">
                {/* Icon */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  {transaction.type === 'sent' ? (
                    <ArrowUpRight className="w-5 h-5 text-cyan-500" />
                  ) : (
                    <ArrowDownLeft className="w-5 h-5 text-green-500" />
                  )}
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-medium">
                      {transaction.title}
                    </span>
                    <span className={`text-xs ${transaction.statusColor} flex items-center gap-1`}>
                      {getStatusIcon(transaction.status)}
                      {transaction.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {transaction.to}
                  </div>
                  <div className="text-xs text-gray-500">
                    {transaction.date}
                  </div>
                </div>
              </div>

              {/* Right Side - Amount */}
              <div className="flex-shrink-0 text-right">
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
      )}

      {/* Bottom Navigation */}
      <nav className="px-6 py-6">
        <div className="flex justify-around items-center">
          <button 
          onClick={() => router.push("/home")}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-500">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button 
          onClick={() => router.push("/sendMoney")}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-500">
            <Send className="w-6 h-6" />
            <span className="text-xs">Send</span>
          </button>
          <button 
          onClick={() => router.push("/transactions")}
          className="flex flex-col items-center gap-1 text-cyan-500">
            <Clock className="w-6 h-6" />
            <span className="text-xs">Transactions</span>
          </button>
          <button 
          onClick={() => router.push("/settings")}
          className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-500">
            <Settings className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TransactionHistory;