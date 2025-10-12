"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const SetupPasswordPage = () => {
    const [pin, setPin] = useState("")
    const router = useRouter()

  const handleInput = (num: string) => {
    if (pin.length < 6) setPin(pin + num)
  }

  const handleDelete = () => {
    setPin(pin.slice(0, -1))
  }

  const handleContinue = () => {
    if (pin.length === 6) {
      localStorage.setItem("setupPin", pin)
      
      router.push("/pages/password-pages/confirm-password")
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-white px-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Setup your password</h1>
        <p className="text-gray-400 mt-2">
          You will use this to log into your account
        </p>
      </div>

      {/* PIN display */}
      <div className="flex gap-2 mb-6">
        {Array(6)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${
                pin.length > i ? "bg-white" : "bg-gray-700"
              }`}
            ></div>
          ))}
      </div>

      {/* Number pad */}
      <div className="grid grid-cols-3 gap-6">
        {[..."123456789"].map((num) => (
          <button
            key={num}
            onClick={() => handleInput(num)}
            className="text-2xl font-semibold bg-neutral-800 w-16 h-16 rounded-full"
          >
            {num}
          </button>
        ))}
        <div></div>
        <button
          onClick={() => handleInput("0")}
          className="text-2xl font-semibold bg-neutral-800 w-16 h-16 rounded-full"
        >
          0
        </button>
        <button
          onClick={handleDelete}
          className="text-blue-400 text-lg font-medium"
        >
          Delete
        </button>
      </div>

      {/* Continue button - shows when PIN is complete */}
      {pin.length === 6 && (
        <button
          onClick={handleContinue}
          className="mt-8 w-full max-w-xs py-3 bg-sky-500 rounded-lg text-white text-lg font-medium"
        >
          Continue
        </button>
      )}
    </div>
  )
}

export default SetupPasswordPage


