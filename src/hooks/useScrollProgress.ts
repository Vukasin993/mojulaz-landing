import { useState, useEffect, type RefObject } from 'react'

export interface ScrollProgressState {
  /** 0–1: overall progress through the sticky section */
  progress: number
  /** current step index (0 … totalSteps-1) */
  activeStep: number
  /** 0–1: progress within the current step */
  stepProgress: number
  /** true while the sticky phase is active */
  isActive: boolean
}

/**
 * Tracks scroll progress through a tall, sticky-scrollable container.
 *
 * Usage:
 *   const containerRef = useRef<HTMLDivElement>(null)
 *   const { activeStep } = useScrollProgress(containerRef, 5)
 *
 * The container should be:
 *   position: relative; height: (totalSteps + 1) * 100vh
 *
 * The sticky inner should be:
 *   position: sticky; top: 0; height: 100vh
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  totalSteps: number,
): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>({
    progress: 0,
    activeStep: 0,
    stepProgress: 0,
    isActive: false,
  })

  useEffect(() => {
    const update = () => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const containerHeight = el.offsetHeight
      const wh = window.innerHeight
      const maxScroll = containerHeight - wh

      if (maxScroll <= 0) return

      // rect.top is negative once we've scrolled past the top
      const scrolled = -rect.top
      const clamped = Math.max(0, Math.min(maxScroll, scrolled))
      const progress = clamped / maxScroll

      const rawStep = progress * totalSteps
      const activeStep = Math.min(Math.floor(rawStep), totalSteps - 1)
      const stepProgress = rawStep - Math.floor(rawStep)
      const isActive = scrolled >= 0 && scrolled <= maxScroll

      setState({ progress, activeStep, stepProgress, isActive })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update() // seed on mount

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref, totalSteps])

  return state
}
