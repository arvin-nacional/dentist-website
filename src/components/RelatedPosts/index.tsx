import React from 'react'
import Link from 'next/link'
import { ImageMedia } from '@/components/Media/ImageMedia'
import { Media } from '@/components/Media'
import {
  Card as UICard,
  CardContent,
} from '@/components/ui/card'
import { Media as MediaType } from '@/payload-types'
import { getClientSideURL } from '@/utilities/getURL'

type RelatedPost = {
  id?: string
  title?: string
  slug?: string
  meta?: {
    image?: MediaType | string
    description?: string
  }
}

type RelatedPostProps = {
  relatedPosts: any[] // Using any to avoid TypeScript errors
}

export const RelatedPosts: React.FC<RelatedPostProps> = ({ relatedPosts }) => {
  // Filter and get only valid posts with objects (not just IDs)
  const validPosts = relatedPosts
    ? relatedPosts
        .filter(post => typeof post === 'object' && post !== null)
        .slice(0, 6) // Limit to 6 posts max
    : []

  if (!validPosts.length) return null

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {validPosts.map((post) => (
            <UICard key={post.id} className="overflow-hidden rounded-2xl shadow-md">
              <div className="relative h-40 w-full">
                {/* 
                  Matching the exact pattern in TestimonialCard:
                  When image is an object, we only provide the resource prop
                  When image is a string, we provide the src prop
                  When image is falsy, we use a placeholder
                */}
                {typeof post.meta?.image === 'object' ? (
                  // Handle full media object case
                  <Media
                    resource={post.meta?.image}
                    alt={post.title || 'Blog post'}
                    fill
                    imgClassName="object-cover"
                  />
                ) : (
                  // Handle string cases (ID or URL) or null/undefined
                  // We check if it's a string and not an empty string too
                  typeof post.meta?.image === 'string' && post.meta?.image.trim() !== '' ? (
                    // If it's an ID (starts with a letter or number, not a slash), build a proper URL
                    post.meta.image.match(/^[0-9a-z]/i) ? (
                      <ImageMedia
                        src={`/api/media/${post.meta.image}`}
                        alt={post.title || 'Blog post'}
                        fill
                        imgClassName="object-cover"
                      />
                    ) : (
                      // Otherwise treat as a URL/path
                      <ImageMedia
                        src={post.meta.image}
                        alt={post.title || 'Blog post'}
                        fill
                        imgClassName="object-cover"
                      />
                    )
                  ) : (
                    // Fallback for empty or non-existent image
                    <ImageMedia
                      src="/placeholder.svg"
                      alt={post.title || 'Blog post'}
                      fill
                      imgClassName="object-cover"
                    />
                  )
                )}
              </div>
              <CardContent className="pt-4">
                <Link href={`/posts/${post.slug}`} className="group">
                  <h3 className="font-bold mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm line-clamp-2">{post.meta?.description}</p>
              </CardContent>
            </UICard>
        ))}
      </div>
    </div>
  )
}
