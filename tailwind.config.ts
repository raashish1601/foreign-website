import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(0, 141, 234)",
          light: "rgb(76, 165, 224)",
        },
        text: {
          primary: "rgb(10, 10, 10)",
          secondary: "rgb(29, 32, 38)",
          tertiary: "rgb(23, 23, 23)",
          muted: "rgb(115, 115, 115)",
        },
        border: {
          DEFAULT: "rgb(236, 236, 236)",
          light: "rgb(229, 229, 229)",
        },
      },
      fontFamily: {
        geist: ["var(--font-geist)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        header: "rgba(0, 0, 0, 0.1) 0px 1px 4px 0px",
        button: "rgb(0, 141, 234) 0px 0px 0px 1px, rgba(0, 141, 234, 0.48) 0px 1px 2px 0px, rgba(0, 141, 234, 0.15) 0px 0px 0px 5px",
      },
    },
  },
  plugins: [],
};

export default config;
