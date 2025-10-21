"use client";

import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useActiveSection } from '@/hooks/useActiveSection'
import { getCalApi } from '@calcom/embed-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { StellarLogo, StellarLogoName } from '../Logos'
import CenterUnderline from '../ui/underline-center'
import SmoothScrollLink from '../ui/smooth-scroll-link'
import { useDictionary } from '@/hooks/useDictionary';

export default function Header() {
  const { scrollDirection, isAtTop } = useScrollDirection(100)
  const activeSection = useActiveSection()
  const pathname = usePathname()
  const [showScrolledNav, setShowScrolledNav] = useState(false)
  const dict = useDictionary();

  useEffect(() => {
    // Lógica para mostrar/esconder navbar scrolled
    if (isAtTop) {
      setShowScrolledNav(false)
    } else if (scrollDirection === 'up') {
      setShowScrolledNav(true)   // Scrollando para cima: mostra navbar compacta
    } else if (scrollDirection === 'down') {
      setShowScrolledNav(false)  // Scrollando para baixo: esconde navbar compacta
    }
  }, [scrollDirection, isAtTop])

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  const initialNavLinks = [
    { name: dict.headerAndFooter.about, href: '#about' },
    { name: dict.headerAndFooter.solutions, href: '#solutions' },
    { name: dict.headerAndFooter.pricing, href: '#pricing' },
    { name: dict.headerAndFooter.faq, href: '#faq' },
  ]

  const scrolledNavLinks = [
    { name: dict.headerAndFooter.about, href: '#about' },
    { name: dict.headerAndFooter.solutions, href: '#solutions' },
    { name: dict.headerAndFooter.pricing, href: '#pricing' },
    { name: dict.headerAndFooter.faq, href: '#faq' },
  ]

  return (
    <AnimatePresence mode="wait">
      {isAtTop ? (
        <motion.header
          key="initial-navbar"
          className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-8 md:h-16 mt-2 sm:mt-3 md:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="banner"
          aria-label="Navegação principal"
        >
          <div className="flex items-center justify-center px-2 xs:px-4 sm:px-6">
            <div className="flex items-center justify-between w-full max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-lg">
              <nav className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-8 mr-1 xs:mr-2 sm:mr-3" role="navigation" aria-label="Menu principal">
                {initialNavLinks.slice(0, 2).map((link) => (
                  <SmoothScrollLink
                    key={link.name}
                    href={link.href}
                    className={`text-gray-800 text-md xs:text-md sm:text-md md:text-lg hover:text-gray-600 transition-colors whitespace-nowrap ${
                      pathname === link.href ? "font-medium" : ""
                    }`}
                    offset={-120}
                    duration={1.5}
                  >
                    <CenterUnderline label={link.name} />
                  </SmoothScrollLink>
                ))}
              </nav>

              <Link
                href="/"
                className="flex justify-center items-center mx-1 xs:mx-2 sm:mx-3"
                aria-label="Stellar Studio - Página inicial"
              >
                <div className="hidden xs:block">
                  <StellarLogo width={25} height={25} aria-hidden="true" />
                </div>
                <div className="block xs:hidden">
                  <StellarLogo width={35} height={35} aria-hidden="true" />
                </div>
              </Link>

              <nav className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 ml-1 xs:ml-2 sm:ml-3" role="navigation" aria-label="Menu secundário">
                {initialNavLinks.slice(2).map((link) => (
                  <SmoothScrollLink
                    key={link.name}
                    href={link.href}
                    className={`text-gray-800 text-md xs:text-md sm:text-md md:text-lg hover:text-gray-600 transition-colors whitespace-nowrap ${
                      pathname === link.href ? "font-medium" : ""
                    }`}
                    offset={-120}
                    duration={1.5}
                  >
                    <CenterUnderline label={link.name} />
                  </SmoothScrollLink>
                ))}
              </nav>
            </div>
          </div>
        </motion.header>
      ) : showScrolledNav ? (
        <motion.header
          key="scrolled-navbar"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 py-3 sm:py-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-primary backdrop-blur-md bg-opacity-95 shadow-2xl rounded-xl py-3 px-6 w-full max-w-[90%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl flex items-center justify-between border border-white/10 max-h-20 relative overflow-visible"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center mr-6 sm:mr-8 md:mr-10 lg:mr-12"
            >
              <StellarLogoName />
            </Link>

            <nav className="hidden sm:flex items-center space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 relative">
              {scrolledNavLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <SmoothScrollLink
                    key={link.name}
                    href={link.href}
                    className="relative py-4"
                    offset={-100}
                    duration={1.5}
                  >
                    <span
                      className={`text-sm sm:text-base md:text-base lg:text-base transition-colors duration-200 whitespace-nowrap ${
                        isActive
                          ? "text-white font-medium"
                          : "text-zinc-400 font-light hover:text-zinc-200"
                      }`}
                    >
                      {link.name}
                    </span>
                    
                    {/* Indicador laranja embaixo - na borda da navbar */}
                    {isActive && (
                      <div
                        className="absolute left-0 right-0 h-[3px] bg-primaryds rounded-t-sm"
                        style={{ bottom: '-12px' }}
                      />
                    )}
                  </SmoothScrollLink>
                );
              })}
            </nav>
            <motion.button
              className="bg-primaryds hover:bg-secondaryds text-secondary ml-2 sm:ml-4 px-3 py-3 sm:px-2 sm:py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-2 rounded-md flex items-center font-medium transition-colors ease-in duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cal-namespace="30min"
              data-cal-link="stellar-studio/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 bg-secondary rounded-full mr-1.5 sm:mr-2" />
              <span>{dict.headerAndFooter.btn}</span>
            </motion.button>
          </motion.div>
        </motion.header>
      ) : null}
    </AnimatePresence>
  );
}
