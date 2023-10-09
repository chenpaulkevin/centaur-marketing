import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary: "#4CAF4F",
      secondary: "#263238",
      info: "#2194F3",
      silver: "#F5F7FA",
      neutral: "#4D4D4D",
      grey: "#717171",
      dark: "#263238",
      white: "#FFFFFF",
      black: "18191F",
      drop: "rgb(170, 190, 209, 0.3)",
      subscribe: "#515B60",
      T5: "#E8F5E9"
    },
  },
  plugins: [],
}
export default config
