"use client";

import { useScrolled } from '@/hooks/useScrolled'
import { getCalApi } from '@calcom/embed-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { StellarLogo } from '../Logos'
import CenterUnderline from '../ui/underline-center'

export default function Header() {
  const { scrolled } = useScrolled({ initial: false })
  const pathname = usePathname()

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  const initialNavLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Preços', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  const scrolledNavLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Preços', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <AnimatePresence mode="wait">
      {!scrolled ? (
        <motion.header
          key="initial-navbar"
          className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 md:py-8 md:h-16 mt-2 sm:mt-3 md:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center px-2 xs:px-4 sm:px-6">
            <div className="flex items-center justify-between w-full max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-lg">
              <nav className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-8 mr-1 xs:mr-2 sm:mr-3">
                {initialNavLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-gray-800 text-md xs:text-md sm:text-md md:text-lg hover:text-gray-600 transition-colors whitespace-nowrap ${
                      pathname === link.href ? "font-medium" : ""
                    }`}
                  >
                    <CenterUnderline label={link.name} />
                  </Link>
                ))}
              </nav>

              <Link
                href="/"
                className="flex justify-center items-center mx-1 xs:mx-2 sm:mx-3"
              >
                <div className="hidden xs:block">
                  <StellarLogo width={25} height={25} />
                </div>
                <div className="block xs:hidden">
                  <StellarLogo width={35} height={35} />
                </div>
              </Link>

              <nav className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 ml-1 xs:ml-2 sm:ml-3">
                {initialNavLinks.slice(2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-gray-800 text-md xs:text-md sm:text-md md:text-lg hover:text-gray-600 transition-colors whitespace-nowrap ${
                      pathname === link.href ? "font-medium" : ""
                    }`}
                  >
                    <CenterUnderline label={link.name} />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </motion.header>
      ) : (
        <motion.header
          key="scrolled-navbar"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center px-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white shadow-md rounded-full py-3 px-4 sm:px-6 md:px-8 w-full max-w-[95%] sm:max-w-[26rem] md:max-w-[33rem] lg:max-w-[38rem] flex flex-col gap-2 sm:gap-0 sm:flex-row lg:gap-0 md:gap-0 lg:flex-row md:flex-row items-center justify-between sm:justify-evenly overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-8 lg:space-x-12">
              {scrolledNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 text-xs sm:text-sm md:text-base hover:text-gray-600 transition-colors whitespace-nowrap ${
                    pathname === link.href ? "font-medium" : ""
                  }`}
                >
                  <CenterUnderline label={link.name} />
                </Link>
              ))}
            </nav>

            <motion.button
              className="bg-primaryds hover:bg-secondaryds text-secondary ml-2 sm:ml-4 px-3 py-1.5 sm:px-2 sm:py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-2 rounded-3xl flex items-center font-medium transition-colors ease-in duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              //               href="mailto:meet@stellarstudio.tech?subject=Marcar%20meet%20virtual&body=Ol%C3%A1%2C%0A%0AGostaria%20de%20agendar%20uma%20reuni%C3%A3o%20virtual%20com%20a%20Stellar.%20Fico%20%C3%A0%20disposi%C3%A7%C3%A3o%20para%20conhecer%20os%20hor%C3%A1rios%20dispon%C3%ADveis.%0A%0AAguardo%20seu%20retorno.%0A%0AAtenciosamente%2C%0A%5BSeu%20Nome%5D%0A%5BSeu%20Cargo%5D%0A%5BSeu%20Telefone%5D%0A%5BSeu%20e-mail%5D%0A%5BNome%20da%20Empresa%5D
              // "
              data-cal-namespace="30min"
              data-cal-link="stellar-studio/30min"
              data-cal-config='{"layout":"month_view"}'
            >
              <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 bg-secondary rounded-full mr-1.5 sm:mr-2" />
              <span>Agendar Meet</span>
            </motion.button>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
