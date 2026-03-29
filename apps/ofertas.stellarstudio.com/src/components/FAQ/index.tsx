"use client";

import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

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
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<h2 className="text-5xl md:text-6xl lg:text-7xl font-movatif leading-tight">
							Perguntas Frequentes
							<span className="text-primaryds">.</span>
							<span className="block"></span>
						</h2>
					</motion.div>

					{/* Accordion à direita */}
					<motion.div
						className="lg:col-span-7"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						<Accordion type="single" collapsible className="w-full space-y-4">
							<AccordionItem
								value="item-1"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									Qual é o prazo de entrega?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									O prazo varia conforme o projeto. Sites institucionais
									geralmente ficam prontos em 2-4 semanas, enquanto sistemas
									personalizados podem levar de 4-12 semanas. Fornecemos um
									cronograma detalhado no início de cada projeto.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-2"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									Vocês fazem manutenção após a entrega?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									Sim! Oferecemos planos de manutenção mensal que incluem
									atualizações, correções, backups e suporte técnico contínuo
									para garantir que seu projeto funcione perfeitamente.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-3"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									Como funciona o pagamento?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									Trabalhamos com parcelamento flexível. Geralmente dividimos em
									3 etapas: entrada (30%), desenvolvimento (40%) e entrega final
									(30%). Aceitamos PIX, transferência bancária e cartão de
									crédito.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-4"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									Vocês atendem empresas fora de Brasília?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									Sim! Atendemos clientes em todo o Brasil e até
									internacionalmente. Todo nosso processo é digital e realizamos
									reuniões por videoconferência para acompanhar o projeto.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-5"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									Posso fazer alterações durante o desenvolvimento?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									Sim! Incluímos 2 rodadas de revisão em cada etapa do projeto.
									Alterações adicionais podem ser negociadas separadamente para
									não impactar o prazo de entrega.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-6"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									Vocês hospedam o site/sistema?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									Sim! Oferecemos hospedagem gerenciada com tecnologia de ponta,
									garantindo alta performance, segurança e backups automáticos.
									Também podemos trabalhar com sua hospedagem existente.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem
								value="item-7"
								className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
							>
								<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
									O que está incluso no social media?
								</AccordionTrigger>
								<AccordionContent className="text-zinc-600 text-base">
									Nossos pacotes incluem criação de conteúdo (posts, stories e
									reels), agendamento, interação com seguidores, relatórios de
									performance e estratégia personalizada para crescimento.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
