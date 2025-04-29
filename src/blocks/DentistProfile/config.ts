import type { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const DentistProfileBlock: Block = {
  slug: 'dentistProfile',
  // Add interfaceName to ensure the type is generated correctly
  interfaceName: 'DentistProfileBlock',
  labels: {
    singular: 'Dentist Profile Block',
    plural: 'Dentist Profile Blocks',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Dentist Name',
      defaultValue: 'Dr. Sarah Johnson',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Biography',
      defaultValue:
        'With over 15 years of experience in dentistry, Dr. Johnson is committed to providing exceptional dental care in a comfortable and welcoming environment.',
    },
    {
      name: 'education',
      type: 'text',
      label: 'Education',
      defaultValue: 'Doctor of Dental Surgery, University of Dental Medicine',
    },
    {
      name: 'certifications',
      type: 'text',
      label: 'Certifications',
      defaultValue: 'American Dental Association, Academy of Cosmetic Dentistry',
    },
    {
      name: 'continuingEducation',
      type: 'text',
      label: 'Continuing Education',
      defaultValue: 'Advanced training in implant dentistry and cosmetic procedures',
    },
    {
      name: 'media',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: false,
    },
    linkGroup({
      overrides: {
        name: 'links',
        label: 'Links',
        maxRows: 1,
      },
    }),
  ],
}
