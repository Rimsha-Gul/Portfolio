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
        "gradient-primary": "linear-gradient(to right, #0bef9c, #00d7c5)",
        turquoise: "#00d7bb",
        "turquoise-dark": "#05c7ae",
        "light-gray": "#5a5f6b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(to right, #0bef9c, #00d7c5)",
        "gradient-back-to-top": "linear-gradient(to bottom, #17D396, #07F7F7)",
        "gradient-secondary": "linear-gradient(to right, #02cfb4, #02cfa1)",
      },
      borderColor: {
        primary: "#3fc48a",
        secondary: "#00d7bb",
      },
      boxShadow: {
        "gradient-basic": "0 0 20px rgba(22, 213, 156, 0.7);",
        "gradient-primary":
          "0px 8px 12px 0px rgba(0, 215, 197, 0.5), 0px 8px 20px 0px rgba(11, 239, 156, 0.5)",
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
        primary: "#3fc48a",
        secondary: "#00d7bb",
        turquoise: "#02cfb4",
        dark: "#3b3e31",
        darker: "#333333",
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
