/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': {
            'raw': '(hover: hover)'
        },
    } },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [],
  darkMode: 'class',
}

