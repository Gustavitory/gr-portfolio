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
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
} as Config;
