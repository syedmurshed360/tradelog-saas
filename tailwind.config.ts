import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark fintech theme — reused later for the dashboard (Phase 2) and landing page (Phase 7)
        background: "#0a0e1a",
        surface: "#0f1729",
      },
    },
  },
  plugins: [],
};

export default config;
