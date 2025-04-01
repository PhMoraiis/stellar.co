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
    { name: 'Features', href: '/features' },
    { name: 'Extension', href: '/extension' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'FAQ', href: '/faq' },
  ]

  const scrolledNavLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <AnimatePresence mode="wait">
      {!scrolled ? (
        <motion.header
          key="initial-navbar"
          className="fixed top-0 left-0 right-0 z-50 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center space-x-12">
            <nav className="flex items-center space-x-10">
              {initialNavLinks.slice(0, 2).map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${
                    pathname === link.href ? 'font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Link href="/" className="flex justify-center items-center">
              <StellarLogo width={35} height={35} />
            </Link>
            <nav className="flex items-center space-x-10">
              {initialNavLinks.slice(2).map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 text-lg hover:text-gray-600 transition-colors ${
                    pathname === link.href ? 'font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.header>
      ) : (
        <motion.header
          key="scrolled-navbar"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white shadow-md rounded-full w-full max-w-2xl px-8 py-2 flex items-center justify-evenly space-x-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex items-center space-x-12">
              {scrolledNavLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 hover:text-gray-600 transition-colors ${
                    pathname === link.href ? 'font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <motion.button
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-12 py-4 rounded-3xl flex items-center space-x-2 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block h-2 w-2 bg-gray-900 rounded-full mr-2" />
              <span>Get Started</span>
            </motion.button>
          </motion.div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
