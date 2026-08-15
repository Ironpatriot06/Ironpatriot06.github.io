import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0d10",
        panel: "#11151a",
        line: "rgba(255,255,255,0.11)",
        muted: "#9aa4b2",
        paper: "#f5f7fb",
        accent: "#66e3c4",
        amber: "#f7c873",
        steel: "#91a7ff",
        rose: "#f28ba8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
