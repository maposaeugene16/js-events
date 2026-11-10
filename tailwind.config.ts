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
          orange: "#F16738", // Official Logo Primary Flame Orange
          orangeDark: "#DC5424", // Official Logo Shadow Orange
          orangeHover: "#E05523",
          orangeLight: "#FF8257",
          orangePastel: "#FFF4EF",
          orangeTint: "#FFE8DF",
          black: "#0A0A0A", // Official Logo Jet Black
          dark: "#141414",
          charcoal: "#1F1F1F",
          slate: "#2A2A2A",
          cream: "#FAF7F5",
          white: "#FFFFFF",
          emerald: "#10B981", // WhatsApp green
          emeraldDark: "#059669",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        brand: "0 10px 30px -10px rgba(241, 103, 56, 0.4)",
        "brand-lg": "0 20px 45px -15px rgba(241, 103, 56, 0.55)",
        dark: "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
