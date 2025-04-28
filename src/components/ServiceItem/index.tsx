import { CheckCircle2 } from 'lucide-react'
import React from 'react'

interface ServiceItemProps {
  title: string
  description: string
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div className="flex gap-3">
      <CheckCircle2 className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
