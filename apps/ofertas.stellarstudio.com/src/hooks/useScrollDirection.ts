import { useEffect, useState } from 'react'

type ScrollDirection = 'up' | 'down' | null

interface UseScrollDirectionReturn {
  scrollDirection: ScrollDirection
  scrollY: number
  isAtTop: boolean
}

export const useScrollDirection = (threshold = 100): UseScrollDirectionReturn => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let ticking = false

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY

      setScrollY(currentScrollY)
      setIsAtTop(currentScrollY < threshold)

      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        ticking = false
        return
      }

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(currentScrollY)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY, threshold])

  return { scrollDirection, scrollY, isAtTop }
}
