import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Dark palette — hero, page headers, footer only */
        navy: {
          950: "#0c1a0d",
          900: "#162919",
          800: "#1f3c22",
          700: "#2d5531",
        },
        /* GLT green — accents, icons, buttons */
        brand: {
          50:  "#f0f7f1",
          100: "#daeedd",
          200: "#b5ddb9",
          300: "#7aba80",
          400: "#5a9960",
          500: "#47704c",   /* GLT brand green */
          600: "#3a5d3f",
          700: "#2d4d31",
          800: "#213a24",
          900: "#152618",
        },
        gold: {
          300: "#e8d48b",
          400: "#dfc46a",
          500: "#c9a227",
          600: "#b08d1f",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
