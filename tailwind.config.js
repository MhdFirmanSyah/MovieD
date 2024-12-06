/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./*.{html,js,jsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "aqua-light": "#A0F1EA",
        "red-light": "#EAD6EE",
      },
      height: {
        1.5: "0.3rem",
      },
    },
  },
  plugins: [],
};
