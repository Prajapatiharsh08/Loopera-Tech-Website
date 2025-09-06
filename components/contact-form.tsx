'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowRight, Mail, MessageSquare, Video, Phone } from 'lucide-react'

const services = [
  { id: 'web', label: 'Web Development' },
  { id: 'ai', label: 'AI Automation' },
  { id: 'app', label: 'App Development' },
  { id: 'branding', label: 'Branding / Design' },
  { id: 'guidance', label: 'Not sure — need guidance' }
]

const contactModes = [
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'zoom', label: 'Zoom / Google Meet', icon: Video }
]

export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [] as string[],
    details: '',
    contactMode: '',
    phoneNumber: '',
    preferredEmail: '',
    meetingLink: ''
  })

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked
        ? [...prev.services, serviceId]
        : prev.services.filter(id => id !== serviceId)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          services: formData.services,
          details: formData.details,
          contactMode: formData.contactMode,
          phoneNumber: formData.phoneNumber,
          preferredEmail: formData.preferredEmail,
          meetingLink: formData.meetingLink
        })
      })

      const data = await response.json()

      if (data.success) {
        alert('✅ Your message has been sent successfully!')
        setFormData({
          name: '',
          email: '',
          company: '',
          services: [],
          details: '',
          contactMode: '',
          phoneNumber: '',
          preferredEmail: '',
          meetingLink: ''
        })
      } else {
        alert('❌ Failed to send message: ' + data.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('⚠️ Something went wrong. Please try again later.')
    }
  }

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Card className='shadow-2xl border-0 bg-white'>
          <CardHeader className='text-center pb-8'>
            <CardTitle className='text-2xl font-bold text-gray-900'>
              Let's Start a Conversation
            </CardTitle>
            <p className='text-gray-600 mt-2'>
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </CardHeader>

          <CardContent className='p-8'>
            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Name and Email Row */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label
                    htmlFor='name'
                    className='text-sm font-semibold text-gray-700'
                  >
                    Name *
                  </Label>
                  <Input
                    id='name'
                    placeholder='Your full name'
                    value={formData.name}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, name: e.target.value }))
                    }
                    className='h-12 border-gray-200 focus:border-[#1E90FF] focus:ring-[#1E90FF]'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label
                    htmlFor='email'
                    className='text-sm font-semibold text-gray-700'
                  >
                    Email *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='name@company.com'
                    value={formData.email}
                    onChange={e =>
                      setFormData(prev => ({ ...prev, email: e.target.value }))
                    }
                    className='h-12 border-gray-200 focus:border-[#1E90FF] focus:ring-[#1E90FF]'
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className='space-y-2'>
                <Label
                  htmlFor='company'
                  className='text-sm font-semibold text-gray-700'
                >
                  Company / Brand Name
                </Label>
                <Input
                  id='company'
                  placeholder='Optional'
                  value={formData.company}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, company: e.target.value }))
                  }
                  className='h-12 border-gray-200 focus:border-[#1E90FF] focus:ring-[#1E90FF]'
                />
              </div>

              {/* Services Selection */}
              <div className='space-y-4'>
                <Label className='text-sm font-semibold text-gray-700'>
                  What do you need help with? *
                </Label>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {services.map(service => (
                    <div
                      key={service.id}
                      className='flex items-center space-x-3'
                    >
                      <Checkbox
                        id={service.id}
                        checked={formData.services.includes(service.id)}
                        onCheckedChange={checked =>
                          handleServiceChange(service.id, checked as boolean)
                        }
                        className='border-gray-300 data-[state=checked]:bg-[#1E90FF] data-[state=checked]:border-[#1E90FF]'
                      />
                      <Label
                        htmlFor={service.id}
                        className='text-sm text-gray-700 cursor-pointer hover:text-[#1E90FF] transition-colors'
                      >
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className='space-y-2'>
                <Label
                  htmlFor='details'
                  className='text-sm font-semibold text-gray-700'
                >
                  Tell us more *
                </Label>
                <Textarea
                  id='details'
                  placeholder='Brief about your project, idea, or challenge'
                  value={formData.details}
                  onChange={e =>
                    setFormData(prev => ({ ...prev, details: e.target.value }))
                  }
                  className='min-h-[120px] border-gray-200 focus:border-[#1E90FF] focus:ring-[#1E90FF] resize-none'
                  required
                />
              </div>

              {/* Preferred Contact Mode */}
              <div className='space-y-4'>
                <Label className='text-sm font-semibold text-gray-700'>
                  Preferred Call Mode *
                </Label>
                <RadioGroup
                  value={formData.contactMode}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, contactMode: value }))
                  }
                  className='grid grid-cols-1 sm:grid-cols-3 gap-4'
                >
                  {contactModes.map(mode => (
                    <div key={mode.id} className='flex items-center space-x-3'>
                      <RadioGroupItem
                        value={mode.id}
                        id={mode.id}
                        className='border-gray-300 text-[#1E90FF] focus:ring-[#1E90FF]'
                      />
                      <Label
                        htmlFor={mode.id}
                        className='flex items-center space-x-2 text-sm text-gray-700 cursor-pointer hover:text-[#1E90FF] transition-colors'
                      >
                        <mode.icon className='w-4 h-4' />
                        <span>{mode.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {formData.contactMode === 'whatsapp' && (
                <div className='space-y-2 animate-in slide-in-from-top-2 duration-300'>
                  <Label
                    htmlFor='phoneNumber'
                    className='text-sm font-semibold text-gray-700 flex items-center gap-2'
                  >
                    <Phone className='w-4 h-4' />
                    WhatsApp Number *
                  </Label>
                  <Input
                    id='phoneNumber'
                    type='tel'
                    placeholder='+1 (555) 123-4567'
                    value={formData.phoneNumber}
                    onChange={e =>
                      setFormData(prev => ({
                        ...prev,
                        phoneNumber: e.target.value
                      }))
                    }
                    className='h-12 border-gray-200 focus:border-[#1E90FF] focus:ring-[#1E90FF]'
                    required
                  />
                  <p className='text-xs text-gray-500'>
                    We'll reach out to you on WhatsApp at this number
                  </p>
                </div>
              )}

              {formData.contactMode === 'email' && (
                <div className='space-y-2 animate-in slide-in-from-top-2 duration-300'>
                  <Label
                    htmlFor='preferredEmail'
                    className='text-sm font-semibold text-gray-700 flex items-center gap-2'
                  >
                    <Mail className='w-4 h-4' />
                    Preferred Email for Communication
                  </Label>
                  <Input
                    id='preferredEmail'
                    type='email'
                    placeholder='Different email if preferred'
                    value={formData.preferredEmail}
                    onChange={e =>
                      setFormData(prev => ({
                        ...prev,
                        preferredEmail: e.target.value
                      }))
                    }
                    className='h-12 border-gray-200 focus:border-[#1E90FF] focus:ring-[#1E90FF]'
                  />
                  <p className='text-xs text-gray-500'>
                    Leave blank to use the email above, or specify a different
                    one
                  </p>
                </div>
              )}

              {formData.contactMode === 'zoom' && (
                <div className='space-y-2 animate-in slide-in-from-top-2 duration-300'>
                  <Label
                    htmlFor='meetingLink'
                    className='text-sm font-semibold text-gray-700 flex items-center gap-2'
                  >
                    <Video className='w-4 h-4' />
                    Meeting Preference
                  </Label>
                  <div className='space-y-3'>
                    <RadioGroup
                      value={formData.meetingLink}
                      onValueChange={value =>
                        setFormData(prev => ({ ...prev, meetingLink: value }))
                      }
                      className='space-y-2'
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='zoom' id='zoom-option' />
                        <Label
                          htmlFor='zoom-option'
                          className='text-sm text-gray-700'
                        >
                          Zoom Meeting
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='google-meet' id='meet-option' />
                        <Label
                          htmlFor='meet-option'
                          className='text-sm text-gray-700'
                        >
                          Google Meet
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='either' id='either-option' />
                        <Label
                          htmlFor='either-option'
                          className='text-sm text-gray-700'
                        >
                          Either is fine
                        </Label>
                      </div>
                    </RadioGroup>
                    <p className='text-xs text-gray-500'>
                      We'll send you a meeting link via email
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className='pt-6'>
                <Button
                  type='submit'
                  size='lg'
                  className='w-full bg-gradient-to-r from-[#1E90FF] to-[#6FBFFF] hover:from-[#1E90FF]/90 hover:to-[#6FBFFF]/90 text-white h-14 text-lg font-semibold rounded-xl group'
                >
                  Let's Connect
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
