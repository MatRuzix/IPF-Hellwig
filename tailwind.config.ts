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
        znanylekarz: "rgb(0,195,165)",
        znanylekarzHover: "rgb(1,215,186)",
        logoBlue: "rgb(125,157,254)",
      },
      screens: {
        "3xl": "2000px",
        "h-lg": { raw: "(min-height: 1000px)" },
      },
      spacing: {
        "88": "22rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
