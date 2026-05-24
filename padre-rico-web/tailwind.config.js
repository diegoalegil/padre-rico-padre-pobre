/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090f',
          900: '#0c0e16',
          800: '#11141e',
          700: '#181c28',
          600: '#1f2433',
          500: '#2a3142',
        },
        gold: {
          50: '#fdf8ec',
          100: '#faedc5',
          200: '#f4dc8a',
          300: '#edc858',
          400: '#e6b536',
          500: '#d49a1c',
          600: '#b07914',
          700: '#8a5b13',
          800: '#704917',
          900: '#5e3e18',
        },
        green: {
          400: '#39d98a',
          500: '#0fbf5d',
          600: '#0a9a4a',
        },
        ember: {
          400: '#ff945a',
          500: '#ff7a33',
          600: '#e85f15',
        },
        cream: '#f7f1e3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '0 8px 24px -8px rgba(0,0,0,0.25)',
        'card': '0 12px 36px -12px rgba(0,0,0,0.45)',
        'glow-gold': '0 0 30px -5px rgba(230,181,54,0.35)',
        'glow-green': '0 0 30px -5px rgba(57,217,138,0.35)',
        'inner-soft': 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at top, rgba(230,181,54,0.10), transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
