import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chillGreen: "rgb(0,188,160)",
        chillGreenHover: "rgb(1,215,186)",
        logoBlue: "rgb(125,157,254)",
      },
      screens: {
        normalScreen: { raw: "(min-width: 1151)" },
        mobile: { min: "415px", max: "640px" },
        "mobile-xs": { raw: "(max-width: 414px)" },
        hamburger: { min: "641px", max: "1150px" },
        "h-lg": { raw: "(min-height: 1000px)" },
      },
      spacing: {
        "88": "22rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
