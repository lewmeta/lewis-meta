import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "cav": "var(--font-cav)",
        "lex": "var(--font-lex)",
      },
      screens: {
        'xm': '430px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      colors: {
        dark: "#323232",
        black: "#0F0F0F",
        light: "#f5f5f5",
        lightBlue: "#F7F9FC",
        primaryText: "#676767",
        ligthText: "#0F0F0F",
        textDark:"#bcbcbc",
        blueColor: "#0d6efd"
      },
      boxShadow: {
        'custom': '0 10px 30px 0 rgb(44 130 237 / 40%)',
        'main' : '0 4px 24px -1px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        shadowLight:
          "linear-gradient(120deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05))",
        shadowLightAfter:
          "linear-gradient(120deg, rgb(255 255 255 / 12%), rgb(255 255 255 / 1%))",
        shadowImageDark:
          "linear-gradient(90deg, #5B78F6 -15%, #C2EBFF 58%, #5B78F6 97%)"
      },
    },
  },
  plugins: [],
}
export default config
