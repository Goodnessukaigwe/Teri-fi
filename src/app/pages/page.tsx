"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import terifi2Image from "@/public/terifi2.png"; 

const OnboardingPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/pages/get-started"); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6">
      {/* Logo Box */}
      <div className="border border-cyan-500 rounded-md px-8 py-3 mb-6">
        <h1 className="text-2xl font-semibold tracking-wide">TERI-FI</h1>
      </div>

      {/* Tagline */}
      <p className="text-gray-300 text-sm mb-10">
        Send your crypto to any phone number
      </p>

      {/* Illustration */}
      <div className="flex justify-center mb-8">
        <Image
          src="/terifi2.png"
          alt="Send crypto illustration"
          width={260}
          height={260}
          className="max-w-[260px] h-auto"
          priority
        />
      </div>

      {/* Pagination Dots */}
      
      <div className="flex justify-center space-x-2 mt-6">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
      </div>

    </div>
  );
};

export default OnboardingPage;
