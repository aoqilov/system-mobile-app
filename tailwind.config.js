/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {},
    extend: {
      colors: {
        brand: "#1292A7",
        "brand-dark": "#0E7C8E",
        cyan: "#70E8F0",
        "park-green": "#0DAF69",
        "park-red": "#E5484D",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        display: ["Baloo 2", "sans-serif"],
      },
      borderRadius: {
        "4xl": "26px",
        "5xl": "30px",
      },
      boxShadow: {
        card: "0 6px 20px rgba(20,30,40,0.07)",
        "card-dark": "0 6px 20px rgba(0,0,0,0.42)",
        qr: "0 8px 18px rgba(18,146,167,0.45)",
        sheet: "0 -10px 40px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
