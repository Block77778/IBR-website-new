import Image from "next/image"

export function Partners() {
  const partners = [
    { name: "Uniswap", logo: "/uniswap.png" },
    { name: "MetaMask", logo: "/metamask.png" },
    { name: "Polygon", logo: "/polygon.png" },
    { name: "CoinGecko", logo: "/coingecko.png" },
    { name: "CoinMarketCap", logo: "/coinmarketcap.png" },
    { name: "Certik", logo: "/certik.png" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {partners.map((partner, index) => (
        <div key={index} className="border-gradient p-6 rounded-lg flex items-center justify-center">
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={120}
            height={40}
            className="opacity-75 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  )
}

