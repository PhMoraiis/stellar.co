'use client'

import { CloverIcon, PlanetIcon } from '@phosphor-icons/react/ssr'
import { motion } from 'motion/react'

const FastAbout = () => {
  return (
    <div id="about" className="py-16 px-4 md:py-36 bg-secondaryds">
      <div className="max-w-7xl mx-auto flex flex-col space-y-42">
        <motion.div
          className="text-left max-w-5xl gap-6 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h4 className="text-2xl font-medium uppercase mb-4 flex items-center">
            Por que nós existimos
             <span className="text-white text-2xl">.</span>
          </h4>
          <h2 className="text-4xl md:text-6xl font-movatif-regular">
            Reconhecemos uma lacuna na indústria criativa: Pequenas empresas
            frequentemente têm dificuldade em encontrar soluções de tecnologia
            de alta qualidade, porém acessíveis. É por isso que existimos.
          </h2>
        </motion.div>
        <div className="flex justify-between flex-col md:flex-row lg:flex-row gap-12">
          <motion.div
            className="flex items-center justify-start space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <CloverIcon className="size-44 text-[#BA6139]" />
            <CloverIcon className="size-44 text-[#BA6139]" />
          </motion.div>
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <p className="font-normal text-xl">
              Oferecemos um conjunto selecionado de serviços de tecnologia,
              especialmente elaborados para pequenos empresários. Do web design
              à implementação de softwares, simplificamos a construção de uma
              presença online sólida sem nenhum custo adicional.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FastAbout
