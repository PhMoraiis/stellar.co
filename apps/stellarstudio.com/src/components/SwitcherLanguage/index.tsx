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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navigationCompletedRef = useRef(false)

  const currentLang = params?.lang as string || 'pt-BR'
  const checked = currentLang === 'en'

  // Cleanup dos timeouts quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Reset automático após 5 segundos para evitar travamento
  useEffect(() => {
    if (isTransitioning) {
      const resetTimeout = setTimeout(() => {
        console.warn('Language transition timeout - resetting state')
        setIsTransitioning(false)
      }, 5000)

      return () => clearTimeout(resetTimeout)
    }
  }, [isTransitioning])
  
  const handleLanguageChange = async (isEnglish: boolean) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    navigationCompletedRef.current = false
    
    const newLang = isEnglish ? 'en' : 'pt-BR'
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/'
    const newPath = `/${newLang}${pathWithoutLang}`
    
    // Pré-carrega imediatamente
    router.prefetch(newPath)
    
    // Aguarda o fade-out
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Scroll para o topo enquanto navega
    scrollTo(0, {
      duration: 1.5,
      lerp: 0.05,
      onComplete: () => {
        // Navega assim que chega no topo
        if (!navigationCompletedRef.current) {
          navigationCompletedRef.current = true
          router.push(newPath)
          
          // Reset do estado
          timeoutRef.current = setTimeout(() => {
            setIsTransitioning(false)
          }, 300)
        }
      }
    })
    
    // Navega também após 1s se o scroll não terminar (fallback)
    timeoutRef.current = setTimeout(() => {
      if (!navigationCompletedRef.current) {
        navigationCompletedRef.current = true
        router.push(newPath)
        
        timeoutRef.current = setTimeout(() => {
          setIsTransitioning(false)
        }, 300)
      }
    }, 1000)
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