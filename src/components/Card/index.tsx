'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
// Do not use Next Image directly, use the Media component
import { Calendar, Clock, User } from 'lucide-react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { ImageMedia } from '@/components/Media/ImageMedia'
import { Card as UICard, CardContent, CardFooter } from '@/components/ui/card'

export type CardPostData = Pick<
  Post,
  'slug' | 'categories' | 'meta' | 'title' | 'authors' | 'populatedAuthors' | 'readTime'
>

// Define the BlogPost type for the new card component
export type BlogPost = {
  title: string
  slug: string
  image?: any // Changed to accept PayloadCMS media object
  category?: string
  excerpt?: string
  author?: string
  date?: string
  readTime?: string
}

// New BlogPostCard component that uses shadcn/ui Card components
export const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <UICard className="overflow-hidden h-full flex flex-col bg-white rounded-2xl shadow-lg">
      <div className="relative h-48 w-full">
        {/* 
          Matching the exact pattern in TestimonialCard:
          When image is an object, we only provide the resource prop
          When image is a string, we provide the src prop
          When image is falsy, we use a placeholder
        */}
        {typeof post.image === 'object' ? (
          <ImageMedia alt={post.title} fill imgClassName="object-cover" resource={post.image} />
        ) : (
          <ImageMedia
            src={post.image || '/placeholder.svg'}
            alt={post.title}
            fill
            imgClassName="object-cover"
          />
        )}
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="mb-2">
          <span className="text-sm text-teal-600 font-medium">{post.category}</span>
        </div>
        <Link href={`/posts/${post.slug}`} className="group">
          <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 text-sm text-gray-500">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </CardFooter>
    </UICard>
  )
}

// Original Card component preserved
export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'border border-border rounded-lg overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full ">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage === 'object' && <Media resource={metaImage} size="33vw" />}
      </div>
      <div className="p-4">
        {showCategories && hasCategories && (
          <div className="uppercase text-sm mb-4">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <div className="prose">
            <h3>
              <Link className="not-prose" href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}
