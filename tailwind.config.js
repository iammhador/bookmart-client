/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#70BEE4",

          secondary: "#FC5D3D",

          accent: "#EBBC1F",

          neutral: "#E5E5E5",

          "base-100": "#F9F9FB",

          info: "#000000",

          success: "#1D905C",

          warning: "#F3D572",

          error: "#F9396C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
