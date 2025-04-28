import { AlertCircle, ArrowRight, Baby, Sparkles, SmileIcon as Tooth, Wrench } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'Tooth':
        return <Tooth className="h-6 w-6 text-teal-600" />
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-teal-600" />
      case 'Wrench':
        return <Wrench className="h-6 w-6 text-teal-600" />
      case 'AlertCircle':
        return <AlertCircle className="h-6 w-6 text-teal-600" />
      case 'Baby':
        return <Baby className="h-6 w-6 text-teal-600" />
      case 'ArrowRight':
        return <ArrowRight className="h-6 w-6 text-teal-600" />
      default:
        return <Tooth className="h-6 w-6 text-teal-600" />
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="bg-teal-100 p-3 rounded-full mb-4">{getIcon()}</div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
