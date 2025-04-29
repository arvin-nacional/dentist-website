import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

import { TreatmentProcessBlock as TreatmentProcessBlockType } from '@/payload-types'

export const TreatmentProcessBlockComponent: React.FC<TreatmentProcessBlockType> = ({
  title,
  description,
  processes,
  backgroundColor,
}) => {
  // Map accent color for step numbers
  const getAccentColorClass = () => {
    switch (backgroundColor) {
      case 'blue':
        return 'bg-blue-600'
      case 'teal':
        return 'bg-teal-600'
      case 'gray':
        return 'bg-gray-600'
      case 'white':
        return 'bg-teal-600'
      default:
        return 'bg-blue-600'
    }
  }

  return (
    <section className={`w-full `}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
          {processes?.map((process, index) => (
            <Card key={index} className="relative">
              <div
                className={`absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full ${getAccentColorClass()} text-white text-xl font-bold`}
              >
                {process.step}
              </div>
              <CardHeader className="pt-8">
                <CardTitle>{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
