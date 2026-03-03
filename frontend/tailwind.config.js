/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brutalist': {
          'dark': '#0A0A0A',
          'cream': '#F0EDE6',
          'white': '#FFFFFF',
          'black': '#0A0A0A',
        },
        'accent': {
          'teal': '#00B4B4',
          'pink': '#FF2D78',
          'cyan': '#7FE8E8',
          'orange': '#FF6B1A',
          'lime': '#C8F026',
          'yellow': '#FFD600',
        }
      },
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
        'body': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px #0A0A0A',
        'brutal-md': '4px 4px 0px #0A0A0A',
        'brutal-lg': '5px 5px 0px #0A0A0A',
        'brutal-xl': '8px 8px 0px #0A0A0A',
      },
      borderRadius: {
        'none': '0px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
    },
  },
  plugins: [],
}
