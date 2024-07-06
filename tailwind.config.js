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
        primary: '#FF4321',
        tertiary: '#212121',
        secondary: '#73A4CF',
        custom1: "#1E1E1E",
        custom2: "#212121",
        custom3: "#EDF2FC",
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
