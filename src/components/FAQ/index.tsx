'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useDictionary } from '@/hooks/useDictionary'
import { motion } from 'motion/react'

export default function FAQ() {
  const dict = useDictionary()

  return (
    <div id="faq" className="py-16 px-4 md:py-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Título à esquerda */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-movatif-regular leading-tight">
             {dict.faq.titulo}
                <span className="text-primaryds">.</span>
              <span className="block">
              </span>
            </h2>
          </motion.div>

          {/* Accordion à direita */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q1}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a1}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q2}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a2}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q3}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a3}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q4}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a4}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q5}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a5}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q6}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a6}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                {dict.faq.q7}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                {dict.faq.a7}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
