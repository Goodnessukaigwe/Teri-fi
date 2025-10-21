"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ConfirmPasswordPage = () => {
  const [pin, setPin] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInput = (num: string) => {
    if (error) setError("");

    const newPin = pin + num;
    setPin(newPin);

    if (newPin.length === 6) {
      const savedPin = localStorage.getItem("setupPin");

      if (newPin === savedPin) {
        // Clear saved pin for security, then show success
        localStorage.removeItem("setupPin");
        setTimeout(() => {
          setIsSuccess(true);
        }, 500);
      } else {
        setError("PINs do not match. Please try again.");
        setPin("");

        setTimeout(() => setError(""), 3500);
      }
    }
  };
  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6">
        {/* Animated Confetti Popup */}
        <ConfettiPopup />

        {/* Wallet Icon */}
        <div className="w-24 h-24 flex items-center justify-center mt-12">
          <Image
            src="/coinwallet.png"
            alt="wallet"
            width={180}
            height={180}
            className="object-contain"
            priority
          />
        </div>

        {/* Success Message */}
        <h1 className="text-xl md:text-2xl font-semibold text-center mt-8 px-4">
          You have successfully created a wallet!
        </h1>

        {/* Button */}
        <button
          onClick={() => router.push("/home")}
          className="w-[85%] max-w-sm py-3 bg-[#00BFFF] hover:bg-[#00A5E0] rounded-lg text-white mt-10 font-medium transition-all"
        >
          Proceed to homepage
        </button>
      </div>
    );
  }

  // Animated Confetti Popup component
  function ConfettiPopup() {
    const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const bursts = 5;
    const piecesPerBurst = 60;
    
    const confettiPieces = Array.from({ length: bursts * piecesPerBurst }, (_, i) => {
      const burstIndex = Math.floor(i / piecesPerBurst);
      const pieceIndex = i % piecesPerBurst;
      const angle = (pieceIndex / piecesPerBurst) * 360;
      const distance = 150 + Math.random() * 100;
      const burstDelay = burstIndex * 0.6;
      
      return {
        id: i,
        angle,
        distance,
        delay: burstDelay + Math.random() * 0.2,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
        size: 8 + Math.random() * 6
      };
    });

    return (
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none">
        <div className="relative w-[180px] h-[180px]">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute top-1/2 left-1/2 animate-confetti-burst"
              style={{
                animationDelay: `${piece.delay}s`,
                '--angle': `${piece.angle}deg`,
                '--distance': `${piece.distance}px`,
              } as React.CSSProperties & { '--angle': string; '--distance': string }}
            >
              <div
                className="animate-confetti-spin"
                style={{
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  backgroundColor: piece.color,
                  transform: `rotate(${piece.rotation}deg)`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-4">
      <div className="text-center mb-8 w-full max-w-xs">
        <h1 className="text-2xl font-semibold">Confirm your password</h1>
        <p className="text-gray-400 mt-2">
          Please re-enter your password to confirm
        </p>
      </div>

      {/* PIN display */}
      <div className="flex gap-2 mb-10">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                pin.length > i ? "bg-white" : "bg-gray-700"
              }`}
            ></div>
          ))}
      </div>
      {/* Inline error (accessible) */}
      {error && (
        <p
          className="mt-2 text-sm text-red-500 text-center"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}

      {/* Number pad */}
      <div className="grid grid-cols-3 gap-4 w-full mt-5 max-w-xs">
        {[..."123456789"].map((num) => (
          <button
            key={num}
            onClick={() => handleInput(num)}
            className="text-2xl font-semibold bg-neutral-800 w-16 h-16 rounded-full active:bg-neutral-700 transition-colors"
            disabled={pin.length >= 6}
          >
            {num}
          </button>
        ))}
        <div></div>
        <button
          onClick={() => handleInput("0")}
          className="text-2xl font-semibold bg-neutral-800 w-16 h-16 rounded-full active:bg-neutral-700 transition-colors"
          disabled={pin.length >= 6}
        >
          0
        </button>
        <button
          onClick={handleDelete}
          className="text-blue-400 text-lg font-medium active:text-blue-300 transition-colors"
          disabled={pin.length === 0}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmPasswordPage;
