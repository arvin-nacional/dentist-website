import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import React from 'react'
import type { Footer as FooterType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

// Function to render the appropriate social icon
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case 'facebook':
      return <Facebook className="h-5 w-5" />
    case 'twitter':
      return <Twitter className="h-5 w-5" />
    case 'instagram':
      return <Instagram className="h-5 w-5" />
    default:
      return null
  }
}

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()
  
  // Destructure the footer data with fallbacks
  const {
    clinicInfo = { clinicName: 'Dr. Johnson Dental', description: 'Professional dental care for you and your family in a comfortable, friendly environment.' },
    socialLinks = [],
    quickLinks = [],
    services = [],
    contactInfo = { address: '123 Dental Way\nSmile City, SC 12345', phone: '(555) 123-4567', email: 'info@drjohnsondental.com' },
    copyright = 'Dr. Johnson Dental Clinic. All rights reserved.'
  } = footerData || {}
  
  // Process address for line breaks
  const addressLines = contactInfo?.address?.split('\n') || []

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{clinicInfo?.clinicName}</h3>
            <p className="text-gray-400 mb-4">
              {clinicInfo?.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks?.map((socialItem, i) => (
                <CMSLink 
                  key={i} 
                  {...socialItem.link} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {SocialIcon({ platform: socialItem.platform })}
                  <span className="sr-only">{socialItem.platform}</span>
                </CMSLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {(quickLinks && quickLinks.length > 0) ? (
                quickLinks?.map((item, i) => (
                  <li key={i}>
                    <CMSLink {...item.link} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </CMSLink>
                  </li>
                ))
              ) : (
                // Fallback links if no CMS data
                <>
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
                  </li>
                  <li>
                    <Link href="/cases" className="text-gray-400 hover:text-white transition-colors">Before & After</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                  </li>
                  <li>
                    <Link href="/appointment" className="text-gray-400 hover:text-white transition-colors">Book Appointment</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {(services && services.length > 0) ? (
                services?.map((service, i) => (
                  <li key={i}>
                    <CMSLink {...service.link} className="text-gray-400 hover:text-white transition-colors">
                      {service.serviceName}
                    </CMSLink>
                  </li>
                ))
              ) : (
                // Fallback services if no CMS data
                <>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">General Dentistry</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Cosmetic Dentistry</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Restorative Care</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Emergency Care</Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Pediatric Dentistry</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                <span className="text-gray-400">
                  {addressLines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < addressLines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-500" />
                <span className="text-gray-400">{contactInfo?.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-500" />
                <span className="text-gray-400">{contactInfo?.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {copyright}</p>
        </div>
      </div>
    </footer>
  )
}
