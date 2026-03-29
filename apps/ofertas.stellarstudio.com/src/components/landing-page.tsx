"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import { getCalApi } from '@calcom/embed-react'
import { StellarLogo } from "./logo";

const sitePlans = [
	{
		tier: "Pacote 01",
		name: "Landing Page",
		oldPrice: "R$ 2.300",
		price: "R$ 1.800",
		recurrence: "Pagamento único · Entrega em 7-10 dias",
		badge: "✦ Promoção Especial",
		note: "Ideal para profissionais autônomos e negócios locais que ainda não têm presença online.",
		features: [
			"Design personalizado no Figma",
			"1 página responsiva (desktop + mobile)",
			"Seções: hero, serviços, depoimentos e CTA",
			"Formulário de contato funcional",
			"Orientação de hospedagem inclusa",
			"1 rodada de revisões",
		],
	},
	{
		tier: "Pacote 02",
		name: "Site Institucional",
		// oldPrice: "R$ 4.300",
		price: "R$ 3.500",
		recurrence: "Pagamento único · Entrega em 14-21 dias",
		note: "Para empresas que querem uma presença digital completa e profissional.",
		featured: true,
		badge: "Mais escolhido",
		features: [
			"Tudo do Pacote 01",
			"Até 5 páginas completas",
			"Blog ou sistema de atualizações",
			"SEO básico configurado",
			"Otimização de performance",
			"2 rodadas de revisões",
		],
	},
	{
		tier: "Pacote 03",
		name: "Sistema Web",
		// oldPrice: "R$ 7.500",
		price: "Sob consulta",
		recurrence: "A partir de R$ 5.000 · Prazo Negociado",
		badge: "✦ Promoção Especial",
		note: "Para negócios com processos que precisam ser digitalizados. Requer discovery call.",
		features: [
			"Sistemas e aplicações web customizadas",
			"Dashboards e painéis administrativos",
			"Integrações de API (pagamentos, CRM...)",
			"Autenticação e gestão de usuários",
			"Design system completo",
			"Suporte pós-entrega por 30 dias",
		],
	},
];

const socialPlans = [
	{
		tier: "Plano 01",
		name: "Starter",
		oldPrice: "R$ 780,00",
		price: "R$ 600,00",
		period: "/mês",
		recurrence: "Contrato mínimo 3 meses",
		badge: "✦ Promoção Especial",
		note: "Ponto de entrada para quem ainda não tem presença ativa nas redes.",
		features: [
			"12 posts/mês no feed",
			"Design personalizado por post",
			"Legenda + hashtags estratégicos",
			"16 stories/mês",
			"Agendamento e publicação incluídos",
			"1 revisão por post",
		],
	},
	{
		tier: "Plano 02",
		name: "Essencial",
		// oldPrice: "R$ 1.150,00",
		price: "R$ 900,00",
		period: "/mês",
		recurrence: "Contrato mínimo 3 meses",
		note: "Para negócios que querem consistência e crescimento real nas redes.",
		featured: true,
		badge: "Mais escolhido",
		features: [
			"20 posts/mês no feed",
			"Identidade visual apurada e coesa",
			"Legenda + hashtags + CTA estratégico",
			"24 stories/mês - interativos",
			"Agendamento e publicação incluídos",
			"Relatório quinzenal de desempenho",
			"2 revisões por post",
		],
	},
	{
		tier: "Plano 03",
		name: "Crescimento",
		oldPrice: "R$ 1.750,00",
		price: "R$ 1.400,00",
		period: "/mês",
		badge: "✦ Promoção Especial",
		recurrence: "Contrato mínimo 3 meses",
		note: "Para quem quer Social Media como canal de aquisição, não só de presença.",
		features: [
			"28 posts/mês no feed",
			"Design system completo e coeso",
			"Copywriting avançado em cada post",
			"30 stories/mês com enquetes e CTA",
			"Agendamento e publicação incluídos",
			"Relatório semanal de desempenho",
			"Planejamento de conteúdo mensal",
			"Revisões ilimitadas (ciclo 48h)",
			"Datas comemorativas do setor",
		],
	},
];

