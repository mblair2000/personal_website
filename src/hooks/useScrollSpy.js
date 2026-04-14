import { useEffect, useState } from 'react'

/**
 * useScrollSpy — tracks which section is visible in the viewport.
 * Pass an array of section IDs; returns the active one.
 */
export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0, ...options }
    )

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId
}
