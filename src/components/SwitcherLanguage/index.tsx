"use client"

import { useId, useState, useEffect, useRef } from "react"
import { useRouter, usePathname, useParams } from "next/navigation"
import { motion } from "motion/react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useLenisScrollTo } from "@/hooks/useLenis"

export default function SwitcherOrigin() {
  const id = useId()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const scrollTo = useLenisScrollTo()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPreloading, setIsPreloading] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const preloadTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const currentLang = params?.lang as string || 'pt-BR'
  const checked = currentLang === 'en'

  // Função para cancelar transição e resetar estado
  const cancelTransition = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current)
      preloadTimeoutRef.current = null
    }
    setIsTransitioning(false)
    setIsPreloading(false)
  }

  // Reset automático após 10 segundos para evitar travamento
  useEffect(() => {
    if (isTransitioning) {
      const resetTimeout = setTimeout(() => {
        console.warn('Language transition timeout - resetting state')
        cancelTransition()
      }, 10000) // 10 segundos de timeout

      return () => clearTimeout(resetTimeout)
    }
  }, [isTransitioning])

  // Cancelar transição se o usuário interagir com a página
  useEffect(() => {
    const handleUserInteraction = () => {
      if (isTransitioning) {
        console.log('User interaction detected - canceling transition')
        cancelTransition()
      }
    }

    // Escuta eventos de interação do usuário
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('scroll', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [isTransitioning])

  // Cleanup dos timeouts quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current)
      }
    }
  }, [])
  
  const handleLanguageChange = async (isEnglish: boolean) => {
    if (isTransitioning) return
    
    // Cancela qualquer transição anterior
    cancelTransition()
    
    setIsTransitioning(true)
    
    // Aguarda um pouco para o fade-out
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const newLang = isEnglish ? 'en' : 'pt-BR'
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/'
    const newPath = `/${newLang}${pathWithoutLang}`
    
    // Scroll muito mais suave para o topo
    scrollTo(0, {
      duration: 2.5, // Muito mais lento
      lerp: 0.05,     // Mais suave
      onComplete: () => {
        // Navega para o novo idioma imediatamente ao chegar no topo
        router.push(newPath)
        
        // Reset do estado após um delay menor
        timeoutRef.current = setTimeout(() => {
          setIsTransitioning(false)
          setIsPreloading(false)
        }, 300)
      }
    })
    
    // Pré-carrega o idioma durante o scroll (aos 60% do scroll)
    preloadTimeoutRef.current = setTimeout(() => {
      setIsPreloading(true)
      // Pré-carrega a página no novo idioma em background
      router.prefetch(newPath)
    }, 1000) // 1s após iniciar o scroll (40% do tempo total)
  }

  return (
    <div className="relative">
      <motion.div 
        className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium"
        animate={{
          opacity: isTransitioning ? 0.3 : 1,
          scale: isTransitioning ? 0.9 : 1
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        <Switch
          id={id}
          checked={checked}
          onCheckedChange={handleLanguageChange}
          disabled={isTransitioning}
          className="peer absolute inset-0 h-[inherit] w-auto data-[state=unchecked]:bg-input/50 [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-full border border-ring"
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full">
          <motion.span 
            className="text-lg"
            animate={{
              scale: isTransitioning ? 0.7 : 1,
              rotate: isTransitioning ? 360 : 0,
              opacity: isTransitioning ? 0.4 : 1
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            🇺🇸
          </motion.span>
        </span>
        <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=checked]:text-background peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full">
          <motion.span 
            className="text-lg"
            animate={{
              scale: isTransitioning ? 0.7 : 1,
              rotate: isTransitioning ? 360 : 0,
              opacity: isTransitioning ? 0.4 : 1
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
          >
            🇧🇷
          </motion.span>
        </span>
      </motion.div>
      <Label htmlFor={id} className="sr-only">
        Language switcher
      </Label>
    </div>
  )
}
