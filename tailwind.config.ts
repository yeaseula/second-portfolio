import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["SUIT", "ui-sans-serif", "system-ui"],
      pretendard: ["Pretendard", "ui-sans-serif", "system-ui"],
      bebas: ["BebasNeue", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1.5" }], // 12
      sm: ["0.875rem", { lineHeight: "1.5" }], // 14
      base: ["1rem", { lineHeight: "1.5" }], // 16
      md: ["1.125rem", { lineHeight: "1.5" }], // 18
      lg: ["1.25rem", { lineHeight: "1.5" }], // 20
      xl: ["1.5rem", { lineHeight: "1.5" }], // 24
      "2xl": ["2rem", { lineHeight: "1.5" }], // 32
      "3xl": ["2.5rem", { lineHeight: "1.5" }], // 40
    },
    extend: {
      colors: {
        main: "#0f766e",
        "main-lignt": "#d2ece6",
        background: "#f8faf9",
      },
    },
  },
  plugins: [],
} satisfies Config;
