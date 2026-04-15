import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEO from '@/components/utility/SEO'
import ProjectCard from '@/components/content/ProjectCard'
import projects from '@/data/projects.json'

const featuredProjects = projects.filter(p => p.featured)

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">

        {/* Background Image Layer*/}
        <img
          src="/satellite_image.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="max-w-3xl animate-stagger">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-mono text-red-900">Employed at KBR</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-surface-900 leading-tight mb-6">
            Hi, I'm{' '}
            <span className="text-brand-600 relative">
              Michael Blair
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-accent-500 rounded-full" />
            </span>
            .
          </h1>

          <p className="text-xl text-surface-600 leading-relaxed mb-8 max-w-xl">
            I'm a Software Developer & Data Science Professional passionate about building 
            software and algorithms to help provide solutions to complex problems in the 
            Space Domain.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>

          {/* Tech stack badges */}
          <div className="mt-12 flex flex-wrap gap-2">
            {['Python', 'Java', 'Linux', 'AWS', 'Docker', 'Git', 'PostgreSQL', 'React', 'Tailwind CSS', 'Vite', 'MATLAB', 'REST', 'Javascript'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: '7+',  label: 'Years Programming' },
    { value: '2+',  label: 'Years Management' },
    { value: '30+', label: 'Technologies Used' },
    { value: '∞',   label: 'Coffees Consumed' },
  ]

  return (
    <section className="border-y border-surface-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl font-bold text-brand-600 mb-1">{value}</div>
              <div className="text-sm text-surface-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">Work</p>
            <h2 className="section-heading mb-0">Featured Projects</h2>
          </div>
          <Link to="/projects" className="btn-secondary text-sm hidden sm:inline-flex">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/projects" className="btn-secondary">View All Projects →</Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-brand-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Let's build something great.
        </h2>
        <p className="text-brand-200 text-lg mb-8 max-w-xl mx-auto">
          Whether you have a business inquiry, a project in mind, or just want to chat, my inbox is always open.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700
                     font-medium rounded-lg hover:bg-brand-50 transition-all duration-200
                     hover:shadow-lg hover:-translate-y-0.5"
        >
          Say Hello
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        description="Personal website of Michael Blair — full-stack developer and designer building fast, accessible web experiences."
        url="https://yourwebsite.com/"
      />
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
