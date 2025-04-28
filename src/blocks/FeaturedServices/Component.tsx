import React from 'react'
import Link from 'next/link'

import type { FeaturedServicesBlock as FeaturedServicesBlockProps } from '@/payload-types'
import { ServiceCard } from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'

export const FeaturedServicesBlock: React.FC<FeaturedServicesBlockProps> = ({
  services,
  heading,
  description,
  viewAllLink,
}) => {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{heading || 'Our Services'}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description ||
              'We provide comprehensive dental care with a gentle touch, ensuring your comfort and oral health.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services ? (
            services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))
          ) : (
            // Default services if none provided
            <>
              <ServiceCard
                title="General Dentistry"
                description="Comprehensive check-ups, cleanings, and preventative care to maintain your oral health."
                icon="Tooth"
              />
              <ServiceCard
                title="Cosmetic Dentistry"
                description="Enhance your smile with teeth whitening, veneers, and other aesthetic treatments."
                icon="Sparkles"
              />
              <ServiceCard
                title="Restorative Care"
                description="Repair damaged teeth with fillings, crowns, bridges, and dental implants."
                icon="Wrench"
              />
              <ServiceCard
                title="Emergency Care"
                description="Prompt attention for dental emergencies to alleviate pain and prevent further damage."
                icon="AlertCircle"
              />
              <ServiceCard
                title="Pediatric Dentistry"
                description="Gentle, child-friendly dental care to establish good oral health habits early."
                icon="Baby"
              />
              <ServiceCard
                title="Orthodontics"
                description="Straighten teeth and correct bite issues with modern orthodontic solutions."
                icon="ArrowRight"
              />
            </>
          )}
        </div>

        {viewAllLink && (
          <div className="text-center mt-12">
            <Link href={viewAllLink}>
              <Button variant="outline" className="bg-background hover:bg-accent">
                View All Services
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
