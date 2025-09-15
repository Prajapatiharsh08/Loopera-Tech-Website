import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ExternalLink, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PortfolioPage () {
  const projects = [
    {
      id: 2,
      title: 'Ready For Udaan - Global Opportunities Platform',
      category: 'Education & Immigration',
      type: 'Consulting Service',
      description:
        'A platform helping students and professionals secure study visas, work permits, and global opportunities with end-to-end guidance.',
      technologies: [
        'React.js',
        'Node.js',
        'MongoDB',
        'PostgreSQL',
        'Tailwind CSS'
      ],
      features: [
        'AI-driven career and university guidance',
        'Automated document verification',
        'Real-time immigration policy updates',
        'Work permit and study visa tracking',
        'Secure applicant data handling'
      ],
      results: {
        efficiency: '50% faster visa application processing',
        satisfaction: '97% client satisfaction rate',
        approvals: '85% success rate in visa & work permit approvals'
      },
      image: '/ready-for-udaan-global-opportunities.jpg',
      liveUrl: '#',
      caseStudyUrl: '/portfolio/ready-for-udaan',
      year: '2025',
      duration: '6 months',
      client: 'Ready For Udaan Pvt. Ltd.'
    },
    {
      id: 3,
      title: 'Flourish Alliance - Overseas Education & Work Permit Services',
      category: 'Education & Immigration',
      type: 'Consulting Platform',
      description:
        'End-to-end overseas consulting platform helping students and professionals with study visas, work permits, and career opportunities abroad.',
      technologies: [
        'React.js',
        'Javascript',
        'MongoDB',
        'TailwindCSS',
        'PostgreSQL'
      ],
      features: [
        'Personalized career and study counseling',
        'Automated visa & document processing',
        'Work permit eligibility tracking',
        'Real-time immigration policy updates',
        'Secure cloud-based document storage',
        'Multi-country support system'
      ],
      results: {
        clients: '500+ successful visa & work permit approvals',
        satisfaction: '96% client satisfaction rate',
        processing: '40% faster document processing'
      },
      image: '/flourish-alliance-education-consulting.jpg',
      liveUrl: '#',
      caseStudyUrl: '/portfolio/flourish-alliance',
      year: '2025',
      duration: '5 months',
      client: 'Flourish Alliance Pvt. Ltd.'
    },
    {
      id: 3,
      title: 'EduSmart - Learning Management Platform',
      category: 'Education',
      type: 'Mobile App + Web',
      description:
        'Comprehensive learning platform with AI tutoring, progress tracking, and personalized learning paths for students and educators.',
      technologies: ['Flutter', 'Firebase', 'Python', 'TensorFlow', 'WebRTC'],
      features: [
        'AI-powered tutoring',
        'Personalized learning paths',
        'Real-time collaboration',
        'Progress analytics',
        'Video conferencing',
        'Gamification system'
      ],
      results: {
        engagement: '85% increase in student engagement',
        performance: '70% improvement in test scores',
        retention: '90% course completion rate'
      },
      image: '/modern-ecommerce-dashboard-with-ai-recommendations.jpg',
      liveUrl: '#',
      caseStudyUrl: '/portfolio/edusmart-platform',
      year: '2024',
      duration: '5 months',
      client: 'EduTech Innovations'
    },
    {
      id: 4,
      title: 'RetailAI - E-commerce Optimization Suite',
      category: 'E-commerce',
      type: 'AI Automation',
      description:
        'AI-powered e-commerce platform with smart inventory management, personalized recommendations, and automated customer service.',
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI', 'Shopify API'],
      features: [
        'Smart inventory predictions',
        'Personalized product recommendations',
        'Automated customer support',
        'Dynamic pricing optimization',
        'Sales analytics dashboard',
        'Multi-channel integration'
      ],
      results: {
        revenue: '150% increase in online revenue',
        conversion: '65% higher conversion rate',
        support: '80% reduction in support tickets'
      },
      image: '/modern-ecommerce-dashboard-with-ai-recommendations.jpg',
      liveUrl: '#',
      caseStudyUrl: '/portfolio/retailai-suite',
      year: '2024',
      duration: '6 months',
      client: 'Fashion Forward Co.'
    }
  ]

  // const categories = ["All", "Healthcare", "Real Estate", "Education", "E-commerce", "Travel & Tourism", "Finance"]

  return (
    <main className='min-h-screen bg-white'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance'>
            Our Portfolio
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty'>
            Explore our successful projects across various industries. From
            AI-powered automation to custom software solutions, see how we've
            helped businesses transform and scale.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 hover:bg-gray-50"}
              >
                {category}
              </Button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '10+', label: 'Happy Clients' },
              { number: '5+', label: 'Industries Served' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-sm'>
                <div className='text-3xl font-bold text-blue-600 mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className='py-16 px-4 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8'>Featured Project</h2>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            <div className='grid lg:grid-cols-2 gap-0'>
              <div className='relative'>
                <img
                  src={projects[0].image || '/placeholder.svg'}
                  alt={projects[0].title}
                  className='w-full h-64 lg:h-full object-cover'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                    {projects[0].category}
                  </span>
                </div>
              </div>
              <div className='p-8 lg:p-12'>
                <div className='flex items-center gap-4 mb-4'>
                  <span className='text-sm text-gray-500'>
                    {projects[0].type}
                  </span>
                  <span className='text-sm text-gray-500'>•</span>
                  <span className='text-sm text-gray-500'>
                    {projects[0].year}
                  </span>
                </div>
                <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-balance'>
                  {projects[0].title}
                </h3>
                <p className='text-gray-600 mb-6 text-pretty'>
                  {projects[0].description}
                </p>
                <div className='mb-6'>
                  <h4 className='font-semibold mb-3'>Key Results:</h4>
                  <ul className='space-y-2'>
                    {Object.values(projects[0].results).map((result, index) => (
                      <li
                        key={index}
                        className='flex items-center text-sm text-gray-600'
                      >
                        <Star className='w-4 h-4 text-yellow-500 mr-2' />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex gap-4'>
                  <Link
                    href={projects[0].caseStudyUrl}
                    className='inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium'
                  >
                    View Case Study
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                  <Link
                    href={projects[0].liveUrl}
                    className='inline-flex items-center border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium'
                  >
                    <ExternalLink className='w-4 h-4 mr-2' />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='py-16 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-bold mb-8'>All Projects</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.slice(1).map(project => (
              <div
                key={project.id}
                className='bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden'
              >
                <div className='relative'>
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    className='w-full h-48 object-cover'
                  />
                  <div className='absolute top-4 left-4'>
                    <span className='bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium'>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3 text-sm text-gray-500'>
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3 text-balance'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4 text-pretty'>
                    {project.description}
                  </p>
                  <div className='mb-4'>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className='bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs'>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <Link
                      href={project.caseStudyUrl}
                      className='flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium'
                    >
                      Case Study
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className='flex items-center justify-center border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm'
                    >
                      <ExternalLink className='w-4 h-4' />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl text-gray-600 mb-8'>
            Let's discuss how we can help you build something amazing. From
            concept to launch, we're here to make it happen.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/consultation'>
              <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3'>
                Start Your Project
              </Button>
            </Link>
            <Link href='/consultation'>
              <Button
                variant='outline'
                className='border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent'
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
