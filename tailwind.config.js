/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f1f9a4",

          "secondary": "#99f970",

          "accent": "#7b69ef",

          "neutral": "#18161D",

          "base-100": "#E4E4E7",

          "info": "#2B80E9",

          "success": "#165A53",

          "warning": "#E78727",

          "error": "#F6423C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
