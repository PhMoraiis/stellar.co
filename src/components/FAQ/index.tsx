'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'motion/react'

export default function FAQ() {
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
             Perguntas Frequentes
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
                  Quais serviços a Stellar Studio oferece?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  Oferecemos soluções completas em Branding, Design de Produto,
                  UX/UI Design, Desenvolvimento Front-end e Back-end. Nosso foco
                  é transformar ideias em produtos digitais de alto impacto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                  Quanto tempo demora um projeto típico?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  O prazo varia conforme a complexidade, mas projetos típicos
                  duram entre 1 e 3 meses, incluindo etapas de planejamento,
                  design, desenvolvimento e testes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                  O preço calculado pela sua calculadora online é final?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  Não. A calculadora fornece uma estimativa inicial. O valor
                  final é definido após análise detalhada do escopo, requisitos
                  técnicos e recursos envolvidos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                  Vocês oferecem algum plano de pagamento?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  Ainda não temos planos fixos, mas podemos criar propostas
                  personalizadas com condições de pagamento adaptadas ao escopo
                  e orçamento do cliente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                  Que tipo de suporte posso esperar após o lançamento?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  Oferecemos suporte técnico e manutenção pós-lançamento para
                  garantir a estabilidade, segurança e funcionamento adequado do
                  produto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                  Você terceiriza algum trabalho?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  Sim. Trabalhamos com uma rede de especialistas em diversas
                  áreas para garantir qualidade e eficiência em cada etapa do
                  projeto, quando necessário.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
                  Como faço para começar?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-base">
                  Basta entrar em contato conosco. Vamos entender suas
                  necessidades, propor a melhor solução e enviar uma proposta
                  personalizada para dar início ao projeto.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
