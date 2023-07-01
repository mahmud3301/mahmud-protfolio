/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fb7185",

          secondary: "#d17914",

          accent: "#f49c81",

          neutral: "#ffff",

          "base-100": "#0000",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#b91c1c"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
