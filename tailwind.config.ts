import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./node_modules/shadcn-ui/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        taruno: ["TarunoWide", "sans-serif"],
      },
      colors: {
        "geplano-gold": "#a37e2b",
        "geplano-green": "#00613a",
      },
    },
  },
  plugins: [],
} as Config;
