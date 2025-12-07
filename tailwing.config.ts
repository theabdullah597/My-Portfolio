import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505", 
        surface: "#121212",
        primary: "#E2E8F0",
        accent: "#6366f1", 
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;