"use client"

import { useId } from "react"
import { usePathname, useParams } from "next/navigation"
import { motion } from "motion/react"

import { useLanguageTransition } from "@/components/LanguageTransition"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitcherOrigin() {
  const id = useId()
  const pathname = usePathname()
  const params = useParams()
  const { changeLanguage, isChanging: isTransitioning } = useLanguageTransition()

  const currentLang = params?.lang as string || 'pt-BR'
  const checked = currentLang === 'en'

  const handleLanguageChange = (isEnglish: boolean) => {
    if (isTransitioning) return

    const newLang = isEnglish ? 'en' : 'pt-BR'
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/'

    // A transição (véu, volta ao topo e navegação) fica no LanguageTransition
    changeLanguage(`/${newLang}${pathWithoutLang}`)
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