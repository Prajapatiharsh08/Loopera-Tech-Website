"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const technologies = {
  "Backend Languages": [
    { name: "Ruby", icon: "💎", color: "bg-red-50 text-red-600 border-red-200" },
    { name: "Python", icon: "🐍", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Go", icon: "🔷", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { name: "NodeJS", icon: "💚", color: "bg-green-50 text-green-600 border-green-200" },
  ],
  "Backend Frameworks": [
    { name: "Ruby on Rails", icon: "🚂", color: "bg-red-50 text-red-600 border-red-200" },
    { name: "FastAPI", icon: "⚡", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { name: "Django", icon: "🎯", color: "bg-green-50 text-green-600 border-green-200" },
  ],
  Frontend: [
    { name: "ReactJS", icon: "⚛️", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "VueJS", icon: "💚", color: "bg-green-50 text-green-600 border-green-200" },
    { name: "NextJS", icon: "▲", color: "bg-gray-50 text-gray-600 border-gray-200" },
  ],
  Mobile: [
    { name: "React Native", icon: "📱", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Expo", icon: "🚀", color: "bg-purple-50 text-purple-600 border-purple-200" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "🐘", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Redis", icon: "🔴", color: "bg-red-50 text-red-600 border-red-200" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-50 text-green-600 border-green-200" },
    { name: "MySQL", icon: "🐬", color: "bg-orange-50 text-orange-600 border-orange-200" },
  ],
  Infrastructure: [
    { name: "Firebase", icon: "🔥", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "Convex", icon: "🔄", color: "bg-purple-50 text-purple-600 border-purple-200" },
    { name: "Brevo", icon: "📧", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Prisma", icon: "🔺", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    { name: "Vercel", icon: "▲", color: "bg-gray-50 text-gray-600 border-gray-200" },
    { name: "Stripe", icon: "💳", color: "bg-purple-50 text-purple-600 border-purple-200" },
    { name: "AWS", icon: "☁️", color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "Google Cloud", icon: "🌤️", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Docker", icon: "🐳", color: "bg-blue-50 text-blue-600 border-blue-200" },
  ],
}

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">OUR EXPERTISE</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build scalable, high-performance solutions tailored
            to your business needs.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 text-left">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`${tech.color} border rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-semibold">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white px-8 py-4 rounded-full font-semibold group"
          >
            Get Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
