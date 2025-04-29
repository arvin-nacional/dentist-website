import React from 'react'
import { Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { ImageMedia } from '@/components/Media/ImageMedia'

interface TestimonialCardProps {
  name: string
  image?: any // Accept any type for image to accommodate Payload CMS's complex objects
  quote: string
  rating: number
}

export function TestimonialCard({ name, image, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="flex flex-col items-center text-center h-full">
          <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
            {/* 
              When image is an object, we only provide the resource prop
              When image is a string, we provide the src prop
              When image is falsy, we use a placeholder
            */}
            {typeof image === 'object' ? (
              <ImageMedia alt={name} fill imgClassName="object-cover" resource={image} />
            ) : (
              <ImageMedia
                src={image || '/placeholder.svg'}
                alt={name}
                fill
                imgClassName="object-cover"
              />
            )}
          </div>
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground italic mb-4 flex-grow">&quot;{quote}&quot;</p>
          <h4 className="font-medium text-foreground">{name}</h4>
        </div>
      </CardContent>
    </Card>
  )
}
