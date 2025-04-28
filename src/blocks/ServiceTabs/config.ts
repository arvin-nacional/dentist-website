import type { Block } from 'payload'

export const serviceTabsFields: Block = {
  slug: 'serviceTabs',
  labels: {
    singular: 'Service Tabs',
    plural: 'Service Tabs Blocks',
  },
  interfaceName: 'ServiceTabs',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Our Dental Services',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      defaultValue: 'We offer a comprehensive range of dental services to meet all your oral health needs, from routine check-ups to advanced cosmetic and restorative procedures.',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Service Categories',
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: 'Service Category',
        plural: 'Service Categories',
      },
      fields: [
        {
          name: 'tabId',
          type: 'text',
          label: 'Tab ID',
          required: true,
          admin: {
            description: 'A unique identifier for this tab (e.g., preventative, cosmetic, restorative)',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Category Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Category Description',
        },
        {
          name: 'services',
          type: 'array',
          label: 'Services',
          minRows: 1,
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
          ],
        },
      ],
    },
  ],
}
