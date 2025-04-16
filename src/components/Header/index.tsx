'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { useScrolled } from '@/hooks/useScrolled'
import { StellarLogo } from '../Logos'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { scrolled } = useScrolled({ initial: false })
  const pathname = usePathname()

  const initialNavLinks = [
    { name: 'Soluções', href: '/solutions' },
    { name: 'Casos', href: '/works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/about' },
  ]

  const scrolledNavLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contatos', href: '#contact' },
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
                {initialNavLinks.slice(0, 2).map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-gray-800 text-md xs:text-md sm:text-md md:text-lg hover:text-gray-600 transition-colors whitespace-nowrap ${
                      pathname === link.href ? 'font-medium' : ''
                    }`}
                  >
                    {link.name}
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
                {initialNavLinks.slice(2).map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-gray-800 text-md xs:text-md sm:text-md md:text-lg hover:text-gray-600 transition-colors whitespace-nowrap ${
                      pathname === link.href ? 'font-medium' : ''
                    }`}
                  >
                    {link.name}
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
            className="bg-white shadow-md rounded-full py-3 px-4 sm:px-6 md:px-8 w-full max-w-[95%] sm:max-w-[26rem] md:max-w-[33rem] lg:max-w-[38rem] flex items-center justify-between sm:justify-evenly overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-8 lg:space-x-12">
              {scrolledNavLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 text-xs sm:text-sm md:text-base hover:text-gray-600 transition-colors whitespace-nowrap ${
                    pathname === link.href ? 'font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <motion.button
              className="bg-primaryds hover:bg-secondaryds text-secondary ml-2 sm:ml-4 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-3xl flex items-center font-medium transition-colors ease-in duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 bg-secondary rounded-full mr-1.5 sm:mr-2" />
              <span>Agendar Meet</span>
            </motion.button>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
