import { Link } from 'react-router-dom'

export default function BlogCard({ post }) {
  const { slug, title, excerpt, date, tags = [], readTime } = post

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <article className="card group p-6">
      <div className="flex items-center gap-3 mb-3">
        <time className="text-xs font-mono text-surface-400">{formattedDate}</time>
        {readTime && (
          <span className="text-xs text-surface-400">· {readTime} min read</span>
        )}
      </div>

      <h2 className="font-display text-xl font-semibold text-surface-900 mb-2
                     group-hover:text-brand-600 transition-colors leading-snug">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>

      <p className="text-sm text-surface-600 leading-relaxed mb-4 line-clamp-3">
        {excerpt}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      <Link
        to={`/blog/${slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
      >
        Read more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  )
}
