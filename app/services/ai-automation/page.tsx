import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Bot, Brain, Cog, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Automation
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Let AI Do the Heavy Lifting
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                We integrate AI tools like OpenAI, Langchain, Make, and Zapier into your business processes — automating
                responses, document generation, scheduling, and more. Save time, reduce errors, and boost efficiency.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                Automate Your Business
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Bot className="w-32 h-32 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Automation Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Customer Support",
                desc: "AI chatbots that handle customer inquiries 24/7 with human-like responses",
              },
              {
                title: "Lead Qualification via Chatbots",
                desc: "Intelligent bots that qualify leads and route them to the right sales team",
              },
              {
                title: "Internal Tools Powered by LLMs",
                desc: "Custom AI tools for document processing, data analysis, and reporting",
              },
              {
                title: "AI-Generated Content Workflows",
                desc: "Automated content creation for marketing, social media, and documentation",
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Tools We Work With</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "OpenAI", desc: "GPT models & APIs" },
              { name: "Langchain", desc: "LLM frameworks" },
              { name: "Make", desc: "Visual automation" },
              { name: "Zapier", desc: "App integrations" },
            ].map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Automation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Save Time",
                desc: "Automate repetitive tasks and focus on what matters most",
              },
              {
                icon: <Brain className="w-8 h-8 text-purple-600" />,
                title: "Reduce Errors",
                desc: "AI-powered processes eliminate human error and inconsistencies",
              },
              {
                icon: <Cog className="w-8 h-8 text-purple-600" />,
                title: "Scale Efficiently",
                desc: "Handle more work without proportionally increasing costs",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's identify the processes that can be automated and build intelligent solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Start Automation Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
              >
                See AI Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
