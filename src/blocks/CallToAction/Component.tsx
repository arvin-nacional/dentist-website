import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 rounded-lg py-[100px] px-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Smile?</h2>
          <p className="text-gray-600">
            Schedule a consultation to discuss how we can help you achieve the smile you've always
            wanted.
          </p>
          {richText && <RichText className="hidden" data={richText} enableGutter={false} />}
        </div>
        <div className="flex justify-center">
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-start gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
