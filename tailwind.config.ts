import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050E1A",
          900: "#0B1F3A",
          800: "#132D52",
          700: "#1C3F70",
          600: "#285594",
        },
        ivory: {
          50: "#FFFFFF",
          100: "#FCFAF6",
          200: "#FAF8F3",
          300: "#F2EDE2",
          400: "#E5DCCE",
        },
        gold: {
          50: "#FAF6EE",
          100: "#F4ECE0",
          200: "#E7D6BE",
          300: "#D5BA94",
          400: "#C4A271",
          500: "#B08D57", // Primary muted brass/gold
          600: "#9A7846",
          700: "#7A5E35",
          800: "#5D4728",
        },
        charcoal: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
