'use client'

import { useLenis } from 'lenis/react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

/**
 * Botão flutuante para voltar ao topo da página
 * Aparece após o usuário rolar para baixo
 */
export default function ScrollToTop() {
  const lenis = useLenis()
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (!lenis) return

    const handleScroll = () => {
      const scroll = lenis.scroll
      const limit = lenis.limit
      const progress = scroll / limit

      // Mostra o botão após rolar 200px
      setIsVisible(scroll > 200)
      // Atualiza o progresso para animação do círculo
      setScrollProgress(progress)
    }

    lenis.on('scroll', handleScroll)

    return () => {
      lenis.off('scroll', handleScroll)
    }
  }, [lenis])

  const scrollToTop = () => {
    lenis?.scrollTo(0, {
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Voltar ao topo"
        >
          {/* Círculo de progresso */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="56"
            height="56"
          >
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200"
            />
            <circle
              cx="28"
              cy="28"
              r="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress)}`}
              className="text-primaryds transition-all duration-300"
              strokeLinecap="round"
            />
          </svg>

          {/* Botão */}
          <div className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:bg-primaryds transition-colors duration-300">
            <ArrowUp className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors duration-300" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
