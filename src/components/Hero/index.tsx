"use client";

import { ArrowRightIcon, ArrowUpRight } from 'lucide-react'
import { LayoutGroup, motion } from 'motion/react'
import TextRotate from '../ui/text-rotate'
import { AnimatedShinyText } from '../ui/animated-shiny-text';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { useDictionary } from '@/hooks/useDictionary';

export default function Hero() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  const dict = useDictionary()

  return (
    <section 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 py-16 md:py-24 lg:py-32"
      aria-label="Seção principal - Apresentação da Stellar Studio"
    >
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-6">
        <button
          data-cal-namespace="30min"
          data-cal-link="stellar-studio/30min"
          data-cal-config='{"layout":"month_view"}'
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
          aria-label="Agendar reunião de 30 minutos com a Stellar Studio"
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ {dict.hero.badge}</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" aria-hidden="true" />
          </AnimatedShinyText>
        </button>
        <div className="mb-16 flex flex-col items-center justify-center px-4 text-center md:mb-24 lg:mb-32 uppercase font-movatif font-normal">
          <h1 className="text-5xl leading-tight sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
            <span className="text-black">{dict.hero.titulo1} </span>
            <span className="bg-linear-to-r from-zinc-400 via-zinc-600 to-zinc-800 bg-clip-text text-transparent">
            {dict.hero.titulo2}{' '}
            </span>
            <span className="text-black">{dict.hero.titulo3} </span>
            <br />
            <span className="text-black">{dict.hero.titulo4} </span>
            <span className="text-black">{dict.hero.titulo5} </span>
            <span className="text-black">{dict.hero.titulo6} </span>
            <span className="text-black">{dict.hero.titulo7} </span>
            <span className="text-black">{dict.hero.titulo8}</span>
          </h1>

          <LayoutGroup>
            <motion.div
              className="mt-2 flex text-center font-movatif text-5xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
              layout
            >
              {/* <motion.span
                className="pt-0.5 sm:pt-1 md:pt-2"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                grande{" "}
              </motion.span> */}
              <TextRotate
                texts={[
                  'design.',
                  'software.',
                  dict.hero.projeto,
                  'studio.',
                  dict.hero.time,
                  dict.hero.produto,
                  dict.hero.futuro,
                ]}
                mainClassName="text-white px-2 sm:px-3 md:px-4 bg-primaryds overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg h-14 sm:h-14 md:h-16 lg:h-24 xl:h-28 flex items-center mx-2 sm:mx-3 md:mx-4 lg:mx-4 xl:mx-6"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-4"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
              />
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}