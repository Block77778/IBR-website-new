"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
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
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 w-64 bg-black border border-gold/20 shadow-lg z-50 p-4">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item, index) => (
              <a key={index} href={item.href} onClick={handleClick} className="text-white hover:text-gold">
                {item.label}
              </a>
            ))}
            <div className="border-t border-gold/20 my-2 pt-2">
              <a
                href="https://app.uniswap.org/swap?chain=polygon&inputCurrency=NATIVE&outputCurrency=0x8f654bd4ec40ba2b1c9f51e3c0f634bdac3edfb8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gold hover:bg-gold-light text-black text-center font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

