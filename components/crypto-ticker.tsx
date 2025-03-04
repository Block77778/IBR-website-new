"use client"

import { useEffect, useState } from "react"

type CryptoPrice = {
  name: string
  symbol: string
  price: number
  change: number
  changePercent: number
}

export function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { name: "Bitcoin", symbol: "BTC", price: 84182, change: -457, changePercent: -0.54 },
    { name: "Ethereum", symbol: "ETH", price: 2216.1, change: -89.2, changePercent: -3.87 },
    { name: "Polygon", symbol: "POL", price: 0.2717, change: -0.0053, changePercent: -1.91 },
    { name: "IBR Coin", symbol: "IBR", price: 0.0125, change: 0.0015, changePercent: 13.64 },
  ])

  // In a real app, you would fetch real-time prices here
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate price changes
      setPrices((prev) =>
        prev.map((crypto) => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() * 0.01 - 0.005)),
          change: crypto.price * (Math.random() * 0.01 - 0.005),
          changePercent: Math.random() * 2 - 1,
        })),
      )
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker">
          {prices.map((crypto, index) => (
            <div key={index} className="ticker-item flex items-center space-x-2">
              <span className="font-bold">{crypto.symbol}</span>
              <span>
                ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
              </span>
              <span className={crypto.change >= 0 ? "text-green-500" : "text-red-500"}>
                {crypto.change >= 0 ? "+" : ""}
                {crypto.change.toFixed(4)} ({crypto.changePercent.toFixed(2)}%)
              </span>
            </div>
          ))}
          <div className="ticker-item text-teal-400">CONTACT US TO HAVE YOUR ADVERTISEMENT PLACED HERE.......</div>
        </div>
      </div>
    </div>
  )
}

