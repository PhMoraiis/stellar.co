'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { GlobeIcon } from '@phosphor-icons/react/dist/ssr'

export default function FAQ() {
  return (
    <div className="py-16 px-4 md:py-36">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-lg font-medium uppercase mb-4 flex gap-2 items-center">
          <GlobeIcon className="size-6" /> Perguntas Frequentes (FAQ)
        </h4>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              Quais serviços a Stellar Studio oferece?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              Oferecemos soluções completas em Branding, Design de Produto,
              UX/UI Design, Desenvolvimento Front-end e Back-end. Nosso foco é
              transformar ideias em produtos digitais de alto impacto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              Quanto tempo demora um projeto típico?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              O prazo varia conforme a complexidade, mas projetos típicos duram
              entre 1 e 3 meses, incluindo etapas de planejamento, design,
              desenvolvimento e testes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              O preço calculado pela sua calculadora online é final?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              Não. A calculadora fornece uma estimativa inicial. O valor final é
              definido após análise detalhada do escopo, requisitos técnicos e
              recursos envolvidos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              Vocês oferecem algum plano de pagamento?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              Ainda não temos planos fixos, mas podemos criar propostas
              personalizadas com condições de pagamento adaptadas ao escopo e
              orçamento do cliente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              Que tipo de suporte posso esperar após o lançamento?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              Oferecemos suporte técnico e manutenção pós-lançamento para
              garantir a estabilidade, segurança e funcionamento adequado do
              produto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              Você terceiriza algum trabalho?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              Sim. Trabalhamos com uma rede de especialistas em diversas áreas
              para garantir qualidade e eficiência em cada etapa do projeto,
              quando necessário.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="py-4">
            <AccordionTrigger className="flex justify-between text-xl text-neutral-800 hover:no-underline">
              Como faço para começar?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-500">
              Basta entrar em contato conosco. Vamos entender suas necessidades,
              propor a melhor solução e enviar uma proposta personalizada para
              dar início ao projeto.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
