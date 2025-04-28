import React from 'react'

import Image from 'next/image'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const DentalHero: React.FC<Page['hero']> = ({ richText, links, media }) => {
  return (
    <section className="relative  overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-[36.5rem] md:text-left">
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
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
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            {media && typeof media === 'object' && media.url && (
              <Image
                src={media.url}
                alt={media.alt || 'Dental care image'}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,rgba(20,184,166,0.1),rgba(255,255,255,0))]" />
    </section>
  )
}
