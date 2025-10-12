"use client";

import { Home, Send, Clock, ChevronLeft, ChevronRight, User, Shield, Bell, Headphones, HelpCircle, LogOut, Settings, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  const settingsItems = [
    { id: 1, icon: <User className="w-5 h-5" />, label: "Account" },
    { id: 2, icon: <SlidersHorizontal className="w-5 h-5" />, label: "Preferences" },
    { id: 3, icon: <Shield className="w-5 h-5" />, label: "Security" },
    { id: 4, icon: <Bell className="w-5 h-5" />, label: "Notification" },
    { id: 5, icon: <HelpCircle className="w-5 h-5" />, label: "Help center" },
    { id: 6, icon: <Headphones className="w-5 h-5" />, label: "Contact support" },
    { id: 7, icon: <Settings className="w-5 h-5" />, label: "About Teri-fi" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-6 justify-between mb-4 mr-25">
        <button onClick={() => router.back()} className="text-gray-300 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-normal">Settings</h1>
      </header>

      {/* List */}
      <div className="space-y-3">
        {settingsItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-900 p-4 rounded-2xl border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="text-gray-400">{item.icon}</div>
              <p className="text-sm">{item.label}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
        ))}

        {/* Log out */}
        <div className="flex items-center justify-between bg-gray-900 p-4 rounded-2xl border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer mt-2">
          <div className="flex items-center gap-3 text-red-500">
            <LogOut className="w-5 h-5" />
            <p className="text-sm">Log out</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="px-6 py-6">
          <div className="flex justify-around items-center gap-10">
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
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-500">
              <Clock className="w-6 h-6" />
              <span className="text-xs">Transactions</span>
            </button>
            <button
              onClick={() => router.push("/settings")}
              className="flex flex-col items-center gap-1 text-cyan-500">
              <Settings className="w-6 h-6" />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
