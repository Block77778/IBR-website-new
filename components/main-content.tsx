import Image from "next/image"
import { Card } from "@/components/ui/card"

export function MainContent() {
  return (
    <div className="bg-blue-900/90 rounded-lg p-6 text-white">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">
          <span className="text-gold">IBR COIN</span> <span className="text-red-500">(IBR)</span>
        </h1>
        <p className="text-2xl">Revolutionizing Digital Finance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000002501.jpg-Mx7QDSUz7ls1w7ySKxkt2OW2NdBhq7.jpeg"
            alt="IBR Coin Logo"
            width={300}
            height={300}
            className="mb-4"
          />
          <p className="text-center text-lg">
            The next generation cryptocurrency with advanced security features and real-world utility
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FeatureCard
            number="1"
            title="Security"
            description="Advanced blockchain technology with enhanced security protocols"
          />
          <FeatureCard number="2" title="NFTs" description="Exclusive digital collectibles for IBR holders" />
          <FeatureCard number="3" title="News" description="Real-time updates and market analysis" />
          <FeatureCard number="4" title="Community" description="Active community with live chat and events" />
          <FeatureCard
            number="5"
            title="Rewards"
            description="Staking rewards and special benefits for holders"
            colSpan={2}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-navy/50 border border-gold/30 p-6 rounded-lg">
          <div className="text-center">
            <Image src="/ibr-token.png" alt="IBR Token" width={200} height={200} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">IBR Token</h3>
            <p className="mb-4">The native utility token of the IBR ecosystem</p>
            <div className="bg-gold/20 p-3 rounded-lg">
              <p className="font-bold">Current Price: $0.0125</p>
              <p className="text-green-400">+13.64% (24h)</p>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Token Utility</h2>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</div>
              <p>Access to exclusive IBR platform features</p>
            </div>
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</div>
              <p>Governance voting rights on future developments</p>
            </div>
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</div>
              <p>Staking rewards and passive income opportunities</p>
            </div>
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</div>
              <p>Discounted transaction fees within the ecosystem</p>
            </div>
            <div className="flex items-start">
              <div className="bg-gold text-navy rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✓</div>
              <p>Priority access to new features and NFT drops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  number,
  title,
  description,
  colSpan = 1,
}: {
  number: string
  title: string
  description: string
  colSpan?: number
}) {
  return (
    <div className={`bg-navy/50 border border-gold/30 p-4 rounded-lg ${colSpan === 2 ? "col-span-2" : ""}`}>
      <div className="flex items-center mb-2">
        <span className="text-3xl font-bold text-red-500 mr-2">{number}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  )
}

