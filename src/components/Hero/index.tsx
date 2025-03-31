import { ArrowRight, ChevronRight, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="flex items-center justify-center py-32 rounded-3xl">
      <div className="flex items-start justify-center flex-col max-w-screen-xl mx-auto pb-4 px-4 sm:px-8 space-y-8">
        <div className="text-center items-start justify-center flex flex-col space-y-8 max-w-screen-md">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-coolvetica text-left">
            Estúdio de design, focado na construção <span>image</span> branding{' '}
            <span>image</span> ux, software <span>image</span> e apps.
          </h1>
          <p className="text-md font-semibold text-muted-foreground max-w-xl mt-4 text-md text-left">
            Gerencie suas finanças de forma simples. Alcance suas metas,
            acompanhe ganhos, controle gastos e veja seu progresso em tempo
            real.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <Button
            size="lg"
            className="bg-primary text-secondary py-6 hover:bg-primary-dslight hover:text-secondary transition-all duration-200 ease-in rounded-full cursor-pointer text-md font-semibold shadow-lg"
          >
            <ArrowRight strokeWidth={3} />
            Comece gratuitamente
          </Button>
          <Button
            size="lg"
            className="bg-secondary text-primary py-6 hover:bg-secondary-dslight hover:text-primary transition-all duration-200 ease-in rounded-full cursor-pointer text-md font-semibold shadow-lg"
          >
            Assistir intro
            <ChevronRight strokeWidth={3} />
          </Button>
        </div>
      </div>
    </section>
  )
}