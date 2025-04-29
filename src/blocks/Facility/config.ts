import type { Block } from 'payload'

export const FacilityBlock: Block = {
  slug: 'facility',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'FacilityBlock',
  labels: {
    singular: 'Facility Block',
    plural: 'Facility Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Our Facility',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Take a virtual tour of our modern dental clinic.',
    },
    {
      name: 'facilities',
      type: 'array',
      label: 'Facilities',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: false,
        },
      ],
    },
  ],
}
