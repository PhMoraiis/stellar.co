'use client'

import { useParams } from "next/navigation";
import pt from "@/dictionaries/pt.json";
import en from "@/dictionaries/en.json";

export function useDictionary() {
	const params = useParams();
	// Suporte para rotas dinâmicas: /[lang]/...
	let lang = "pt";
	if (typeof params?.lang === "string") lang = params.lang;
	else if (Array.isArray(params?.lang)) lang = params.lang[0];

	if (lang === "en") return en;
	return pt;
}