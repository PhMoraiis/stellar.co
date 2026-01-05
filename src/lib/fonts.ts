import localFont from 'next/font/local'

export const movatif = localFont({
  src: [
    {
      path: '../../public/fonts/Movatif/MovatifUltraLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Movatif/MovatifExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Movatif/MovatifLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Movatif/MovatifBook.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Movatif/MovatifRegular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Movatif/MovatifBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Movatif/MovatifHeavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-movatif',
  display: 'swap',
  preload: true,
})

export const gorga = localFont({
  src: '../../public/fonts/gorga.ttf',
  variable: '--font-gorga',
  display: 'swap',
  preload: true,
})
