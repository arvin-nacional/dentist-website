'use client'

import React, { useEffect } from 'react'
import { CalendlyBlock as CalendlyBlockType } from '@/payload-types'

// declare global {
//   interface Window {
//     Calendly: {
//       initInlineWidget: (options: Record<string, unknown>) => void
//     }
//   }
// }

export const CalendlyBlockComponent: React.FC<CalendlyBlockType> = ({
  calendlyURL,
  title,
  description,
  hideEventTypeDetails,
  hideLandingPageDetails,
  height = 700,
  backgroundColor = 'white',
}) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Handle background color
  let bgColorClass = 'bg-white'

  switch (backgroundColor) {
    case 'gray':
      bgColorClass = 'bg-gray-50'
      break
    case 'blue':
      bgColorClass = 'bg-blue-50'
      break
    case 'teal':
      bgColorClass = 'bg-teal-50'
      break
    default:
      bgColorClass = 'bg-white'
  }

  return (
    <section className={`w-full py-12 ${bgColorClass}`}>
      <div className="container px-4 md:px-6 mx-auto">
        {(title || description) && (
          <div className="text-center mb-8">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div
          className="calendly-inline-widget rounded-lg overflow-hidden mx-auto"
          data-url={`${calendlyURL}${calendlyURL.includes('?') ? '&' : '?'}hide_event_type_details=${hideEventTypeDetails ? 1 : 0}&hide_landing_page_details=${hideLandingPageDetails ? 1 : 0}`}
          style={{ minWidth: '320px', height: `${height}px` }}
        />
      </div>
    </section>
  )
}
