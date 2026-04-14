import { useState } from 'react'
import SEO from '@/components/utility/SEO'
import BlogCard from '@/components/content/BlogCard'
import posts from '@/data/posts.json'

const POSTS_PER_PAGE = 6

// Sorted newest first
const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
const allTags = ['All', ...new Set(posts.flatMap(p => p.tags))]

export default function Blog() {
  const [activeTag,   setActiveTag]   = useState('All')
  const [page,        setPage]        = useState(1)

  const filtered = activeTag === 'All'
    ? sortedPosts
    : sortedPosts.filter(p => p.tags.includes(activeTag))

  const totalPages  = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginated   = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  const handleTagChange = (tag) => { setActiveTag(tag); setPage(1) }

  return (
    <>
      <SEO
        title="Blog"
        description="Thoughts on web development, design, and building things on the internet."
        url="https://yourwebsite.com/blog"
      />

      <section className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">Writing</p>
          <h1 className="section-heading">Blog</h1>
          <p className="section-sub">
            Things I've learned, opinions I've formed, and tutorials I wish existed.
          </p>
        </div>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                ${activeTag === tag
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
            {paginated.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-surface-400">
            <p className="text-lg">No posts yet in this category.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-surface-200 text-sm text-surface-600
                         hover:bg-surface-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition
                  ${n === page
                    ? 'bg-brand-600 text-white'
                    : 'border border-surface-200 text-surface-600 hover:bg-surface-100'
                  }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-surface-200 text-sm text-surface-600
                         hover:bg-surface-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Next →
            </button>
          </div>
        )}
      </section>
    </>
  )
}
