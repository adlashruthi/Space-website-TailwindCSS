/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/assets/home/background-home-desktop.jpg')",
      }),
    },
  },
  plugins: [],
};
