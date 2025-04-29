import type { Block } from 'payload'

export const MissionValuesBlock: Block = {
  slug: 'missionValues',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'MissionValuesBlock',
  labels: {
    singular: 'Mission & Values Block',
    plural: 'Mission & Values Blocks',
  },
  fields: [
    {
      name: 'missionTitle',
      type: 'text',
      label: 'Mission Title',
      defaultValue: 'Our Mission',
    },
    {
      name: 'missionDescription',
      type: 'textarea',
      label: 'Mission Description',
      defaultValue:
        'Our mission is to improve the oral health and overall well-being of our patients by providing exceptional dental care in a comfortable, compassionate environment. We are committed to:',
    },
    {
      name: 'missionPoints',
      type: 'array',
      label: 'Mission Points',
      fields: [
        {
          name: 'point',
          type: 'text',
          label: 'Point',
        },
      ],
    },
    {
      name: 'valuesTitle',
      type: 'text',
      label: 'Values Title',
      defaultValue: 'Our Core Values',
    },
    {
      name: 'values',
      type: 'array',
      label: 'Values',
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            {
              label: 'Heart',
              value: 'heart',
            },
            {
              label: 'Shield',
              value: 'shield',
            },
            {
              label: 'Check Circle',
              value: 'checkCircle',
            },
            {
              label: 'Users',
              value: 'users',
            },
          ],
          defaultValue: 'checkCircle',
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
    },
  ],
}
