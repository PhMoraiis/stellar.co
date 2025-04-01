import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex items-center justify-center py-32 min-h-screen p-4">
      <div className="flex items-center justify-center flex-col max-w-screen-xl mx-auto pb-4 px-4 sm:px-8 space-y-32 mt-6 relative">
        <div className="my-20 px-4 text-center">
          <h2 className="text-center text-7xl font-movatif-regular md:text-9xl">
            <span className="text-zinc-400">Um grande </span>
            <span className="font-medium text-black">negócio </span>
            <br />
            <span className="text-zinc-400">é </span>
            <span className="font-medium text-black">o</span>
            <Image
              src="https://images.unsplash.com/photo-1561070791-36c11767b26a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Design showcase"
              width={100}
              height={100}
              className="mx-8 inline-block rounded-lg object-cover object-bottom w-64 h-30"
            />
            <span className="font-medium text-black">resultado </span>
            <span className="text-zinc-400">de um </span>
            <span className="font-medium text-black">
              grande <span>design</span>
            </span>
          </h2>
        </div>
        <div className="mt-32 flex flex-wrap justify-center gap-24 px-4 text-2xl md:justify-around">
          <Link
            href="#"
            className="group flex items-end gap-2 text-zinc-700 transition-colors hover:text-black"
          >
            UI/UX Design
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              size={20}
            />
          </Link>
          <Link
            href="#"
            className="group flex items-end gap-2 text-zinc-700 transition-colors hover:text-black"
          >
            Development
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              size={20}
            />
          </Link>
          <Link
            href="#"
            className="group flex items-end gap-2 text-zinc-700 transition-colors hover:text-black"
          >
            Branding
            <ArrowUpRight
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              size={20}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
