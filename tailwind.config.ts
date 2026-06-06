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
        navy: {
          950: "#050d1a",
          900: "#0b1f3a",
          800: "#102848",
          700: "#1a3a5c",
          600: "#244d70",
          500: "#2e6085",
        },
        gold: {
          300: "#e8d48b",
          400: "#dfc46a",
          500: "#c9a227",
          600: "#b08d1f",
          700: "#8a6e18",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "ui-serif", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
