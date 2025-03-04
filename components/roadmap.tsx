export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1 - Q1 2024",
      items: [
        "Project Launch & Website Development",
        "Smart Contract Development & Audit",
        "Community Building",
        "Presale Launch",
        "Marketing Campaign Initiation",
      ],
    },
    {
      phase: "Phase 2 - Q2 2024",
      items: [
        "Exchange Listings",
        "Partnership Announcements",
        "NFT Collection Launch",
        "Staking Platform Development",
        "Community Expansion",
      ],
    },
    {
      phase: "Phase 3 - Q3 2024",
      items: [
        "Mobile App Development",
        "Major Exchange Listings",
        "Cross-Chain Integration",
        "Governance Implementation",
        "Ecosystem Expansion",
      ],
    },
    {
      phase: "Phase 4 - Q4 2024",
      items: [
        "DeFi Platform Launch",
        "Global Marketing Campaign",
        "Strategic Partnerships",
        "Additional Use Cases",
        "Community Governance",
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {phases.map((phase, index) => (
        <div key={index} className="roadmap-item">
          <h3 className="text-2xl font-bold text-gold mb-4">{phase.phase}</h3>
          <ul className="space-y-3">
            {phase.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

