import React from 'react'

import { Award, BookOpen, Calendar, GraduationCap } from 'lucide-react'

import { DentistProfileBlock as DentistProfileBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
export const DentistProfileBlockComponent: React.FC<DentistProfileBlockType> = ({
  name,
  bio,
  education,
  certifications,
  continuingEducation,
  media,
  links,
}) => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{name}</h1>
            <p className="text-lg text-gray-600 mb-6">{bio}</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Education</h3>
                  <p className="text-gray-600">{education}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Certifications</h3>
                  <p className="text-gray-600">{certifications}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Continuing Education</h3>
                  <p className="text-gray-600">{continuingEducation}</p>
                </div>
              </div>
            </div>
            {Array.isArray(links) && links.length > 0 && (
              <div className="flex gap-4">
                {links.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    appearance="default"
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {link.label || 'Book an Appointment'}
                  </CMSLink>
                ))}
              </div>
            )}
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            {media && typeof media === 'object' && (
              <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