const reelsPacks = [
	{
		freq: "Mensal",
		title: "2 Reels/sem",
		oldP1: "R$ 980",
		p1: "R$ 800",
		oldP2: "R$ 1.350",
		p2: "R$ 1.100",
		oldP3: "R$ 2.200",
		p3: "R$ 1.800",
		badge: "✦ Promoção Especial",
		features: [
			"8 Reels/mês - até 60s cada",
			"Legenda animada + trilha",
			"Arte de capa para feed",
			"Entrega em 48h úteis",
		],
	},
	{
		freq: "Mensal",
		title: "3 Reels/sem",
		// oldP1: "R$ 1.320",
		p1: "R$ 1.100",
		// oldP2: "R$ 1.850",
		p2: "R$ 1.500",
		// oldP3: "R$ 3.100",
		p3: "R$ 2.400",
		featured: true,
		badge: "Mais escolhido",
		features: [
			"12 Reels/mês - até 60s cada",
			"Legenda animada + trilha",
			"Arte de capa para feed",
			"Entrega em 48h úteis",
			"Relatório mensal de alcance",
		],
	},
	{
		freq: "Mensal",
		title: "4 Reels/sem",
		oldP1: "R$ 1.700",
		p1: "R$ 1.400",
		oldP2: "R$ 2.250",
		p2: "R$ 1.900",
		oldP3: "R$ 4.200",
		p3: "R$ 3.400",
		badge: "✦ Promoção Especial",
		features: [
			"16 Reels/mês - até 60s cada",
			"Legenda animada + trilha",
			"Arte de capa para feed",
			"Entrega em 48h úteis",
			"Relatório mensal de alcance",
			"Planejamento de pauta mensal",
		],
	},
];

const faqItems = [
	{
		q: "Quais serviços a Stellar Studio oferece nesta página?",
		a: "Oferecemos pacotes para landing pages, sites institucionais, sistemas web, gestão de social media e produção de reels.",
	},
	{
		q: "Os valores da página já são finais?",
		a: "Os valores funcionam como referência de entrada. O valor final pode variar conforme escopo, integrações e nível de personalização.",
	},
	{
		q: "Qual é o prazo médio de entrega?",
		a: "Landing pages costumam ser entregues em 7 a 10 dias, sites institucionais em 14 a 21 dias e sistemas web são definidos após diagnóstico.",
	},
	{
		q: "Vocês também fazem manutenção mensal?",
		a: "Sim. Temos planos de manutenção para atualizações, segurança, suporte técnico e evolução contínua do projeto.",
	},
	{
		q: "Como faço para contratar?",
		a: "Clique em qualquer CTA da página para falar com a Stellar Studio e receber a proposta ideal para o seu momento.",
	},
];

function PlanCard({
	plan,
}: {
	plan: (typeof sitePlans)[number] | (typeof socialPlans)[number];
}) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.35 }}
			className={cn("plan-card", plan.featured && "featured")}
		>
			{plan.badge ? (
				<div
					className={cn(
						"plan-badge",
						plan.badge.includes("Promoção Especial")
							? "plan-badge-promo"
							: "plan-badge-featured",
					)}
				>
					{plan.badge}
				</div>
			) : null}
			<p className="plan-tier">{plan.tier}</p>
			<h3 className="plan-name">{plan.name}</h3>
			<div className="plan-price">
				{"oldPrice" in plan && plan.oldPrice ? (
					<span className="plan-price-old">{plan.oldPrice}</span>
				) : null}
				<div className="plan-price-current-row">
					<span className="plan-price-value">{plan.price}</span>
					{"period" in plan ? (
						<span className="plan-price-period">{plan.period}</span>
					) : null}
				</div>
			</div>
			<p className="plan-recurrence">{plan.recurrence}</p>
			<div className="plan-divider" />
			<ul className="plan-features">
				{plan.features.map((feature) => (
					<li key={feature}>
						<span className="feat-check">✦</span>
						{feature}
					</li>
				))}
			</ul>
			<p className="plan-note">{plan.note}</p>
		</motion.article>
	);
}

