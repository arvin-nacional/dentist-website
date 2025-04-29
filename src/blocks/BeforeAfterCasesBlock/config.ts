import type { Block } from 'payload'

export const BeforeAfterCasesBlock: Block = {
  slug: 'beforeAfterCases',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'BeforeAfterCasesBlock',
  labels: {
    singular: 'Before & After Cases Block',
    plural: 'Before & After Cases Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Before & After Cases',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue:
        "Browse our gallery of dental transformations to see the results we've achieved for our patients.",
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      minRows: 1,
      maxRows: 5,
      defaultValue: [
        { name: 'All', value: 'all' },
        { name: 'Cosmetic', value: 'cosmetic' },
        { name: 'Restorative', value: 'restorative' },
        { name: 'Orthodontic', value: 'orthodontic' },
        { name: 'Implants', value: 'implants' },
      ],
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Display Name',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value',
          required: true,
          admin: {
            description:
              'Unique identifier for this category, used for tab filtering (e.g., "cosmetic", "restorative")',
          },
        },
      ],
    },
    {
      name: 'cases',
      type: 'array',
      label: 'Case Studies',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'category',
          type: 'select',
          label: 'Category',
          required: true,
          options: [
            {
              label: 'Cosmetic Dentistry',
              value: 'Cosmetic Dentistry',
            },
            {
              label: 'Restorative Dentistry',
              value: 'Restorative Dentistry',
            },
            {
              label: 'Orthodontics',
              value: 'Orthodontics',
            },
            {
              label: 'Dental Implants',
              value: 'Dental Implants',
            },
          ],
        },
        {
          name: 'treatment',
          type: 'text',
          label: 'Treatment',
          required: true,
        },
        {
          name: 'duration',
          type: 'text',
          label: 'Duration',
          required: true,
        },
        {
          name: 'beforeImage',
          type: 'upload',
          label: 'Before Image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'afterImage',
          type: 'upload',
          label: 'After Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
