"use client"

import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { useState } from "react"

export function Tokenomics() {
  const [copySuccess, setCopySuccess] = useState(false)

  const tokenDistribution = [
    { title: "Presale", value: 40, color: "#d4af37" },
    { title: "Liquidity", value: 30, color: "#8B7355" },
    { title: "Team", value: 10, color: "#E5E4E2" },
    { title: "Marketing", value: 10, color: "#C0C0C0" },
    { title: "Development", value: 10, color: "#B8860B" },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("0x8f654bd4Ec40Ba2b1c9f51e3C0f634bDAc3edFb8")
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-6">Token Distribution</h3>
          <div className="space-y-6">
            {tokenDistribution.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                    <span className="text-white">{item.title}</span>
                  </div>
                  <span className="font-bold text-gold">{item.value}%</span>
                </div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-black/40 border border-gold/30 p-6 rounded-xl backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-2 text-gold">Total Supply</h4>
            <p className="text-2xl font-bold text-white">1,000,000,000 IBR</p>
            <p className="text-sm text-gray-400 mt-2">One Billion IBR Tokens</p>
          </div>

          <div className="bg-black/40 border border-gold/30 p-6 rounded-xl backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-2 text-gold">Token Type</h4>
            <p className="text-white">ERC-20 (Ethereum Blockchain)</p>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Contract Address:</p>
              <div className="flex items-center justify-between bg-black/60 p-3 rounded-lg border border-gold/20">
                <code className="text-sm text-gold/90 break-all">0x8f654bd4Ec40Ba2b1c9f51e3C0f634bDAc3edFb8</code>
                <button onClick={copyToClipboard} className="ml-2 p-2 hover:bg-gold/10 rounded-lg transition-colors">
                  <Copy size={16} className="text-gold" />
                </button>
              </div>
              {copySuccess && <p className="text-sm text-green-400 mt-2">✓ Copied to clipboard</p>}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative"
      >
        <div className="bg-black/40 border border-gold/30 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center text-gold">Token Allocation</h3>

          {/* Simplified and more reliable pie chart implementation */}
          <div className="relative aspect-square">
            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
              {
                tokenDistribution.reduce(
                  (acc, item, index) => {
                    const startAngle = acc.offset
                    const sliceAngle = (item.value / 100) * 360
                    const endAngle = startAngle + sliceAngle

                    // Convert angles to radians for calculation
                    const startRad = (startAngle * Math.PI) / 180
                    const endRad = (endAngle * Math.PI) / 180

                    // Calculate the SVG arc path
                    const x1 = 50 + 50 * Math.cos(startRad)
                    const y1 = 50 + 50 * Math.sin(startRad)
                    const x2 = 50 + 50 * Math.cos(endRad)
                    const y2 = 50 + 50 * Math.sin(endRad)

                    const largeArcFlag = sliceAngle > 180 ? 1 : 0

                    const pathData = [
                      `M 50 50`,
                      `L ${x1} ${y1}`,
                      `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                      `L 50 50`,
                    ].join(" ")

                    acc.paths.push(
                      <motion.path
                        key={index}
                        d={pathData}
                        fill={item.color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />,
                    )

                    acc.offset = endAngle
                    return acc
                  },
                  { paths: [], offset: 0 },
                ).paths
              }
            </svg>

            {/* Center circle with total supply */}
            <div className="absolute inset-[15%] bg-black/80 rounded-full backdrop-blur-sm border border-gold/20 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold mb-2">1B</p>
                <p className="text-sm text-gray-400">Total Supply</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {tokenDistribution.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-400 truncate">{item.title}</p>
                  <p className="text-sm font-bold text-white">{item.value}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

