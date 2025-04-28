import type { Block } from 'payload'

export const FeaturedServicesBlock: Block = {
  slug: 'featuredServices',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'FeaturedServicesBlock',
  labels: {
    singular: 'Featured Services Block',
    plural: 'Featured Services Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'viewAllLink',
      type: 'text',
      label: 'View All Link URL',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Service Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Service Description',
          required: true,
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            {
              label: 'Tooth',
              value: 'Tooth',
            },
            {
              label: 'Sparkles',
              value: 'Sparkles',
            },
            {
              label: 'Wrench',
              value: 'Wrench',
            },
            {
              label: 'Alert Circle',
              value: 'AlertCircle',
            },
            {
              label: 'Baby',
              value: 'Baby',
            },
            {
              label: 'Arrow Right',
              value: 'ArrowRight',
            },
          ],
          required: true,
        },
      ],
    },
  ],
}
