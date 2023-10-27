import daisyui from "daisyui";
import tailwindcssInnerBorder from "tailwindcss-inner-border";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [tailwindcssInnerBorder, daisyui],
};
