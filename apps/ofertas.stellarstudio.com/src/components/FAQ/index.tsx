"use client";

import { motion } from "motion/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const websiteAndSoftwareFaq = [
	{
		value: "site-item-1",
		question: "Qual é o prazo de entrega?",
		answer:
			"O prazo varia conforme o projeto. Landing pages geralmente ficam prontas em 7-10 dias, sites institucionais em 14-21 dias e sistemas personalizados em prazos negociados após o discovery.",
	},
	{
		value: "site-item-2",
		question: "Vocês fazem manutenção após a entrega?",
		answer:
			"Sim. Oferecemos suporte pós-entrega e planos de manutenção mensal com atualizações, correções, backups e acompanhamento técnico contínuo.",
	},
	{
		value: "site-item-3",
		question: "Como funciona o pagamento?",
		answer:
			"Para projetos de site e software, normalmente trabalhamos com pagamento por etapas: entrada para início, parcela no desenvolvimento e saldo na entrega. Também avaliamos condições por escopo.",
	},
	{
		value: "site-item-4",
		question: "Vocês atendem empresas fora de Brasília?",
		answer:
			"Sim. Atendemos clientes de todo o Brasil com reuniões online e comunicação contínua durante todo o projeto.",
	},
	{
		value: "site-item-5",
		question: "Posso fazer alterações durante o desenvolvimento?",
		answer:
			"Sim. Cada pacote inclui rodadas de revisão. Ajustes extras também podem ser solicitados e são alinhados com impacto de prazo e investimento, quando necessário.",
	},
	{
		value: "site-item-6",
		question: "Vocês hospedam o site/sistema?",
		answer:
			"Podemos orientar e implementar em provedores recomendados para alta performance e segurança, além de trabalhar com a hospedagem que você já utiliza.",
	},
];

const socialMediaFaq = [
	{
		value: "social-item-1",
		question: "O que está incluso nos pacotes de social media?",
		answer:
			"Os pacotes incluem gestão mensal de conteúdo, posts para feed, reels conforme o plano, copy estratégica, agendamento e publicação.",
	},
	{
		value: "social-item-2",
		question: "Como funcionam os Reels Avulsos?",
		answer:
			"Você pode contratar por unidade nas modalidades Apenas Edição, Roteiro + Edição e Pacote Completo (com gravação), conforme a duração e necessidade.",
	},
	{
		value: "social-item-3",
		question: "A gravação está inclusa em quais casos?",
		answer:
			"A gravação entra na modalidade com captação. Inclui deslocamento em Brasília-DF e até 2h de captação por diária; adicionais como hora extra, equipamento avançado ou drone são sob consulta.",
	},
	{
		value: "social-item-4",
		question: "Qual a frequência de entregas e relatórios?",
		answer:
			"A frequência varia por pacote. Os planos incluem entregas semanais/quinzenais e relatórios de desempenho e alcance de acordo com o nível contratado.",
	},
	{
		value: "social-item-5",
		question: "Existe contrato mínimo para gestão mensal?",
		answer:
			"Sim. Os pacotes de gestão mensal possuem contrato mínimo de 3 meses para garantir consistência de estratégia e performance.",
	},
];

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
						<div className="space-y-8">
							<div>
								<p className="mb-4 text-sm uppercase tracking-[0.24em] text-neutral-500">
									Site e Software
								</p>
								<Accordion
									type="single"
									collapsible
									className="w-full space-y-4"
								>
									{websiteAndSoftwareFaq.map((item) => (
										<AccordionItem
											key={item.value}
											value={item.value}
											className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
										>
											<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
												{item.question}
											</AccordionTrigger>
											<AccordionContent className="text-zinc-600 text-base">
												{item.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>

							<div>
								<p className="mb-4 text-sm uppercase tracking-[0.24em] text-neutral-500">
									Social Media
								</p>
								<Accordion
									type="single"
									collapsible
									className="w-full space-y-4"
								>
									{socialMediaFaq.map((item) => (
										<AccordionItem
											key={item.value}
											value={item.value}
											className="border-none bg-[#E8DED0] rounded-lg px-6 py-2"
										>
											<AccordionTrigger className="text-lg md:text-xl text-neutral-800 hover:no-underline font-normal">
												{item.question}
											</AccordionTrigger>
											<AccordionContent className="text-zinc-600 text-base">
												{item.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
