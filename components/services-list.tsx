'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Globe,
  Brain,
  Smartphone,
  Code,
  Palette,
  CheckCircle,
  ArrowRight,
  Zap,
  Database
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    subtitle: 'Modern, responsive, and AI-enhanced websites.',
    description:
      "Whether you're a startup or an established brand, we create lightning-fast, SEO-optimized websites with stunning design and intelligent functionality — including AI-powered forms, smart recommendations, and chatbot integrations.",
    technologies: [
      'React',
      'Next.js',
      'WordPress',
      'TailwindCSS',
      'Headless CMS'
    ],
    addons: ['AI chatbot', 'voice search', 'dynamic content'],
    features: [
      'Lightning-fast performance',
      'SEO-optimized structure',
      'Mobile-first responsive design',
      'AI-powered functionality',
      'Smart recommendations engine',
      'Integrated chatbot systems'
    ]
  },
  {
    id: 'ai-automation',
    icon: Brain,
    title: 'AI Automation',
    subtitle: 'Let AI do the heavy lifting.',
    description:
      'We integrate AI tools like OpenAI, Langchain, Make, and Zapier into your business processes — automating responses, document generation, scheduling, and more. Save time, reduce errors, and boost efficiency.',
    technologies: ['OpenAI', 'Langchain', 'Make', 'Zapier'],
    useCases: [
      'Automated customer support',
      'Lead qualification via chatbots',
      'Internal tools powered by LLMs',
      'AI-generated content workflows'
    ],
    features: [
      'Intelligent customer support automation',
      'Smart lead qualification systems',
      'Document generation workflows',
      'Automated scheduling systems',
      'Error reduction protocols',
      'Efficiency optimization tools'
    ]
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'From concept to launch — fast, beautiful apps.',
    description:
      'We build cross-platform mobile apps (iOS + Android) that are scalable, fast, and easy to maintain — whether you need a product MVP or a full-fledged app with AI integrations.',
    technologies: ['Flutter', 'React Native', 'Firebase', 'Supabase'],
    aiFeatures: ['Voice interfaces', 'smart chat', 'push personalization'],
    features: [
      'Cross-platform compatibility',
      'Scalable architecture',
      'Fast performance optimization',
      'AI voice interfaces',
      'Smart chat integration',
      'Personalized push notifications'
    ]
  },
  {
    id: 'custom-software',
    icon: Code,
    title: 'Custom Software Development',
    subtitle: 'Tailored solutions that solve real business problems.',
    description:
      "Have a unique process or a product idea that doesn't fit the mold? We build backend dashboards, CRMs, portals, and SaaS tools tailored to your exact needs — with AI embedded where it matters.",
    services: [
      'Business workflow automation',
      'Custom dashboards',
      'Internal tools',
      'API integrations'
    ],
    features: [
      'Custom workflow automation',
      'Real-time dashboards',
      'Tailored internal tools',
      'Seamless API integrations',
      'Scalable SaaS solutions',
      'AI-embedded functionality'
    ]
  },
  {
    id: 'creative-design',
    icon: Palette,
    title: 'Creative Designing',
    subtitle: 'Where aesthetics meet performance.',
    description:
      "We don't just design pretty interfaces — we design experiences that convert. From brand identity to UI/UX for your website or app, our design-first approach keeps both humans and algorithms happy.",
    offerings: [
      'Brand & logo design',
      'UI/UX for web & mobile',
      'Motion graphics & AI visuals',
      'Design systems + prototyping'
    ],
    features: [
      'Conversion-focused design',
      'Complete brand identity',
      'User experience optimization',
      'Motion graphics creation',
      'AI-generated visuals',
      'Comprehensive design systems'
    ]
  }
]

