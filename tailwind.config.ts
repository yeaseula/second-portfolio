import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      bebas: ["BebasNeue", "sans-serif"],
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
