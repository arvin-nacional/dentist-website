import type { Post, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/RichText'

import { CollectionArchive } from '@/components/CollectionArchive'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
    heading?: string | null
  }
> = async (props) => {
  const {
    id,
    categories,
    description,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    heading,
  } = props

  const limit = limitFromProps || 3

  let posts: Post[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Post[]

      posts = filteredSelectedPosts
    }
  }

  return (
    <div className="my-16" id={`block-${id}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          {heading && <h2 className="text-3xl font-bold text-foreground mb-4">{heading}</h2>}
          {description && (
            <div className="mb-16">
              <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
            </div>
          )}
        </div>
      </div>

      <CollectionArchive posts={posts} />
    </div>
  )
}
