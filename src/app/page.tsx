'use client'

import React, { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PreFooter from '@/components/PreFooter'
import ExtremitySection from '@/components/ExtremitySection'
import MiddleSection from '@/components/MiddleSection'


const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Simule a conclusão da animação após 7 segundos
    setTimeout(() => {
      setAnimationComplete(true)
    }, 7000)
  }, [])

  return (
    <div>
      <div className="bg-[#f6f6f6] overflow-hidden">
        <Hero />
      </div>
      {animationComplete && (
        <div className='bg-[#000000]'>
          <ExtremitySection
            title='Bem vindo à Stellar'
            subtitle='A especialista no que você imaginar.'
            description='Dedicada a iluminar o caminho do futuro. A Stellar é uma empresa que não só desenvolve soluções tecnológicas, mas também promove ideias e impulsiona o potencial humano. Na Stellar, acreditamos que juntos, podemos criar um impacto brilhante no mundo.'
            moviePath='./movies/231981044_226614866009546_642779584055189382_n.mp4'
          />
          <MiddleSection
            title='Desenvolvimento.'
            description='Teve uma ideia incrível? Você está no meio do caminho! Agora vamos fazer um produto totalmente funcional com isso.'
            linkTitle='Saiba Mais'
            linkPath='/development'
            moviePath='/movies/third.mp4'
          />
          <MiddleSection
            title='Web Design.'
            description='Temos certeza de que todos querem taxas de conversão mais altas e melhor reconhecimento. Não se preocupe, nós cobrimos você!'
            linkTitle='Saiba Mais'
            linkPath='/design'
            moviePath='/movies/second.mp4'
          />
          <MiddleSection
            title='Branding.'
            description='Claro, toda marca é única. A questão é: seus clientes percebem isso? Vamos garantir que eles façam.'
            linkTitle='Saiba Mais'
            linkPath='/branding'
            moviePath='/movies/test.mp4'
          />
          <ExtremitySection
            title='Futuro Brilhante'
            subtitle='A inovação que você procura.'
            description='Assim como um diamante é lapidado para brilhar, a tecnologia é polida para iluminar o futuro, revelando incríveis inovações que brilham com o potencial de transformar nossa sociedade, conectando pessoas, simplificando tarefas e ampliando horizontes.'
            moviePath='./movies/pinterest-video48.mp4'
          />
          <PreFooter />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Home