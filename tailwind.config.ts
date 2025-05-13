import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{tsx,jsx,js,ts}",
    "./pages/**/*.{tsx,jsx,js,ts}",
    "./components/**/*.{tsx,jsx,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        test: "#ed6aff",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        generalsans: ["var(--font-generalsans)"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
} as Config;
