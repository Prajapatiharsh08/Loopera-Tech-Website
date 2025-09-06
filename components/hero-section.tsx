"use client"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "./animated-background"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Header */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">WE DEVELOP</span>
            <span className="block bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] bg-clip-text text-transparent">
              SO YOU LEVEL UP
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Custom websites, apps, and AI systems built to launch, automate, and scale your business — beautifully and
            intelligently.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/consultation">
              <Button
                size="lg"
                className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#1E90FF", color: "white" }}
              >
                SCHEDULE FREE CONSULTATION
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
