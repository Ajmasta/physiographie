/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        physioBlue: "#37c0fb",
        navBlack: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
};
