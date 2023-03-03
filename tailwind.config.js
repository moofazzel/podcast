/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        pMain: "#503AE7",
        pDark: "#14142B",
        pBlue: "#3E2DB2",
        pSecond: "#1AD993",
        pGrey: "#AFB0B9",
        pBlack: "#14142B",
      },
    },
  },
  plugins: [],
};
