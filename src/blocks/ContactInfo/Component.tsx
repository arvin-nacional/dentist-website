import React from 'react'
import { Clock, MapPin, Phone } from 'lucide-react'

export type ContactInfoProps = {
  id?: string
  blockType: 'contactInfo'
  location?: {
    address1?: string
    address2?: string
  }
  contact?: {
    phone?: string
    email?: string
  }
  hours?: {
    weekdays?: string
    weekend?: string
  }
}

export const ContactInfoBlock: React.FC<ContactInfoProps> = ({
  id,
  location = { address1: '123 Dental Way', address2: 'Smile City, SC 12345' },
  contact = { phone: '(555) 123-4567', email: 'info@drjohnsondental.com' },
  hours = { weekdays: 'Mon-Fri: 9am-5pm', weekend: 'Sat: 9am-2pm | Sun: Closed' },
}) => {
  return (
    <section className="pt-4 bg-white" id={`block-${id}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Location</h3>
            <p className="text-gray-600">{location.address1}</p>
            <p className="text-gray-600">{location.address2}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Contact</h3>
            <p className="text-gray-600">Phone: {contact.phone}</p>
            <p className="text-gray-600">Email: {contact.email}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-teal-100 p-4 rounded-full mb-4">
              <Clock className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Hours</h3>
            <p className="text-gray-600">{hours.weekdays}</p>
            <p className="text-gray-600">{hours.weekend}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
