import { useEffect } from 'react'

/**
 * Watches all reveal elements and adds `.in` when they enter the viewport.
 * Supports: .reveal, .reveal-left, .reveal-right, .reveal-scale
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    document.querySelectorAll(selectors).forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
