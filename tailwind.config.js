/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/10": "10%",
        "9/10": "90%",
      },
      colors: {
        cream: {
          100: "#f0dfc8",
          200: "#dbba86",
          300: "#b8a17b",
        },
      },
      backgroundImage: {
        "paper-texture": "url('/harry-potter-app/beige-textured-paper.jpg')",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
