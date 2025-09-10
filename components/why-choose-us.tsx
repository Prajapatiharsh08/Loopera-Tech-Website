"use client"

import { CheckCircle, Brain, Target, Eye, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Native Solutions",
    description:
      "We architect every product with intelligent systems at its core — enhancing performance, efficiency, and user experience.",
  },
  {
    icon: Target,
    title: "Conversion-Oriented Design",
    description:
      "Our UI/UX strategy goes beyond aesthetics to focus on user intent, engagement, and measurable outcomes.",
  },
  {
    icon: Eye,
    title: "Process Transparency",
    description:
      "From pricing to timelines, we maintain full visibility at every stage — ensuring you're informed, involved, and in control.",
  },
  {
    icon: Zap,
    title: "Built-in Automation",
    description:
      "We integrate scalable, no-code and low-code automation that streamlines operations and saves hours of manual effort.",
  },
  {
    icon: Shield,
    title: "Trusted, Scalable Stack",
    description:
      "Our tech stack is modular, future-proof, and documented — allowing your platform to evolve seamlessly with your business.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">WHY CHOOSE US?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:border-[#1E90FF]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                {/* <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#10B981] mt-1" />
                </div> */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <feature.icon className="w-8 h-8 text-[#1E90FF] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
