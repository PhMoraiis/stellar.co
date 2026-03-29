import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import { gorga, movatif } from "@/lib/fonts";
import "./globals.css";

const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Ofertas | Stellar Studio",
		template: "%s | Stellar Studio",
	},
	description:
		"Confira as ofertas da Stellar Studio para sites, sistemas e social media com foco em crescimento, performance e conversão.",
	keywords: [
		"ofertas stellar studio",
		"preços sites",
		"landing page profissional",
		"social media brasilia",
		"desenvolvimento web",
		"agência digital",
	],
	authors: [{ name: "Stellar Studio" }],
	creator: "Stellar Studio",
	publisher: "Stellar Studio",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://stellarstudio.com"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://ofertas.stellarstudio.com",
		title: "Ofertas | Stellar Studio",
		description:
			"Soluções em design, desenvolvimento e social media para escalar sua presença digital.",
		siteName: "Stellar Studio",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Stellar Studio - Ofertas",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${interSans.variable} ${movatif.variable} ${gorga.variable}`}
		>
			<body className={`${interSans.variable} antialiased`}>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
