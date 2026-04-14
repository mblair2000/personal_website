import { useState } from 'react'
import SEO from '@/components/utility/SEO'
import ProjectCard from '@/components/content/ProjectCard'
import projects from '@/data/projects.json'

// Collect all unique tags
const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeTag))

  return (
    <>
      <SEO
        title="Projects"
        description="A collection of projects I've built — from full-stack web apps to open source tools."
        url="https://yourwebsite.com/projects"
      />

      <section className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">Portfolio</p>
          <h1 className="section-heading">Projects</h1>
          <p className="section-sub">
            Things I've built, shipped, and learned from. From side projects to production systems.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeTag === tag
                  ? 'bg-brand-600 text-white shadow-sm shadow-brand-300'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-surface-400">
            <p className="text-lg">No projects match that filter.</p>
          </div>
        )}
      </section>
    </>
  )
}
