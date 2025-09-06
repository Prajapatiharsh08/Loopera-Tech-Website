import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ExternalLink, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "HealthCare Pro - Patient Management System",
      category: "Healthcare",
      type: "Custom Software",
      description:
        "A comprehensive patient management system with AI-powered diagnosis assistance, appointment scheduling, and real-time health monitoring.",
      technologies: ["React", "Node.js", "PostgreSQL", "OpenAI API", "Socket.io"],
      features: [
        "AI-powered diagnosis assistance",
        "Real-time patient monitoring",
        "Automated appointment scheduling",
        "Electronic health records",
        "Telemedicine integration",
        "HIPAA compliant security",
      ],
      results: {
        efficiency: "40% increase in patient processing efficiency",
        satisfaction: "95% patient satisfaction rate",
        time: "60% reduction in administrative tasks",
      },
      image: "/healthcare-dashboard-with-patient-management-inter.jpg",
      liveUrl: "#",
      caseStudyUrl: "/portfolio/healthcare-pro",
      year: "2024",
      duration: "4 months",
      client: "MedTech Solutions",
    },
    {
      id: 2,
      title: "PropVision - Real Estate CRM & Analytics",
      category: "Real Estate",
      type: "Web Application",
      description:
        "Advanced real estate CRM with property valuation AI, market analytics, and automated lead management for real estate professionals.",
      technologies: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Stripe"],
      features: [
        "AI property valuation",
        "Market trend analytics",
        "Automated lead scoring",
        "Virtual property tours",
        "Commission tracking",
        "Client portal access",
      ],
      results: {
        leads: "300% increase in qualified leads",
        sales: "45% faster deal closure",
        accuracy: "92% valuation accuracy",
      },
      image: "/real-estate-crm-dashboard-with-property-listings.jpg",
      liveUrl: "#",
      caseStudyUrl: "/portfolio/propvision-crm",
      year: "2024",
      duration: "3 months",
      client: "Elite Realty Group",
    },
    {
      id: 3,
      title: "EduSmart - Learning Management Platform",
      category: "Education",
      type: "Mobile App + Web",
      description:
        "Comprehensive learning platform with AI tutoring, progress tracking, and personalized learning paths for students and educators.",
      technologies: ["Flutter", "Firebase", "Python", "TensorFlow", "WebRTC"],
      features: [
        "AI-powered tutoring",
        "Personalized learning paths",
        "Real-time collaboration",
        "Progress analytics",
        "Video conferencing",
        "Gamification system",
      ],
      results: {
        engagement: "85% increase in student engagement",
        performance: "70% improvement in test scores",
        retention: "90% course completion rate",
      },
      image: "/modern-ecommerce-dashboard-with-ai-recommendations.jpg",
      liveUrl: "#",
      caseStudyUrl: "/portfolio/edusmart-platform",
      year: "2024",
      duration: "5 months",
      client: "EduTech Innovations",
    },
    {
      id: 4,
      title: "RetailAI - E-commerce Optimization Suite",
      category: "E-commerce",
      type: "AI Automation",
      description:
        "AI-powered e-commerce platform with smart inventory management, personalized recommendations, and automated customer service.",
      technologies: ["React", "Node.js", "MongoDB", "OpenAI", "Shopify API"],
      features: [
        "Smart inventory predictions",
        "Personalized product recommendations",
        "Automated customer support",
        "Dynamic pricing optimization",
        "Sales analytics dashboard",
        "Multi-channel integration",
      ],
      results: {
        revenue: "150% increase in online revenue",
        conversion: "65% higher conversion rate",
        support: "80% reduction in support tickets",
      },
      image: "/modern-ecommerce-dashboard-with-ai-recommendations.jpg",
      liveUrl: "#",
      caseStudyUrl: "/portfolio/retailai-suite",
      year: "2024",
      duration: "6 months",
      client: "Fashion Forward Co.",
    },
    {
      id: 5,
      title: "TravelMate - Smart Trip Planning App",
      category: "Travel & Tourism",
      type: "Mobile Application",
      description:
        "AI-powered travel planning app with personalized itineraries, real-time updates, and social travel features.",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Google Maps API", "OpenAI"],
      features: [
        "AI itinerary generation",
        "Real-time travel updates",
        "Social trip sharing",
        "Budget optimization",
        "Local recommendations",
        "Offline map access",
      ],
      results: {
        downloads: "50K+ app downloads in 3 months",
        rating: "4.8/5 app store rating",
        bookings: "200% increase in travel bookings",
      },
      image: "/modern-ecommerce-dashboard-with-ai-recommendations.jpg",
      liveUrl: "#",
      caseStudyUrl: "/portfolio/travelmate-app",
      year: "2024",
      duration: "4 months",
      client: "Wanderlust Travel Agency",
    },
    {
      id: 6,
      title: "FinanceFlow - Automated Accounting System",
      category: "Finance",
      type: "Custom Software",
      description:
        "Intelligent accounting system with automated bookkeeping, expense categorization, and financial forecasting for small businesses.",
      technologies: ["Vue.js", "Laravel", "MySQL", "QuickBooks API", "Machine Learning"],
      features: [
        "Automated expense categorization",
        "AI-powered financial forecasting",
        "Real-time cash flow monitoring",
        "Tax preparation assistance",
        "Multi-currency support",
        "Bank integration",
      ],
      results: {
        time: "75% reduction in bookkeeping time",
        accuracy: "98% categorization accuracy",
        insights: "Real-time financial insights",
      },
      image: "/modern-ecommerce-dashboard-with-ai-recommendations.jpg",
      liveUrl: "#",
      caseStudyUrl: "/portfolio/financeflow-system",
      year: "2023",
      duration: "3 months",
      client: "SmallBiz Solutions",
    },
  ]

  const categories = ["All", "Healthcare", "Real Estate", "Education", "E-commerce", "Travel & Tourism", "Finance"]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">Our Portfolio</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
            Explore our successful projects across various industries. From AI-powered automation to custom software
            solutions, see how we've helped businesses transform and scale.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300 hover:bg-gray-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "15+", label: "Industries Served" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Project</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={projects[0].image || "/placeholder.svg"}
                  alt={projects[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {projects[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500">{projects[0].type}</span>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{projects[0].year}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-balance">{projects[0].title}</h3>
                <p className="text-gray-600 mb-6 text-pretty">{projects[0].description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {Object.values(projects[0].results).map((result, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={projects[0].caseStudyUrl}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href={projects[0].liveUrl}
                    className="inline-flex items-center border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-balance">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-pretty">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={project.caseStudyUrl}
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Case Study
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className="flex items-center justify-center border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you build something amazing. From concept to launch, we're here to make it
            happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Start Your Project</Button>
            </Link>
            <Link href="/consultation">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
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
