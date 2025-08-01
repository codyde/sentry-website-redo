/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-yellow': '#FFD93D',
        'neo-pink': '#FF6BCB',
        'neo-blue': '#4B56D2',
        'neo-green': '#6BCB77',
        'neo-red': '#FF6B6B',
        'neo-purple': '#C589E8',
        'neo-orange': '#FF8B13',
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px #000000',
        'neo': '6px 6px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
        'neo-xl': '12px 12px 0px 0px #000000',
        'neo-hover': '2px 2px 0px 0px #000000',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};
