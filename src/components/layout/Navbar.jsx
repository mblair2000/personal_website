import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close hamburger on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-surface-200 shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors"
        >
          blair0<span className="text-accent-500">.com</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                   ${isActive
                     ? 'bg-brand-50 text-brand-700'
                     : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                   }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary text-sm py-2">
            Hire Me
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg text-surface-700 hover:bg-surface-100 transition"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-transform duration-300"
            style={open ? { transform: 'rotate(45deg) translate(3px, 3px)' } : {}} />
          <span className="block w-5 h-0.5 bg-current mb-1 transition-opacity duration-300"
            style={open ? { opacity: 0 } : {}} />
          <span className="block w-5 h-0.5 bg-current transition-transform duration-300"
            style={open ? { transform: 'rotate(-45deg) translate(3px, -3px)' } : {}} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white border-t border-surface-100 px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium text-sm transition-all
                 ${isActive
                   ? 'bg-brand-50 text-brand-700'
                   : 'text-surface-700 hover:bg-surface-50'
                 }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center text-sm">
              Inquiries
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
