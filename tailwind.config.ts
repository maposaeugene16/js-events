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
        brand: {
          gold: "#D4AF37",
          goldDark: "#AA820A",
          goldLight: "#F3E5AB",
          dark: "#0F172A",
          darker: "#090D16",
          emerald: "#064E3B",
          emeraldLight: "#10B981",
          rose: "#BE123C",
          cream: "#FAF8F5",
          sand: "#F4EDE4",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(212, 175, 55, 0.35)",
        'gold-lg': "0 20px 40px -15px rgba(212, 175, 55, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
