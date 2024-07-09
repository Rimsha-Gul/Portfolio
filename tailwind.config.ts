import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#22252c",
        secondary: "#313741",
        turquoise: "#00d7bb",
        "turquoise-dark": "#02cfb4",
        "light-gray": "#5a5f6b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #17D396, #07f7f7)",
        "gradient-back-to-top": "linear-gradient(to bottom, #17D396, #07F7F7)",
      },
      borderColor: {
        primary: "#00d7bb",
        secondary: "#02cfb4",
        dark: "#22252c",
      },
      boxShadow: {
        "gradient-primary": "0 0 20px rgba(22, 213, 156, 0.7)",
        "gradient-secondary":
          "0 0 12px 2px rgba(11, 239, 156, 0.5), 0 0 12px 2px rgba(0, 215, 197, 0.5)",
      },
      colors: {
        primary: "#00d7c5",
        secondary: "#0bef9c",
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)"],
      },
      textColor: {
        primary: "#00d7bb",
        secondary: "#02cfb4",
        dark: "#3b3e31",
        darker: "#22252c",
        darkest: "#25292f",
      },
      screens: {
        xxs: "375px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
export default config;
