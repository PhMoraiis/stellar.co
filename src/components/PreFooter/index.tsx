'use client'

import { getCalApi } from '@calcom/embed-react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useDictionary } from '@/hooks/useDictionary'

export default function PreFooter() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  const dict = useDictionary()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <motion.h1
          className="font-movatif-regular text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-12 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {dict.preFooter.h1} {''}
          <span className="bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-400 bg-clip-text text-transparent">
          {dict.preFooter.span}<span className="text-primaryds">.</span>
          </span>
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          type="button"
          className="inline-flex items-center bg-gray-footer rounded-full shadow-2xl px-3 pr-6 py-2 text-white hover:bg-zinc-900 transition-colors duration-200 ease-in-out cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-cal-namespace="30min"
          data-cal-link="stellar-studio/30min"
          data-cal-config='{"layout":"month_view"}'
        >
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="size-11">
              <AvatarImage src="/images/avatar.png" alt="support" />
              <AvatarFallback>STELLAR</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{dict.preFooter.btnTitle}</span>
                <ArrowRight className="size-4" />
              </div>
              <div className="text-sm text-zinc-400">
              {dict.preFooter.btnText}
              </div>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  )
}
