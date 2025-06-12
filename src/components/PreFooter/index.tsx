"use client";

import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function PreFooter() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="font-movatif-regular text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-12 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-300 bg-clip-text text-transparent">
          Trabalhe perfeitamente com uma equipe criativa criada para acompanhar
          seu ritmo e {""}
          <span className="bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-400 bg-clip-text text-transparent">
            supere suas expectativas<span className="text-primaryds">.</span>
          </span>
        </h1>

        {/* CTA Button */}
        <button
          type="button"
          className="inline-flex items-center bg-gray-footer rounded-full shadow-2xl px-3 pr-6 py-2 text-white hover:bg-zinc-900 transition-colors duration-200 ease-in-out cursor-pointer"
          onClick={() => {
            const subject = encodeURIComponent("Quero marcar um meet");
            const body = encodeURIComponent("Olá gostaria de marcar um meet!");
            const mailtoUrl = `mailto:hello@stellarstudio.tech?subject=${subject}&body=${body}`;
            window.open(mailtoUrl);
          }}
        >
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="size-11">
              <AvatarImage src="/images/avatar.png" alt="support" />
              <AvatarFallback>STELLAR</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Agende um Meet</span>
                <ArrowRight className="size-4" />
              </div>
              <div className="text-sm text-zinc-400">
                Vamos conversar sobre seu projeto
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
