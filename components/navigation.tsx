'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Navigation () {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border transition-all duration-300 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-25'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2 group'>
            <div className='w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <Image
                src='/logo.png'
                alt='Loopera Logo'
                width={96}
                height={96}
                className='object-contain'
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <div className='relative group'>
              <button className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium relative flex items-center'>
                Services
                <ChevronDown className='w-4 h-4 ml-1' />
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-300'></span>
              </button>
              <div className='absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                <Link
                  href='/services'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200 rounded-t-lg font-medium'
                >
                  All Services
                </Link>
                <div className='border-t border-gray-100'></div>
                <Link
                  href='/services/web-development'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200'
                >
                  Web Development
                </Link>
                <Link
                  href='/services/ai-automation'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200'
                >
                  AI Automation
                </Link>
                <Link
                  href='/services/mobile-app'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200'
                >
                  Mobile App Development
                </Link>
                <Link
                  href='/services/custom-software'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200'
                >
                  Custom Software
                </Link>
                <Link
                  href='/services/creative-design'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200 rounded-b-lg'
                >
                  Creative Design
                </Link>
              </div>
            </div>
            <Link
              href='/industries'
              className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium relative group'
            >
              Industries
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-300'></span>
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium relative group'
            >
              About Us
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-300'></span>
            </Link>
            <Link
              href='/contact'
              className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium relative group'
            >
              Contact Us
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-300'></span>
            </Link>
            <div className='relative group'>
              <button className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium relative flex items-center'>
                Resources
                <ChevronDown className='w-4 h-4 ml-1' />
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-300'></span>
              </button>
              <div className='absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                <Link
                  href='/blog'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200 rounded-t-lg'
                >
                  Blog
                </Link>
                <Link
                  href='/portfolio'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200'
                >
                  Portfolio
                </Link>
                <Link
                  href='/faqs'
                  className='block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-[#1E90FF] transition-colors duration-200'
                >
                  FAQs
                </Link>
              </div>
            </div>
            <Link href='/consultation'>
              <Button
                className='bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
                style={{ backgroundColor: '#1E90FF', color: 'white' }}
              >
                Schedule Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-md text-gray-700 hover:text-[#1E90FF] hover:bg-secondary transition-all duration-300'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-border animate-fade-in-up'>
            <div className='flex flex-col space-y-4'>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium py-2 flex items-center justify-between w-full'
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className='ml-4 mt-2 space-y-2'>
                    <Link
                      href='/services'
                      className='block text-sm text-gray-600 hover:text-[#1E90FF] transition-colors duration-300 py-1'
                    >
                      All Services
                    </Link>
                    <Link
                      href='/services/web-development'
                      className='block text-sm text-gray-600 hover:text-[#1E90FF] transition-colors duration-300 py-1'
                    >
                      Web Development
                    </Link>
                    <Link
                      href='/services/ai-automation'
                      className='block text-sm text-gray-600 hover:text-[#1E90FF] transition-colors duration-300 py-1'
                    >
                      AI Automation
                    </Link>
                    <Link
                      href='/services/mobile-app'
                      className='block text-sm text-gray-600 hover:text-[#1E90FF] transition-colors duration-300 py-1'
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      href='/services/custom-software'
                      className='block text-sm text-gray-600 hover:text-[#1E90FF] transition-colors duration-300 py-1'
                    >
                      Custom Software
                    </Link>
                    <Link
                      href='/services/creative-design'
                      className='block text-sm text-gray-600 hover:text-[#1E90FF] transition-colors duration-300 py-1'
                    >
                      Creative Design
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href='/industries'
                className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium py-2'
              >
                Industries
              </Link>
              <Link
                href='/about'
                className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium relative group'
              >
                About Us
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E90FF] group-hover:w-full transition-all duration-300'></span>
              </Link>
              <Link
                href='/contact'
                className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium py-2'
              >
                Contact Us
              </Link>
              <Link
                href='/blog'
                className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium py-2'
              >
                Blog
              </Link>
              <Link
                href='/portfolio'
                className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium py-2'
              >
                Portfolio
              </Link>
              <Link
                href='/faqs'
                className='text-gray-700 hover:text-[#1E90FF] transition-colors duration-300 font-medium py-2'
              >
                FAQs
              </Link>
              <Link href='/consultation'>
                <Button
                  className='bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white w-full mt-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
                  style={{ backgroundColor: '#1E90FF', color: 'white' }}
                >
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
