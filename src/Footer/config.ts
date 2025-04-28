import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clinicInfo',
      type: 'group',
      fields: [
        {
          name: 'clinicName',
          type: 'text',
          defaultValue: 'Dr. Johnson Dental',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Professional dental care for you and your family in a comfortable, friendly environment.',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
          ],
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'quickLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'serviceName',
          type: 'text',
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          defaultValue: '123 Dental Way\nSmile City, SC 12345',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '(555) 123-4567',
        },
        {
          name: 'email',
          type: 'email',
          defaultValue: 'info@drjohnsondental.com',
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: 'Dr. Johnson Dental Clinic. All rights reserved.',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
