import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      dmsans: ["var(--font-dmSans"],
      nunito: ["var(--font-nunito)"],
    },
    colors: {
      "color-transparent": "transparent",
      "color-blue": "#06283D",
      "color-light-blue": "rgba(6, 40, 61, .3)",
      "color-white": "#ffffff",
      "color-gold": "rgba(210, 183, 116, 1)",
      "color-light-gold": "rgba(210, 183, 116, .5)",
      "color-red": "#ff6b6b",
      "color-border": "rgba(0, 0, 0, .3)",
      "color-black": "rgba(0, 0, 0, 1)",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      upperRoman: "upper-roman",
      upperAlpha: "upper-alpha",
      lowerAlpha: "lower-alpha",
    },
    extend: {
      backgroundImage: {
        header: "url('../assets/header-bg.jpeg')",
        footer: "url('../assets/footer-bg.jpeg')",
        about: "url('../assets/about.jpeg')",
        referral: "url('../assets/referral.jpeg')",
        "main-1": "url('../assets/plan-bg1.jpeg')",
      },
      gridTemplateColumns: {
        "plan-grid": "repeat(auto-fit, minmax(30rem, 1fr))",
        "why-us-grid": "repeat(auto-fit, minmax(30rem, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
