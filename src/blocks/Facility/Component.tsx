import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

import { FacilityBlock } from '@/payload-types'

export const FacilityBlockComponent: React.FC<FacilityBlock> = ({
  title,
  description,
  facilities,
}) => {
  return (
    <section className="w-full ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          {facilities?.map((facility, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={
                  typeof facility.image === 'object'
                    ? facility.image?.url || '/placeholder.svg'
                    : facility.image || '/placeholder.svg'
                }
                alt={facility.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{facility.title}</CardTitle>
                <CardDescription>{facility.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
