/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "url('assets/herobgimg.jpg')",
        testybg: "url('assets/testy.png')",
        contactbg: "url('assets/contactbg.png')",
        blackOverlay: "linear-gradient(to, bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)"
      },
      colors:{
        primary: "#018cf7"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

