"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TextRotate from "../ui/text-rotate";
import { motion, LayoutGroup } from "motion/react";

export default function Hero() {
  const links = [
    { name: "Branding", href: "/branding", id: 1 },
    { name: "Desenvolvimento", href: "/development", id: 2 },
    { name: "UI/UX Design", href: "/product-design", id: 3 },
  ];

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 py-16 md:py-24 lg:py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center justify-center px-4 text-center md:mb-24 lg:mb-32 uppercase">
          <h2 className="font-movatif-regular text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
            <span className="font-medium text-black">Um </span>
            <span className="bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-800 bg-clip-text text-transparent">
              grande{' '}
            </span>
            <span className="font-medium text-black">negócio </span>
            <br />
            <span className="font-medium text-black">é </span>
            <span className="font-medium text-black">o </span>
            <span className="font-medium text-black">resultado </span>
            <span className="font-medium text-black">de um</span>
          </h2>

          <LayoutGroup>
            <motion.div
              className="mt-2 flex text-center font-movatif-regular text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
              layout
            >
              <motion.span
                className="pt-0.5 sm:pt-1 md:pt-2"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                grande{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "desenvolvimento.",
                  "design.",
                  "branding.",
                  "studio.",
                  "time.",
                ]}
                mainClassName="text-white px-2 sm:px-3 md:px-4 bg-primaryds overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg h-10 sm:h-14 md:h-20 lg:h-34 flex items-center mx-2 sm:mx-3 md:mx-4 lg:mx-4"
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

        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 text-lg sm:flex-row sm:gap-12 md:gap-16 lg:gap-24 lg:text-xl xl:text-2xl">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="group flex items-center gap-2 text-zinc-700 transition-colors hover:text-black"
            >
              {link.name}
              <ArrowUpRight
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}