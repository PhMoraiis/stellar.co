'use client'

import { ArrowLeftRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { BiCodeBlock } from 'react-icons/bi'
import { useDictionary } from '@/hooks/useDictionary';

export default function Stats() {
  const dict = useDictionary()

  return (
    <div
      id="solutions"
      className="py-16 px-4 md:py-40 flex flex-col items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-movatif font-normal text-[#333] space-y-3">
            {dict.solutions.h1}
            <motion.span
              className="inline-flex items-center justify-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="size-6 lg:size-8 text-primaryds mr-2" />
            {dict.solutions.span1}
            </motion.span>
           {dict.solutions.span2}
            <motion.span
              className="inline-flex items-center justify-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BiCodeBlock className="size-6 lg:size-8 text-primaryds mr-2" />{' '}
              {dict.solutions.span3}
            </motion.span>
            {dict.solutions.span4}
            <motion.span
              className="inline-flex items-center justify-center mx-2 px-4 py-2 bg-[#222] text-white rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ArrowLeftRight className="size-6 lg:size-8 text-primaryds mr-2" />{' '}
              {dict.solutions.span5}
            </motion.span>
          </h1>
        </motion.div>
      </div>
    </div>
  )
}