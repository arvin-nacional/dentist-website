import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ServiceItem } from '@/components/ServiceItem'
import type { ServiceTabs as ServiceTabsType } from '@/payload-types'

export type ServiceCategory = {
  name: string
  title: string
  description: string
  services: {
    title: string
    description: string
  }[]
}

export const ServiceTabs: React.FC<
  ServiceTabsType & {
    id?: string
  }
> = (props) => {
  const { id, heading, description, categories = [] } = props

  // Default services data if none provided
  const defaultServiceCategories: ServiceCategory[] = [
    {
      name: 'preventative',
      title: 'Preventative Dentistry',
      description: 'Services focused on maintaining good oral health and preventing dental issues.',
      services: [
        {
          title: 'Dental Cleanings',
          description:
            'Professional cleaning to remove plaque and tartar buildup, preventing cavities and gum disease.',
        },
        {
          title: 'Dental Exams',
          description:
            'Comprehensive examinations to detect early signs of dental issues and oral cancer.',
        },
        {
          title: 'Fluoride Treatments',
          description: 'Application of fluoride to strengthen tooth enamel and prevent decay.',
        },
        {
          title: 'Dental Sealants',
          description:
            'Protective coating applied to the chewing surfaces of back teeth to prevent decay.',
        },
        {
          title: 'Oral Hygiene Education',
          description: 'Guidance on proper brushing, flossing, and other oral care techniques.',
        },
        {
          title: 'Periodontal Maintenance',
          description: 'Ongoing care to maintain gum health and prevent periodontal disease.',
        },
      ],
    },
    {
      name: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Procedures designed to improve the appearance of your teeth and smile.',
      services: [
        {
          title: 'Teeth Whitening',
          description:
            'Professional whitening treatments to remove stains and brighten your smile.',
        },
        {
          title: 'Porcelain Veneers',
          description:
            'Thin shells of porcelain bonded to the front of teeth to improve appearance.',
        },
        {
          title: 'Dental Bonding',
          description: 'Application of tooth-colored resin to repair chips, cracks, or gaps.',
        },
        {
          title: 'Smile Makeovers',
          description: 'Comprehensive treatment plans to transform your smile.',
        },
        {
          title: 'Gum Contouring',
          description: 'Reshaping of the gum line to create a more balanced smile.',
        },
        {
          title: 'Tooth-Colored Fillings',
          description: 'Natural-looking fillings that blend with your teeth.',
        },
      ],
    },
    {
      name: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Procedures to repair damaged teeth and restore oral function.',
      services: [
        {
          title: 'Dental Crowns',
          description:
            'Custom-made caps that cover damaged teeth to restore shape, size, and strength.',
        },
        {
          title: 'Dental Bridges',
          description: 'Fixed appliances to replace one or more missing teeth.',
        },
        {
          title: 'Dental Implants',
          description:
            'Permanent replacements for missing teeth that look and function like natural teeth.',
        },
        {
          title: 'Dentures',
          description: 'Removable appliances to replace multiple missing teeth.',
        },
        {
          title: 'Root Canal Therapy',
          description: 'Treatment to save infected or severely damaged teeth.',
        },
        {
          title: 'Inlays and Onlays',
          description:
            "Custom-made fillings for damaged teeth when standard fillings aren't sufficient.",
        },
      ],
    },
  ]

  // Use provided categories or default if none
  const serviceCategories =
    categories && categories.length > 0
      ? (categories
          .map((category) => {
            if (typeof category === 'object') {
              return {
                name: category.tabId || 'tab',
                title: category.title || 'Services',
                description: category.description || '',
                services: Array.isArray(category.services)
                  ? category.services.map((service) => ({
                      title: typeof service === 'object' ? service.title || '' : '',
                      description: typeof service === 'object' ? service.description || '' : '',
                    }))
                  : [],
              }
            }
            return null
          })
          .filter(Boolean) as ServiceCategory[])
      : defaultServiceCategories

  const defaultValue =
    serviceCategories.length > 0 ? serviceCategories[0]?.name || 'preventative' : 'preventative'

  return (
    <section className="" id={`block-${id}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {heading || 'Our Dental Services'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description ||
              'We offer a comprehensive range of dental services to meet all your oral health needs, from routine check-ups to advanced cosmetic and restorative procedures.'}
          </p>
        </div>

        <Tabs defaultValue={defaultValue} className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.services.map((service, index) => (
                      <ServiceItem
                        key={index}
                        title={service.title}
                        description={service.description}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
