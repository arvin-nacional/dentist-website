import type { Block } from 'payload'

export const CalendlyBlock: Block = {
  slug: 'calendlyBlock',
  interfaceName: 'CalendlyBlock',
  labels: {
    singular: 'Calendly Block',
    plural: 'Calendly Blocks',
  },
  fields: [
    {
      name: 'calendlyURL',
      type: 'text',
      label: 'Calendly URL',
      required: true,
      defaultValue: 'https://calendly.com/your-calendly-username',
      admin: {
        description: 'Enter your Calendly scheduling page URL (e.g., https://calendly.com/your-username)',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Schedule Your Appointment',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Book your dental appointment online at your convenience. Choose a time that works for you.',
    },
    {
      name: 'hideEventTypeDetails',
      type: 'checkbox',
      label: 'Hide Event Type Details',
      defaultValue: false,
      admin: {
        description: 'When checked, event details will be hidden in the embedded scheduler',
      },
    },
    {
      name: 'hideLandingPageDetails',
      type: 'checkbox',
      label: 'Hide Landing Page Details',
      defaultValue: false,
      admin: {
        description: 'When checked, landing page details will be hidden in the embedded scheduler',
      },
    },
    {
      name: 'height',
      type: 'number',
      label: 'Height (px)',
      defaultValue: 700,
      admin: {
        description: 'Height of the Calendly widget in pixels',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'white',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Gray',
          value: 'gray',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Teal',
          value: 'teal',
        },
      ],
    },
  ],
}
