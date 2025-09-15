'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Ready For Udaan - Global Education & Work Permit Platform',
    description:
      'Developed a consulting platform that streamlined study visa and work permit processes, helping 500+ students and professionals pursue opportunities abroad.',
    image: '/ready-for-udaan-global-opportunities.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'PostgreSQL'],
    client: 'Ready For Udaan Pvt. Ltd.',
    industry: 'Education & Immigration',
    results: {
      approvals: '85% visa & work permit success rate',
      processing: '40% faster application processing',
      satisfaction: '97% client satisfaction rate'
    },
    duration: '6 months',
    teamSize: '6 consultants & developers',
    caseStudyUrl: '/portfolio/ready-for-udaan'
  },
  {
    title: 'Flourish Alliance - Overseas Education & Work Permit Services',
    description:
      'End-to-end overseas consulting platform helping students and professionals with study visas, work permits, and career opportunities abroad.',
    image: '/flourish-alliance-education-consulting.png',
    tags: [
      'React.js',
      'JavaScript',
      'MongoDB',
      'TailwindCSS',
      'PostgreSQL',
      'Framer Motion'
    ],
    client: 'Flourish Alliance Pvt. Ltd.',
    industry: 'Education & Immigration',
    results: {
      approvals: '500+ successful visa & work permit approvals',
      satisfaction: '96% client satisfaction rate',
      processing: '40% faster document processing'
    },
    duration: '5 months',
    teamSize: '5 developers',
    caseStudyUrl: '/portfolio/flourish-alliance'
  },
  {
    title: 'Real Estate CRM with AI',
    description:
      'Created an intelligent CRM that automates lead qualification and property matching using machine learning.',
    image: '/real-estate-crm-dashboard-with-property-listings.jpg',
    tags: ['React Native', 'AI Integration', 'Firebase'],
    client: 'Elite Realty Group',
    industry: 'Real Estate',
    results: {
      leads: '300% increase in qualified leads',
      sales: '45% faster deal closure',
      accuracy: '92% valuation accuracy'
    },
    duration: '3 months',
    teamSize: '4 developers',
    caseStudyUrl: '/portfolio/propvision-crm'
  }
]

export default function FeaturedWork () {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            FEATURED WORK
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover how we've helped businesses transform their digital
            presence with intelligent solutions
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          {projects.map((project, index) => (
            <Card
              key={index}
              className='group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-4 right-4'>
                    <ExternalLink className='w-6 h-6 text-white' />
                  </div>
                </div>
                <div className='absolute top-4 left-4'>
                  <span className='bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'>
                    {project.industry}
                  </span>
                </div>
              </div>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between mb-3 text-sm text-gray-500'>
                  <span>{project.client}</span>
                  <span>{project.duration}</span>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1E90FF] transition-colors'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {project.description}
                </p>

                <div className='mb-4'>
                  <h4 className='font-semibold text-sm text-gray-900 mb-2'>
                    Key Results:
                  </h4>
                  <div className='space-y-1'>
                    {Object.values(project.results)
                      .slice(0, 2)
                      .map((result, idx) => (
                        <div
                          key={idx}
                          className='flex items-center text-xs text-gray-600'
                        >
                          <Star className='w-3 h-3 text-yellow-500 mr-2 flex-shrink-0' />
                          <span>{result}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-3 py-1 bg-[#1E90FF]/10 text-[#1E90FF] text-sm rounded-full font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <Link href={project.caseStudyUrl}>
                  <Button
                    variant="outline"
                    className="w-full border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white transition-colors bg-transparent cursor-pointer"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-center'>
          <Link href='/portfolio'>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Button
                size='lg'
                className='bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] 
                   hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 
                   text-white px-8 py-4 rounded-full font-semibold 
                   group cursor-pointer shadow-lg shadow-blue-500/30'
              >
                <span className='mr-2'>CHECK PORTFOLIO</span>
                <motion.span
                  className='inline-block'
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className='w-5 h-5' />
                </motion.span>
              </Button>
            </motion.div>
          </Link>
        </div>

        <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 mt-10'>
          <h3 className='text-2xl font-bold text-center mb-8'>
            Our Track Record
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
            <div className='flex flex-col items-center'>
              <div className='bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3'>
                <TrendingUp className='w-6 h-6 text-blue-600' />
              </div>
              <div className='text-2xl font-bold text-gray-900'>150%</div>
              <div className='text-sm text-gray-600'>Average ROI Increase</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3'>
                <Users className='w-6 h-6 text-green-600' />
              </div>
              <div className='text-2xl font-bold text-gray-900'>10+</div>
              <div className='text-sm text-gray-600'>Projects Delivered</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-3'>
                <Zap className='w-6 h-6 text-purple-600' />
              </div>
              <div className='text-2xl font-bold text-gray-900'>98%</div>
              <div className='text-sm text-gray-600'>Client Satisfaction</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-3'>
                <Star className='w-6 h-6 text-orange-600' />
              </div>
              <div className='text-2xl font-bold text-gray-900'>4.8ww/5</div>
              <div className='text-sm text-gray-600'>Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
