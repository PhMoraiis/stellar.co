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
      animation: {
        "clip-from-top-animation": "clip 1s ease-in-out 6.45s forwards",
      },
      keyframes: {
        "clip": {
          "0%": { 'clip-path': "ellipse(100% 100% at 50% 50%)" },
          "100%": { 'clip-path': "ellipse(160% 160% at 50% 160%)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
