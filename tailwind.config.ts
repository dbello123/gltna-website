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
        /* GLT green palette — brand color #47704c */
        navy: {
          950: "#0c1a0d",
          900: "#162919",
          800: "#1f3c22",
          700: "#2d5531",
          600: "#3d6941",
          500: "#47704c",
        },
        green: {
          950: "#0c1a0d",
          900: "#162919",
          800: "#1f3c22",
          700: "#2d5531",
          600: "#3d6941",
          500: "#47704c",
          400: "#5a8a5f",
          300: "#7aaa7f",
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
