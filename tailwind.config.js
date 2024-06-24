const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      fontFamily: {
        'serif': ['"League Spartan"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(335.59deg, rgba(29, 7, 77, 0.08) -3.23%, rgba(184, 60, 193, 0.08) 97.93%)',
      },
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
