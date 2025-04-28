import type { Metadata } from 'next'
// Use the Media component from PayloadCMS
import { Media } from '@/components/Media'
import Link from 'next/link'
import { Calendar, Clock, Facebook, Instagram, Twitter, User } from 'lucide-react'
import { RelatedPosts } from '@/components/RelatedPosts'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { formatDateTime } from '@/utilities/formatDateTime'
import { formatAuthors } from '@/utilities/formatAuthors'

import type { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Button } from '@/components/ui/button'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  // Extract category title for display
  const categoryTitle =
    post.categories && post.categories.length > 0 && typeof post.categories[0] === 'object'
      ? post.categories[0].title
      : 'Uncategorized'

  // Format the date for display
  const formattedDate = post.publishedAt ? formatDateTime(post.publishedAt) : ''

  // Format authors
  const authorName =
    post.populatedAuthors && post.populatedAuthors.length > 0
      ? formatAuthors(post.populatedAuthors)
      : 'Unknown Author'

  // Get tags from post
  const tags =
    post.tags && Array.isArray(post.tags)
      ? post.tags.map((tag) => (typeof tag.tag === 'string' ? tag.tag : ''))
      : []

  return (
    <div className="container mx-auto px-4 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/posts" className="text-teal-600 hover:text-teal-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>

        <div className="mb-8">
          <span className="text-sm text-teal-600 font-medium">{categoryTitle}</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-6">{post.title}</h1>

          <div className="flex items-center text-gray-500 text-sm mb-8">
            <div className="flex items-center mr-6">
              <User className="h-4 w-4 mr-1" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          {post.heroImage && typeof post.heroImage !== 'string' ? (
            <Media
              resource={post.heroImage}
              alt={post.title}
              fill
              imgClassName="object-cover"
              priority={true}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-200">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <RichText data={post.content} enableGutter={false} />
        </article>

        <div className="border-t border-b py-6 mb-12">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-4 md:mb-0">
              <span className="font-medium mr-2">Tags:</span>
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/posts/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                  className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm mr-2 mb-2 hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-3">Share:</span>
              <div className="flex space-x-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `${process.env.NEXT_PUBLIC_SERVER_URL || 'https://your-domain.com'}/posts/${post.slug}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `${process.env.NEXT_PUBLIC_SERVER_URL || 'https://your-domain.com'}/posts/${post.slug}`,
                  )}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X (Twitter)"
                >
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on X (Twitter)</span>
                  </Button>
                </a>
                <a
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                >
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Share on Instagram</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Display related posts if available */}
        {post.relatedPosts && Array.isArray(post.relatedPosts) && post.relatedPosts.length > 0 && (
          <RelatedPosts relatedPosts={post.relatedPosts as any} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    depth: 2, // Increased depth to properly populate nested relationships
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
