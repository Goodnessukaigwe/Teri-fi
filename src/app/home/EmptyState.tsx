"use client"

import React, { useState } from 'react';
import { Eye, EyeOff, Copy, Bell, ChevronDown, ArrowUp, Plus, Clock,} from 'lucide-react';
import { useRouter } from "next/navigation"
import Image from 'next/image';
import historyImage from '@/public/history.png';

const EmptyState = () => {
    const [balanceVisible, setBalanceVisible] = useState(true);
    const router = useRouter()

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="flex justify-between items-center px-6 pt-8 pb-6">
                <div className="flex items-center gap-2">
                    <h1 className="text-lg font-bold text-gray-300">Your Wallet</h1>
                    <ChevronDown className="w-5 h-5 text-gray-300" />
                </div>
                <div className="flex items-center gap-4">
                    <Copy className="w-5 h-5 text-gray-300" />
                    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2" />
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
                                    {balanceVisible ? '0.000' : '••••'}
                                </span>
                            </div>
                            <div className="text-sm text-gray-400 mt-1">0.00USDC</div>
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
            <div className=" px-6 mb-12 flex gap-3">
                <button
                    onClick={() => router.push("/sendMoney")}
                    className="bg-transparent border border-cyan-500 text-cyan-500 font-medium py-3 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-colors text-sm">
                    <ArrowUp className="w-4 h-4" />
                    Send Money
                </button>
                <button
                    onClick={() => router.push("/receiveMoney")}
                    className="bg-transparent border border-cyan-500 text-cyan-500 font-medium py-3 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-colors text-sm">
                    <Plus className="w-4 h-4" />
                    Receive Money
                </button>
            </div>

            {/* Recent Transactions */}
            <div className="px-6 mb-4">
                <h2 className="text-xl font-normal mb-6">Recent transactions</h2>

                {/* Empty State */}
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
            </div>
</div>
    );
};

export default EmptyState;