export default function LandingPage() {
	const [reelsTab, setReelsTab] = useState<
		"gestao" | "reels-avulso" | "reels-pack"
	>("gestao");

	 useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

	return (
		<>
			<Header />

			<main>
				<section className="hero">
					<div className="hero-bg-text">STELLAR</div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65 }}
						className="hero-content"
					>
						<h1>
							O digital que o seu negócio
							{""} <em>merece</em>
						</h1>
						<p className="hero-sub">
							Sites, sistemas e gestão de redes sociais para negócios que querem
							uma presença digital à altura do que entregam.
						</p>
						<div className="hero-actions">
							<Button asChild size="lg">
								<a href="#pricing">Conhecer serviços</a>
							</Button>
							<Button variant='outline' asChild size="lg">
								<a href="https://wa.me/?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20um%20projeto%20com%20a%20Stellar%20Studio." target="_blank" rel="noopener noreferrer">
									Conversar no WhatApp <FaWhatsapp className="text-lg" />
								</a>
							</Button>
						</div>
					</motion.div>

					<motion.a
						href="#pricing"
						className="hero-scroll-cue"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55, delay: 0.35 }}
					>
						<span className="hero-scroll-cue-badge">Promoção Especial</span>
						<span className="hero-scroll-cue-text">Role para ver os pacotes</span>
						<span className="hero-scroll-cue-arrow" aria-hidden="true">
							↓
						</span>
					</motion.a>
				</section>

				<section id="pricing" className="section">
					<div className="section-eyebrow">
						<span>O que oferecemos</span>
					</div>
					<h2 className="section-title">
						Pacotes &amp; <em>Preços</em>
					</h2>
					<p className="section-sub">
						Escolha o serviço certo pro momento do seu negócio. Todos incluem
						design personalizado e foco em resultado.
					</p>

					<Tabs defaultValue="sites">
						<TabsList>
							<TabsTrigger value="sites">Sites &amp; Sistemas</TabsTrigger>
							<TabsTrigger value="social">Social Media</TabsTrigger>
						</TabsList>

						<TabsContent value="sites">
							<div className="plans-grid">
								{sitePlans.map((plan) => (
									<PlanCard key={plan.name} plan={plan} />
								))}
							</div>
						</TabsContent>

						<TabsContent value="social" id="social-media">
							<div className="reels-subnav">
								{[
									["gestao", "Gestão Mensal"],
									["reels-avulso", "Reels Avulsos"],
									["reels-pack", "Pacotes de Reels"],
								].map(([key, label]) => (
									<button
										key={key}
										type="button"
										className={cn(
											"reels-subnav-btn",
											reelsTab === key && "active",
										)}
										onClick={() =>
											setReelsTab(
												key as "gestao" | "reels-avulso" | "reels-pack",
											)
										}
									>
										{label}
									</button>
								))}
							</div>

							{reelsTab === "gestao" ? (
								<div className="plans-grid">
									{socialPlans.map((plan) => (
										<PlanCard key={plan.name} plan={plan} />
									))}
								</div>
							) : null}

							{reelsTab === "reels-avulso" ? (
								<div className="avulso-table-wrap">
									<div className="avulso-table-header">
										<h3>Reels Unitários</h3>
										<p>
											Preço por Reel conforme modalidade e minutagem. Toda
											edição inclui corte, legenda animada, trilha licenciada e
											arte de capa.
										</p>
									</div>
									<table className="avulso-table">
										<thead>
											<tr>
												<th>Modalidade</th>
												<th>Até 30s</th>
												<th>30s - 60s</th>
												<th>60s - 90s</th>
												<th>+90s</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Apenas Edição</td>
												<td>R$ 120</td>
												<td>R$ 180</td>
												<td>R$ 250</td>
												<td>A consultar</td>
											</tr>
											<tr>
												<td>Roteiro + Edição</td>
												<td>R$ 200</td>
												<td>R$ 280</td>
												<td>R$ 380</td>
												<td>A consultar</td>
											</tr>
											<tr className="avulso-row-featured">
												<td>Pacote Completo</td>
												<td>R$ 400</td>
												<td>R$ 550</td>
												<td>R$ 700</td>
												<td>A consultar</td>
											</tr>
										</tbody>
									</table>
									<div className="avulso-notes">
										<div className="avulso-notes-header">
											<h4>✦ O que está incluído em cada modalidade</h4>
											<p>Entenda melhor o que faz cada serviço diferente</p>
										</div>
										<div className="avulso-notes-grid">
											<div className="avulso-notes-col">
												<h5>Apenas Edição</h5>
												<ul>
													<li>Material fornecido pelo cliente</li>
													<li>Corte e transições profissionais</li>
													<li>Legenda animada com timing</li>
													<li>Trilha licenciada (banco de áudio)</li>
													<li>Arte de capa para feed</li>
												</ul>
											</div>
											<div className="avulso-notes-col">
												<h5>Roteiro + Edição</h5>
												<ul>
													<li>Tudo de "Apenas Edição"</li>
													<li>Roteiro criativo e narrativa</li>
													<li>Storyboard visual</li>
													<li>Consultoria de conceito</li>
													<li>Orientação de melhor formato</li>
												</ul>
											</div>
											<div className="avulso-notes-col">
												<h5>Pacote Completo</h5>
												<ul>
													<li>Tudo de "Roteiro + Edição"</li>
													<li>Gravação em estúdio/locação</li>
													<li>Deslocamento em Brasília-DF</li>
													<li>Até 2h de captação incluídas</li>
													<li>Equipamento básico (celular + ring light)</li>
												</ul>
											</div>
										</div>
										<div className="avulso-notes-additional">
											<h5>✦ Detalhes Importantes - Pacote Completo</h5>
											<div className="avulso-notes-additional-grid">
												<div className="avulso-notes-additional-col">
													<h6>Incluso</h6>
													<ul>
														<li>Deslocamento dentro de Brasília-DF</li>
														<li>Locação de espaço (por conta do cliente)</li>
														<li>Até 2h de captação por dia</li>
														<li>Equipamento básico incluído (celular + ring light)</li>
													</ul>
												</div>
												<div className="avulso-notes-additional-col">
													<h6>Adicionais e Especiais</h6>
													<ul>
														<li>Acima de 2h de captação: +R$ 150/hora</li>
														<li>Câmera + iluminação avançada: sob consulta</li>
														<li>Locações premium em Brasília: valor adicional</li>
														<li>Equipamento de drone: sob consulta</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							) : null}

							{reelsTab === "reels-pack" ? (
								<div className="reels-pack-section">
									<div className="reels-packs-grid">
										{reelsPacks.map((pack) => (
											<article
												key={pack.title}
												className={cn("reel-pack", pack.featured && "featured")}
											>
												{pack.badge ? (
													<div
														className={cn(
															"plan-badge",
															pack.badge.includes("Promoção Especial")
																? "plan-badge-promo"
																: "plan-badge-featured",
														)}
													>
														{pack.badge}
													</div>
												) : null}
												<p className="reel-pack-freq">{pack.freq}</p>
												<h3 className="reel-pack-title">{pack.title}</h3>
												<div className="reel-price-row">
													<div className="reel-price-item">
														<span>Só edição</span>
														<div className="reel-price-values">
															{pack.oldP1 ? <span className="reel-old-price">{pack.oldP1}/mês</span> : null}
																<span className="reel-current-price">{pack.p1}/mês</span>
														</div>
													</div>
													<div className="reel-price-item">
														<span>Com roteiro</span>
														<div className="reel-price-values">
															{pack.oldP2 ? <span className="reel-old-price">{pack.oldP2}/mês</span> : null}
																<span className="reel-current-price">{pack.p2}/mês</span>
														</div>
													</div>
													<div className="reel-price-item">
														<span>Com gravação</span>
														<div className="reel-price-values">
															{pack.oldP3 ? <span className="reel-old-price">{pack.oldP3}/mês</span> : null}
																<span className="reel-current-price">{pack.p3}/mês</span>
														</div>
													</div>
												</div>
												<ul className="reel-pack-features">
													{pack.features.map((item) => (
														<li key={item}>
															<span className="text-primaryds">✦</span>
															{item}
														</li>
													))}
												</ul>
											</article>
										))}
									</div>
									<div className="reels-pack-notes">
										<div className="reels-pack-notes-header">
											<h4>✦ Gravação inclusa - Como funciona</h4>
											<p>Quando a Stellar cuida de tudo, esses são os detalhes importantes</p>
										</div>
										<div className="reels-pack-notes-grid">
											<div className="reels-pack-notes-col">
												<h5>Incluso nos pacotes</h5>
												<ul>
													<li>Deslocamento incluso dentro de Brasília-DF</li>
													<li>Locação de espaço por conta do cliente</li>
													<li>Diária inclui até 2h de captação</li>
													<li>Equipamento básico (celular + ring light)</li>
												</ul>
											</div>
											<div className="reels-pack-notes-col">
												<h5>Adicionais e especiais</h5>
												<ul>
													<li>Câmera + iluminação avançada: sob consulta</li>
													<li>Acima de 2h de captação: +R$ 150/hora</li>
													<li>Locações premium: valor adicional</li>
													<li>Equipamento de drone: sob consulta</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							) : null}
						</TabsContent>
					</Tabs>
				</section>

				<FAQ />

				<section className="cta-section bg-[#171718]" id="contato">
					<h2 className="cta-title">
						Pronto para
						<br />
						<em>começar?</em>
					</h2>
					<p className="cta-sub">
						Nos conte mais sobre o seu negócio. Definimos juntos o melhor ponto
						de entrada, sem compromisso.
					</p>
					<div className="cta-contacts">
						<Button size="lg" className="hover:bg-white hover:text-primary" data-cal-namespace="30min"
          data-cal-link="stellar-studio/30min"
          data-cal-config='{"layout":"month_view"}'>
								Agendar Meet
						</Button>
						<Button asChild variant="outline" size="lg" className="hover:border-primaryds hover:text-primaryds border-white text-white" >
							<a
								href="https://wa.me/?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20um%20projeto%20com%20a%20Stellar%20Studio."
								target="_blank"
								rel="noreferrer"
							>
								Conversar no WhatsApp <FaWhatsapp className="text-lg" />
							</a>
						</Button>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
