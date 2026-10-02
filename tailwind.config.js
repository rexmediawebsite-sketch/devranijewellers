/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        porcelain: {
          DEFAULT: '#F5F4F2',
          light: '#FFFFFF',
          dark: '#EBE9E5',
        },
        navy: {
          DEFAULT: '#14213D',
          light: '#1F2F52',
          dark: '#0C1527',
          soft: '#1A294A',
        },
        slate: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          dark: '#4B5563',
          muted: '#6B7280',
        },
        champagne: {
          DEFAULT: '#B89B72',
          light: '#D4BE9B',
          dark: '#9A7D55',
          pale: '#F4ECE1',
          subtle: '#FAF6F0',
        },
        border: {
          DEFAULT: '#E5E3DF',
          light: '#EFECE8',
          dark: '#D5D2CC',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20bd5a',
          dark: '#1ea951',
        },
        // Semantic mappings for consistent theme application
        ivory: {
          DEFAULT: '#F5F4F2',
          light: '#FFFFFF',
          dark: '#EBE9E5',
          silk: '#FAF9F8',
        },
        charcoal: {
          DEFAULT: '#14213D',
          soft: '#1F2F52',
          muted: '#6B7280',
        },
        espresso: '#14213D',
        ruby: {
          light: '#A8283D',
          DEFAULT: '#8B1E2F',
          dark: '#691220',
        },
        gold: {
          champagne: '#FAF6F0',
          pale: '#F4ECE1',
          light: '#D4BE9B',
          DEFAULT: '#B89B72',
          metallic: '#B89B72',
          dark: '#9A7D55',
          antique: '#846944',
        },
        blush: {
          DEFAULT: '#F5F4F2',
          soft: '#F5F4F2',
        },
        sage: {
          DEFAULT: '#F5F4F2',
          soft: '#FFFFFF',
        },
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', '"Jost"', '-apple-system', 'sans-serif'],
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #FAF6F0 0%, #D4BE9B 30%, #B89B72 60%, #9A7D55 100%)',
        'gold-subtle': 'linear-gradient(180deg, rgba(184, 155, 114, 0.16) 0%, rgba(184, 155, 114, 0) 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(20, 33, 61, 0.2) 0%, rgba(20, 33, 61, 0.88) 100%)',
        'metallic-gold': 'linear-gradient(135deg, #FAF6F0 0%, #D4BE9B 25%, #B89B72 55%, #9A7D55 80%, #755512 100%)',
        'satin-gold': 'linear-gradient(135deg, #FAF6F0 0%, #D4BE9B 50%, #B89B72 100%)',
      },
      boxShadow: {
        'gold-glow': '0 4px 25px rgba(184, 155, 114, 0.22)',
        'gold-glow-lg': '0 10px 35px rgba(184, 155, 114, 0.35)',
        'luxury': '0 12px 40px -10px rgba(20, 33, 61, 0.08)',
        'luxury-hover': '0 20px 50px -10px rgba(20, 33, 61, 0.18)',
      },
      letterSpacing: {
        'widest-luxury': '0.24em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'marquee': 'marquee 26s linear infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.92' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
