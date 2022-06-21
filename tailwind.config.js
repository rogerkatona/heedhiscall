const colors = require('tailwindcss/colors')

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: theme => ({
        "screen90vh": "calc(90vh)",
        "screen60vh": "calc(60vh)",
      }),
     maxHeight: theme => ({
       "screen90vh": "calc(90vh)",
       "screen65vh": "calc(65vh)",
      }),
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen90vh": "calc(90vh)",
        "screen80vh": "calc(80vh)",
        "screen75vh": "calc(75vh)",
        "screen65vh": "calc(65vh)",
        "screen50vh": "calc(50vh)",
        "screen47vh": "calc(47vh)",
      }),
      width: theme => ({
        "128": "32rem",
      }),
      backgroundImage: theme => ({
        '0.1.hero': "url('/image/hero-index.jpg')",
        'hero_speaker': "url('/image/hero-conference_speaker.jpg')",
        'hero_workshops': "url('/image/hero-workshop.jpg')",
        'hero-planners': "url('/image/hero-event_planners.jpg')",
        'hero-about': "url('/image/hero-about.jpg')",
        'bg-contactModal': "url('/image/bg-contact.jpeg')",
        'hero_inTheMedia': "url('/image/inTheMedia-03.png')",
        'hero_articles': "url('/image/hero_articles.jpeg')",


      }),
      fontFamily: {
        'sans': ['Helvetica Neue'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'bebasNeue': ['Bebas Neue'],
        'body': ['Helvetica Neue'],
        'roboto': ['Roboto'],
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '75': '75%',
        '65': '65%',
        '50': '50%',
        '60': '60%',
        '16': '4rem',
        '650': '40.625rem',
      },
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '102': '1.02',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
    },
    colors: {
      'white.25': 'rgba(255, 255, 255, 0.25);',
      'white.50': 'rgba(255, 255, 255, 0.50);',
      'white.75': 'rgba(255, 255, 255, 0.75);',
      'white.100': 'rgba(255, 255, 255, 1);',
      'black.100': 'rgba(0, 0, 0, 1);',
      'blue.100': '#BECBDD',
      'blue.200': '#93A9C6',
      'blue.300': '#6786AF',
      'blue.400': '#476C9C',
      'blue.500': '#26528C',
      'blue.600': '#224B84',
      'blue.700': '#1C4179',
      'blue.800': '#17386F',
      'blue.900': '#0D285C',
      'gray.050': '#F9FAFB',
      'gray.100': '#F3F4F6',
      'gray.200': '#E5E7EB',
      'gray.300': '#D1D5DB',
      'gray.400': '#9CA3AF',
      'gray.500': '#6B7280',
      'gray.600': '#4B5563',
      'gray.700': '#374151',
      'gray.800': '#1F2A37',
      'gray.900': '#111928',
      'rust.050': '#F4EBE9',
      'rust.100': '#E4CCC7',
      'rust.200': '#D3ABA2',
      'rust.300': '#C1897C',
      'rust.400': '#B36760',
      'rust.500': '#A65644',
      'rust.600': '#9E4F3E',
      'rust.700': '#954535',
      'rust.800': '#8B3C2D',
      'rust.900': '#7B2B1F',
      'tan.050': '#FDFAF4',
      'tan.100': '#FBF2E3',
      'tan.200': '#F9EAD0',
      'tan.300': '#F6E2BD',
      'tan.400': '#F4DBAE',
      'tan.500': '#F2D5A0',
      'tan.600': '#F0D098',
      'tan.700': '#EECA8E',
      'tan.800': '#ECC484',
      'tan.900': '#E8BA73',
      'teal.050': '#ECF2F4',
      'teal.100': '#D0DFE4',
      'teal.200': '#B1C9D3',
      'teal.300': '#92B3C1',
      'teal.400': '#7AA3B3',
      'teal.500': '#6393A6',
      'teal.600': '#5B8B9E',
      'teal.700': '#518095',
      'teal.800': '#47768B',
      'teal.900': '#35647B',
    },
  },

  backgroundPosition: {
    bottom: 'bottom',
    'bottom-4': 'center bottom 1rem',
    center: 'center',
    left: 'left',
    'left-bottom': 'left bottom',
    'left-top': 'left top',
    right: 'right',
    'right-bottom': 'right bottom',
    'right-top': 'right top',
    'right-24': 'center right 6rem',
    'right-48': 'center right 12rem',
    'right-12': 'center right 2rem',
    top: 'top',
    'top-4': 'center top 1rem',
    'top-8': 'center top 2rem',
    'top-12': 'center top 3rem',
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }

    '3xl': '1800px',
    // => @media (min-width: 1800px) { ... }
  },

  }




