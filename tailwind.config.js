/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Add this line to enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
       'logo-dark-purple': '#521383', // Darkest shade
        'logo-primary-purple': '#8C37EE', // Mid-tone vibrant purple
        'logo-bright-purple': '#E589FF'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
   
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  plugins: [],
}
