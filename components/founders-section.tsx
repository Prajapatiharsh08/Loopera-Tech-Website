"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const founders = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    quote:
      "Technology should amplify human potential, not replace it. We build solutions that empower people to achieve more.",
    image: "/professional-ceo-headshot.jpg",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    quote:
      "The future belongs to businesses that can adapt quickly. Our AI-first approach ensures our clients stay ahead of the curve.",
    image: "/professional-cto-headshot.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Design & Co-Founder",
    quote:
      "Great design is invisible. It solves problems so elegantly that users don't even notice the complexity behind it.",
    image: "/professional-designer-headshot.jpg",
  },
]

export default function FoundersSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">FOUNDERS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries behind LOOPERA.tech who are passionate about building the future of digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white overflow-hidden"
            >
              <div className="relative">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1E90FF] transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-[#1E90FF] font-medium mt-1">{founder.role}</p>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#1E90FF]/20 absolute -top-2 -left-2" />
                  <p className="text-gray-600 leading-relaxed italic pl-6">{founder.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
