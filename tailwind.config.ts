import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: "#0A0B0F",
        accent: "#00E1A4",
        accentBlue: "#00B7FF",
        graphite: "#1F222A",
        mist: "#F8F9FA"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        numeric: ["var(--font-satoshi)"],
      },
      backgroundImage: {
        tally: "linear-gradient(135deg, #00E1A4 0%, #00B7FF 100%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 225, 164, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
