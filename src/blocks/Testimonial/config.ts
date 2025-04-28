import type { Block } from 'payload'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'TestimonialBlock',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
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
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Patient Name',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Testimonial Quote',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Rating (1-5)',
          min: 1,
          max: 5,
          defaultValue: 5,
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Patient Image',
          relationTo: 'media',
        },
      ],
    },
  ],
}
