"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Wallet, Shield, TrendingUp } from "lucide-react"

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,#d4af37,transparent_50%)] opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-[linear-gradient(to_right,#00000080,#00000040)]" />
        <div className="h-full w-full bg-[url('/grid.png')] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-gold/10 rounded-full px-4 py-2 mb-6"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="ml-2 text-gold text-sm font-medium">Presale Live Now</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient block mb-2">IBR COIN</span>
            <span className="text-white">Redefining Digital</span>
            <br />
            <span className="text-white">Finance Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Experience the next evolution in cryptocurrency with advanced blockchain technology, real-world utility, and
            sustainable growth potential.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4 hover:border-gold/30 transition-colors">
              <Shield className="text-gold h-6 w-6" />
              <span className="text-gray-300">Secure & Audited</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4 hover:border-gold/30 transition-colors">
              <TrendingUp className="text-gold h-6 w-6" />
              <span className="text-gray-300">High Growth</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4 hover:border-gold/30 transition-colors">
              <Wallet className="text-gold h-6 w-6" />
              <span className="text-gray-300">Instant Trading</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-gold mb-4">Presale Stage 1 Ends In:</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
                <div className="text-sm text-gray-400">Days</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.hours}</div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.minutes}</div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-gold/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.seconds}</div>
                <div className="text-sm text-gray-400">Seconds</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="https://app.uniswap.org/swap?chain=polygon&inputCurrency=NATIVE&outputCurrency=0x8f654bd4ec40ba2b1c9f51e3c0f634bdac3edfb8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-6 text-lg bg-gold hover:bg-gold-light text-black font-bold rounded-xl group inline-flex items-center justify-center"
            >
              Buy Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

