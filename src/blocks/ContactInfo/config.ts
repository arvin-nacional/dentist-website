import type { Block } from 'payload'

export const contactInfoFields: Block = {
  slug: 'contactInfo',
  interfaceName: 'ContactInfoBlock',
  fields: [
    {
      name: 'location',
      type: 'group',
      fields: [
        {
          name: 'address1',
          type: 'text',
          label: 'Address Line 1',
          defaultValue: '123 Dental Way',
        },
        {
          name: 'address2',
          type: 'text',
          label: 'Address Line 2',
          defaultValue: 'Smile City, SC 12345',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '(555) 123-4567',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email',
          defaultValue: 'info@drjohnsondental.com',
        },
      ],
    },
    {
      name: 'hours',
      type: 'group',
      fields: [
        {
          name: 'weekdays',
          type: 'text',
          label: 'Weekday Hours',
          defaultValue: 'Mon-Fri: 9am-5pm',
        },
        {
          name: 'weekend',
          type: 'text',
          label: 'Weekend Hours',
          defaultValue: 'Sat: 9am-2pm | Sun: Closed',
        },
      ],
    },
  ],
  labels: {
    singular: 'Contact Info',
    plural: 'Contact Info Blocks',
  },
}
