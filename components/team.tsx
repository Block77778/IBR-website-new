import Image from "next/image"
import { Twitter, Linkedin, Globe } from "lucide-react"

export function Team() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
    {
      name: "Emma Williams",
      role: "Marketing Director",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        website: "https://example.com",
      },
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <div key={index} className="border-gradient p-6 rounded-lg text-center">
          <div className="relative w-48 h-48 mx-auto mb-4">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-gold mb-1">{member.name}</h3>
          <p className="text-gray-400 mb-4">{member.role}</p>
          <div className="flex justify-center space-x-4">
            <a href={member.social.twitter} className="text-gray-400 hover:text-gold">
              <Twitter size={20} />
            </a>
            <a href={member.social.linkedin} className="text-gray-400 hover:text-gold">
              <Linkedin size={20} />
            </a>
            <a href={member.social.website} className="text-gray-400 hover:text-gold">
              <Globe size={20} />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

