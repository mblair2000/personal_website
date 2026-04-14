import { Link } from 'react-router-dom'
import SEO from '@/components/utility/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" />
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-md">
          <p className="font-mono text-8xl font-bold text-brand-100 mb-4 select-none">404</p>
          <h1 className="font-display text-3xl font-bold text-surface-900 mb-3">Page not found</h1>
          <p className="text-surface-600 mb-8">
            Looks like this page took a detour. Let's get you back on track.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="btn-primary">← Go Home</Link>
            <Link to="/contact" className="btn-secondary">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  )
}
