import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { CheckCircle, Heart, Shield, Users } from 'lucide-react'

import type { MissionValuesBlock } from '@/payload-types'

export const MissionValuesBlockComponent: React.FC<MissionValuesBlock> = ({
  missionTitle,
  missionDescription,
  missionPoints,
  valuesTitle,
  values,
}) => {
  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="h-8 w-8 text-teal-600" />
      case 'shield':
        return <Shield className="h-8 w-8 text-teal-600" />
      case 'checkCircle':
        return <CheckCircle className="h-8 w-8 text-teal-600" />
      case 'users':
        return <Users className="h-8 w-8 text-teal-600" />
      default:
        return <CheckCircle className="h-8 w-8 text-teal-600" />
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-6 bg-white rounded-lg mt-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{missionTitle}</h3>
                <p className="text-lg">{missionDescription}</p>
                <ul className="space-y-2">
                  {missionPoints?.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-1" />
                      <span>{item.point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="values" className="p-6 bg-white rounded-lg mt-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{valuesTitle}</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {values?.map((value, index) => (
                    <Card key={index}>
                      <CardHeader className="flex flex-row items-center gap-4">
                        {renderIcon(value.icon)}
                        <div>
                          <CardTitle>{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
