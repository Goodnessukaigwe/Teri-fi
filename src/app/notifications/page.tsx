"use client"

import Image from "next/image"
import mailboxImage from "@/public/mailbox.png";
import React, { JSX, useState } from 'react';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { useRouter } from "next/navigation"

const NotificationsPage = () => {
  const router = useRouter()
  const [showNotifications, setShowNotifications] = useState(false);

  type NotificationType = 'service' | 'transfer' | 'received';
  type IconType = 'TERI-fi' | undefined;

  interface Notification {
    id: number;
    type: NotificationType;
    title: string;
    subtitle: string;
    amount?: string;
    date: string;
    icon?: IconType;
  }

  const notifications: Notification[] = [
    {
      id: 1,
      type: 'service',
      title: 'Introducing Teri-fi USSD service',
      subtitle: 'Make offline transactions with our...',
      date: 'Oct 5',
      icon: 'TERI-fi'
    },
    {
      id: 2,
      type: 'transfer',
      title: 'Transferred to +2348034566',
      subtitle: 'USDC',
      amount: '5 USDC',
      date: 'Oct 5',
      icon: undefined
    },
    {
      id: 3,
      type: 'received',
      title: 'Received from +2348034566',
      subtitle: 'USDC',
      amount: '5 USDC',
      date: 'Oct 5',
      icon: undefined
    },
    {
      id: 4,
      type: 'transfer',
      title: 'Transferred to +2348034566',
      subtitle: 'USDC',
      amount: '5 USDC',
      date: 'Oct 5',
      icon: undefined
    },
    {
      id: 5,
      type: 'service',
      title: 'Introducing Teri-fi USSD service',
      subtitle: 'Make offline transactions with our...',
      date: 'Oct 5',
      icon: 'TERI-fi'
    },
    {
      id: 6,
      type: 'transfer',
      title: 'Transferred to +2348034566',
      subtitle: 'USDC',
      amount: '5 USDC',
      date: 'Oct 5'
    }
  ];

  const getIconColor = (type: NotificationType): string => {
    if (type === 'service') return 'bg-cyan-500/20 text-cyan-500';
    if (type === 'transfer') return 'bg-blue-500/20 text-blue-500';
    if (type === 'received') return 'bg-purple-500/20 text-purple-500';
    return 'bg-gray-700/20 text-gray-400';
  };
  
  const getIcon = (type: NotificationType, icon?: IconType): JSX.Element => {
    if (icon === 'TERI-fi') {
      return (
        <div className={`w-10 h-10 rounded flex items-center justify-center ${getIconColor(type)}`}>
          <span className="text-xs font-bold">TERI-fi</span>
        </div>
      );
    }

    if (type === 'transfer') {
      return (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconColor(type)}`}>
  
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
      );
    }

    if (type === 'received') {
      return (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconColor(type)}`}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" opacity="0.2"/>
            <text x="12" y="14" textAnchor="middle" className="text-xs font-bold" fill="currentColor">$</text>
          </svg>
          <span className="absolute text-lg font-bold">$</span>
        </div>
      );
    }

    return (
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconColor(type)}`}>
        <AlertCircle className="w-5 h-5" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
       {/* Header */}
       <header className="flex items-center gap-4 px-6 py-6 justify-between mr-25">
        <button 
         onClick={() => router.push("/home")}
        className="text-gray-300 hover:text-white">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-normal ">Notifications</h1>
      </header>

      {/* Content */}
      {!showNotifications ? (
        // Empty State
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
          <div className="mb-6">
            <Image
              src="/mailbox.png"
              alt="No notifications"
              width={160}
              height={160}
              className="mx-auto opacity-80"
              priority
            />
          </div>
        </div>
      ) : (
        // Notifications List
        <div className="px-6 py-6 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-gray-900 rounded-2xl p-4 flex items-start gap-4 hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {getIcon(notification.type, notification.icon)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-medium text-white truncate">
                    {notification.title}
                  </h3>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                    {notification.date}
                  </span>
                </div>
                <p className="text-xs text-gray-400 truncate">
                  {notification.subtitle}
                </p>
              </div>

              {/* Amount */}
              {notification.amount && (
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-medium text-white">
                    {notification.amount}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;