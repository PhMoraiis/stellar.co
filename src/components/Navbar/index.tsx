'use client'

import Logo from '../Logo'
import ArrowRight from '../ArrowRight'
import { AnimatePresence, motion } from 'framer-motion'
import { animationStart, reveal } from '@/utils/animation'
import Link from 'next/link'
import { useState } from 'react'
import MenuNavLink from '../MenuNavLink'
import AnimatedLink from '../AnimatedLink'

import { TfiMenu } from 'react-icons/tfi'
import { GrClose } from 'react-icons/gr'
import { Cloudy } from 'lucide-react'

const navLinks = [
  { title: 'Desenvolvimento', href: '/development' },
  { title: 'Design', href: '/design' },
  { title: 'Branding', href: '/branding' },
  { title: 'Blog', href: '/blog' },
  { title: 'Sobre', href: '/about' },
  { title: 'Contato', href: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: 'easeIn',
          type: 'tween',
          staggerChildren: 0.1,
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="font-coolveticaLt w-full flex items-center justify-around h-[50px] absolute top-0 bg-[#f6f6f6] z-50 shadow-md"
      >
        <motion.div variants={reveal} className="mt-2">
          <Link href="/">
            <Logo color="#000000" />
          </Link>
        </motion.div>
        <div className="md:flex gap-8 text-md items-center hidden">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} className="borderAnimBlack">
              <AnimatedLink title={link.title} />
            </Link>
          ))}
          <Link  href='/nimbus' className="flex items-end text-xl mb-2 gap-1 text-[#6DACDF] font-azedoBd">
            <AnimatedLink title='Nimbus' />
            <Cloudy size={20} color='#6DACDF'/>
          </Link>
        </div>

        <div className='flex items-center justify-center gap-4'>
          <Link href="/call" target="_blank">
            <motion.div
              variants={reveal}
              className="md:flex gap-[5px] text-md items-center cursor-pointer hidden borderAnimBlack"
            >
              <AnimatedLink className="mb-[3px] font-coolveticaLt" title={'Agende uma chamada'} />
              <ArrowRight />
            </motion.div>
          </Link>
        </div>

        <div
          className="cursor-pointer md:hidden text-lg mx-8 text-black"
          onClick={toggleMenu}
        >
          <TfiMenu size={25} />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top bg-gradient text-black p-10"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <div className="-mt-8">
                    <Link href="/">
                      <Logo color="#000000" />
                    </Link>
                  </div>
                  <p
                    className="cursor-pointer text-lg text-black"
                    onClick={toggleMenu}
                  >
                    <GrClose size={25} />
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-coolveticaLt items-center gap-4 "
                >
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index} className="overflow-hidden">
                        <MenuNavLink
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default Navbar