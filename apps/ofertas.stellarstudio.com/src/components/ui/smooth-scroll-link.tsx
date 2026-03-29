'use client'

import { useLenis } from 'lenis/react'
import Link from 'next/link'
import { type MouseEvent, type ReactNode } from 'react'

interface SmoothScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  offset?: number
  duration?: number
  onClick?: () => void
}

/**
 * Componente Link que implementa scroll suave usando Lenis
 * Para links âncora (#section), usa Lenis.scrollTo
 * Para links externos, usa comportamento padrão do Next.js Link
 */
export default function SmoothScrollLink({
  href,
  children,
  className,
  offset = -100, // Offset negativo para compensar header fixo
  duration = 1.2,
  onClick,
}: SmoothScrollLinkProps) {
  const lenis = useLenis()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Chama callback customizado se fornecido
    onClick?.()

    // Se for link âncora (#section)
    if (href.startsWith('#')) {
      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement && lenis) {
        // Usa Lenis para scroll suave
        lenis.scrollTo(targetElement, {
          offset: offset,
          duration: duration,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      }
    }
    // Para outros links, deixa o Next.js Link lidar
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