export default function ServicesList () {
  return (
    <section className='py-12 sm:py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-10 sm:space-y-16'>
          {services.map(service => (
            <Card
              key={service.id}
              className='group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50'
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8'>
                {/* Left Column - Content */}
                <div className='space-y-4 sm:space-y-5'>
                  <CardHeader className='p-0'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4'>
                      <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <service.icon className='w-6 h-6 sm:w-8 sm:h-8 text-white' />
                      </div>
                      <div>
                        <CardTitle className='text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#1E90FF] transition-colors'>
                          {service.title}
                        </CardTitle>
                        <p className='text-sm sm:text-base text-[#1E90FF] font-medium'>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className='p-0 space-y-3 sm:space-y-4'>
                    <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                      {service.description}
                    </p>

                    {/* Technologies */}
                    {service.technologies && (
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1 flex items-center text-sm sm:text-base'>
                          <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] mr-2' />
                          Technologies:
                        </h4>
                        <div className='flex flex-wrap gap-2 sm:gap-3'>
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className='px-2 sm:px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-xs sm:text-sm rounded-full font-medium'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Add-ons */}
                    {service.addons && (
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1 flex items-center text-sm sm:text-base'>
                          <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] mr-2' />
                          Add-ons:
                        </h4>
                        <div className='flex flex-wrap gap-2 sm:gap-3'>
                          {service.addons.map((addon, idx) => (
                            <span
                              key={idx}
                              className='px-2 sm:px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-xs sm:text-sm rounded-full font-medium'
                            >
                              {addon}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Use Cases */}
                    {service.useCases && (
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1 flex items-center text-sm sm:text-base'>
                          <Zap className='w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7] mr-2' />
                          Use Cases:
                        </h4>
                        <ul className='space-y-1 sm:space-y-1.5 text-sm sm:text-base'>
                          {service.useCases.map((useCase, idx) => (
                            <li
                              key={idx}
                              className='flex items-start space-x-2'
                            >
                              <ArrowRight className='w-4 h-4 text-[#A855F7] mt-0.5 flex-shrink-0' />
                              <span className='text-gray-600'>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Services */}
                    {service.services && (
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1 flex items-center text-sm sm:text-base'>
                          <Database className='w-4 h-4 sm:w-5 sm:h-5 text-[#64748B] mr-2' />
                          Services:
                        </h4>
                        <ul className='space-y-1 sm:space-y-1.5 text-sm sm:text-base'>
                          {service.services.map((item, idx) => (
                            <li
                              key={idx}
                              className='flex items-start space-x-2'
                            >
                              <ArrowRight className='w-4 h-4 text-[#64748B] mt-0.5 flex-shrink-0' />
                              <span className='text-gray-600'>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Offerings */}
                    {service.offerings && (
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1 flex items-center text-sm sm:text-base'>
                          <Palette className='w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7] mr-2' />
                          What We Offer:
                        </h4>
                        <ul className='space-y-1 sm:space-y-1.5 text-sm sm:text-base'>
                          {service.offerings.map((item, idx) => (
                            <li
                              key={idx}
                              className='flex items-start space-x-2'
                            >
                              <ArrowRight className='w-4 h-4 text-[#A855F7] mt-0.5 flex-shrink-0' />
                              <span className='text-gray-600'>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* AI Features */}
                    {service.aiFeatures && (
                      <div>
                        <h4 className='font-semibold text-gray-900 mb-1 flex items-center text-sm sm:text-base'>
                          <Brain className='w-4 h-4 sm:w-5 sm:h-5 text-[#1E90FF] mr-2' />
                          AI Features:
                        </h4>
                        <div className='flex flex-wrap gap-2 sm:gap-3'>
                          {service.aiFeatures.map((item, idx) => (
                            <span
                              key={idx}
                              className='px-2 sm:px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-xs sm:text-sm rounded-full font-medium'
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link href={`/services/${service.id}`}>
                      <Button className='bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white group mt-4 w-full sm:w-auto'>
                        Learn More
                        <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                      </Button>
                    </Link>
                  </CardContent>
                </div>

                {/* Right Column - Features Grid */}
                <div className='space-y-4 mt-6 lg:mt-0'>
                  <h4 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4'>
                    Key Features
                  </h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg border border-gray-100 hover:border-[#1E90FF]/20 hover:shadow-md transition-all duration-300'
                      >
                        <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] mt-0.5 flex-shrink-0' />
                        <span className='text-sm sm:text-base text-gray-700 font-medium'>
                          {feature}
                        </span>
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
