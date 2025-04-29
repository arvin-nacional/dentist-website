'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

export interface CaseItemProps {
  id: string | number
  title: string
  category: string
  treatment: string
  beforeImage: string | MediaType
  afterImage: string | MediaType
  duration: string
}

// Modal component for displaying full-size images
const ImageModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  resource: string | MediaType | null | undefined
  alt: string
}> = ({ isOpen, onClose, resource, alt }) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-lg font-medium">{alt}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 flex justify-center">
          <div className="relative w-full h-[60vh]">
            <Media
              resource={resource}
              alt={alt}
              imgClassName="max-h-full object-contain max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const CaseCard: React.FC<{ caseItem: CaseItemProps }> = ({ caseItem }) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    resource: string | MediaType | null | undefined
    alt: string
  }>({ isOpen: false, resource: null, alt: '' })

  const openModal = (resource: string | MediaType | null | undefined, alt: string) => {
    setModalState({ isOpen: true, resource, alt })
  }

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false })
  }

  return (
    <>
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        resource={modalState.resource}
        alt={modalState.alt}
      />
      <Card className="overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="relative h-80 w-full border-r border-gray-100">
            <div className="absolute top-3 left-3 bg-white text-sm font-medium px-3 py-1 rounded-full z-10 shadow-sm">
              Before
            </div>
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => openModal(caseItem.beforeImage, `Before: ${caseItem.title}`)}
            >
              <Media
                resource={caseItem.beforeImage}
                alt={`Before: ${caseItem.title}`}
                fill
                imgClassName="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 font-medium">
                  View Full Size
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-80 w-full">
            <div className="absolute top-3 left-3 bg-white text-sm font-medium px-3 py-1 rounded-full z-10 shadow-sm">
              After
            </div>
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => openModal(caseItem.afterImage, `After: ${caseItem.title}`)}
            >
              <Media
                resource={caseItem.afterImage}
                alt={`After: ${caseItem.title}`}
                fill
                imgClassName="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 font-medium">
                  View Full Size
                </span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="pt-4 pb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm text-teal-600 font-medium">{caseItem.category}</span>
              <h3 className="text-lg font-bold">{caseItem.title}</h3>
            </div>
            <div className="text-sm text-gray-500 text-right">
              <div>{caseItem.treatment}</div>
              <div>{caseItem.duration}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
