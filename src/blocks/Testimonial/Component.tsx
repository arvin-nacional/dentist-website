import React from 'react'

import { TestimonialCard } from '@/components/TestimonialCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface TestimonialProps {
  heading?: string
  description?: string
  testimonials?: Array<{
    name: string
    image?: string
    quote: string
    rating: number
  }>
}

export const TestimonialBlockComponent: React.FC<TestimonialProps> = ({
  heading,
  description,
  testimonials,
}) => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {heading || 'What Our Patients Say'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description ||
              "Don't just take our word for it. Here's what our patients have to say about their experience with us."}
          </p>
        </div>

        <div className="container mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials ? (
                testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4 h-full">
                    <div className="h-full">
                      <TestimonialCard
                        name={testimonial.name}
                        image={testimonial.image}
                        quote={testimonial.quote}
                        rating={testimonial.rating}
                      />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                // Default testimonials if none provided
                <>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4 h-full">
                    <div className="h-full">
                      <TestimonialCard
                        name="Michael Thompson"
                        image="/placeholder.svg?height=100&width=100"
                        quote="Dr. Johnson is amazing! She made me feel comfortable during my root canal, which I was dreading. Her gentle approach and clear explanations made all the difference."
                        rating={5}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4 h-full">
                    <div className="h-full">
                      <TestimonialCard
                        name="Jennifer Davis"
                        image="/placeholder.svg?height=100&width=100"
                        quote="I've been going to Dr. Johnson for years, and I wouldn't trust anyone else with my dental care. The entire staff is friendly, and the office is always clean and welcoming."
                        rating={5}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4 h-full">
                    <div className="h-full">
                      <TestimonialCard
                        name="Robert Wilson"
                        image="/placeholder.svg?height=100&width=100"
                        quote="As someone who used to be terrified of dental visits, I can't recommend Dr. Johnson enough. She transformed my dental experience with her patience and expertise."
                        rating={5}
                      />
                    </div>
                  </CarouselItem>
                </>
              )}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2" />
              <CarouselNext className="relative ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
