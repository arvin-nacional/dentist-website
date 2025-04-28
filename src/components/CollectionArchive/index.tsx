import { cn } from '@/utilities/ui'
import React from 'react'
import { formatDateTime } from '@/utilities/formatDateTime'

import { BlogPostCard, BlogPost, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  // Convert Payload CMS post data to the format used by BlogPostCard
  const convertToBlogPost = (post: CardPostData): BlogPost => {
    const { slug, title, categories, meta, authors, populatedAuthors } = post
    
    // Extract first category for display
    const category = categories && Array.isArray(categories) && categories.length > 0 && typeof categories[0] === 'object' 
      ? categories[0].title : undefined
    
    // Extract description/excerpt from meta
    const excerpt = meta?.description || undefined
    
    // For PayloadCMS media objects, they must be passed exactly as is
    // Different versions of PayloadCMS might structure the media object differently
    // So we need to preserve the original object structure
    const image = meta?.image || undefined
    
    return {
      title: title || 'Untitled Post',
      slug: slug || '',
      category,
      excerpt,
      image,
      // Get author name from populatedAuthors or use a placeholder
      author: populatedAuthors && populatedAuthors.length > 0 && typeof populatedAuthors[0] === 'object'
        ? populatedAuthors[0].name || 'Unknown Author'
        : authors && authors.length > 0 && typeof authors[0] === 'object'
        ? authors[0].name || 'Unknown Author'
        : 'Unknown Author',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: post.readTime || '5 min read'
    }
  }

  return (
    <div className={cn('container')}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              const blogPost = convertToBlogPost(result)
              return (
                <div key={index}>
                  <BlogPostCard post={blogPost} />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
