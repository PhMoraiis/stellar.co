'use client'

import { useLenis } from 'lenis/react'
import { motion, useReducedMotion } from 'motion/react'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type Phase = 'idle' | 'scrolling' | 'fading-out' | 'navigating'

interface LanguageTransitionContextValue {
  changeLanguage: (path: string) => void
  isChanging: boolean
}

const LanguageTransitionContext = createContext<LanguageTransitionContextValue>({
  changeLanguage: () => {},
  isChanging: false,
})

export const useLanguageTransition = () => useContext(LanguageTransitionContext)

const SCROLL_DURATION_S = 1.5
// Se o Lenis não avisar o fim da subida, segue mesmo assim
const SCROLL_FALLBACK_MS = SCROLL_DURATION_S * 1000 + 300
// Se a navegação não concluir nesse tempo, o conteúdo reaparece mesmo assim
const SAFETY_TIMEOUT_MS = 6000

const firstSegment = (path: string) => path.split('/').filter(Boolean)[0] ?? ''

/**
 * Troca de idioma em três tempos:
 * sobe a página com scroll suave → esmaece o conteúdo → navega → o novo idioma aparece com fade.
 * Fica no layout raiz porque ele não é desmontado quando o [lang] muda.
 *
 * Anima só `opacity`: `transform` ou `filter` aqui quebrariam o `position: fixed` do header.
 */
export default function LanguageTransition({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const lenis = useLenis()
  const reduceMotion = useReducedMotion()

  const [phase, setPhase] = useState<Phase>('idle')
  const targetRef = useRef<string | null>(null)

  const reset = useCallback(() => {
    targetRef.current = null
    setPhase('idle')
  }, [])

  const changeLanguage = useCallback(
    (path: string) => {
      if (targetRef.current) return

      targetRef.current = path
      router.prefetch(path)

      if (reduceMotion) {
        setPhase('navigating')
        lenis?.scrollTo(0, { immediate: true, force: true })
        router.push(path, { scroll: false })
        return
      }

      // Já no topo: pula direto para o fade
      if (!lenis || lenis.scroll < 1) {
        setPhase('fading-out')
        return
      }

      setPhase('scrolling')
      lenis.scrollTo(0, {
        duration: SCROLL_DURATION_S,
        lock: true,
        force: true,
        onComplete: () => setPhase(current => (current === 'scrolling' ? 'fading-out' : current)),
      })
    },
    [lenis, reduceMotion, router],
  )

  // Fallback caso o onComplete do Lenis não dispare
  useEffect(() => {
    if (phase !== 'scrolling') return

    const timeout = setTimeout(() => {
      setPhase(current => (current === 'scrolling' ? 'fading-out' : current))
    }, SCROLL_FALLBACK_MS)

    return () => clearTimeout(timeout)
  }, [phase])

  // Conteúdo esmaecido: navega para o novo idioma
  const handleAnimationComplete = () => {
    if (phase !== 'fading-out' || !targetRef.current) return

    setPhase('navigating')
    router.push(targetRef.current, { scroll: false })
  }

  // Novo idioma renderizado: o conteúdo volta com fade-in
  useEffect(() => {
    if (!targetRef.current) return
    if (firstSegment(pathname) !== firstSegment(targetRef.current)) return

    reset()
  }, [pathname, reset])

  // Nunca deixa a página presa invisível
  useEffect(() => {
    if (phase === 'idle') return

    const timeout = setTimeout(reset, SAFETY_TIMEOUT_MS)
    return () => clearTimeout(timeout)
  }, [phase, reset])

  const hidden = phase === 'fading-out' || phase === 'navigating'

  return (
    <LanguageTransitionContext.Provider
      value={{ changeLanguage, isChanging: phase !== 'idle' }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: hidden && !reduceMotion ? 0 : 1 }}
        transition={{
          duration: hidden ? 0.25 : 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        {children}
      </motion.div>
    </LanguageTransitionContext.Provider>
  )
}
