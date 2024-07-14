/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        //your custom colors here
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      //your favorite daisy UI themes here
    ],
  },
};
