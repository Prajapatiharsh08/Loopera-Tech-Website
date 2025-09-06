"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "Can you integrate AI automation into my existing CRM or ERP system?",
    answer:
      "Yes. We can embed AI tools into your current CRM, ERP, or internal workflows — such as lead scoring, smart data entry, or predictive analytics — without disrupting your current setup.",
  },
  {
    question: "What kind of tasks can you automate using AI?",
    answer:
      "We automate customer support with chatbots, lead qualification, invoice processing, HR workflows, email marketing sequences, and more using LLMs and rule-based logic.",
  },
  {
    question: "What technologies do you use for AI solutions?",
    answer:
      "We are technology-agnostic and choose tools based on the use case. That said, we're proficient in Python for AI workflows, LangChain and OpenAI APIs for LLMs, React and Vue.js for frontend, and Ruby on Rails or Node.js for backend. For scalability, we rely on AWS and Google Cloud, along with Zapier and Make for automation.",
  },
  {
    question: "Do you build custom web apps with login, dashboards, and admin panels?",
    answer:
      "Absolutely. We build full-stack web applications with user authentication, real-time dashboards, admin controls, and scalable architecture using frameworks like React, Next.js, and Node.js.",
  },
  {
    question: "I want an app like Zomato or Uber — can you build that?",
    answer:
      "Yes. We've developed food delivery, ride-hailing, and marketplace-style apps with real-time tracking, payments, order flows, and chat systems. We use Flutter or React Native for cross-platform performance.",
  },
  {
    question: "Will my mobile app support AI features like voice commands or smart search?",
    answer:
      "Yes. We integrate AI features like NLP-based voice commands, auto-categorization, recommendation engines, and smart search into your apps.",
  },
  {
    question: "Can you build internal tools tailored for my business (e.g., inventory, attendance, reports)?",
    answer:
      "Definitely. We build custom internal systems — from automated reporting dashboards to inventory and operations tracking tools — optimized for your workflows and team size.",
  },
  {
    question: "Can your custom tools work offline or on low-internet areas?",
    answer:
      "Yes. We offer Progressive Web App (PWA) or hybrid mobile solutions with offline-first functionality, sync logic, and caching.",
  },
  {
    question: "Do you only do web design or also branding like logo and colors?",
    answer:
      "We do both. From UX/UI design of digital products to visual branding (logo, typography, color palette, social templates), our team creates a complete design system for your brand.",
  },
  {
    question: "Will I get responsive designs that work on all devices?",
    answer:
      "Yes. Every design we deliver is responsive — mobile, tablet, and desktop friendly — tested across breakpoints before handover.",
  },
  {
    question: "Will I be able to manage the AI tools after the project ends?",
    answer:
      "Definitely. We build solutions with transparency and handoff in mind — including clean documentation, admin dashboards, and knowledge transfers.",
  },
]

export default function FAQsList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="group border border-gray-200 hover:border-[#1E90FF]/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1E90FF] transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-[#1E90FF]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#1E90FF] transition-colors" />
                      )}
                    </div>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you understand how we can bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <button className="bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule a Call
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Send us a Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
