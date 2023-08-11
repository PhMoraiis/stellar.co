import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gacor': ['Gacor'],
        'coolveticaLt': ['Coolvetica Light'],
        'coolveticaEl': ['Coolvetica Extra Light'],
        'coolveticaRg': ['Coolvetica'],
        'coolveticaBd': ['Coolvetica Bold'],
        'coolveticaHv': ['Coolvetica Heavy'],
        'geometosEl': ['Geometos Neue Extra Light'],
        'geometosLt': ['Geometos Neue Light'],
        'geometosRg': ['Geometos Neue Regular'],
        'geometosBd': ['Geometos Neue Bold'],
        'geometosBl': ['Geometos Neue Black'],
        'geometosEb': ['Geometos Neue Extra Bold'],
        'geometosUl': ['Geometos Neue Ultra'],
      },
    },
  },
  plugins: [],
}
export default config
