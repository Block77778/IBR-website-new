import { CryptoTicker } from "@/components/crypto-ticker"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Tokenomics } from "@/components/tokenomics"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"
import { HowToBuy } from "@/components/how-to-buy"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <CryptoTicker />
      <Navigation />

      <main>
        <Hero />

        {/* How to Buy Section */}
        <section id="how-to-buy" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">How to Buy</h2>
            <HowToBuy />
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-20 px-4 bg-gradient">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Tokenomics</h2>
            <Tokenomics />
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Roadmap</h2>
            <Roadmap />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

