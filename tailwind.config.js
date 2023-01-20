/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary:'#0fcfec',
          secondary:'#19d3ae',
          accent: "#EEAF3A",
          neutral: "#291334",
          "base-100": "#FAF7F5",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
