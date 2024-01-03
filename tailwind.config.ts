import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    
    extend: {
      fontFamily: { 'Poppins': ["Poppins", "sans-serif"], 'PermanentMarker': ["Permanent Marker", "cursive"] },
      
      
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config