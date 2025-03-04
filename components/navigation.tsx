"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      label: "How to Buy",
      href: "#how-to-buy",
    },
    {
      label: "Tokenomics",
      href: "#tokenomics",
    },
    {
      label: "Roadmap",
      href: "#roadmap",
    },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false)
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-lg border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000002501.jpg-Mx7QDSUz7ls1w7ySKxkt2OW2NdBhq7.jpeg"
              alt="IBR Coin Logo"
              width={48}
              height={48}
              className="rounded-full border border-gold/20"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">IBR COIN</h1>
              <p className="text-xs text-gold/80">The Future of Digital Currency</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={handleClick}
                className="text-white hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://app.uniswap.org/swap?chain=polygon&inputCurrency=NATIVE&outputCurrency=0x8f654bd4ec40ba2b1c9f51e3c0f634bdac3edfb8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-black font-semibold px-6 py-2 rounded-lg transition-colors"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white hover:text-gold transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bg-black/95 backdrop-blur-lg border-b border-gold/20 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={handleClick}
              className="block text-white hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gold/20">
            <a
              href="https://app.uniswap.org/swap?chain=polygon&inputCurrency=NATIVE&outputCurrency=0x8f654bd4ec40ba2b1c9f51e3c0f634bdac3edfb8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold hover:bg-gold-light text-black text-center font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

