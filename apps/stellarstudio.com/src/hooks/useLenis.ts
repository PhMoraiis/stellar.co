'use client'

import { useLenis } from 'lenis/react'
import { useEffect } from 'react'

/**
 * Hook para executar callbacks em eventos de scroll do Lenis
 * @param callback - Função a ser executada no scroll
 * @param deps - Dependências para re-executar o callback
 */
export function useLenisScroll(
  callback: (lenis: any) => void,
  deps: any[] = []
) {
  useLenis(callback, deps)
}

/**
 * Hook para scrollar para um elemento ou posição
 */
export function useLenisScrollTo() {
  const lenis = useLenis()

  const scrollTo = (
    target: string | number | HTMLElement,
    options?: {
      offset?: number
      lerp?: number
      duration?: number
      immediate?: boolean
      lock?: boolean
      force?: boolean
      onComplete?: () => void
    }
  ) => {
    lenis?.scrollTo(target, options)
  }

  return scrollTo
}

/**
 * Hook para pausar/retomar o scroll
 */
export function useLenisControl() {
  const lenis = useLenis()

  const stop = () => lenis?.stop()
  const start = () => lenis?.start()

  return { stop, start }
}

/**
 * Hook para obter informações do scroll atual
 */
export function useLenisInfo() {
  const lenis = useLenis()

  return {
    scroll: lenis?.scroll ?? 0,
    limit: lenis?.limit ?? 0,
    velocity: lenis?.velocity ?? 0,
    direction: lenis?.direction ?? 0,
    progress: lenis?.progress ?? 0,
    isScrolling: lenis?.isScrolling ?? false,
  }
}

/**
 * Hook para sincronizar animações com o scroll
 * Útil para efeitos parallax e outras animações baseadas em scroll
 */
export function useLenisScrollProgress(callback: (progress: number) => void) {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    const handleScroll = () => {
      callback(lenis.progress)
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis, callback])
}
