import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Loader from '@/components/utility/Loader'

// Lazy-loaded pages for code splitting
const Home       = lazy(() => import('@/pages/Home'))
const About      = lazy(() => import('@/pages/About'))
const Projects   = lazy(() => import('@/pages/Projects'))
const Blog       = lazy(() => import('@/pages/Blog'))
const Contact    = lazy(() => import('@/pages/Contact'))
const NotFound   = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog"     element={<Blog />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
