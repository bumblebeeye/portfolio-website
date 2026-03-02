import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          100: "#e7efff",
          600: "#1d4ed8",
          700: "#1e3a8a",
          800: "#172554"
        }
      },
      boxShadow: {
        card: "0 10px 30px -18px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
