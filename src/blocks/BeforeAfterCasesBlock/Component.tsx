import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CaseCard, CaseItemProps } from '@/components/CaseCard'

import type { BeforeAfterCasesBlock as BeforeAfterCasesBlockProps } from '@/payload-types'

export const BeforeAfterCasesBlock: React.FC<BeforeAfterCasesBlockProps> = ({
  cases,
  title,
  description,
  categories,
}) => {
  // Use provided cases or default to example cases
  const displayCases = cases || defaultCases

  return (
    <div className="container mx-auto px-4 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>

      <Tabs defaultValue="all" className="max-w-6xl mx-auto mb-12">
        <TabsList
          className="grid mb-8"
          style={{ gridTemplateColumns: `repeat(${Math.min(categories?.length || 0, 5)}, 1fr)` }}
        >
          {categories?.map((category, index) => (
            <TabsTrigger key={index} value={category.value}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories?.map((category, index) => (
          <TabsContent key={index} value={category.value}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.value === 'all'
                ? displayCases.map((caseItem) => (
                    <CaseCard key={String(caseItem.id)} caseItem={caseItem as CaseItemProps} />
                  ))
                : displayCases
                    .filter((caseItem) => {
                      // Map the category values to the actual full category names in the cases
                      const categoryMap: Record<string, string> = {
                        cosmetic: 'Cosmetic Dentistry',
                        restorative: 'Restorative Dentistry',
                        orthodontic: 'Orthodontics',
                        implants: 'Dental Implants',
                      }
                      return caseItem.category === categoryMap[category.value]
                    })
                    .map((caseItem) => (
                      <CaseCard key={String(caseItem.id)} caseItem={caseItem as CaseItemProps} />
                    ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

// Default case items to display if no cases are provided
const defaultCases: CaseItemProps[] = [
  {
    id: 1,
    title: 'Complete Smile Makeover',
    category: 'Cosmetic Dentistry',
    treatment: 'Porcelain Veneers',
    beforeImage: '/placeholder.svg?height=400&width=500',
    afterImage: '/placeholder.svg?height=400&width=500',
    duration: '3 weeks',
  },
  {
    id: 2,
    title: 'Dental Implant Restoration',
    category: 'Dental Implants',
    treatment: 'Single Tooth Implant',
    beforeImage: '/placeholder.svg?height=400&width=500',
    afterImage: '/placeholder.svg?height=400&width=500',
    duration: '4 months',
  },
  {
    id: 3,
    title: 'Invisalign Treatment',
    category: 'Orthodontics',
    treatment: 'Invisalign Clear Aligners',
    beforeImage: '/placeholder.svg?height=400&width=500',
    afterImage: '/placeholder.svg?height=400&width=500',
    duration: '14 months',
  },
  {
    id: 4,
    title: 'Full Mouth Reconstruction',
    category: 'Restorative Dentistry',
    treatment: 'Crowns and Bridges',
    beforeImage: '/placeholder.svg?height=400&width=500',
    afterImage: '/placeholder.svg?height=400&width=500',
    duration: '6 months',
  },
]
