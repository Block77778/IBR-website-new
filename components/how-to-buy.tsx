export function HowToBuy() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8">
        <Step
          number="1"
          title="Set Up a Wallet"
          description="Download and install MetaMask or another Polygon-compatible wallet to store your IBR Coins."
        />

        <Step
          number="2"
          title="Add POL to Your Wallet"
          description="Purchase Polygon (POL) from an exchange and transfer it to your wallet address."
        />

        <Step
          number="3"
          title="Connect to Uniswap"
          description="Go to Uniswap, connect your wallet, and select POL as the token you want to swap."
        />

        <Step
          number="4"
          title="Swap POL for IBR"
          description="Enter the IBR token contract address, set the amount of POL you want to swap, and confirm the transaction."
        />

        <Step
          number="5"
          title="Confirm IBR in Your Wallet"
          description="After the transaction is complete, add the IBR token to your wallet to view your balance."
        />
      </div>

      <div className="mt-10 bg-black/50 border border-gold/30 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gold">IBR Token Contract Address</h2>
        <div className="bg-black/50 p-3 rounded flex justify-between items-center">
          <code className="text-sm text-green-400">0x8f654bd4ec40ba2b1c9f51e3c0f634bdac3edfb8</code>
          <button className="bg-gold text-black px-3 py-1 rounded text-sm">Copy</button>
        </div>
        <p className="mt-4 text-sm text-gray-400">Always verify the contract address before making any transactions.</p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://app.uniswap.org/swap?chain=polygon&inputCurrency=NATIVE&outputCurrency=0x8f654bd4ec40ba2b1c9f51e3c0f634bdac3edfb8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold hover:bg-gold-light text-black font-bold py-3 px-8 rounded-full transition inline-block"
        >
          Buy IBR on Uniswap
        </a>
      </div>
    </div>
  )
}

function Step({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-black/50 rounded-lg border border-gold/30">
      <div className="flex-shrink-0 bg-gold text-black rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-bold mb-2 text-gold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

