import type { Block } from 'payload'

export const TreatmentProcessBlock: Block = {
  slug: 'treatmentProcess',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'TreatmentProcessBlock',
  labels: {
    singular: 'Treatment Process Block',
    plural: 'Treatment Process Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      defaultValue: 'Our Treatment Process',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'What to expect when you visit our dental clinic',
    },
    {
      name: 'processes',
      type: 'array',
      label: 'Process Steps',
      minRows: 1,
      maxRows: 9,
      fields: [
        {
          name: 'step',
          type: 'text',
          label: 'Step Number',
          defaultValue: '1',
          required: true,
        },
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
      ],
      defaultValue: [
        {
          step: '1',
          title: 'Initial Consultation',
          description: 'We begin with a thorough examination and discussion of your dental history and concerns.',
        },
        {
          step: '2',
          title: 'Treatment Planning',
          description: 'Based on your examination, we develop a personalized treatment plan tailored to your specific needs.',
        },
        {
          step: '3',
          title: 'Treatment Execution',
          description: 'We perform the agreed-upon treatments with precision and care, ensuring your comfort throughout.',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'blue',
      options: [
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Teal',
          value: 'teal',
        },
        {
          label: 'Gray',
          value: 'gray',
        },
        {
          label: 'White',
          value: 'white',
        },
      ],
    },
  ],
}
