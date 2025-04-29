import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FeaturedServicesBlock } from '@/blocks/FeaturedServices/Component'
import { TestimonialBlockComponent } from '@/blocks/Testimonial/Component'
import { ServiceTabs } from '@/blocks/ServiceTabs/Component'
import { ContactInfoComponent } from '@/blocks/ContactInfo'
import { MissionValuesBlockComponent } from '@/blocks/MissionValues/Component'
import { FacilityBlockComponent } from '@/blocks/Facility/Component'
import { DentistProfileBlockComponent } from '@/blocks/DentistProfile/Component'
import { TreatmentProcessBlockComponent } from '@/blocks/TreatmentProcess/Component'
import { BeforeAfterCasesBlockComponent } from '@/blocks/BeforeAfterCasesBlock'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  featuredServices: FeaturedServicesBlock,
  testimonial: TestimonialBlockComponent,
  serviceTabs: ServiceTabs,
  contactInfo: ContactInfoComponent,
  missionValues: MissionValuesBlockComponent,
  facility: FacilityBlockComponent,
  dentistProfile: DentistProfileBlockComponent,
  treatmentProcess: TreatmentProcessBlockComponent,
  beforeAfterCases: BeforeAfterCasesBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="mt-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
