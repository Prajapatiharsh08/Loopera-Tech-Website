'use client'

import { Button } from '@/components/ui/button'
import AnimatedBackground from './animated-background'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Header */}
          <div className="space-y-4">
            {/* First Line */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-3xl sm:text-5xl lg:text-6xl font-bold sm:mr-[60px] lg:mr-[120px]">
              <span className="text-black">WE</span>
              <span className="bg-blue-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-lg">
                DEVELOP
              </span>
            </div>

            {/* Second Line */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-3xl sm:text-5xl lg:text-6xl font-bold sm:ml-[60px] lg:ml-[120px]">
              <span className="text-black">SO YOU</span>
              <span className="bg-blue-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-lg">
                LEVEL UP
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Custom websites, apps, and AI systems built to launch, automate, and
            scale your business — beautifully and intelligently.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/consultation">
              <Button
                size="lg"
                className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-10 sm:px-14 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer min-w-[260px]"
              >
                Talk To Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
