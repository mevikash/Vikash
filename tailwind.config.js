/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        },
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        // "hero-pattern1": "url('/src/assets/herobg2.jpg')",
        // "hero-pattern1": "url('/src/assets/herobg7.png')",
        "hero-pattern": "url('/src/assets/herobg4.png')",
        "hero-pattern1": "url('/src/assets/8.jpg')",
        "hero-pattern2": "url('/src/assets/2.jpg')",
        "hero-pattern3": "url('/src/assets/2.jpg')",
      },
    },
  },
  plugins: [],
}

