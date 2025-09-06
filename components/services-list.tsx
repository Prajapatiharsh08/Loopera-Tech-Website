"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Brain, Smartphone, Code, Palette, CheckCircle, ArrowRight, Zap, Database } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    subtitle: "Modern, responsive, and AI-enhanced websites.",
    description:
      "Whether you're a startup or an established brand, we create lightning-fast, SEO-optimized websites with stunning design and intelligent functionality — including AI-powered forms, smart recommendations, and chatbot integrations.",
    technologies: ["React", "Next.js", "WordPress", "TailwindCSS", "Headless CMS"],
    addons: ["AI chatbot", "voice search", "dynamic content"],
    features: [
      "Lightning-fast performance",
      "SEO-optimized structure",
      "Mobile-first responsive design",
      "AI-powered functionality",
      "Smart recommendations engine",
      "Integrated chatbot systems",
    ],
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI Automation",
    subtitle: "Let AI do the heavy lifting.",
    description:
      "We integrate AI tools like OpenAI, Langchain, Make, and Zapier into your business processes — automating responses, document generation, scheduling, and more. Save time, reduce errors, and boost efficiency.",
    technologies: ["OpenAI", "Langchain", "Make", "Zapier"],
    useCases: [
      "Automated customer support",
      "Lead qualification via chatbots",
      "Internal tools powered by LLMs",
      "AI-generated content workflows",
    ],
    features: [
      "Intelligent customer support automation",
      "Smart lead qualification systems",
      "Document generation workflows",
      "Automated scheduling systems",
      "Error reduction protocols",
      "Efficiency optimization tools",
    ],
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "From concept to launch — fast, beautiful apps.",
    description:
      "We build cross-platform mobile apps (iOS + Android) that are scalable, fast, and easy to maintain — whether you need a product MVP or a full-fledged app with AI integrations.",
    technologies: ["Flutter", "React Native", "Firebase", "Supabase"],
    aiFeatures: ["Voice interfaces", "smart chat", "push personalization"],
    features: [
      "Cross-platform compatibility",
      "Scalable architecture",
      "Fast performance optimization",
      "AI voice interfaces",
      "Smart chat integration",
      "Personalized push notifications",
    ],
  },
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software Development",
    subtitle: "Tailored solutions that solve real business problems.",
    description:
      "Have a unique process or a product idea that doesn't fit the mold? We build backend dashboards, CRMs, portals, and SaaS tools tailored to your exact needs — with AI embedded where it matters.",
    services: ["Business workflow automation", "Custom dashboards", "Internal tools", "API integrations"],
    features: [
      "Custom workflow automation",
      "Real-time dashboards",
      "Tailored internal tools",
      "Seamless API integrations",
      "Scalable SaaS solutions",
      "AI-embedded functionality",
    ],
  },
  {
    id: "creative-design",
    icon: Palette,
    title: "Creative Designing",
    subtitle: "Where aesthetics meet performance.",
    description:
      "We don't just design pretty interfaces — we design experiences that convert. From brand identity to UI/UX for your website or app, our design-first approach keeps both humans and algorithms happy.",
    offerings: [
      "Brand & logo design",
      "UI/UX for web & mobile",
      "Motion graphics & AI visuals",
      "Design systems + prototyping",
    ],
    features: [
      "Conversion-focused design",
      "Complete brand identity",
      "User experience optimization",
      "Motion graphics creation",
      "AI-generated visuals",
      "Comprehensive design systems",
    ],
  },
]

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Left Column - Content */}
                <div className="space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-[#1E90FF] transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-[#1E90FF] font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    {/* Technologies */}
                    {service.technologies && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#10B981] mr-2" />
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-sm rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Add-ons or Use Cases */}
                    {service.addons && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#10B981] mr-2" />
                          Add-ons:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.addons.map((addon, addonIndex) => (
                            <span
                              key={addonIndex}
                              className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-sm rounded-full font-medium"
                            >
                              {addon}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.useCases && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Zap className="w-5 h-5 text-[#A855F7] mr-2" />
                          Use Cases:
                        </h4>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, useCaseIndex) => (
                            <li key={useCaseIndex} className="flex items-start space-x-2">
                              <ArrowRight className="w-4 h-4 text-[#A855F7] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.services && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Database className="w-5 h-5 text-[#64748B] mr-2" />
                          Services:
                        </h4>
                        <ul className="space-y-2">
                          {service.services.map((serviceItem, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start space-x-2">
                              <ArrowRight className="w-4 h-4 text-[#64748B] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{serviceItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.offerings && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Palette className="w-5 h-5 text-[#A855F7] mr-2" />
                          What We Offer:
                        </h4>
                        <ul className="space-y-2">
                          {service.offerings.map((offering, offeringIndex) => (
                            <li key={offeringIndex} className="flex items-start space-x-2">
                              <ArrowRight className="w-4 h-4 text-[#A855F7] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.aiFeatures && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Brain className="w-5 h-5 text-[#1E90FF] mr-2" />
                          AI Features:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.aiFeatures.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-sm rounded-full font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link href={`/services/${service.id}`}>
                      <Button className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white group cursor-pointer">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>

                {/* Right Column - Features Grid */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#1E90FF]/20 hover:shadow-md transition-all duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
