"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold">LOOPERA</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We craft scalable, AI-first digital solutions that help you automate, grow, and lead in your industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E90FF] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E90FF] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E90FF] transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Creative Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-[#1E90FF] transition-colors duration-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#1E90FF]" />
                <span className="text-gray-300">hello@loopera.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#1E90FF]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#1E90FF]" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
            <Link href="/consultation">
              <Button className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white group w-full cursor-pointer">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Loopera.tech. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#1E90FF] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#1E90FF] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#1E90FF] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
